"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const PILLAR_ITEMS = [
  {
    num: "(01)",
    title: "Brand strategy & identity systems",
    image: "/images/brand-strategy.jpg",
    caption:
      "We combine strategic positioning with architectural design systems, ensuring every identity communicates effortlessly across print and screen.",
    href: "/services#brand-strategy",
  },
  {
    num: "(02)",
    title: "Interactive digital experiences",
    image: "/images/digital-experience.jpg",
    caption:
      "Custom web flagships engineered with fluid physics, crisp editorial typography, and decisive user conversion paths.",
    href: "/services#digital-experiences",
  },
  {
    num: "(03)",
    title: "Creative direction & campaigns",
    image: "/images/creative-direction.jpg",
    caption:
      "Art direction, shoot styling, and seasonal campaign narratives uniting tactile craft with modern visual urgency.",
    href: "/services#creative-direction",
  },
  {
    num: "(04)",
    title: "Visual & content production",
    image: "/images/visual-and-content.jpg",
    caption:
      "In-house Accra photography, product film loops, and 2D/3D motion crafted with directional chiaroscuro lighting.",
    href: "/services#visual-production",
  },
  {
    num: "(05)",
    title: "Print, packaging & spatial craft",
    image: "/images/print-and-packaging.jpg",
    caption:
      "Uncoated monographs, luxury packaging die-lines, blind debossed stationery, and gallery-grade architectural signage.",
    href: "/services#print-physical",
  },
];

const PRACTICE_SPOTLIGHTS = [
  {
    id: "photography",
    label: "Creative photography",
    image: "/images/portrait-2.jpg",
    heading: "Studio & editorial portraiture",
    copy: "We produce warm, high-contrast editorial visuals and campaign portraits that build instant human conviction.",
    href: "/services#visual-production",
  },
  {
    id: "identity",
    label: "Brand architecture",
    image: "/images/work-kora.jpg",
    heading: "Tactile identity & packaging",
    copy: "From apothecary glass and embossed cotton cartons to typographic lockups built to endure for decades.",
    href: "/services#brand-strategy",
  },
  {
    id: "digital",
    label: "Digital storytelling",
    image: "/images/hero-editorial.jpg",
    heading: "Editorial web flagships",
    copy: "Fast, expressive websites pairing Swiss typographic clarity with bespoke scroll choreography.",
    href: "/services#digital-experiences",
  },
];

