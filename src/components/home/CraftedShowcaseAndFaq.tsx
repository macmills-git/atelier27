"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Plus } from "lucide-react";
import { CASE_STUDIES, FAQS } from "@/data/studio";

export function CraftedShowcaseAndFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="bg-[#0B0B0C] py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Centered Serif + Sans Lockup */}
        <div className="flex flex-col items-center py-10 text-center md:py-16">
          <span className="font-serif text-3xl font-light tracking-tight text-white/95 sm:text-4xl">
            Crafted by
          </span>
          <span className="-mt-1 text-3xl font-normal tracking-tight text-white sm:text-4xl">
            ATELIER 27
          </span>
        </div>

        {/* Selected Works Asymmetric Gallery (Section 4 of ATELIER 27 Spec) */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Featured Full-Width Case Study Banner */}
          <Link
            href={`/work/${CASE_STUDIES[0].slug}`}
            data-cursor="view"
            className="group relative overflow-hidden rounded-2xl border border-white/12 bg-[#121215] md:col-span-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl lg:col-span-8 lg:aspect-[16/9]">
                <Image
                  src={CASE_STUDIES[0].heroImage}
                  alt={CASE_STUDIES[0].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-between p-8 lg:col-span-4 lg:p-10">
                <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.16em] text-[#86868B] uppercase">
                  <span>{CASE_STUDIES[0].index}</span>
                  <span>{CASE_STUDIES[0].year}</span>
                </div>

                <div className="my-8 space-y-4">
                  <p className="font-mono text-[11px] tracking-[0.16em] text-[#D95D39] uppercase">
                    {CASE_STUDIES[0].sector}
                  </p>
                  <h3 className="text-3xl font-normal tracking-tight text-white md:text-4xl">
                    {CASE_STUDIES[0].title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#A1A1A6]">
                    {CASE_STUDIES[0].summary}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/12 pt-5">
                  <span className="text-xs text-white/75">
                    {CASE_STUDIES[0].deliverables.slice(0, 3).join(" • ")}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          </Link>

          {/* Two Staggered Editorial Case Study Cards */}
          {CASE_STUDIES.slice(1, 5).map((project, idx) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              data-cursor="view"
              className={`group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/12 bg-[#121215] md:col-span-6 ${
                idx % 2 === 1 ? "md:mt-10" : ""
              }`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.16em] text-[#86868B] uppercase">
                  <span>
                    {project.index} — {project.sector}
                  </span>
                  <span>{project.year}</span>
                </div>

                <div className="mt-4 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-normal tracking-tight text-white">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#86868B]">
                      {project.deliverables.join(", ")}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#0B0B0C]">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/work"
            className="rounded-[2px] border border-white/25 px-7 py-3.5 text-xs font-semibold tracking-[0.04em] text-white lowercase transition-colors hover:border-white hover:bg-white hover:text-[#0B0B0C]"
          >
            view all case studies
          </Link>
        </div>

        {/* Minimalist "+" Accordion FAQ Section (Matching Screenshot 12 & 13) */}
        <div className="mt-28 border-b border-white/15 md:mt-36">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={faq.question} className="border-t border-white/15">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between py-7 text-left transition-colors hover:text-white/80 md:py-9"
                >
                  <span className="text-xl font-normal tracking-tight text-white sm:text-2xl md:text-[1.75rem]">
                    {faq.question}
                  </span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-white/70 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "rotate-45 text-white" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-3xl pb-8 text-sm leading-relaxed text-[#A1A1A6] md:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

