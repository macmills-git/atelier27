import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PRINCIPLES, STUDIO_PORTRAITS, TEAM_DISCIPLINES } from "@/data/studio";
import { CollaborativeCursorsHero } from "@/components/about/CollaborativeCursorsHero";

export const metadata: Metadata = {
  title: "About — ATELIER 27 | Craftsmanship. Curiosity. Purpose.",
  description:
    "Founded in Accra, Ghana in 2021, ATELIER 27 is an independent creative studio turning bold commercial ideas into enduring brands.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#0B0B0C] text-white">
      {/* 1. Collaborative Multiplayer Cursors & About Us Lead (Top Hero) */}
      <CollaborativeCursorsHero />

      {/* 2. Page Header & Founding Narrative */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
        <p className="font-mono text-[11px] tracking-[0.2em] text-[#86868B] uppercase">
          [ 02 / ABOUT ATELIER 27 ]
        </p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.75rem,6vw,5.25rem)] leading-[1.03] font-normal tracking-[-0.03em]">
          Craftsmanship. Curiosity.{" "}
          <span className="font-serif italic font-light">Purpose.</span>
        </h1>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-white/15 pt-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xl leading-snug font-normal text-white/90 md:text-2xl">
              Founded in Accra in 2021 to bridge strategic rigor and tactile
              craft across African and global commerce.
            </p>
          </div>
          <div className="space-y-6 text-sm leading-relaxed text-[#A1A1A6] md:col-span-6 md:col-start-7 md:text-base">
            <p>
              <strong className="font-medium text-white">Atelier</strong> is
              drawn from the French tradition of an artisan&apos;s workshop—a space
              for experimentation, material rigor, and unhurried mastery.{" "}
              <strong className="font-medium text-white">27</strong> serves as our
              distinctive geometric studio signature.
            </p>
            <p>
              We formed ATELIER 27 in response to a recurring gap: ambitious
              emerging ventures and cultural institutions forced to choose
              between surface-level visual decoration or disconnected offshore
              consultancies. From Labone and Osu, we unite brand thesis,
              typography, digital engineering, and original production into one
              disciplined practice.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Atmospheric Studio Portrait Gallery Triptych */}
      <section className="mx-auto max-w-[1440px] px-6 pb-20 md:px-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/12 md:col-span-8">
            <Image
              src="/images/hero-editorial.jpg"
              alt="ATELIER 27 creative direction in Accra"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/12 md:col-span-4 md:aspect-auto">
            <Image
              src="/images/Screenshot 2026-11-13 223906.png"
              alt="ATELIER 27 tactile stationery and brand craft"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. Vision & Mission — Split Contrast Layout */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-28">
        <div className="grid grid-cols-1 overflow-hidden rounded-sm border border-white/15 md:grid-cols-2">
          <div className="bg-[#0B0B0C] p-10 md:p-16">
            <span className="font-mono text-[11px] tracking-[0.18em] text-[#86868B] uppercase">
              Studio Vision
            </span>
            <p className="mt-6 text-2xl leading-snug font-normal tracking-tight text-white md:text-3xl">
              To become one of Africa&apos;s most respected independent creative
              studios, recognized for shaping distinctive brands and helping
              ambitious ideas compete globally.
            </p>
          </div>

          <div className="bg-[#F5F4F0] p-10 text-[#0B0B0C] md:p-16">
            <span className="font-mono text-[11px] tracking-[0.18em] text-[#6E6E73] uppercase">
              Studio Mission
            </span>
            <p className="mt-6 text-2xl leading-snug font-normal tracking-tight text-[#0B0B0C] md:text-3xl">
              To transform ideas into powerful creative solutions through
              strategic thinking, thoughtful design, and exceptional execution.
            </p>
          </div>
        </div>
      </section>

      {/* Studio Core Principles — Architectural Matrix on Gallery Bone */}
      <section className="bg-[#F5F4F0] py-24 text-[#0B0B0C] md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex flex-col justify-between gap-6 border-b border-black/15 pb-10 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-[11px] tracking-[0.18em] text-[#6E6E73] uppercase">
                Operating Code
              </span>
              <h2 className="mt-3 text-[clamp(2rem,4vw,3.25rem)] leading-tight font-normal tracking-[-0.03em]">
                Six core principles
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#48484C]">
              Every client dialogue, creative review, and production finish is
              governed by these non-negotiable standards.
            </p>
          </div>

          <div className="grid grid-cols-1 border-b border-black/15 md:grid-cols-2">
            {PRINCIPLES.map((item, idx) => (
              <div
                key={item.number}
                className={`border-t border-black/15 py-10 md:py-12 ${
                  idx % 2 === 0 ? "md:border-r md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="font-mono text-xs tracking-[0.16em] text-[#86868B]">
                  {item.number}
                </div>
                <h3 className="mt-3 text-2xl font-normal tracking-tight text-[#0B0B0C]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-[#48484C] md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multidisciplinary Studio Team */}
      <section className="bg-[#0B0B0C] py-24 text-white md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex flex-col justify-between gap-6 pb-14 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-[11px] tracking-[0.18em] text-[#86868B] uppercase">
                Studio Collective
              </span>
              <h2 className="mt-3 text-[clamp(2rem,4vw,3.25rem)] leading-tight font-normal tracking-[-0.03em]">
                Multidisciplinary by design
              </h2>
            </div>

            <div className="flex items-center">
              {STUDIO_PORTRAITS.map((p, idx) => (
                <div
                  key={p.name}
                  className={`relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-[#0B0B0C] ${
                    idx !== 0 ? "-ml-3" : ""
                  }`}
                >
                  <Image
                    src={p.src}
                    alt={p.name}
                    fill
                    sizes="64px"
                    className={`object-cover ${p.objectPosition}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TEAM_DISCIPLINES.map((member) => (
              <div
                key={member.index}
                className="flex flex-col justify-between rounded-sm border border-white/12 bg-[#111114] p-8 transition-colors hover:border-white/30"
              >
                <span className="font-mono text-xs tracking-[0.16em] text-[#86868B]">
                  {member.index}
                </span>
                <div className="mt-10 space-y-2.5">
                  <h3 className="text-xl font-normal tracking-tight text-white">
                    {member.role}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#A1A1A6]">
                    {member.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/15 pt-14 md:flex-row">
            <h3 className="text-2xl font-normal tracking-tight md:text-3xl">
              Interested in partnering with our Accra studio?
            </h3>
            <Link
              href="/contact"
              className="rounded-[2px] bg-white px-8 py-4 text-xs font-semibold tracking-[0.04em] text-[#0B0B0C] lowercase transition-all hover:bg-[#F5F4F0]"
            >
              start a project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
