import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    const root = document.documentElement;
    if (next) root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem("hm-theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="group relative flex h-10 w-10 items-center justify-center border border-foreground/20 text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-background"
    >
      {mounted && isDark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}