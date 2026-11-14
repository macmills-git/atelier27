"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Search } from "lucide-react";
import { CLIENT_VERTICALS, STUDIO_PORTRAITS } from "@/data/studio";

export function QuickBriefAndTrust() {
  const router = useRouter();
  const [idea, setIdea] = useState("");
  const [hoveredPortrait, setHoveredPortrait] = useState<number | null>(null);
  const [activeVertical, setActiveVertical] = useState(CLIENT_VERTICALS[0].id);

  const currentVertical =
    CLIENT_VERTICALS.find((v) => v.id === activeVertical) || CLIENT_VERTICALS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = idea.trim();
    if (trimmed) {
      router.push(`/contact?idea=${encodeURIComponent(trimmed)}`);
    } else {
      router.push("/contact");
    }
  };

  return (
    <section className="bg-[#0B0B0C] py-24 text-white md:py-32">
      <div className="mx-auto max-w-[1160px] px-6 text-center md:px-10">
        {/* Domain Search Equivalent -> Quick Studio Brief Bar (Screenshot 10) */}
        <h2 className="mx-auto max-w-2xl text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.08] font-normal tracking-[-0.03em] text-white">
          Find the distinct direction for your brand
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-xl items-center rounded-md border border-white/10 bg-[#232326] px-4 py-2 transition-colors focus-within:border-white/40"
        >
          <Search className="mr-3 h-4 w-4 shrink-0 text-[#86868B]" />
          <input
            type="text"
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="Describe your brand or project idea..."
            aria-label="Describe your brand or project idea"
            className="w-full bg-transparent py-2.5 text-sm text-white placeholder-[#86868B] focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Start inquiry with your idea"
            className="ml-2 flex h-9 w-9 shrink-0 items-center justify-center rounded text-white/80 transition-all hover:bg-white hover:text-[#0B0B0C]"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <p className="mt-4 text-xs text-[#86868B]">
          Already have a complete brief?{" "}
          <Link
            href="/contact"
            className="text-white underline underline-offset-4 hover:text-white/80"
          >
            Jump to full questionnaire
          </Link>
        </p>

        {/* Overlapping Circular Studio Portraits (Screenshot 10 & 11) */}
        <div className="mt-24 flex flex-col items-center">
          <div className="flex items-center justify-center">
            {STUDIO_PORTRAITS.map((person, idx) => (
              <div
                key={person.name}
                onMouseEnter={() => setHoveredPortrait(idx)}
                onMouseLeave={() => setHoveredPortrait(null)}
                className={`relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-[#0B0B0C] transition-all duration-300 sm:h-16 sm:w-16 ${
                  idx !== 0 ? "-ml-3.5 hover:mx-1" : "hover:mr-1"
                } ${hoveredPortrait === idx ? "z-20 scale-115 ring-white" : "z-10"}`}
              >
                <Image
                  src={person.src}
                  alt={`${person.name} — ${person.role}`}
                  fill
                  sizes="80px"
                  className={`object-cover ${person.objectPosition}`}
                />
              </div>
            ))}
          </div>

          <div className="mt-4 h-5 font-mono text-[10px] tracking-[0.16em] text-[#86868B] uppercase">
            {hoveredPortrait !== null
              ? `${STUDIO_PORTRAITS[hoveredPortrait].name} — ${STUDIO_PORTRAITS[hoveredPortrait].role}`
              : "Multidisciplinary Accra Creative Collective"}
          </div>

          <h3 className="mt-5 max-w-lg text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.12] font-normal tracking-[-0.025em] text-white">
            Trusted by ambitious founders, institutions & cultural leaders
          </h3>
        </div>

        {/* Client Ecosystem / Who We Serve Interactive Selector */}
        <div className="mt-16 rounded-2xl border border-white/12 bg-[#111114] p-6 text-left md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-6">
            <span className="font-mono text-[10px] tracking-[0.18em] text-[#86868B] uppercase">
              Who We Serve
            </span>
            <div className="flex flex-wrap gap-2">
              {CLIENT_VERTICALS.map((vertical) => {
                const active = vertical.id === activeVertical;
                return (
                  <button
                    key={vertical.id}
                    type="button"
                    onClick={() => setActiveVertical(vertical.id)}
                    className={`rounded-full px-4 py-1.5 text-xs lowercase transition-all ${
                      active
                        ? "bg-white font-medium text-[#0B0B0C]"
                        : "border border-white/15 text-white/70 hover:border-white/40 hover:text-white"
                    }`}
                  >
                    {vertical.label}
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentVertical.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 grid grid-cols-1 items-center gap-8 md:grid-cols-12"
            >
              <div className="md:col-span-7 space-y-3">
                <h4 className="text-2xl font-normal tracking-tight text-white md:text-3xl">
                  {currentVertical.heading}
                </h4>
                <p className="text-sm leading-relaxed text-[#A1A1A6] md:text-base">
                  {currentVertical.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 md:col-span-5 md:justify-end">
                {currentVertical.deliverables.map((d) => (
                  <span
                    key={d}
                    className="rounded-sm border border-white/15 bg-white/5 px-3.5 py-2 text-[11px] font-medium tracking-[0.06em] text-white/85 uppercase"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

