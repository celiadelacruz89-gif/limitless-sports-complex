"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Baseball", href: "/baseball" },
    { name: "Cheer", href: "/cheer" },
    { name: "Music", href: "/music" },
    { name: "Merch", href: "/merch" },
    { name: "Sponsor", href: "/sponsor" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020817]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-2xl font-black tracking-widest text-transparent"
        >
          LIMITLESS
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-bold transition duration-300 ${
                pathname === link.href
                  ? "text-cyan-400"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/sponsor"
            className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-black text-cyan-300 transition hover:scale-105 hover:bg-cyan-500 hover:text-white"
          >
            Donate
          </Link>

          <a
            href="https://form.jotform.com/261584398573068"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 text-sm font-black text-white transition hover:scale-105 hover:shadow-xl"
          >
            Order Song
          </a>
        </div>
      </div>
    </header>
  );
}