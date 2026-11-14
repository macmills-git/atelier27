"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function EditorialTemplatesBand() {
  return (
    <section className="bg-white py-24 text-[#0B0B0C] md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-xl text-[clamp(2rem,4vw,3.1rem)] leading-[1.08] font-normal tracking-[-0.03em]">
            Every flagship begins from an original editorial thesis.
          </h2>
          <Link
            href="/work"
            className="inline-flex items-center gap-2.5 border border-black/20 px-6 py-3.5 text-xs font-semibold tracking-[0.04em] text-[#0B0B0C] lowercase transition-colors hover:bg-[#0B0B0C] hover:text-white"
          >
            explore selected work <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 6 High-Contrast Editorial Brand Frames */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Card 1: Screenshot 2026-11-13 223510 — Digital Design & Lettering System */}
          <Link
            href="/work/alec-tear-interactive"
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-black/12 bg-[#F5F4F0] p-6 transition-shadow duration-300 hover:shadow-xl md:p-8"
          >
            <div>
              <div className="flex items-center justify-between border-b border-black/10 pb-3 font-mono text-[9px] tracking-[0.14em] text-[#6E6E73] uppercase">
                <span>DIGITAL IDENTITY &amp; LETTERING</span>
                <span>ACCRA / GLOBAL</span>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="font-serif text-3xl font-light tracking-tight md:text-4xl">
                  Interactive Typographic Craft
                </span>
                <span className="font-mono text-xs text-[#86868B]">01</span>
              </div>
            </div>
            <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/5 bg-[#E8E6E0]">
              <Image
                src="/images/editorial-alec-tear.png"
                alt="Interactive design and lettering system preview"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-5 flex items-center justify-between text-xs text-[#555558]">
              <span>Adaptive brand mark, lettering archives &amp; interactive web UI</span>
              <span className="font-medium text-[#0B0B0C] lowercase underline-offset-4 group-hover:underline">read case study</span>
            </div>
          </Link>

          {/* Card 2: Screenshot 2026-11-13 224124 — Art Direction & Visual Concept System */}
          <Link
            href="/work/hitomi-kakuno-editorial"
            className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-[#111114] p-6 text-white transition-shadow duration-300 hover:shadow-xl md:p-8"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[9px] tracking-[0.14em] text-white/60 uppercase">
                <span>ART DIRECTION &amp; STILLS</span>
                <span>PHOTOGRAPHY • LABONE</span>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="font-serif text-3xl font-light tracking-tight text-white/95 md:text-4xl">
                  Cinematic Editorial Moodboards
                </span>
                <span className="font-mono text-xs text-white/50">02</span>
              </div>
            </div>
            <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <Image
                src="/images/editorial-hitomi.png"
                alt="Art direction and visual concept showcase"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-5 flex items-center justify-between text-xs text-white/70">
              <span>Widescreen digital flagship &amp; architectural editorial spreads</span>
              <span className="font-medium text-white lowercase underline-offset-4 group-hover:underline">read case study</span>
            </div>
          </Link>

          {/* Card 3: Screenshot 2026-11-13 223348 — Swiss Collaborative Workspace Flagship */}
          <Link
            href="/work/kin-collaborative"
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-black/12 bg-white p-6 transition-shadow duration-300 hover:shadow-xl md:p-8"
          >
            <div>
              <div className="flex items-center justify-between border-b border-black/10 pb-3 font-mono text-[9px] tracking-[0.14em] text-[#6E6E73] uppercase">
                <span>SWISS EDITORIAL COLLABORATIVE</span>
                <span>IDENTITY / SPATIAL</span>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="font-serif text-3xl font-light tracking-tight md:text-4xl">
                  Precision Brand Collaboration
                </span>
                <span className="font-mono text-xs text-[#86868B]">03</span>
              </div>
            </div>
            <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/8 bg-[#F0EEEA]">
              <Image
                src="/images/editorial-kin.png"
                alt="Collaborative editorial brand architecture"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-5 flex items-center justify-between text-xs text-[#555558]">
              <span>Minimalist typography, concrete mockups &amp; clear spatial systems</span>
              <span className="font-medium text-[#0B0B0C] lowercase underline-offset-4 group-hover:underline">read case study</span>
            </div>
          </Link>

          {/* Card 4: Screenshot 2026-11-13 224347 — Pan-African Conference & Spatial Identity */}
          <Link
            href="/work/corps-africa-summit"
            className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-[#0F172A] p-6 text-white transition-shadow duration-300 hover:shadow-xl md:p-8"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[9px] tracking-[0.14em] text-white/60 uppercase">
                <span>CONFERENCE &amp; SPATIAL IDENTITY</span>
                <span>PAN-AFRICAN LAUNCH</span>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="font-serif text-3xl font-light tracking-tight text-white/95 md:text-4xl">
                  Environmental Brand Presence
                </span>
                <span className="font-mono text-xs text-white/50">04</span>
              </div>
            </div>
            <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30">
              <Image
                src="/images/editorial-corps-africa.png"
                alt="Pan-African conference identity, collateral and stage design"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-5 flex items-center justify-between text-xs text-white/70">
              <span>Stage architecture, printed collateral &amp; mobile attendee interfaces</span>
              <span className="font-medium text-white lowercase underline-offset-4 group-hover:underline">read case study</span>
            </div>
          </Link>

          {/* Card 5: Screenshot 2026-11-13 223830 — Systematic Brand Guidelines Matrix */}
          <Link
            href="/work/incite-identity-matrix"
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-black/12 bg-[#F7F6F2] p-6 transition-shadow duration-300 hover:shadow-xl md:p-8"
          >
            <div>
              <div className="flex items-center justify-between border-b border-black/10 pb-3 font-mono text-[9px] tracking-[0.14em] text-[#6E6E73] uppercase">
                <span>COMPREHENSIVE DESIGN GUIDELINES</span>
                <span>BRAND ARCHITECTURE MATRIX</span>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="font-serif text-3xl font-light tracking-tight md:text-4xl">
                  Modular Identity System
                </span>
                <span className="font-mono text-xs text-[#86868B]">05</span>
              </div>
            </div>
            <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/8 bg-[#EDEAE2]">
              <Image
                src="/images/editorial-incite.png"
                alt="Systematic brand guidelines, typography scales and grid rules"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-5 flex items-center justify-between text-xs text-[#555558]">
              <span>24-panel design matrix: symbols, typography, photography &amp; grid systems</span>
              <span className="font-medium text-[#0B0B0C] lowercase underline-offset-4 group-hover:underline">read case study</span>
            </div>
          </Link>

          {/* Card 6: Screenshot 2026-11-13 223928 — Creative Studio Palette & Tactile Materials */}
          <Link
            href="/work/nous-studio-materials"
            className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-[#0C1E1B] p-6 text-white transition-shadow duration-300 hover:shadow-xl md:p-8"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[9px] tracking-[0.14em] text-[#FDF4B8]/70 uppercase">
                <span>STUDIO COLOR &amp; MATERIAL SYSTEM</span>
                <span>DAINTREE &amp; LEMON</span>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="font-serif text-3xl font-light tracking-tight text-[#FDF4B8] md:text-4xl">
                  Tactile Material &amp; Palette Guide
                </span>
                <span className="font-mono text-xs text-[#FDF4B8]/60">06</span>
              </div>
            </div>
            <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <Image
                src="/images/editorial-nous.png"
                alt="Color architecture, typographic poster and tactile print samples"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-5 flex items-center justify-between text-xs text-[#FDF4B8]/80">
              <span>Custom typographic lockups, halftone finishes &amp; packaging stamps</span>
              <span className="font-medium text-[#FDF4B8] lowercase underline-offset-4 group-hover:underline">read case study</span>
            </div>
          </Link>
        </div>

        {/* Full-Width Hairline Button */}
        <Link
          href="/work"
          className="mt-12 block w-full border border-black/20 py-4 text-center text-xs font-semibold tracking-[0.04em] text-[#0B0B0C] lowercase transition-colors hover:bg-[#0B0B0C] hover:text-white"
        >
          view more case studies
        </Link>
      </div>
    </section>
  );
}

