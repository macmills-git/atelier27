"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface Particle {
  x: number;
  y: number;
  z: number;
  size: number;
  phase: number;
}

export function ParticleSphereCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const COUNT = 220;
    const particles: Particle[] = [];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < COUNT; i++) {
      const y = 1 - (i / (COUNT - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      const jitter = 0.9 + Math.random() * 0.2;

      particles.push({
        x: Math.cos(theta) * radiusAtY * jitter,
        y: y * jitter,
        z: Math.sin(theta) * radiusAtY * jitter,
        size: 1.4 + Math.random() * 1.5,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let width = 0;
    let height = 0;
    let dpr = 1;
    let pointerX = 0;
    let pointerY = 0;
    let targetPointerX = 0;
    let targetPointerY = 0;
    let rotY = 0;
    const rotX = 0.14;
    let rafId = 0;
    let isVisible = false;
    let cachedRect = section.getBoundingClientRect();

    const resize = () => {
      cachedRect = section.getBoundingClientRect();
      width = cachedRect.width || window.innerWidth;
      height = cachedRect.height || 620;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) return;
      const nx = ((e.clientX - cachedRect.left) / (cachedRect.width || 1) - 0.5) * 2;
      const ny = ((e.clientY - cachedRect.top) / (cachedRect.height || 1) - 0.5) * 2;
      targetPointerX = nx * 0.3;
      targetPointerY = ny * 0.22;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", resize, { passive: true });
    section.addEventListener("mousemove", handleMouseMove, { passive: true });

    let time = 0;
    const render = () => {
      if (!isVisible) {
        rafId = 0;
        return;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const paused = document.documentElement.dataset.motion === "paused";
      if (!prefersReducedMotion && !paused) {
        time += 0.018;
        rotY += 0.0025;
      }

      pointerX += (targetPointerX - pointerX) * 0.08;
      pointerY += (targetPointerY - pointerY) * 0.08;

      const angleY = rotY + pointerX;
      const angleX = rotX + pointerY;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const sphereRadius = Math.min(width * 0.4, height * 0.44, 290);
      const cx = width / 2;
      const cy = height / 2;

      ctx.fillStyle = "#ffffff";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        const perspective = 2.6 / (2.6 - z2);
        const px = cx + x1 * sphereRadius * perspective;
        const py = cy + y2 * sphereRadius * perspective;

        const depthAlpha = Math.max(0.14, Math.min(0.92, (z2 + 1.15) * 0.44));
        const twinkle =
          prefersReducedMotion || paused
            ? 1
            : 0.72 + 0.28 * Math.sin(time * 2 + p.phase);

        const s = p.size * perspective * 0.78;
        ctx.globalAlpha = Math.max(0.08, Math.min(1, depthAlpha * twinkle));
        ctx.fillRect(px - s * 0.5, py - s * 0.5, s, s);
      }

      if (!prefersReducedMotion) {
        rafId = requestAnimationFrame(render);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !rafId) {
          render();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", resize);
      section.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-[#0B0B0C] py-28 text-white md:min-h-[680px]"
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-balance text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.08] font-normal tracking-[-0.03em] text-white">
          Start shaping your brand today
        </h2>
        <p className="mt-4 text-xs tracking-wide text-white/75 md:text-sm">
          Accra, Ghana — Operating globally across Brand, Digital & Physical Craft.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded-[2px] bg-white px-8 py-4 text-xs font-semibold tracking-[0.04em] text-[#0B0B0C] lowercase shadow-2xl transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#F5F4F0]"
          >
            start a project
          </Link>
        </div>
      </div>
    </section>
  );
}
