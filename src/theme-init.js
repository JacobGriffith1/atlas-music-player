export function initTheme() {
  try {
    const stored = localStorage.getItem("theme"); // 'dark' | 'light' | null
    const sysDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const wantDark =
      stored === "dark" ? true :
      stored === "light" ? false :
      sysDark;

    document.documentElement.classList.toggle("dark", wantDark);
  } catch {}
}