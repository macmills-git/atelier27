import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CASE_STUDIES } from "@/data/studio";

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const currentIndex = CASE_STUDIES.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = CASE_STUDIES[currentIndex];
  const nextProject = CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length];

  return (
    <article className="bg-[#0B0B0C] text-white">
      {/* 1. Hero Header */}
      <header className="mx-auto max-w-[1440px] px-6 pb-12 pt-32 md:px-10 md:pt-40">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-[#86868B] uppercase transition-colors hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Selected Work
        </Link>

        <div className="mt-10 flex flex-wrap items-center gap-4 font-mono text-[11px] tracking-[0.16em] text-[#86868B] uppercase">
          <span>{project.client}</span>
          <span>•</span>
          <span>{project.sector}</span>
          <span>•</span>
          <span>{project.location}</span>
          <span>•</span>
          <span>{project.year}</span>
        </div>

        <h1 className="mt-4 text-[clamp(3rem,7vw,6.25rem)] leading-[0.98] font-normal tracking-[-0.035em]">
          {project.title}
        </h1>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.deliverables.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/15 px-3.5 py-1 font-mono text-[10px] tracking-[0.12em] text-white/80 uppercase"
            >
              {item}
            </span>
          ))}
        </div>
      </header>

      {/* 2. Project Hero Media */}
      <div className="mx-auto max-w-[1520px] px-6 md:px-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/12">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* 3. Challenge & Strategic Angle (Editorial Light Canvas) */}
      <section className="mt-20 bg-[#F5F4F0] py-24 text-[#0B0B0C] md:py-32">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <span className="font-mono text-[11px] tracking-[0.18em] text-[#6E6E73] uppercase">
                01 / The Challenge
              </span>
              <h2 className="mt-3 text-2xl font-normal tracking-tight md:text-3xl">
                Commercial tension & context
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#3A3A3D]">
                {project.challenge}
              </p>
            </div>

            <div>
              <span className="font-mono text-[11px] tracking-[0.18em] text-[#6E6E73] uppercase">
                02 / Strategic Thesis
              </span>
              <h2 className="mt-3 text-2xl font-normal tracking-tight md:text-3xl">
                Form, meaning & creative direction
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#3A3A3D]">
                {project.thesis}
              </p>
            </div>
          </div>

          {/* 4. Visual Systems Gallery (Typography Specimen + Palette Tokens) */}
          <div className="mt-20 grid grid-cols-1 gap-8 border-t border-black/15 pt-16 lg:grid-cols-12">
            {/* Typographic Specimen Card */}
            <div className="flex flex-col justify-between rounded-sm border border-black/15 bg-white p-8 lg:col-span-7 md:p-10">
              <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.16em] text-[#86868B] uppercase">
                <span>Typography Architecture</span>
                <span>
                  {project.typeSpecimen.displayFont} /{" "}
                  {project.typeSpecimen.accentFont}
                </span>
              </div>
              <p className="my-10 font-serif text-3xl leading-snug italic text-[#0B0B0C] md:text-5xl">
                &ldquo;{project.typeSpecimen.sampleLine}&rdquo;
              </p>
              <div className="font-mono text-[11px] tracking-[0.14em] text-[#6E6E73] uppercase">
                Aa Bb Cc Dd Ee Ff Gg 0123456789
              </div>
            </div>

            {/* Color System Swatches */}
            <div className="grid grid-cols-2 gap-4 lg:col-span-5">
              {project.palette.map((swatch) => (
                <div
                  key={swatch.hex}
                  className="flex flex-col justify-between rounded-sm border border-black/15 p-5"
                  style={{ backgroundColor: swatch.hex }}
                >
                  <span
                    className="font-mono text-[10px] tracking-[0.14em] uppercase"
                    style={{
                      color:
                        swatch.hex === "#0B0B0C" ||
                        swatch.hex === "#1B1A19" ||
                        swatch.hex === "#1A4BFF" ||
                        swatch.hex === "#5A3317"
                          ? "#FFFFFF"
                          : "#0B0B0C",
                    }}
                  >
                    {swatch.hex}
                  </span>
                  <span
                    className="mt-10 text-xs font-medium"
                    style={{
                      color:
                        swatch.hex === "#0B0B0C" ||
                        swatch.hex === "#1B1A19" ||
                        swatch.hex === "#1A4BFF" ||
                        swatch.hex === "#5A3317"
                          ? "#FFFFFF"
                          : "#0B0B0C",
                    }}
                  >
                    {swatch.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 4B. Gallery Spreads */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {project.galleryImages.map((item, idx) => (
              <figure key={idx} className="space-y-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/10">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="font-mono text-[11px] text-[#6E6E73]">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* 5. Impact & Outcomes */}
          <div className="mt-24 border-t border-black/15 pt-16">
            <span className="font-mono text-[11px] tracking-[0.18em] text-[#6E6E73] uppercase">
              03 / Commercial Impact & Outcome
            </span>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <div className="tabular-nums text-[clamp(2.5rem,5vw,4rem)] leading-none font-normal tracking-tight text-[#0B0B0C]">
                    {m.value}
                  </div>
                  <p className="mt-2 text-xs tracking-wide text-[#48484C]">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Next Project Teaser */}
      <Link
        href={`/work/${nextProject.slug}`}
        data-cursor="next"
        className="group block bg-[#0B0B0C] py-24 text-white transition-colors hover:bg-[#121215]"
      >
        <div className="mx-auto flex max-w-[1320px] flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center md:px-10">
          <div>
            <span className="font-mono text-[11px] tracking-[0.18em] text-[#86868B] uppercase">
              Next Case Study — {nextProject.index}
            </span>
            <h2 className="mt-3 text-[clamp(2.25rem,5vw,4.5rem)] leading-none font-normal tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-2">
              {nextProject.title}
            </h2>
          </div>

          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/25 transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-[#0B0B0C]">
            <ArrowRight className="h-5 w-5" />
          </span>
        </div>
      </Link>
    </article>
  );
}

