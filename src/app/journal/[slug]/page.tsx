import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { JOURNAL_ARTICLES } from "@/data/studio";

export function generateStaticParams() {
  return JOURNAL_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default async function JournalArticlePage(
  props: PageProps<"/journal/[slug]">
) {
  const { slug } = await props.params;
  const idx = JOURNAL_ARTICLES.findIndex((a) => a.slug === slug);

  if (idx === -1) {
    notFound();
  }

  const article = JOURNAL_ARTICLES[idx];
  const nextArticle = JOURNAL_ARTICLES[(idx + 1) % JOURNAL_ARTICLES.length];

  return (
    <article className="bg-[#F5F4F0] pb-28 pt-32 text-[#0B0B0C] md:pt-40">
      <div className="mx-auto max-w-[880px] px-6 md:px-10">
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-[#6E6E73] uppercase hover:text-[#0B0B0C]"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All Journal Essays
        </Link>

        <div className="mt-10 flex flex-wrap items-center gap-3 font-mono text-[11px] tracking-[0.16em] uppercase">
          <span className="text-[#D95D39]">{article.category}</span>
          <span className="text-[#86868B]">•</span>
          <span className="text-[#6E6E73]">{article.date}</span>
          <span className="text-[#86868B]">•</span>
          <span className="text-[#6E6E73]">{article.readTime}</span>
        </div>

        <h1 className="mt-4 text-[clamp(2.25rem,5vw,4rem)] leading-[1.06] font-normal tracking-[-0.03em]">
          {article.title}
        </h1>

        <p className="mt-5 font-serif text-xl leading-relaxed italic text-[#48484C] md:text-2xl">
          {article.subtitle}
        </p>

        <div className="mt-6 border-t border-black/15 pt-4 font-mono text-[11px] tracking-[0.14em] text-[#6E6E73] uppercase">
          Written by {article.author}
        </div>
      </div>

      {/* Editorial Cover */}
      <div className="mx-auto mt-12 max-w-[1120px] px-6 md:px-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-black/10">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Body */}
      <div className="mx-auto mt-14 max-w-[740px] space-y-7 px-6 text-base leading-[1.78] text-[#1D1D1F] md:px-10 md:text-[1.125rem]">
        {article.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}

        {/* Next Essay Footer */}
        <div className="mt-16 border-t border-black/15 pt-10">
          <span className="font-mono text-[10px] tracking-[0.16em] text-[#6E6E73] uppercase">
            Next Perspective
          </span>
          <Link
            href={`/journal/${nextArticle.slug}`}
            className="group mt-3 flex items-center justify-between gap-4"
          >
            <span className="text-2xl font-normal tracking-tight text-[#0B0B0C] group-hover:underline">
              {nextArticle.title}
            </span>
            <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}

