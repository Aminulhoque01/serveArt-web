"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { solutions, type SolutionsItem } from "@/data/solution";

// hover and keyboard-focus (also works on tap for phones) share the same look
const hideOnHover =
  "transition duration-300 group-hover:-translate-y-2 group-hover:opacity-0 group-focus-within:-translate-y-2 group-focus-within:opacity-0";
const showOnHover =
  "translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100";

function SolutionCard({ s, i }: { s: SolutionsItem; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = s.icon;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
    el.style.setProperty("--rx", `${(y / r.height - 0.5) * -8}deg`);
    el.style.setProperty("--ry", `${(x / r.width - 0.5) * 8}deg`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
    >
      <div
        ref={ref}
        tabIndex={0}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ "--c": s.from } as React.CSSProperties}
        className="group relative h-full rounded-2xl bg-navy/10 p-px outline-none transition-transform duration-200 ease-out [transform:perspective(900px)_rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))] focus-visible:ring-2 focus-visible:ring-sun dark:bg-white/10"
      >
        {/* glowing border that follows the mouse */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
          style={{
            background: `radial-gradient(260px circle at var(--mx,50%) var(--my,50%), ${s.from}, transparent 70%)`,
          }}
        />

        <div className="relative h-full overflow-hidden rounded-[15px] bg-white dark:bg-[#0B0F17]">
          {/* spotlight inside the card */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
            style={{
              background: `radial-gradient(320px circle at var(--mx,50%) var(--my,50%), ${s.from}26, transparent 60%)`,
            }}
          />

          {/* icon area */}
          <div
            className="relative grid h-[150px] place-items-center"
            style={{ background: `linear-gradient(180deg, ${s.from}22, transparent)` }}
          >
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-md border border-navy/10 bg-white/70 px-2 py-1 text-[11px] font-semibold backdrop-blur dark:border-white/10 dark:bg-white/5">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.from }} />
              {s.category}
            </span>

            <span
              aria-hidden="true"
              className="absolute h-16 w-16 rounded-full border-2 opacity-0 group-hover:animate-ping group-hover:opacity-100 group-focus-within:animate-ping group-focus-within:opacity-100"
              style={{ borderColor: s.from }}
            />
            <Icon
              size={56}
              strokeWidth={1.3}
              style={{ color: s.from }}
              className="relative transition duration-500 group-hover:-translate-y-1 group-hover:scale-110 group-hover:[filter:drop-shadow(0_0_14px_var(--c))] group-focus-within:-translate-y-1 group-focus-within:scale-110"
            />
          </div>

          {/* text area */}
          <div className="relative p-5 pt-4">
            <h3 className="font-display text-lg font-bold">{s.title}</h3>

            {/* description swaps with the feature list on hover */}
            <div className="mt-2 grid min-h-[88px]">
              <p className={`[grid-area:1/1] text-sm leading-relaxed text-navy/65 dark:text-white/60 ${hideOnHover}`}>
                {s.short}
              </p>
              <ul className={`[grid-area:1/1] space-y-2 ${showOnHover}`}>
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm font-medium">
                    <Check size={14} className="shrink-0" style={{ color: s.from }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/#contact"
              className="mt-5 inline-flex items-center gap-1.5 rounded-lg border border-navy/15 px-3.5 py-2 text-xs font-semibold transition group-hover:border-[var(--c)] group-hover:bg-[var(--c)] group-hover:text-white group-focus-within:border-[var(--c)] group-focus-within:bg-[var(--c)] group-focus-within:text-white dark:border-white/20"
            >
              Get a quote
              <ArrowRight size={14} className="transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CtaCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-brand via-fuchsia-600 to-sun p-7 text-white"
    >
      <span className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/20 blur-2xl" />
      <MessageCircle size={44} strokeWidth={1.3} className="relative" />
      <div className="relative">
        <h3 className="font-display text-2xl font-extrabold leading-snug">Something else in mind?</h3>
        <p className="mt-2 text-sm text-white/85">
          Tell us about your idea. We will tell you how we can build it, and what it costs.
        </p>
        <Link
          href="/#contact"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy transition hover:scale-105"
        >
          Talk to us
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-mist py-24 dark:bg-[#05080F] md:py-32"
    >
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-sun/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1.5 text-xs font-semibold text-brand dark:text-sky-300">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          What we do
        </span>

        <h2 className="mt-5 max-w-2xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
          Solutions built to{" "}
          <span className="bg-gradient-to-r from-brand via-fuchsia-500 to-sun bg-clip-text text-transparent">
            move your business forward.
          </span>
        </h2>
        <p className="mt-4 max-w-xl text-lg text-navy/70 dark:text-white/65">
          We do not just deliver files. We build websites, apps and brands that help your customers find you and trust
          you.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <SolutionCard key={s.id} s={s} i={i} />
          ))}
          <CtaCard />
        </div>
      </div>
    </section>
  );
}