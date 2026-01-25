// src/components/Footer.jsx
import { useEffect, useState } from "react";

const systemDark = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const readInitialIsDark = () => document.documentElement.classList.contains("dark");

export default function Footer() {
  const year = new Date().getFullYear();
  const [isDark, setIsDark] = useState(readInitialIsDark);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e) => {
      if (!localStorage.getItem("theme")) setIsDark(e.matches);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const resetToSystem = () => {
    localStorage.removeItem("theme");
    setIsDark(systemDark());
  };

  return (
    <div className="flex items-center justify-between gap-4 p-8 text-[var(--color-muted)]">
      <div>&copy; {year} Atlas School</div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={toggleTheme}
          className="inline-flex items-center rounded-xl border px-3 py-2 text-sm
                     border-[var(--color-divider)]
                     bg-[var(--color-surface)]
                     hover:bg-[var(--color-surface-2)]
                     text-[var(--color-ink)]
                     transition"
          aria-pressed={isDark}
        >
          {isDark ? "Dark" : "Light"}
        </button>
      </div>
    </div>
  );
}
