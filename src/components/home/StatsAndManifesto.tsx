"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STUDIO_STATS } from "@/data/studio";

gsap.registerPlugin(ScrollTrigger);

const TICKER_ITEMS = [
  "IDEAS, MADE DISTINCT",
  "STRATEGY BEFORE AESTHETICS",
  "ORIGINALITY OVER IMITATION",
  "CRAFT OVER SHORTCUTS",
  "ACCRA / GLOBAL",
];

export function StatsAndManifesto() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray<HTMLElement>("[data-stat-target]");
      counters.forEach((el) => {
        const target = Number(el.dataset.statTarget || 0);
        const suffix = el.dataset.statSuffix || "";
        const obj = { val: target === 2021 ? 1995 : 0 };

        gsap.to(obj, {
          val: target,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
          onUpdate: () => {
            el.innerText = `${Math.round(obj.val)}${suffix}`;
          },
        });
      });

      gsap.from(".manifesto-reveal", {
        y: 36,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".manifesto-block",
          start: "top 82%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B0B0C] text-white"
    >
      {/* Kinetic Infinite Ticker Marquee */}
      <div className="marquee-wrapper border-y border-white/12 py-5">
        <div className="animate-marquee items-center">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
            <span
              key={idx}
              className="mx-8 font-mono text-[11px] tracking-[0.22em] text-[#86868B] uppercase whitespace-nowrap"
            >
              {item} —
            </span>
          ))}
        </div>
      </div>

      {/* Squarespace-Signature Monumental Stats Band */}
      <div className="mx-auto max-w-[1320px] px-6 py-24 text-center md:px-10 md:py-32">
        <p className="mx-auto max-w-xl text-sm tracking-wide text-white/75 md:text-base">
          Independent creative studio shaping ambitious brands from Accra to the world.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
          {STUDIO_STATS.map((stat) => (
            <div key={stat.label} className="space-y-3">
              <div
                data-stat-target={stat.value}
                data-stat-suffix={stat.suffix}
                className="tabular-nums text-[clamp(3.25rem,6vw,5rem)] leading-none font-normal tracking-[-0.03em] text-white"
              >
                {stat.value}
                {stat.suffix}
              </div>
              <p className="text-xs tracking-[0.04em] text-[#86868B]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Two-Column Editorial Studio Manifesto */}
        <div className="manifesto-block mt-28 grid grid-cols-1 gap-10 border-t border-white/12 pt-16 text-left md:grid-cols-12 md:pt-20">
          <div className="manifesto-reveal md:col-span-4">
            <span className="font-mono text-[11px] tracking-[0.2em] text-[#86868B] uppercase">
              00 / WHO WE ARE
            </span>
            <h2 className="mt-3 text-2xl font-normal tracking-tight text-white">
              Strategy meets tactile craft.
            </h2>
          </div>

          <div className="manifesto-reveal md:col-span-8">
            <p className="text-xl leading-[1.45] font-normal tracking-[-0.01em] text-white/90 md:text-[1.75rem]">
              ATELIER 27 operates at the intersection of branding, design,
              strategy, visual communication, and creative production. We
              believe great design must do more than look attractive—it should
              communicate an idea, forge an unmistakable identity, and help
              ambitious businesses command attention on a global stage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

