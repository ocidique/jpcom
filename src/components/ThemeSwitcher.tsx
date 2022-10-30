import React, { useEffect, useState } from "react";

type Props = {
  isPostPage?: boolean;
};

const ThemeSwitcher = ({ isPostPage = false }: Props) => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    applyTheme(getTheme());
  });

  function getTheme() {
    const userPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const defaultTheme = userPrefersDark ? "dark" : "light";
    const localStorateTheme = localStorage.getItem("theme") || defaultTheme;
    return localStorateTheme;
  }

  function saveTheme(theme: string) {
    localStorage.setItem("theme", theme);
  }

  function applyTheme(theme: string) {
    setTheme(theme);
    document.body.className = theme;
  }

  function rotateTheme(theme: string) {
    if (theme === "light") {
      return "dark";
    }
    return "light";
  }

  function toggleTheme() {
    const newTheme = rotateTheme(getTheme());
    applyTheme(newTheme);
    saveTheme(newTheme);
  }

  return (
    <button
      onClick={() => toggleTheme()}
      title="Toggle theme between light and dark"
      aria-label="Toggle theme between light and dark"
      className={
        isPostPage
          ? "text-zinc-200 hover:text-orange-500 dark:hover:text-orange-500 lg:px-3 lg:py-2"
          : "text-zinc-900 dark:text-zinc-200 hover:text-orange-500 dark:hover:text-orange-500 lg:px-3 lg:py-2"
      }
    >
      {theme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeSwitcher;
