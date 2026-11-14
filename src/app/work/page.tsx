"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES } from "@/data/studio";

const CATEGORIES = [
  "All",
  "Brand Identity",
  "Digital Experiences",
  "Creative Direction",
  "Packaging & Print",
  "Production",
] as const;

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-[#0B0B0C] pb-28 pt-36 text-white md:pt-44">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <p className="font-mono text-[11px] tracking-[0.2em] text-[#86868B] uppercase">
          [ 04 / ARCHIVAL PORTFOLIO ]
        </p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.75rem,6vw,5.25rem)] leading-[1.03] font-normal tracking-[-0.03em]">
          Selected works crafted with{" "}
          <span className="font-serif italic font-light">restraint</span> and{" "}
          <span className="font-serif italic font-light">conviction.</span>
        </h1>

        {/* Sticky Filter Bar with Live Counts */}
        <div className="sticky top-[68px] z-30 mt-12 border-y border-white/15 bg-[#0B0B0C]/90 py-4 backdrop-blur-xl">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const count =
                cat === "All"
                  ? CASE_STUDIES.length
                  : CASE_STUDIES.filter((p) => p.category === cat).length;
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative rounded-full px-4 py-1.5 text-xs lowercase transition-colors ${
                    isActive
                      ? "text-[#0B0B0C]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="work-filter-pill"
                      className="absolute inset-0 rounded-full bg-white"
                      transition={{ type: "spring", stiffness: 360, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10 font-medium">
                    {cat}{" "}
                    <span className="ml-1 font-mono text-[10px] opacity-65">
                      ({count})
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className={
                selectedCategory === "All" && idx === 0 ? "md:col-span-2" : ""
              }
            >
              <Link
                href={`/work/${project.slug}`}
                data-cursor="view"
                className="group block overflow-hidden rounded-2xl border border-white/12 bg-[#121215]"
              >
                <div
                  className={`relative w-full overflow-hidden rounded-2xl ${
                    selectedCategory === "All" && idx === 0
                      ? "aspect-[16/9]"
                      : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 75vw"
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-between gap-4 p-6 md:flex-row md:items-end md:p-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.16em] text-[#86868B] uppercase">
                      <span>{project.index}</span>
                      <span>•</span>
                      <span>{project.sector}</span>
                      <span>•</span>
                      <span>{project.location}</span>
                    </div>
                    <h2 className="text-2xl font-normal tracking-tight text-white md:text-3xl">
                      {project.title}
                    </h2>
                    <p className="max-w-xl text-sm text-[#A1A1A6]">
                      {project.summary}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-white/70">
                      {project.year}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-white group-hover:bg-white group-hover:text-[#0B0B0C]">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

