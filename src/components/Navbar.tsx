"use client";
import React from "react";
import usePortfolio from "@/hooks/usePortfolio";

const Navbar = () => {
  const { theme, toggleTheme } = usePortfolio();

  const handleToggleTheme = () => {
    toggleTheme();

    if (theme === "light") {
      document.documentElement.classList.add("dark");
      console.log("oscuro");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("claro");
    }
  };

  return (
    <nav className="w-full py-3 px-2 md:px-8 flex flex-row justify-between align-middle bg-slate-200 dark:bg-slate-800 sticky top-0 ">
      <p className="text-xl md:text-2xl text-slate-900 dark:text-white my-auto font-bold">
        CJSanchez.dev
      </p>
      <div className="flex flex-row gap-4">
        <button
          className="shadow border border-slate-900 dark:border-slate-400 p-2 rounded-md
          hover:bg-slate-900 hover:dark:bg-slate-400 hover:text-slate-400 hover:dark:text-slate-900 transition-colors"
          onClick={() => handleToggleTheme()}
        >
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
