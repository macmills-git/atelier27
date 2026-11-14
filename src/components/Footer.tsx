"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AtelierMark } from "./Navbar";

export function Footer() {
  const [accraClock, setAccraClock] = useState<string>("--:--:--");
  const [motionPaused, setMotionPaused] = useState(false);

  useEffect(() => {
    const tick = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Africa/Accra",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now);
        setAccraClock(formatted);
      } catch {
        setAccraClock("UTC+0");
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const toggleMotion = () => {
    const next = !motionPaused;
    setMotionPaused(next);
    if (next) {
      document.documentElement.dataset.motion = "paused";
    } else {
      delete document.documentElement.dataset.motion;
    }
  };

  return (
    <footer className="border-t border-white/15 bg-[#06140E] text-white">
      <div className="mx-auto max-w-[1520px] px-6 pb-10 pt-20 md:px-10">
        {/* Top Directory Columns */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="flex flex-col justify-between gap-8 lg:col-span-4">
            <div className="space-y-5">
              <Link href="/" className="inline-flex items-center gap-3 text-white">
                <AtelierMark className="h-7 w-7" />
                <span className="text-xs font-semibold tracking-[0.18em] uppercase">
                  ATELIER 27
                </span>
              </Link>
              <p className="max-w-xs text-2xl leading-snug font-normal tracking-tight text-white/90">
                Ideas, made distinct.
              </p>
            </div>

            <div className="space-y-1.5 border-t border-white/10 pt-5">
              <div className="font-mono text-[10px] tracking-[0.16em] text-white/55 uppercase">
                Studio Time — Accra, GH (UTC+0)
              </div>
              <div className="font-mono text-sm tracking-[0.12em] text-white tabular-nums">
                {accraClock} GMT
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
            <div className="space-y-4">
              <h3 className="text-xs font-semibold tracking-[0.06em] text-white">
                Studio
              </h3>
              <ul className="space-y-2.5 text-sm text-white/65">
                <li>
                  <Link href="/about" className="transition-colors hover:text-white">
                    About ATELIER 27
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="transition-colors hover:text-white">
                    Capabilities
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="transition-colors hover:text-white">
                    Selected Work
                  </Link>
                </li>
                <li>
                  <Link href="/journal" className="transition-colors hover:text-white">
                    Journal & Essays
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition-colors hover:text-white">
                    Initiate Dialogue
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-semibold tracking-[0.06em] text-white">
                Disciplines
              </h3>
              <ul className="space-y-2.5 text-sm text-white/65">
                <li>
                  <Link
                    href="/services#brand-strategy"
                    className="transition-colors hover:text-white"
                  >
                    Brand Strategy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#digital-experiences"
                    className="transition-colors hover:text-white"
                  >
                    Digital Experiences
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#creative-direction"
                    className="transition-colors hover:text-white"
                  >
                    Creative Direction
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#visual-production"
                    className="transition-colors hover:text-white"
                  >
                    Visual Production
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#print-physical"
                    className="transition-colors hover:text-white"
                  >
                    Print & Physical
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-semibold tracking-[0.06em] text-white">
                Archives
              </h3>
              <ul className="space-y-2.5 text-sm text-white/65">
                <li>
                  <Link
                    href="/work/zuri-sanctuary"
                    className="transition-colors hover:text-white"
                  >
                    Zuri Sanctuary
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work/kora-botanicals"
                    className="transition-colors hover:text-white"
                  >
                    Kora Botanicals
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work/osu-modernist"
                    className="transition-colors hover:text-white"
                  >
                    Osu Modernist
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work/nyla-atelier"
                    className="transition-colors hover:text-white"
                  >
                    Nyla Atelier
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work/sankofa-ventures"
                    className="transition-colors hover:text-white"
                  >
                    Sankofa Ventures
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-semibold tracking-[0.06em] text-white">
                Connect
              </h3>
              <ul className="space-y-2.5 text-sm text-white/65">
                <li>Accra, Greater Accra</li>
                <li>Ghana • Est. 2021</li>
                <li>
                  <a
                    href="mailto:hello@atelier27studio.com"
                    className="transition-colors hover:text-white"
                  >
                    hello@atelier27studio.com
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:partnerships@atelier27studio.com"
                    className="transition-colors hover:text-white"
                  >
                    partnerships@atelier27studio.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Monumental Split-Wordmark Lockup (Inspired by Screenshot 5) */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-12 md:flex-row md:items-end">
          <span className="font-sans text-[clamp(3.25rem,9vw,7.5rem)] leading-[0.85] font-bold tracking-[-0.04em] text-white select-none">
            atelier
          </span>

          <div className="flex flex-wrap items-center justify-center gap-5 pb-2 text-xs text-white/80 underline-offset-4">
            <a
              href="mailto:hello@atelier27studio.com"
              className="underline hover:text-white"
            >
              hello@atelier27studio.com
            </a>
            <Link href="/work" className="underline hover:text-white">
              Archives
            </Link>
            <Link href="/services" className="underline hover:text-white">
              Capabilities
            </Link>
            <Link href="/contact" className="underline hover:text-white">
              Start Project
            </Link>
          </div>

          <span className="font-serif text-[clamp(3.5rem,9.5vw,8rem)] leading-[0.82] font-light tracking-[-0.03em] text-white select-none">
            studio27
          </span>
        </div>

        {/* Colophon Bar + Pause Motion Control */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center">
          <p>ATELIER 27 © 2026 — Accra, Ghana.</p>
          <button
            type="button"
            onClick={toggleMotion}
            className="cursor-pointer lowercase underline underline-offset-4 transition-colors hover:text-white"
          >
            {motionPaused ? "resume motion" : "pause motion"}
          </button>
        </div>
      </div>
    </footer>
  );
}
