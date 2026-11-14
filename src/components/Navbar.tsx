"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/work", label: "Works" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
];

export function AtelierMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8.5 24.5L16 6.5L23.5 24.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path
        d="M5 18.5C9.5 14 22.5 14 27 18.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="16" cy="22.5" r="1.75" fill="currentColor" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accraTime, setAccraTime] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const formatAccra = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Africa/Accra",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
        setAccraTime(formatter.format(now));
      } catch {
        setAccraTime("UTC+0");
      }
    };
    formatAccra();
    const id = setInterval(formatAccra, 30000);
    return () => clearInterval(id);
  }, []);

  const isLightHeaderPage =
    pathname.startsWith("/services") ||
    pathname.startsWith("/about") ||
    pathname.startsWith("/journal") ||
    pathname.startsWith("/contact");

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ease-out ${
          scrolled
            ? "border-b border-white/10 bg-[#0B0B0C]/90 py-3.5 backdrop-blur-md"
            : isLightHeaderPage
            ? "border-b border-white/10 bg-[#0B0B0C]/95 py-4 backdrop-blur-sm"
            : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-[1520px] items-center justify-between px-6 md:px-10">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-white transition-opacity hover:opacity-85"
          >
            <AtelierMark className="h-6 w-6 text-white transition-transform duration-500 group-hover:rotate-12" />
            <span className="text-[13px] font-semibold tracking-[0.18em] uppercase">
              ATELIER 27
            </span>
          </Link>

          {/* Center Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-8 lg:flex"
          >
            {NAV_LINKS.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href + "/"));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative py-1 text-[11px] font-medium tracking-[0.16em] text-white/80 uppercase transition-colors hover:text-white"
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active-underline"
                      className="absolute inset-x-0 -bottom-0.5 h-[1.5px] bg-white"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden items-center gap-6 lg:flex">
            <span className="font-mono text-[10px] tracking-[0.14em] text-white/60 uppercase tabular-nums">
              ACCRA UTC+0 {accraTime ? `• ${accraTime}` : ""}
            </span>
            <Link
              href="/contact"
              className="rounded-[2px] bg-white px-5 py-3 text-xs font-semibold tracking-[0.04em] text-[#0B0B0C] lowercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F5F4F0] hover:shadow-lg"
            >
              contact us
            </Link>
          </div>

          {/* Mobile Trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 text-white lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-[#0B0B0C] px-6 pb-10 pt-28 lg:hidden"
          >
            <div className="flex flex-col gap-5">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.35 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block border-b border-white/10 pb-4 text-3xl font-normal tracking-tight text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="space-y-4">
              <p className="font-mono text-xs tracking-[0.14em] text-[#86868B] uppercase">
                Accra, Ghana — Est. 2021
              </p>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full rounded-[2px] bg-white py-4 text-center text-xs font-semibold tracking-[0.04em] text-[#0B0B0C] lowercase"
              >
                contact us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