export function InteractiveDisciplineMatrix() {
  const [activePillar, setActivePillar] = useState(0);
  const [activePractice, setActivePractice] = useState(0);

  const currentPractice = PRACTICE_SPOTLIGHTS[activePractice];

  return (
    <section className="bg-[#F6F5F0] py-24 text-[#0B0B0C] md:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* BLOCK A — Screenshot 6 Interactive Numbered Discipline List */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="max-w-2xl text-[clamp(2rem,4vw,3.15rem)] leading-[1.08] font-medium tracking-[-0.03em] text-[#0B0B0C]">
            Innovative ideas and bold execution that drive lasting distinction
          </h2>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-[#0B0B0C] px-5 py-2.5 text-xs font-medium text-white lowercase transition-transform duration-200 hover:-translate-y-0.5"
          >
            <span>let&apos;s talk</span>
            <span className="h-2 w-2 rounded-full bg-[#D95D39]" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Rounded-2xl Image + Editorial Copy */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/4.4] w-full max-w-[380px] overflow-hidden rounded-2xl bg-[#E4E1D8] shadow-lg">
              {PILLAR_ITEMS.map((item, idx) => {
                const isActive = idx === activePillar;
                return (
                  <div
                    key={item.num}
                    className={`absolute inset-0 transition-all duration-200 ease-out ${
                      isActive
                        ? "opacity-100 z-10 scale-100 pointer-events-auto"
                        : "opacity-0 z-0 scale-[1.02] pointer-events-none"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-cover"
                    />
                  </div>
                );
              })}
            </div>

            <div className="relative mt-6 min-h-[4rem] max-w-sm">
              {PILLAR_ITEMS.map((item, idx) => (
                <p
                  key={item.num}
                  className={`text-sm leading-relaxed text-[#3A3A3D] transition-opacity duration-200 ${
                    idx === activePillar
                      ? "opacity-100"
                      : "opacity-0 absolute inset-0 pointer-events-none"
                  }`}
                >
                  {item.caption}
                </p>
              ))}
            </div>
          </div>

          {/* Right Interactive Numbered Rows with Solid Black Pill Highlight */}
          <div className="divide-y divide-black/10 lg:col-span-7">
            {PILLAR_ITEMS.map((item, idx) => {
              const isActive = idx === activePillar;
              return (
                <div key={item.num} className="relative py-1">
                  <Link
                    href={item.href}
                    onMouseEnter={() => setActivePillar(idx)}
                    onFocus={() => setActivePillar(idx)}
                    className={`relative z-10 flex w-full items-center justify-between rounded-2xl px-6 py-6 transition-all duration-150 md:px-8 md:py-7 ${
                      isActive
                        ? "bg-[#0B0B0C] text-white shadow-xl"
                        : "bg-transparent text-[#0B0B0C] hover:bg-black/[0.04]"
                    }`}
                  >
                    <span className="font-mono text-xs tracking-wider opacity-75">
                      {item.num}
                    </span>
                    <span className="flex-1 px-6 text-center text-base font-medium tracking-tight md:text-lg">
                      {item.title}
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* BLOCK B — Screenshot 10 Large Underlined Links + Tall Rounded Portrait */}
        <div className="mt-28 grid grid-cols-1 items-center gap-12 border-t border-black/12 pt-20 lg:grid-cols-12 lg:gap-16">
          {/* Tall Rounded-2xl Portrait Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[400px] overflow-hidden rounded-2xl bg-[#E2DFD6] shadow-xl">
              {PRACTICE_SPOTLIGHTS.map((practice, idx) => {
                const isActive = idx === activePractice;
                return (
                  <div
                    key={practice.id}
                    className={`absolute inset-0 transition-all duration-200 ease-out ${
                      isActive
                        ? "opacity-100 z-10 scale-100 pointer-events-auto"
                        : "opacity-0 z-0 scale-[1.02] pointer-events-none"
                    }`}
                  >
                    <Image
                      src={practice.image}
                      alt={practice.label}
                      fill
                      priority
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-cover"
                    />
                  </div>
                );
              })}

              {/* Bottom Dark Pill Badge (Inspired by Screenshot 10 bottom-left pill) */}
              <Link
                href="/work"
                className="absolute bottom-4 left-4 z-20 inline-flex items-center gap-2.5 rounded-full bg-[#0B0B0C]/90 px-4 py-2 text-xs text-white lowercase backdrop-blur-md transition-transform hover:scale-105"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/25 font-mono text-[9px]">
                  27
                </span>
                <span>open archive • 5 flagships</span>
              </Link>
            </div>
          </div>

          {/* Monumental Underlined Interactive Practice Links */}
          <div className="flex flex-col justify-between space-y-12 lg:col-span-7">
            <div className="space-y-6">
              {PRACTICE_SPOTLIGHTS.map((practice, idx) => {
                const isSelected = idx === activePractice;
                return (
                  <div key={practice.id}>
                    <Link
                      href={practice.href}
                      onMouseEnter={() => setActivePractice(idx)}
                      onFocus={() => setActivePractice(idx)}
                      className={`inline-block border-b-2 pb-1 text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.08] font-medium tracking-[-0.03em] transition-colors duration-200 ${
                        isSelected
                          ? "border-[#0B0B0C] text-[#0B0B0C]"
                          : "border-black/15 text-[#86868B] hover:border-[#0B0B0C] hover:text-[#0B0B0C]"
                      }`}
                    >
                      {practice.label}
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="max-w-sm border-t border-black/12 pt-6">
              <p className="text-sm font-semibold text-[#0B0B0C]">
                {currentPractice.heading}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#5E5E63]">
                {currentPractice.copy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

