"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CASE_STUDIES } from "@/data/studio";

const TYPING_PROMPTS = [
  "A coastal wellness sanctuary in Accra",
  "A luxury botanical apothecary for global retail",
  "An institutional venture capital flagship",
  "A contemporary architectural monograph",
];

export function MethodologyGradientBand() {
  const [promptIndex, setPromptIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_PROMPTS[promptIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting && charCount < current.length) {
          setCharCount((c) => c + 1);
        } else if (!deleting && charCount === current.length) {
          setTimeout(() => setDeleting(true), 1400);
        } else if (deleting && charCount > 0) {
          setCharCount((c) => c - 1);
        } else {
          setDeleting(false);
          setPromptIndex((i) => (i + 1) % TYPING_PROMPTS.length);
        }
      },
      deleting ? 24 : 48
    );

    return () => clearTimeout(timeout);
  }, [charCount, deleting, promptIndex]);

  const typedText = TYPING_PROMPTS[promptIndex].slice(0, charCount);

  return (
    <section
      className="relative overflow-hidden py-28 text-[#0B0B0C] md:py-36"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #F5F2EC 18%, #D8CFC2 44%, #4B433B 72%, #0B0B0C 100%)",
      }}
    >
      <div className="mx-auto max-w-[1160px] px-6 md:px-10">
        {/* Minimal 3-Dot Atelier Mark & Centered Heading (Screenshot 8) */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-7 flex flex-col items-center gap-1" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-[#0B0B0C]" />
            <div className="flex gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0B0B0C]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#0B0B0C]" />
            </div>
          </div>

          <h2 className="max-w-xl text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.08] font-normal tracking-[-0.03em] text-[#0B0B0C]">
            Building distinctiveness has never been clearer
          </h2>
          <p className="mt-4 text-sm text-[#3A3835]">
            No templates. Every identity starts from strategic thesis.
          </p>
        </div>

        {/* Dual Dark Rounded Feature Cards (Screenshots 8 & 9) */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Left Card: Studio Discovery Prompt */}
          <div className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-[#070708] p-6 text-white shadow-2xl md:p-8">
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#121316] p-5">
              {/* Top mini editorial preview grid */}
              <div className="grid grid-cols-12 gap-3 opacity-85">
                <div className="col-span-5 relative aspect-[4/5] overflow-hidden rounded-md">
                  <Image
                    src="/images/hero-editorial.jpg"
                    alt="Creative director reviewing monograph"
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
                <div className="col-span-7 flex flex-col justify-between rounded-md bg-[#1C1D22] p-3">
                  <span className="inline-flex w-fit items-center rounded bg-[#D95D39] px-2 py-0.5 font-mono text-[8px] font-semibold tracking-wider text-white uppercase">
                    EST. 2021 • ACCRA
                  </span>
                  <div className="space-y-1.5">
                    <div className="font-serif text-xl italic text-white/90">
                      Strategic Thesis
                    </div>
                    <p className="text-[10px] leading-relaxed text-[#86868B]">
                      Discovery workshop, audience clarity & competitive angle.
                    </p>
                  </div>
                </div>
              </div>

              {/* Animated Typewriter Pill Bar ("What's your site called?" equivalent) */}
              <div className="mt-5 flex items-center gap-3 rounded-full border border-white/15 bg-[#0B0B0C]/95 px-4 py-3 shadow-lg">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#1A4BFF]" />
                <div className="min-h-[20px] flex-1 truncate font-sans text-xs text-white/90 md:text-sm">
                  {typedText}
                  <span className="animate-caret ml-0.5 inline-block h-4 w-[2px] bg-[#1A4BFF] align-middle" />
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-2.5 text-center">
              <p className="font-mono text-[10px] tracking-[0.16em] text-[#86868B] uppercase">
                Project Discovery Engine
              </p>
              <p className="mx-auto max-w-sm text-sm leading-relaxed text-white/75">
                Share your vision, commercial objectives, and timeline—and let
                our senior team shape your custom studio blueprint.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-white transition-transform duration-300 group-hover:translate-x-1"
                >
                  Initiate Project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Card: Archival Index Mosaic */}
          <div className="group flex flex-col justify-between overflow-hidden rounded-2xl bg-[#070708] p-6 text-white shadow-2xl md:p-8">
            <div className="grid grid-cols-3 gap-2.5 overflow-hidden rounded-xl border border-white/10 bg-[#111113] p-3">
              {[
                CASE_STUDIES[0].heroImage,
                CASE_STUDIES[1].heroImage,
                CASE_STUDIES[2].heroImage,
                CASE_STUDIES[3].heroImage,
                CASE_STUDIES[4].heroImage,
                "/images/hero-craft.jpg",
              ].map((src, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#1A1A1D]"
                >
                  <Image
                    src={src}
                    alt={`ATELIER 27 studio work ${idx + 1}`}
                    fill
                    sizes="180px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-2.5 text-center">
              <p className="font-mono text-[10px] tracking-[0.16em] text-[#86868B] uppercase">
                Curated Case Archives
              </p>
              <p className="mx-auto max-w-sm text-sm leading-relaxed text-white/75">
                Explore five years of brand systems, luxury packaging, digital
                flagships, and architectural monographs.
              </p>
              <div className="pt-2">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-white transition-transform duration-300 group-hover:translate-x-1"
                >
                  Browse Selected Work <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-12 text-center font-mono text-[11px] tracking-[0.14em] text-white/65 uppercase">
          ATELIER 27 — Accra, Ghana • Strategy, Design & Production
        </p>
      </div>
    </section>
  );
}

