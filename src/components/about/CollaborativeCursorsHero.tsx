"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { STUDIO_PORTRAITS } from "@/data/studio";

const TEAM_COLLABORATORS = [
  {
    name: "Kwame",
    bg: "#F0DF6E",
    text: "#0B0B0C",
    position: "right-4 top-6 sm:right-12 sm:top-10",
    anim: "animate-float-slow",
  },
  {
    name: "Ama",
    bg: "#FFFFFF",
    text: "#0B0B0C",
    position: "left-1/2 top-1/2 -translate-y-4 sm:left-[58%]",
    anim: "animate-float-slow",
  },
  {
    name: "Abena",
    bg: "#EADBF8",
    text: "#0B0B0C",
    position: "left-6 bottom-12 sm:left-16 sm:bottom-16",
    anim: "animate-float-delayed",
  },
  {
    name: "Kofi",
    bg: "#BEE83A",
    text: "#0B0B0C",
    position: "left-1/2 bottom-4 -translate-x-1/2 sm:bottom-8",
    anim: "animate-float-slow",
  },
];

export function CollaborativeCursorsHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handlePointerLeave = () => {
    setMousePos(null);
  };

  return (
    <section
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative overflow-hidden bg-[#061811] pb-24 pt-36 text-white md:pb-32 md:pt-44"
    >
      <div className="relative mx-auto max-w-[1140px] px-6 text-center md:px-10">
        <p className="font-mono text-[11px] tracking-[0.22em] text-white/65 uppercase">
          About Us — Accra Collective
        </p>

        {/* Refined Editorial Statement with Collaborative Cursor Tags (Screenshot 3) */}
        <h2 className="relative z-10 mx-auto mt-8 max-w-4xl font-serif text-[clamp(2.25rem,5.2vw,4.5rem)] leading-[1.06] font-light tracking-[-0.02em] text-white/95">
          We are a group of designers, strategists, builders and craftspeople
          that want to transform how African &amp; global brands are built.
        </h2>

        {/* Floating Multiplayer Cursor Tags */}
        <div className="pointer-events-none hidden md:block" aria-hidden="true">
          {TEAM_COLLABORATORS.map((person) => (
            <div
              key={person.name}
              className={`absolute z-20 ${person.position} ${person.anim}`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="-mb-1 -ml-3"
              >
                <path
                  d="M1 1L14 6.5L8.2 8.7L6 14.5L1 1Z"
                  fill={person.bg}
                />
              </svg>
              <span
                className="inline-block rounded-full px-3.5 py-1 text-xs font-medium shadow-xl"
                style={{ backgroundColor: person.bg, color: person.text }}
              >
                {person.name}
              </span>
            </div>
          ))}

          {/* Interactive "You" Cursor that directly tracks the user's mouse pointer */}
          <div
            className={`absolute z-30 transition-transform duration-75 ease-out ${
              mousePos ? "opacity-100" : "right-16 top-24 sm:right-40 sm:top-20 animate-float-delayed opacity-85"
            }`}
            style={
              mousePos
                ? {
                    transform: `translate3d(${mousePos.x + 12}px, ${mousePos.y + 12}px, 0)`,
                    left: 0,
                    top: 0,
                  }
                : undefined
            }
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="-mb-1 -ml-3"
            >
              <path d="M1 1L14 6.5L8.2 8.7L6 14.5L1 1Z" fill="#FF5A36" />
            </svg>
            <span className="inline-block rounded-full bg-[#FF5A36] px-3.5 py-1 text-xs font-medium text-white shadow-xl">
              You
            </span>
          </div>
        </div>
      </div>

      {/* Compact Rotating Orbital Team Stage */}
      <div className="group relative mx-auto mt-10 flex h-[460px] max-w-[680px] items-center justify-center px-6 md:mt-14 md:h-[500px]">
        {/* Rotating Orbit Ring */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center animate-orbit-slow group-hover:[animation-play-state:paused] [--orbit-radius:148px] sm:[--orbit-radius:180px] md:[--orbit-radius:212px]"
          aria-hidden="true"
        >
          {STUDIO_PORTRAITS.map((person, idx) => {
            const angle = idx * 72;
            return (
              <div
                key={person.name}
                className="absolute"
                style={{
                  transform: `rotate(${angle}deg) translateY(calc(-1 * var(--orbit-radius))) rotate(-${angle}deg)`,
                }}
              >
                <div className="animate-orbit-counter-slow group-hover:[animation-play-state:paused]">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-white/20 shadow-2xl transition-transform duration-300 sm:h-16 sm:w-16 md:h-20 md:w-20">
                    <Image
                      src={person.src}
                      alt={person.name}
                      fill
                      sizes="80px"
                      className={`object-cover ${person.objectPosition}`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered CTA inside Orbit */}
        <div className="relative z-10 mx-auto flex max-w-sm flex-col items-center text-center">
          <h3 className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] font-light tracking-tight text-white">
            Collaborate with us
          </h3>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-6 py-2.5 text-xs font-semibold tracking-[0.04em] text-white lowercase backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-[#061811]"
          >
            start a dialogue <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

