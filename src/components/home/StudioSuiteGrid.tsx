"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search } from "lucide-react";

const EXTENSIONS = [".africa", ".studio", ".com", ".design"];

export function StudioSuiteGrid() {
  const [selectedExt, setSelectedExt] = useState(".studio");

  return (
    <section className="bg-white pb-24 pt-6 text-[#0B0B0C] md:pb-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Split Header matching Screenshot 7 */}
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.06] font-normal tracking-[-0.03em] text-[#0B0B0C]">
              Everything your brand needs under one roof
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-sm leading-relaxed text-[#48484C] md:text-base">
              Unite brand strategy, editorial craft, digital engineering, and
              visual production into one coherent creative studio partnership.
            </p>
          </div>
        </div>

        {/* 4 Tall Rounded Cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Editorial Design Systems */}
          <Link
            href="/services#digital-experiences"
            className="group relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-xl bg-gradient-to-b from-[#3A3532] to-[#1D1B1A] p-6 text-white shadow-lg transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5"
          >
            <div>
              <h3 className="text-xl font-medium tracking-tight">
                Editorial Systems
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/75">
                Refine every grid proportion, typographic weight, and responsive layout token.
              </p>
            </div>

            {/* Mini Layout Grid Widget */}
            <div className="relative my-4 overflow-hidden rounded-lg border border-white/15 bg-[#2A2623] p-3 shadow-inner">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 rounded bg-white px-2 py-1 text-[9px] font-medium text-[#0B0B0C]">
                  <span className="font-serif">Aa</span>
                  <span className="h-2.5 w-2.5 rounded-xs bg-[#D95D39]" />
                  <span className="h-2.5 w-2.5 rounded-xs bg-[#0B0B0C]" />
                </div>
                <span className="font-mono text-[8px] text-white/60">12-COL</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                <div className="relative col-span-2 aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/images/hero-craft.jpg"
                    alt="Studio layout preview"
                    fill
                    sizes="160px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between rounded-xs border border-dashed border-[#1A4BFF]/80 bg-[#1A4BFF]/10 p-1.5 text-[8px] text-white/90">
                  <span>Accra creative studio</span>
                  <span className="rounded-full bg-[#F5F4F0] px-1.5 py-0.5 text-center text-[7px] font-semibold text-[#0B0B0C] lowercase">
                    explore
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <ArrowRight className="h-5 w-5 text-white/80 transition-transform duration-300 group-hover:translate-x-1.5" />
            </div>
          </Link>

          {/* Card 2: Strategic Brand Intelligence */}
          <Link
            href="/services#brand-strategy"
            className="group relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-xl bg-[#070708] p-6 text-white shadow-lg transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5"
          >
            <div>
              <h3 className="text-xl font-medium tracking-tight">
                Brand Intelligence
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/75">
                Strategic positioning, naming architectures, and distinct visual grammars.
              </p>
            </div>

            {/* Floating Token Visual */}
            <div className="relative my-4 flex h-44 items-center justify-center">
              <div className="absolute right-4 top-2 h-14 w-14 rounded-full bg-gradient-to-br from-[#F4A261] via-[#E76F51] to-[#1A4BFF] opacity-90 blur-[1px] transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute left-3 top-6 w-28 -rotate-6 rounded border border-white/15 bg-[#151518] p-2.5 shadow-lg">
                <div className="font-mono text-[8px] text-[#86868B]">THESIS</div>
                <div className="mt-1 text-[10px] font-medium">Category of One</div>
              </div>
              <div className="relative z-10 ml-10 mt-6 w-36 rotate-3 rounded border border-white/20 bg-[#1B1B1F] p-3 shadow-2xl transition-transform duration-500 group-hover:rotate-0">
                <div className="font-serif text-lg italic">Heading</div>
                <div className="mt-1 h-1 w-16 rounded-full bg-white/30" />
                <div className="mt-1 h-1 w-11 rounded-full bg-white/15" />
              </div>
              <div className="absolute bottom-2 left-5 flex items-center gap-1.5 rounded border border-white/15 bg-[#141417] px-2.5 py-1.5">
                <span className="text-[10px] font-semibold">Aa</span>
                <span className="h-2.5 w-2.5 rounded-xs bg-[#F5F4F0]" />
                <span className="h-2.5 w-2.5 rounded-xs bg-[#1A4BFF]" />
              </div>
            </div>

            <div className="flex justify-end">
              <ArrowRight className="h-5 w-5 text-white/80 transition-transform duration-300 group-hover:translate-x-1.5" />
            </div>
          </Link>

          {/* Card 3: Verbal & Physical Craft */}
          <Link
            href="/services#print-physical"
            className="group relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-xl bg-[#4E463F] p-6 text-white shadow-lg transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5"
          >
            <Image
              src="/images/work-zuri.jpg"
              alt="Tactile craft and print"
              fill
              sizes="360px"
              className="object-cover brightness-[0.6] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="relative z-10">
              <h3 className="text-xl font-medium tracking-tight">
                Print & Materiality
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/80">
                Tactile packaging, uncoated monographs, blind deboss & spatial wayfinding.
              </p>
            </div>

            {/* Centered Emblem Seal */}
            <div className="relative z-10 mx-auto my-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/95 text-[#0B0B0C] shadow-2xl transition-transform duration-500 group-hover:scale-110">
              <div className="text-center">
                <span className="block font-serif text-2xl font-medium leading-none">
                  27
                </span>
                <span className="mt-0.5 block font-mono text-[7px] tracking-[0.2em] uppercase">
                  ATELIER
                </span>
              </div>
            </div>

            <div className="relative z-10 flex justify-end">
              <ArrowRight className="h-5 w-5 text-white/85 transition-transform duration-300 group-hover:translate-x-1.5" />
            </div>
          </Link>

          {/* Card 4: Global Digital Launch */}
          <div className="group relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-xl bg-[#11151F] p-6 text-white shadow-lg transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5">
            <Image
              src="/images/hero-botanical.jpg"
              alt="Digital flagship launch"
              fill
              sizes="360px"
              className="object-cover opacity-55 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="relative z-10">
              <h3 className="text-xl font-medium tracking-tight">
                Global Launch
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/80">
                Fast edge-deployed web flagships crafted for international scale.
              </p>
            </div>

            {/* Interactive Domain Selector Stack (Matches Screenshot 7 Card 4) */}
            <div className="relative z-10 my-auto flex flex-col items-end gap-1.5">
              {EXTENSIONS.map((ext) => {
                const isSelected = ext === selectedExt;
                if (isSelected) {
                  return (
                    <div
                      key={ext}
                      className="flex w-full items-center justify-between rounded-full bg-white px-3.5 py-2 text-[#0B0B0C] shadow-xl"
                    >
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium">
                        <Search className="h-3.5 w-3.5 text-[#86868B]" />
                        atelier27
                      </span>
                      <span className="font-mono text-xs font-semibold">
                        {ext}
                      </span>
                    </div>
                  );
                }
                return (
                  <button
                    key={ext}
                    type="button"
                    onClick={() => setSelectedExt(ext)}
                    className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur-md transition-colors hover:bg-white/20 hover:text-white"
                  >
                    {ext}
                  </button>
                );
              })}
            </div>

            <div className="relative z-10 flex justify-end">
              <Link
                href="/contact"
                aria-label="Start your global launch"
                className="inline-flex items-center"
              >
                <ArrowRight className="h-5 w-5 text-white/85 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

