import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { JOURNAL_ARTICLES } from "@/data/studio";

export const metadata: Metadata = {
  title: "Journal — ATELIER 27 | Perspectives & Studio Research",
  description:
    "Essays on contemporary West African typography, strategic identity systems, studio materiality, and editorial digital architecture.",
};

export default function JournalPage() {
  return (
    <div className="bg-[#F5F4F0] pb-28 pt-36 text-[#0B0B0C] md:pt-44">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <p className="font-mono text-[11px] tracking-[0.2em] text-[#6E6E73] uppercase">
          [ 05 / STUDIO JOURNAL ]
        </p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.75rem,6vw,5.25rem)] leading-[1.03] font-normal tracking-[-0.03em]">
          Perspectives, cultural notes &{" "}
          <span className="font-serif italic font-light">studio research.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base text-[#48484C] md:text-lg">
          Essays from Accra examining typography, visual strategy, materiality,
          and digital longevity.
        </p>

        {/* Featured Lead Article */}
        <Link
          href={`/journal/${JOURNAL_ARTICLES[0].slug}`}
          data-cursor="explore"
          className="group mt-14 grid grid-cols-1 overflow-hidden rounded-2xl border border-black/15 bg-white lg:grid-cols-12"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl lg:col-span-7 lg:aspect-auto lg:min-h-[420px]">
            <Image
              src={JOURNAL_ARTICLES[0].coverImage}
              alt={JOURNAL_ARTICLES[0].title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-between p-8 lg:col-span-5 md:p-12">
            <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.16em] text-[#6E6E73] uppercase">
              <span className="text-[#D95D39]">{JOURNAL_ARTICLES[0].category}</span>
              <span>{JOURNAL_ARTICLES[0].readTime}</span>
            </div>

            <div className="my-8 space-y-4">
              <h2 className="text-3xl leading-tight font-normal tracking-tight text-[#0B0B0C]">
                {JOURNAL_ARTICLES[0].title}
              </h2>
              <p className="text-sm leading-relaxed text-[#48484C] md:text-base">
                {JOURNAL_ARTICLES[0].excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-black/10 pt-5 text-xs text-[#6E6E73]">
              <span>
                {JOURNAL_ARTICLES[0].author} • {JOURNAL_ARTICLES[0].date}
              </span>
              <ArrowUpRight className="h-4 w-4 text-[#0B0B0C] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </div>
        </Link>

        {/* Remaining Articles */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {JOURNAL_ARTICLES.slice(1).map((article) => (
            <Link
              key={article.slug}
              href={`/journal/${article.slug}`}
              data-cursor="explore"
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-black/15 bg-white"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.16em] uppercase">
                    <span className="text-[#D95D39]">{article.category}</span>
                    <span className="text-[#86868B]">{article.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-xl leading-snug font-normal tracking-tight text-[#0B0B0C]">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#48484C] md:text-sm">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-black/10 px-6 py-4 text-[11px] text-[#6E6E73] md:px-8">
                <span>{article.date}</span>
                <ArrowUpRight className="h-4 w-4 text-[#0B0B0C] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

