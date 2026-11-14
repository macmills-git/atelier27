import Link from "next/link";
import { AtelierMark } from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-[#0B0B0C] px-6 text-center text-white">
      <div className="flex flex-col items-center max-w-md">
        <AtelierMark className="h-10 w-10 text-white/80" />
        <span className="mt-8 font-mono text-xs tracking-[0.2em] text-[#86868B] uppercase">
          [ 404 / ARCHIVE INDEX NOT FOUND ]
        </span>
        <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-tight text-white">
          Beyond the margin.
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-[#A1A1A6]">
          The case study, article, or platform index you requested has either
          transitioned to our private physical vaults or does not exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-xs font-semibold text-[#0B0B0C] lowercase transition-transform duration-200 hover:-translate-y-0.5"
        >
          return to studio home
        </Link>
      </div>
    </div>
  );
}

