"use client";

import { useState } from "react";

export function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="group relative">
      {/* Search icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="text-noir-500 group-focus-within:text-honey-500/70 pointer-events-none absolute top-1/2 left-4 size-[18px] -translate-y-1/2 transition-colors duration-200"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search contacts by name, role, or category..."
        aria-label="Search contacts"
        className="border-noir-700/50 bg-noir-850 text-noir-100 placeholder:text-noir-500 focus:border-honey-500/30 focus:ring-honey-500/10 w-full rounded-xl border py-3 pr-4 pl-11 text-sm transition-all duration-200 outline-none focus:ring-2"
      />

      {query && (
        <button
          onClick={() => setQuery("")}
          className="text-noir-500 hover:text-noir-300 absolute top-1/2 right-4 -translate-y-1/2 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}

      {/* Subtle glow on focus */}
      <div className="from-honey-500/5 pointer-events-none absolute inset-0 -z-10 rounded-xl bg-gradient-to-r to-transparent opacity-0 blur-xl transition-opacity duration-300 group-focus-within:opacity-100" />
    </div>
  );
}
