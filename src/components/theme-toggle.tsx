"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        disabled
        aria-hidden
        className="border-noir-700/60 bg-noir-850 text-noir-400 inline-flex size-9 items-center justify-center rounded-lg border"
      >
        <span className="size-4" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="border-noir-700/60 bg-noir-850 text-noir-300 hover:bg-noir-800 hover:text-noir-100 inline-flex size-9 items-center justify-center rounded-lg border transition-colors duration-200"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-4"
        >
          <path d="M12 2.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM12 18.75a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75ZM5.47 4.409a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 1 1-1.06 1.061L5.47 5.47a.75.75 0 0 1 0-1.061ZM16.409 15.348a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 0 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 0-1.061ZM2.25 12a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75ZM18.75 12a.75.75 0 0 1 .75-.75H21a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM5.47 19.591a.75.75 0 0 1 0-1.06l1.061-1.061a.75.75 0 1 1 1.06 1.06L6.53 19.59a.75.75 0 0 1-1.061 0ZM16.409 8.652a.75.75 0 0 1 0-1.06l1.061-1.061a.75.75 0 1 1 1.06 1.06L17.47 8.652a.75.75 0 0 1-1.061 0ZM12 6.75a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5Z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-4"
        >
          <path d="M9.528 1.718a.75.75 0 0 1 .162.819 8.25 8.25 0 0 0 11.773 10.981.75.75 0 0 1 .982.98A9.75 9.75 0 1 1 9.046 1.536a.75.75 0 0 1 .482.182Z" />
        </svg>
      )}
    </button>
  );
}
