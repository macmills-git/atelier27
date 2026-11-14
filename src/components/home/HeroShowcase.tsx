"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { HERO_SLIDES, type HeroSlide } from "@/data/studio";

function ShowcaseCard({
  slide,
  isCenter,
}: {
  slide: HeroSlide;
  isCenter: boolean;
}) {
  const isPortrait =
    slide.previewImage.includes("showcase-1") ||
    slide.previewImage.includes("showcase-2");

  const content = (
    <div className="group relative h-full w-full overflow-hidden rounded-2xl border border-white/20 bg-[#121417] shadow-2xl transition-transform duration-300">
      <Image
        src={slide.previewImage}
        alt={slide.title}
        fill
        sizes="(max-width: 768px) 75vw, 560px"
        className={`object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] ${
          isPortrait ? "object-top" : "object-center"
        }`}
        priority={isCenter}
      />

      {/* Subtle bottom vignette & metadata pill for active slide */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 sm:p-5">
        <div className="flex items-center justify-between text-white">
          <div className="space-y-0.5">
            <p className="font-mono text-[9px] tracking-[0.18em] text-white/70 uppercase sm:text-[10px]">
              {slide.previewEyebrow}
            </p>
            <p className="text-sm font-medium tracking-tight sm:text-base">
              {slide.title}
            </p>
          </div>
          <span className="hidden rounded-full border border-white/25 bg-white/10 px-3 py-1 font-mono text-[10px] tracking-wider uppercase backdrop-blur-md transition-colors group-hover:bg-white group-hover:text-[#0B0B0C] sm:inline-block">
            {slide.previewCta} →
          </span>
        </div>
      </div>
    </div>
  );

  if (isCenter) {
    return (
      <Link
        href={`/work/${slide.slug}`}
        aria-label={`View case study: ${slide.title}`}
        className="block h-full w-full"
      >
        {content}
      </Link>
    );
  }

  return content;
}

export function HeroShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [resetCount, setResetCount] = useState(0);
  const total = HERO_SLIDES.length;

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Keep all 4 background videos continuously playing for zero-lag silky crossfades
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (!video) return;
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    });
  }, []);

  // Synchronized 3-second cycle for video background and showcase card
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(timer);
  }, [paused, resetCount, total]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
    setResetCount((c) => c + 1);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
    setResetCount((c) => c + 1);
  };

  const handleSelect = (idx: number) => {
    setActiveIndex(idx);
    setResetCount((c) => c + 1);
  };

  return (
    <section
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-[#0B0B0C] pt-20 text-white sm:pt-24"
    >
      {/* 1. Synchronized Animated Video Backgrounds (Persistent Layers for Seamless Cross-Fade) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === activeIndex;
          return (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 1.05,
              }}
              transition={{
                opacity: { duration: 1.1, ease: [0.25, 0.1, 0.25, 1] },
                scale: { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] },
              }}
              className="absolute inset-0 h-full w-full"
              style={{ zIndex: isActive ? 2 : 1 }}
            >
              {slide.bgVideo ? (
                <video
                  ref={(el) => {
                    videoRefs.current[idx] = el;
                  }}
                  src={slide.bgVideo}
                  poster={slide.bgImage}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="h-full w-full object-cover object-center"
                />
              ) : (
                <Image
                  src={slide.bgImage}
                  alt={slide.title}
                  fill
                  priority={idx === 0}
                  sizes="100vw"
                  className="object-cover object-center opacity-75"
                />
              )}
            </motion.div>
          );
        })}

        {/* Ambient cinematic gradient overlays for high-contrast legible typography */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-[#0B0B0C]" />
        <div className="absolute inset-0 z-10 bg-black/25" />
      </div>

      {/* 2. Centered Hero Statement with generous breathing space */}
      <div className="relative z-20 mx-auto mt-6 flex max-w-4xl flex-col items-center px-6 text-center sm:mt-8 md:mt-10">
        <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-white/75 uppercase sm:mb-4 sm:text-[11px]">
          [ Accra, Ghana — Est. 2021 ]
        </p>

        <h1 className="text-balance text-[clamp(2.5rem,5.5vw,4.75rem)] leading-[1.05] font-normal tracking-[-0.03em] text-white">
          We give your brand{" "}
          <span className="font-serif italic font-light">style</span> and{" "}
          <span className="font-serif italic font-light">distinction.</span>
        </h1>

        <div className="mt-5 sm:mt-6">
          <Link
            href="/contact"
            className="inline-block rounded-[2px] bg-white px-7 py-3 text-xs font-semibold tracking-[0.04em] text-[#0B0B0C] lowercase shadow-xl transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#F5F4F0]"
          >
            start a project
          </Link>
        </div>
      </div>

      {/* 3. Smooth Animated Sliding Showcase (Moved down another 10px -> pt-[25px]) */}
      <div className="relative z-20 mx-auto mt-11 w-full max-w-[1560px] px-4 pt-[25px] sm:mt-14 md:mt-16">
        {/* Animated 3D/Layered Sliding Track */}
        <div className="relative mx-auto flex h-[225px] w-full items-end justify-center sm:h-[270px] md:h-[305px] lg:h-[325px]">
          {HERO_SLIDES.map((slide, idx) => {
            // Calculate relative offset from activeIndex (-1: left, 0: center, 1: right, 2: hidden)
            let diff = (idx - activeIndex) % total;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const isCenter = diff === 0;
            const isRight = diff === 1;
            const isLeft = diff === -1;
            const isHidden = Math.abs(diff) >= 2;

            return (
              <motion.div
                key={slide.id}
                initial={false}
                animate={{
                  x: isCenter
                    ? "0%"
                    : isRight
                      ? "calc(100% + 10px)"
                      : isLeft
                        ? "calc(-100% - 10px)"
                        : diff > 0
                          ? "calc(200% + 20px)"
                          : "calc(-200% - 20px)",
                  y: isCenter ? 0 : 6,
                  scale: isCenter ? 1 : 0.98,
                  rotate: 0,
                  opacity: isCenter ? 1 : isHidden ? 0 : 0.65,
                  zIndex: isCenter ? 30 : isHidden ? 5 : 20,
                  filter: isCenter
                    ? "blur(0px) brightness(1)"
                    : isHidden
                      ? "blur(4px) brightness(0.5)"
                      : "blur(0px) brightness(0.78)",
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`absolute bottom-0 h-full w-[75vw] max-w-[560px] origin-bottom ${
                  isHidden ? "pointer-events-none" : "pointer-events-auto"
                }`}
                onClick={() => {
                  if (isRight) handleNext();
                  if (isLeft) handlePrev();
                }}
              >
                <div className="h-full w-full">
                  <ShowcaseCard slide={slide} isCenter={isCenter} />
                </div>

                {/* Floating "next" pill attached to the center card */}
                {isCenter && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      handleNext();
                    }}
                    aria-label="Next studio showcase"
                    className="absolute -right-3 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-[11px] font-semibold tracking-wide text-[#0B0B0C] lowercase shadow-2xl transition-transform duration-200 hover:scale-110 active:scale-95 md:-right-6 md:h-13 md:w-13"
                  >
                    next
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Carousel pagination pill indicators */}
        <div className="flex items-center justify-center gap-2 bg-[#0B0B0C] py-3 sm:py-4">
          {HERO_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => handleSelect(idx)}
              aria-label={`Select hero slide ${s.title}`}
              className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "w-7 bg-white"
                  : "w-1.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
