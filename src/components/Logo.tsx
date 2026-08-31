import { useId } from "react";

/**
 * Digital Defensive monogram — professional security shield with the letter "DD".
 * Pure SVG so it scales crisply anywhere (nav, footer, favicon, portal).
 */
export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  const id = useId().replace(/[:]/g, "");
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Digital Defensive logo"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`sh-${id}`} x1="12" y1="4" x2="52" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00F0FF" stopOpacity="0.95" />
          <stop offset="1" stopColor="#0E7490" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id={`fg-${id}`} x1="32" y1="2" x2="32" y2="62" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0B1220" stopOpacity="0" />
          <stop offset="0.25" stopColor="#0B1220" stopOpacity="0.92" />
          <stop offset="1" stopColor="#060A12" />
        </linearGradient>
      </defs>

      {/* outer shield */}
      <path
        d="M32 3.5 54 12v17c0 13.9-9.2 25.4-22 31.5C19.2 54.4 10 42.9 10 29V12L32 3.5Z"
        fill={`url(#fg-${id})`}
        stroke={`url(#sh-${id})`}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* inner shield accent */}
      <path
        d="M32 8.8 49.4 15.5V29c0 11.3-7.3 20.7-17.4 25.9C21.9 49.7 14.6 40.3 14.6 29V15.5L32 8.8Z"
        stroke={`url(#sh-${id})`}
        strokeOpacity="0.45"
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* keyhole emblem above the monogram */}
      <circle cx="32" cy="19.5" r="2.4" fill="#00F0FF" />
      <path d="M32 21.5v3.2" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" />

      {/* DD monogram — single wordmark, bold and geometric */}
      <path
        d="M18.5 28.5h6.2c3.4 0 5.6 2.4 5.6 6.2s-2.2 6.2-5.6 6.2h-6.2V28.5Zm4.4 3.7v5h1.6c1.5 0 2.3-1.1 2.3-2.5s-.8-2.5-2.3-2.5h-1.6Z"
        fill="#E6F9FF"
      />
      <path
        d="M34.4 28.5h6.2c3.4 0 5.6 2.4 5.6 6.2s-2.2 6.2-5.6 6.2h-6.2V28.5Zm4.4 3.7v5h1.6c1.5 0 2.3-1.1 2.3-2.5s-.8-2.5-2.3-2.5h-1.6Z"
        fill="#00F0FF"
      />

      {/* base chevron — defense line */}
      <path
        d="M22 47.5 32 43.8l10 3.7"
        stroke="#00F0FF"
        strokeOpacity="0.55"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

