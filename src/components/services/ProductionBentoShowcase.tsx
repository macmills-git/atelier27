"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ProductionBentoShowcase() {
  return (
    <section className="bg-[#0B0B0C] pb-24 pt-36 text-white md:pb-32 md:pt-44">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Part 1: Concept to Shelf 3-Column Strip (Screenshot 12) */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-lg text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.06] font-normal tracking-[-0.03em]">
            Go from concept to product on the shelf
          </h2>
          <div className="max-w-md space-y-5">
            <p className="text-sm leading-relaxed text-[#A1A1A6]">
              Translate raw strategic sketches into launch-ready packaging,
              tactile close-ups, motion studies, and cohesive multi-surface
              flagships—all produced under one studio roof.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-md bg-[#1A4BFF] px-5 py-2.5 text-xs font-semibold text-white lowercase transition-opacity hover:opacity-90"
              >
                start a brief
              </Link>
              <Link
                href="/work"
                className="rounded-md border border-white/20 px-5 py-2.5 text-xs font-medium text-white lowercase transition-colors hover:border-white"
              >
                view case studies
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Column 1: Material Close-Up */}
          <div className="group space-y-4">
            <div className="relative aspect-[4/3.6] overflow-hidden rounded-lg border border-white/10 bg-[#141416]">
              <Image
                src="/images/work-kora.jpg"
                alt="Material close-up packaging and botanical shadow"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 rounded-md border border-white/15 bg-black/75 px-3 py-2 font-mono text-[10px] text-white backdrop-blur-md">
                STOCK: 420GSM COTTON • DEBOSS
              </div>
            </div>
            <div>
              <h3 className="text-base font-medium">Material Close-Up</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#86868B]">
                Tactile photography and macro studies highlighting paper grain,
                amber glass, brushed bronze, and packaging finishes.
              </p>
            </div>
          </div>

          {/* Column 2: Motion Studies */}
          <div className="group space-y-4">
            <div className="relative aspect-[4/3.6] overflow-hidden rounded-lg border border-white/10 bg-[#141416]">
              <Image
                src="/images/hero-movement.jpg"
                alt="Motion studies and silhouette lighting"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 rounded-md border border-white/15 bg-black/75 px-3 py-2 font-mono text-[10px] text-white backdrop-blur-md">
                MOTION: 60FPS KINETIC STUDY
              </div>
            </div>
            <div>
              <h3 className="text-base font-medium">Motion Studies</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#86868B]">
                Animate identity marks, architectural forms, and hero video loops
                to communicate rhythm, scale, and brand presence.
              </p>
            </div>
          </div>

          {/* Column 3: Style Fluency */}
          <div className="group space-y-4">
            <div className="relative aspect-[4/3.6] overflow-hidden rounded-lg border border-white/10 bg-[#141416]">
              <Image
                src="/images/work-nyla.jpg"
                alt="Style fluency terracotta linen and bronze"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 rounded-md border border-white/15 bg-black/75 px-3 py-2 font-mono text-[10px] text-white backdrop-blur-md">
                SYSTEM: MULTI-SURFACE TOKENS
              </div>
            </div>
            <div>
              <h3 className="text-base font-medium">Style Fluency</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#86868B]">
                Translate one cohesive aesthetic across physical showrooms,
                digital stores, annual monographs, and social campaigns.
              </p>
            </div>
          </div>
        </div>

        {/* Part 2: Asymmetric Bento Showcase (Screenshots 11 & 14) */}
        <div className="mt-24 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Large Left Bento Card: Grid Overlay + Craft Photography */}
          <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#26221F] p-8 lg:col-span-7">
            <div>
              <span className="font-mono text-[10px] tracking-[0.16em] text-white/60 uppercase">
                Precision Digital Craft
              </span>
              <h3 className="mt-2 text-2xl font-normal tracking-tight">
                Engineered with architectural grid discipline
              </h3>
              <p className="mt-2 max-w-md text-xs leading-relaxed text-white/75">
                Every desktop flagship and mobile touchpoint is structured on a
                12-column mathematical grid with fluid clamp typography.
              </p>
            </div>

            <div className="relative mt-8 overflow-hidden rounded-xl border border-white/15 bg-[#1B1816] p-4 shadow-2xl">
              <div className="grid grid-cols-12 items-center gap-4">
                <div className="relative col-span-6 aspect-[4/3] overflow-hidden rounded-md">
                  <Image
                    src="/images/digital-experience.jpg"
                    alt="Interactive design flagship displayed across laptop, tablet, and mobile"
                    fill
                    unoptimized
                    sizes="360px"
                    className="object-cover"
                  />
                </div>
                <div className="col-span-6 space-y-2 rounded-md border border-[#1A4BFF] bg-[#1A4BFF]/10 p-4">
                  <span className="font-mono text-[9px] text-white/60">
                    SELECTED FRAME
                  </span>
                  <div className="text-lg font-medium leading-tight">
                    Interactive Design &amp; Digital Flagship
                  </div>
                  <p className="text-[11px] text-white/70">
                    Bespoke responsive layout &amp; synchronized scaling across screens.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Stacked Bento Cards */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {/* Top Card: Dark Monolith Preview */}
            <div className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#141416] p-8">
              <Image
                src="/images/work-sankofa.jpg"
                alt="Monolithic industrial brand object"
                fill
                sizes="480px"
                className="object-cover opacity-50"
              />
              <div className="relative z-10 space-y-2">
                <span className="font-mono text-[10px] tracking-[0.16em] text-white/70 uppercase">
                  Cohesive Design Tokens
                </span>
                <h3 className="text-xl font-normal">
                  Keep every surface on-brand
                </h3>
                <p className="text-xs leading-relaxed text-white/80">
                  Update typography, color tokens, packaging templates, and web
                  components from one unified design bible.
                </p>
              </div>
              <div className="relative z-10 mt-8 flex items-center justify-between border-t border-white/15 pt-4">
                <span className="font-mono text-[11px] text-white/75">
                  SYSTEM TOKENS v2.7
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:underline"
                >
                  Request Scope <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Bottom Card: Responsive Mobile / Editorial Screen */}
            <div className="flex items-center justify-between gap-6 overflow-hidden rounded-2xl border border-white/10 bg-[#2C2826] p-7">
              <div className="space-y-2">
                <h3 className="text-xl font-normal">
                  Intentional on every screen
                </h3>
                <p className="text-xs leading-relaxed text-white/75">
                  Refined mobile choreography—never a shrunk desktop layout.
                </p>
              </div>
              <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-lg border border-white/20 shadow-lg">
                <Image
                  src="/images/work-zuri.jpg"
                  alt="Mobile sanctuary flagship preview"
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

