"use client";
import OpenConsult from "./OpenConsult";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled || open
          ? "border-b border-navy/10 bg-white/80 backdrop-blur-lg dark:border-white/10 dark:bg-ink/80"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-display text-2xl font-extrabold tracking-tight">
          <span className="text-brand">Serve</span> <span className="text-sun">Art</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-sun">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <OpenConsult
            onClick={() => setOpen(false)}
            className="mt-3 block w-full rounded-full bg-sun py-3 text-center font-semibold text-white"
          >
            Start a project
          </OpenConsult>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-navy/15 dark:border-white/20 md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-navy/10 px-5 pb-6 pt-2 dark:border-white/10 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-display text-xl font-bold"
            >
              {l.label}
            </Link>
          ))}
          <OpenConsult className="hidden rounded-full bg-sun px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sun-dark sm:block">
            Start a project
          </OpenConsult>
        </div>
      )}
    </header>
  );
}