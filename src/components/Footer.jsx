// src/components/Footer.jsx
import { useEffect, useMemo, useState } from "react";

const mediaQuery = "(prefers-color-scheme: dark)";
const getSystemDark = () => window.matchMedia(mediaQuery).matches;

function applyDarkClass(isDark) {
  document.documentElement.classList.toggle("dark", isDark);
}

function readStoredMode() {
  const v = localStorage.getItem("theme"); // 'dark' | 'light' | null
  if (v === "dark" || v === "light") return v;
  return "system";
}

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [mode, setMode] = useState(() => readStoredMode());
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  // Apply whenever mode changes
  useEffect(() => {
    if (mode === "dark") {
      applyDarkClass(true);
      setIsDark(true);
      localStorage.setItem("theme", "dark");
      return;
    }

    if (mode === "light") {
      applyDarkClass(false);
      setIsDark(false);
      localStorage.setItem("theme", "light");
      return;
    }

    // system
    localStorage.removeItem("theme");
    const sys = getSystemDark();
    applyDarkClass(sys);
    setIsDark(sys);
  }, [mode]);

  // Follow OS changes only in system mode
  useEffect(() => {
    const media = window.matchMedia(mediaQuery);
    const onChange = (e) => {
      if (readStoredMode() === "system") {
        applyDarkClass(e.matches);
        setIsDark(e.matches);
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="flex items-center justify-between gap-4 p-8 text-[var(--color-muted)]">
      <div>&copy; {year} Atlas School</div>

      <div className="flex items-center gap-2">
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="rounded-xl border px-3 py-2 text-sm
                     border-[var(--color-divider)]
                     bg-[var(--color-surface)]
                     text-[var(--color-ink)]"
          aria-label="Theme"
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>

        <span className="text-xs opacity-70">{isDark ? "Dark" : "Light"}</span>
      </div>
    </div>
  );
}
