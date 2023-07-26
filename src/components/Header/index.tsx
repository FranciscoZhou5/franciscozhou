"use client";

import useTheme from "@/styles/useTheme";
import { Sun, Moon } from "@phosphor-icons/react";

export default function Header() {
  return (
    <header className="w-full fixed z-10 h-16 backdrop-blur bg-[#e6e6e6]/40">
      <h2 className="font-medium"> FranYuu </h2>

      <nav></nav>
    </header>
  );
}
