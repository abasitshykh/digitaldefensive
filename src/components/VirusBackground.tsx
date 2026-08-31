"use client";

import { useEffect, useRef } from "react";

/**
 * Full-screen animated virus background using HTML5 Canvas.
 * Spiky red virus particles travel along organic paths,
 * leaving fading trails, with a pulsing red glow.
 */
export default function VirusBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let raf = 0;
    let time = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = width + "px";
      canvas!.style.height = height + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const COUNT = Math.min(14, Math.max(8, Math.floor(width / 160)));
    type Virus = {
      seed: number; speed: number; size: number; phase: number;
      spikes: number; rot: number; rotSpeed: number; hue: number;
      x: number; y: number; px: number; py: number;
      trail: { x: number; y: number }[];
    };

    function spawn(v: Virus) {
      v.seed = Math.random() * 1000;
      v.speed = 0.6 + Math.random() * 1.4;
      v.size = 18 + Math.random() * 26;
      v.phase = Math.random() * Math.PI * 2;
      v.spikes = 12 + Math.floor(Math.random() * 10);
      v.rot = Math.random() * Math.PI * 2;
      v.rotSpeed = (Math.random() - 0.5) * 0.03;
      v.hue = Math.random() < 0.8 ? 0 : 350;
      v.trail = [];
      v.x = -v.size * 2;
      v.y = Math.random() * height;
      v.px = v.x;
      v.py = v.y;
    }

    const viruses: Virus[] = [];
    for (let i = 0; i < COUNT; i++) {
      const v: Virus = { seed: 0, speed: 0, size: 0, phase: 0, spikes: 0, rot: 0, rotSpeed: 0, hue: 0, x: 0, y: 0, px: 0, py: 0, trail: [] };
      spawn(v);
      v.x = Math.random() * width;
      v.px = v.x;
      viruses.push(v);
    }

    function yPos(v: Virus, x: number) {
      const base = 0.5 + 0.32 * Math.sin(x * 0.0016 + v.seed * 0.5 + time * 0.006);
      const wobble = 0.18 * Math.sin(x * 0.004 + v.seed * 1.3 + time * 0.01);
      return (base + wobble) * height;
    }

    function drawVirus(v: Virus) {
      const s = v.size;
      const pulse = 1 + 0.08 * Math.sin(time * 0.08 + v.seed);
      const r = s * pulse;
      const cx = v.x, cy = v.y;

      // red glow
      const glow = ctx!.createRadialGradient(cx, cy, r * 0.4, cx, cy, r * 3.2);
      glow.addColorStop(0, `hsla(${v.hue}, 95%, 60%, 0.5)`);
      glow.addColorStop(0.4, `hsla(${v.hue}, 90%, 50%, 0.18)`);
      glow.addColorStop(1, `hsla(${v.hue}, 90%, 50%, 0)`);
      ctx!.fillStyle = glow;
      ctx!.beginPath();
      ctx!.arc(cx, cy, r * 3.2, 0, Math.PI * 2);
      ctx!.fill();

      // spiky body
      ctx!.save();
      ctx!.translate(cx, cy);
      ctx!.rotate(v.rot);
      ctx!.beginPath();
      const inner = r * 0.62;
      for (let i = 0; i < v.spikes * 2; i++) {
        const ang = (i / (v.spikes * 2)) * Math.PI * 2;
        const rad = i % 2 === 0 ? r : inner;
        const px = Math.cos(ang) * rad;
        const py = Math.sin(ang) * rad;
        if (i === 0) ctx!.moveTo(px, py);
        else ctx!.lineTo(px, py);
      }
      ctx!.closePath();
      const body = ctx!.createRadialGradient(0, 0, r * 0.2, 0, 0, r);
      body.addColorStop(0, `hsla(${v.hue}, 100%, 72%, 0.95)`);
      body.addColorStop(1, `hsla(${v.hue}, 95%, 45%, 0.85)`);
      ctx!.fillStyle = body;
      ctx!.fill();
      ctx!.lineWidth = 1.2;
      ctx!.strokeStyle = `hsla(${v.hue}, 90%, 30%, 0.6)`;
      ctx!.stroke();

      // nucleoid core
      ctx!.beginPath();
      ctx!.arc(0, 0, r * 0.34, 0, Math.PI * 2);
      ctx!.fillStyle = `hsla(${v.hue}, 100%, 85%, 0.9)`;
      ctx!.fill();
      ctx!.restore();
    }

    function frame() {
      time++;
      ctx!.globalCompositeOperation = "source-over";
      ctx!.fillStyle = "rgba(246, 249, 252, 0.22)";
      ctx!.fillRect(0, 0, width, height);
      ctx!.globalCompositeOperation = "lighter";

      for (const v of viruses) {
        v.rot += v.rotSpeed;
        v.px = v.x; v.py = v.y;
        v.x += v.speed * 1.4;
        v.y = yPos(v, v.x);
        v.trail.push({ x: v.x, y: v.y });
        if (v.trail.length > 26) v.trail.shift();

        ctx!.beginPath();
        for (let i = 0; i < v.trail.length; i++) {
          const p = v.trail[i];
          if (i === 0) ctx!.moveTo(p.x, p.y);
          else ctx!.lineTo(p.x, p.y);
        }
        ctx!.lineWidth = 1.4;
        ctx!.strokeStyle = `hsla(${v.hue}, 95%, 55%, 0.35)`;
        ctx!.stroke();
        drawVirus(v);

        if (v.x - v.size * 4 > width) { spawn(v); v.x = -v.size * 2; v.px = v.x; v.trail = []; }
      }
      raf = requestAnimationFrame(frame);
    }

    ctx.fillStyle = "#f6f9fc";
    ctx.fillRect(0, 0, width, height);
    raf = requestAnimationFrame(frame);

    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
