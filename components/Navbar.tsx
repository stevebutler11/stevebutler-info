"use client";

import Link from "next/link";

import { ThemeDropdown } from "./ThemeDropdown";
import NavLinkDropdown from "./NavLinkDropdown";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pages = ["posts", "projects", "about"];

  const [top, setTop] = useState<boolean>(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <nav className={`p-4 flex flex-row justify-between items-center h-16 sticky top-0 ${!top &&`backdrop-filter backdrop-blur-md bg-opacity-40 z-10 shadow-md`}`}>
      <Link href="/">
        <h1 className="text-2xl font-light">SB</h1>
      </Link>

      <div className="flex flex-row items-center">
        
        {/* drop down nav links */}
        <div className="md:hidden pr-4">
          <NavLinkDropdown pages={pages} />
        </div>

        {/* standard nav links */}
        <ul className="hidden md:flex md:flex-row">
          {pages.map((pg, i) => (
            <li key={i} className="pr-4 text-xl">
              <Link href={`/${pg}`}>{pg}</Link>
            </li>
          ))}
        </ul>
        <ThemeDropdown />
      </div>
    </nav>
  );
}
