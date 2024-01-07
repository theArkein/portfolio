"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ModeToggle } from "../ui/mode-toggle";
import Logo from "../icons/a";
import { useTheme } from "next-themes";

const navs = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Notes",
    path: "/notes",
  },
  {
    label: "WebNuggets",
    path: "/webnuggets",
  },
];

function Navbar() {
  const pathname = usePathname();
  const { theme = "dark" } = useTheme();

  return (
    <header className="flex justify-between items-center w-full sticky top-0 pt-8 z-50 bg-background">
      <div className="flex gap-6 items-center">
        <Link href="/">
          <Logo
            color={theme === "dark" ? "#000" : "#fff"}
            fill={theme === "dark" ? "#fff" : "#000"}
          />
        </Link>
        <nav className="flex items-center gap-6 text-sm w-full">
          {navs.map((nav) => (
            <Link
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === nav.path ? "text-foreground" : "text-foreground/60"
              )}
              href={nav.path}
              key={nav.path}
            >
              {nav.label}
            </Link>
          ))}
        </nav>
      </div>
      <ModeToggle />
    </header>
  );
}

export default Navbar;
