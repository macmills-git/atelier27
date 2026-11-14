"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DISCIPLINE_SLIDES } from "@/data/studio";

export function DisciplinesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = DISCIPLINE_SLIDES[activeIndex];
  const prevSlide =
    DISCIPLINE_SLIDES[
    (activeIndex - 1 + DISCIPLINE_SLIDES.length) % DISCIPLINE_SLIDES.length
    ];
  const nextSlide =
    DISCIPLINE_SLIDES[(activeIndex + 1) % DISCIPLINE_SLIDES.length];

  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % DISCIPLINE_SLIDES.length);
  const handlePrev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + DISCIPLINE_SLIDES.length) % DISCIPLINE_SLIDES.length
    );

  return (
    <section className="overflow-hidden bg-white py-24 text-[#0B0B0C] md:py-32">
      {/* Header & Pill Selector Bar (Squarespace "Grow your business" pattern) */}
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.08] font-normal tracking-[-0.03em] text-[#0B0B0C]">
          Five disciplines, one studio
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-[#6E6E73] md:text-base">
          You deserve a creative partner built to execute every touchpoint with rigor.
        </p>

        {/* Pill Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-1.5">
          {DISCIPLINE_SLIDES.map((slide, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`relative rounded-full border px-4 py-1.5 text-xs font-medium lowercase transition-all duration-150 ${isActive
                    ? "border-[#0B0B0C] text-[#0B0B0C]"
                    : "border-transparent text-[#6E6E73] hover:text-[#0B0B0C]"
                  }`}
              >
                <span className="relative z-10">{slide.tab}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Horizontal Showcase Stage with Peeking Side Slides */}
      <div className="relative mx-auto mt-12 max-w-[1680px] px-4 md:mt-16">
        <div className="flex items-stretch justify-center gap-6">
          {/* Left Peeking Card */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label={`Previous: ${prevSlide.title}`}
            className="relative hidden w-[16%] shrink-0 overflow-hidden rounded-2xl bg-[#141416] text-left opacity-80 transition-opacity hover:opacity-100 xl:block"
          >
            <Image
              src={prevSlide.bgImage}
              alt={prevSlide.title}
              fill
              sizes="260px"
              className="object-cover brightness-75"
            />
            <div className="relative z-10 p-6 text-white">
              <p className="text-lg font-medium">{prevSlide.title}</p>
            </div>
          </button>

          {/* Main Active Showcase Stage */}
          <div className="relative min-h-[540px] w-full max-w-[1080px] overflow-hidden rounded-2xl bg-[#1A1A1C] text-white shadow-2xl md:min-h-[600px]">
            {/* Background Photography */}
            <motion.div
              key={activeSlide.id + "-bg"}
              initial={{ opacity: 0.5, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={activeSlide.bgImage}
                alt={activeSlide.title}
                fill
                sizes="(max-width: 1080px) 100vw, 1080px"
                className="object-cover brightness-[0.68]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/45" />
            </motion.div>

            {/* Top-Left Overlaid Title & Description */}
            <div className="relative z-20 max-w-md p-6 md:p-9">
              <span className="font-mono text-[10px] tracking-[0.18em] text-white/75 uppercase">
                {activeSlide.number} / 05
              </span>
              <h3 className="mt-1.5 text-2xl font-normal tracking-tight text-white md:text-3xl">
                {activeSlide.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/80 md:text-sm">
                {activeSlide.description}
              </p>
            </div>

            {/* Centered Embedded Browser Preview + Floating Micro-UI Cards */}
            <div className="relative z-20 mx-auto mt-2 flex max-w-[760px] items-center justify-center px-6 pb-16 pt-2 md:pb-20">
              <motion.div
                key={activeSlide.id + "-card"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[540px] rounded-lg bg-[#5A4B43]/95 p-5 text-white shadow-2xl backdrop-blur-md md:p-7"
              >
                {/* Browser Nav */}
                <div className="flex items-center justify-between border-b border-white/15 pb-3 text-[9px] tracking-[0.14em] uppercase">
                  <span className="font-semibold">{activeSlide.mockupSite}</span>
                  <div className="hidden gap-4 opacity-75 sm:flex">
                    {activeSlide.mockupNav.map((n) => (
                      <span key={n}>{n}</span>
                    ))}
                  </div>
                  <Link
                    href={`/services#${activeSlide.id}`}
                    className="rounded-full bg-white px-3 py-1 text-[8px] font-semibold text-[#0B0B0C] lowercase"
                  >
                    explore scope
                  </Link>
                </div>

                {/* Mockup Body */}
                <div className="mt-5 grid grid-cols-12 items-center gap-5">
                  <div className="relative col-span-5 aspect-[3/4] overflow-hidden rounded-2xl">
                    <Image
                      src={activeSlide.mockupImage}
                      alt={activeSlide.mockupSite}
                      fill
                      sizes="220px"
                      className="object-cover"
                    />
                  </div>
                  <div className="col-span-7 space-y-3">
                    <h4 className="font-serif text-2xl font-normal md:text-3xl">
                      {activeSlide.mockupHeading}
                    </h4>
                    <div className="divide-y divide-white/15 border-y border-white/15">
                      {activeSlide.mockupRows.map((row) => (
                        <div
                          key={row}
                          className="flex items-center justify-between py-2 font-mono text-[9px] tracking-[0.12em] text-white/80"
                        >
                          <span>{row}</span>
                          <span>+</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating White Card Left (Matching Screenshot 6 Invoice/Payment Card) */}
                <motion.div
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.55 }}
                  className="mt-4 rounded-md bg-white p-4 text-[#0B0B0C] shadow-xl sm:absolute sm:-left-16 sm:top-16 sm:mt-0 sm:w-52"
                >
                  <p className="font-mono text-[9px] tracking-[0.12em] text-[#86868B] uppercase">
                    {activeSlide.floatingLeft.label}
                  </p>
                  <p className="mt-1 text-2xl font-semibold tracking-tight tabular-nums">
                    {activeSlide.floatingLeft.value}
                  </p>
                  <p className="mt-0.5 text-[10px] text-[#6E6E73]">
                    {activeSlide.floatingLeft.meta}
                  </p>
                  <Link
                    href={`/services#${activeSlide.id}`}
                    className="mt-3 block w-full rounded-sm bg-[#3B2A22] py-2 text-center text-[10px] font-semibold tracking-[0.04em] text-white lowercase transition-colors hover:bg-[#0B0B0C]"
                  >
                    {activeSlide.floatingLeft.action}
                  </Link>
                </motion.div>

                {/* Floating White Card Right (Matching Screenshot 6 Subscription Card) */}
                <motion.div
                  initial={{ x: 16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.22, duration: 0.55 }}
                  className="mt-3 rounded-md bg-white p-3.5 text-[#0B0B0C] shadow-xl sm:absolute sm:-bottom-6 sm:-right-14 sm:mt-0 sm:w-56"
                >
                  <p className="mb-2 text-[10px] font-semibold text-[#0B0B0C]">
                    {activeSlide.floatingRight.title}
                  </p>
                  <div className="space-y-2">
                    {activeSlide.floatingRight.items.map((item, i) => (
                      <div
                        key={item.name}
                        className={`flex items-center justify-between rounded border px-2.5 py-2 text-[10px] ${i === 1
                            ? "border-[#0B0B0C] bg-[#F5F4F0] font-semibold"
                            : "border-black/10"
                          }`}
                      >
                        <span>{item.name}</span>
                        <span className="font-mono text-[9px] text-[#86868B]">
                          {item.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom-Left Scope Tag & Bottom-Right Carousel Arrows */}
            <div className="absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-6 py-4 md:px-9">
              <span className="font-mono text-[10px] tracking-[0.14em] text-white/75 uppercase">
                Startups • Hospitality • Enterprises
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous discipline"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#0B0B0C]"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next discipline"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#0B0B0C]"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Peeking Card */}
          <button
            type="button"
            onClick={handleNext}
            aria-label={`Next: ${nextSlide.title}`}
            className="relative hidden w-[16%] shrink-0 overflow-hidden rounded-2xl bg-[#141416] text-left opacity-80 transition-opacity hover:opacity-100 xl:block"
          >
            <Image
              src={nextSlide.bgImage}
              alt={nextSlide.title}
              fill
              sizes="260px"
              className="object-cover brightness-75"
            />
            <div className="relative z-10 p-6 text-white">
              <p className="text-lg font-medium">{nextSlide.title}</p>
            </div>
          </button>
        </div>

        {/* Centered Pagination Dots */}
        <div className="mt-7 flex items-center justify-center gap-2">
          {DISCIPLINE_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Select discipline ${s.tab}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex
                  ? "w-6 bg-[#0B0B0C]"
                  : "w-1.5 bg-black/20 hover:bg-black/45"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

