"use client";

const PARTNERS = [
  { name: "ZURI", style: "tracking-[0.28em] font-semibold" },
  { name: "kora", style: "font-serif italic text-2xl tracking-tight font-medium" },
  { name: "OSU PRESS", style: "tracking-[0.14em] font-bold" },
  { name: "nyla", style: "font-serif tracking-[0.06em] text-2xl font-normal" },
  { name: "SANKOFA", style: "tracking-[0.22em] font-medium" },
  { name: "VOLTA", style: "tracking-[0.3em] font-semibold" },
  { name: "LABONE LABS", style: "font-mono tracking-[0.12em] text-sm" },
];

export function ClientLogoStrip() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#06140E] py-16 text-white md:py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="font-serif text-lg leading-snug text-white/85 md:text-xl">
          Our studio partners with ambitious founders, luxury houses &amp;
          product-led institutions
        </p>
      </div>

      {/* Horizontal Logo Strip with Edge Fades (Screenshot 2 Pattern) */}
      <div className="relative mx-auto mt-10 max-w-[1280px] overflow-hidden px-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#06140E] to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#06140E] to-transparent md:w-32" />

        <div className="marquee-wrapper overflow-hidden">
          <div className="animate-marquee items-center gap-14 py-2 md:gap-20">
            {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, idx) => (
              <span
                key={idx}
                className={`text-lg text-white/90 select-none md:text-xl ${partner.style}`}
              >
                {partner.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

