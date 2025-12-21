// Theme Management System
// Centralized theme toggle using html[data-theme] + localStorage

(function () {
  const STORAGE_KEY = "theme"; // "dark" | "light"
  const root = document.documentElement;

  function setTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);
  }

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  // Apply immediately to prevent flash
  setTheme(getPreferredTheme());

  // Wire toggle button after DOM loads
  window.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("[data-theme-toggle]");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const current = root.dataset.theme === "dark" ? "dark" : "light";
      setTheme(current === "dark" ? "light" : "dark");
    });
  });
})();
