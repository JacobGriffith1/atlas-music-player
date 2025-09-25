import { useEffect, useState } from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const [isDark, setIsDark] = useState(() =>
    typeof document !== "undefined" ? document.documentElement.classList.contains("dark") : false
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="flex items-center justify-between gap-4 p-8 text-[var(--color-muted)]">
      <div>&copy; {year} Atlas School</div>
      <button
        type="button"
        onClick={() => setIsDark((v) => !v)}
        className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm
                   border-[var(--color-divider)]
                   bg-[var(--color-surface)]
                   hover:bg-[var(--color-surface-2)]
                   text-[var(--color-ink)]
                   transition"
        aria-pressed={isDark}
        aria-label="Toggle dark mode"
        title="Toggle dark mode"
      >
        {isDark ? "Switch to Light" : "Switch to Dark"}
      </button>
    </div>
  );
}
