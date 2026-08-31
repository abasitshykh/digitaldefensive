"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeCtx {
  theme: Theme;
  toggle: () => void;
}

const Ctx = createContext<ThemeCtx>({ theme: "dark", toggle: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  // apply stored/system preference once on mount (avoids flash of wrong theme)
  useEffect(() => {
    const stored = (typeof localStorage !== "undefined" && localStorage.getItem("dd-theme")) as
      | Theme
      | null;
    const prefersLight =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-color-scheme: light)").matches;
    const initial: Theme = stored ?? "light";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
    setReady(true);
  }, []);

  function toggle() {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      try {
        localStorage.setItem("dd-theme", next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }

  if (!ready) return <>{children}</>;
  return <Ctx.Provider value={{ theme, toggle }}>{children}</Ctx.Provider>;
}

export const useTheme = () => useContext(Ctx);

