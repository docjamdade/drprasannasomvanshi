"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 min-w-0">
            <span className="text-lg sm:text-xl font-bold text-primary font-[family-name:var(--font-heading)] truncate">
              Dr. Prasanna Somvanshi
            </span>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 py-1 text-sm font-medium transition-colors ${isActive(link.href) ? "text-primary" : "text-text hover:text-primary"}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-primary-dark transition-colors"
            >
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-text hover:bg-cream-dark transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <>
          <div className="fixed inset-0 top-16 z-40 bg-black/20 md:hidden" onClick={() => setOpen(false)} />
          <div className="relative z-50 md:hidden border-t border-cream-dark bg-white">
            <div className="space-y-1 px-4 pb-4 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${isActive(link.href) ? "bg-primary/10 text-primary" : "text-text hover:bg-cream-dark"}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-primary-dark transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
