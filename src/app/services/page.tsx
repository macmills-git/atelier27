import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ENGAGEMENT_MODELS, SERVICES_DETAILED } from "@/data/studio";
import { ProductionBentoShowcase } from "@/components/services/ProductionBentoShowcase";

export const metadata: Metadata = {
  title: "Services — ATELIER 27 | Five Core Disciplines",
  description:
    "Brand strategy, identity design, digital experiences, creative direction, visual production, and tactile physical craft from ATELIER 27.",
};

const DISCIPLINE_IMAGES: Record<string, string> = {
  "brand-strategy": "/images/brand-strategy.jpg",
  "digital-experiences": "/images/digital-experience.jpg",
  "creative-direction": "/images/creative-direction.jpg",
  "visual-production": "/images/visual-and-content.jpg",
  "print-physical": "/images/print-and-packaging.jpg",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#0B0B0C] text-white">
      {/* Concept-to-Shelf Production & Bento Grid Showcase (Screenshots 11, 12, 14) */}
      <ProductionBentoShowcase />

      {/* Pinned / Split Editorial Service Pillars with Rich Visual Frames */}
      <section className="bg-[#F5F4F0] text-[#0B0B0C]">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 md:px-10">
          {/* Quick Jump Index */}
          <div className="flex flex-wrap gap-2.5 border-b border-black/10 pb-8">
            {SERVICES_DETAILED.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-black/15 px-4 py-2 text-xs font-medium tracking-[0.04em] text-[#0B0B0C]/80 lowercase transition-colors hover:border-black hover:bg-[#0B0B0C] hover:text-white"
              >
                {s.number}. {s.title}
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-[1440px] divide-y divide-black/15 px-6 md:px-10">
          {SERVICES_DETAILED.map((service, idx) => (
            <div
              key={service.id}
              id={service.id}
              className="grid grid-cols-1 gap-10 py-20 md:grid-cols-12 md:py-28"
            >
              {/* Left Sticky Column with Studio Photo Thumbnail */}
              <div className="md:col-span-5">
                <div className="space-y-6 md:sticky md:top-28">
                  <div>
                    <span className="font-mono text-xs tracking-[0.18em] text-[#6E6E73] uppercase">
                      Discipline {service.number}
                    </span>
                    <h2 className="mt-3 text-[clamp(2rem,3.5vw,3rem)] leading-[1.1] font-normal tracking-[-0.025em]">
                      {service.title}
                    </h2>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-[#48484C] md:text-base">
                      {service.lead}
                    </p>
                  </div>

                  <div className="relative aspect-[16/10] w-full max-w-sm overflow-hidden rounded-lg border border-black/10 shadow-md">
                    <Image
                      src={DISCIPLINE_IMAGES[service.id] ?? "/images/brand-strategy.jpg"}
                      alt={service.title}
                      fill
                      unoptimized
                      sizes="380px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Deliverables Matrix */}
              <div className="space-y-8 md:col-span-6 md:col-start-7">
                <div className="divide-y divide-black/12 border-y border-black/12">
                  {service.deliverables.map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center justify-between py-5"
                    >
                      <span className="text-base font-normal text-[#0B0B0C] md:text-lg">
                        {item}
                      </span>
                      <span className="font-mono text-xs text-[#86868B]">
                        0{i + 1}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="rounded-sm bg-[#E8E5DC] p-6">
                  <span className="font-mono text-[10px] tracking-[0.16em] text-[#6E6E73] uppercase">
                    Practical Application
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-[#2C2C2E]">
                    {service.application}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Models */}
      <section className="bg-[#0B0B0C] py-24 text-white md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] tracking-[0.18em] text-[#86868B] uppercase">
              Collaboration Structure
            </span>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3.25rem)] leading-tight font-normal tracking-[-0.03em]">
              Engagement models
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {ENGAGEMENT_MODELS.map((model) => (
              <div
                key={model.index}
                className="flex flex-col justify-between rounded-sm border border-white/12 bg-[#111114] p-8"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <span className="font-mono text-xs tracking-[0.14em] text-[#86868B]">
                    MODEL {model.index}
                  </span>
                  <span className="rounded-full border border-white/20 px-3 py-1 font-mono text-[10px] text-white/80">
                    {model.duration}
                  </span>
                </div>

                <div className="my-8 space-y-3">
                  <h3 className="text-2xl font-normal tracking-tight">
                    {model.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#A1A1A6]">
                    {model.description}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.04em] text-white lowercase hover:underline"
                >
                  request scope <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
