"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroBackground from "./HeroBackground";
import HeroVisual from "./HeroVisual";
import { services } from "@/data/services";

const line1 = ["Websites,", "apps", "and", "brands"];

const reveal = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: 0,
    transition: { duration: 0.7, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const glow = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (glow.current) {
      glow.current.style.background = `radial-gradient(550px circle at ${e.clientX - rect.left}px ${
        e.clientY - rect.top
      }px, rgba(245,138,46,0.20), rgba(27,117,188,0.10) 45%, transparent 70%)`;
    }
  };

  return (
    <section
      onPointerMove={onMove}
      className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-mist to-white pt-24 dark:from-ink dark:to-[#0A1B2E]"
    >
      {/* background layers */}
      <div className="pointer-events-none absolute -left-24 top-20 h-96 w-96 animate-float rounded-full bg-brand/25 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 animate-float rounded-full bg-sun/25 blur-3xl [animation-delay:-5s]" />
      <HeroBackground />
      <div ref={glow} className="pointer-events-none absolute inset-0" />

      {/* content */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 items-center gap-6 px-5 py-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* LEFT */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/70 px-4 py-1.5 text-sm font-semibold backdrop-blur dark:border-white/15 dark:bg-white/5"
          >
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Creative & software studio
          </motion.span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl xl:text-6xl">
            <span className="block">
              {line1.map((w, i) => (
                <span key={w} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                  <motion.span custom={i} variants={reveal} initial="hidden" animate="show" className="inline-block">
                    {w}
                  </motion.span>
                </span>
              ))}
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span
                custom={line1.length}
                variants={reveal}
                initial="hidden"
                animate="show"
                className="inline-block bg-gradient-to-r from-brand via-fuchsia-500 to-sun bg-clip-text text-transparent"
              >
                that grow your business.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-navy/70 dark:text-white/70"
          >
            Serve Art designs and builds websites, mobile apps, brand identities and marketing campaigns, all under one
            roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-sun px-7 py-3.5 font-semibold text-white shadow-lg shadow-sun/30 transition hover:bg-sun-dark"
            >
              Start a project
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#services"
              className="rounded-full border border-navy/20 px-7 py-3.5 font-semibold transition hover:border-brand hover:text-brand dark:border-white/25"
            >
              Our services
            </Link>
          </motion.div>
        </div>

        {/* RIGHT */}
        <HeroVisual />
      </div>

      {/* services marquee */}
      <div className="relative z-10 overflow-hidden border-y border-navy/10 bg-white/50 py-4 backdrop-blur dark:border-white/10 dark:bg-white/5">
        <div className="flex w-max animate-marquee gap-4">
          {[...services, ...services].map((s, i) => (
            <span
              key={s.id + i}
              className="flex items-center gap-2 whitespace-nowrap rounded-full border border-navy/10 px-5 py-2 text-sm font-semibold dark:border-white/15"
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.from }} />
              {s.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}