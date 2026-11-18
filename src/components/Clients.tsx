"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { clients, stats, type Client } from "@/data/clients";

/* ---------- one logo (image if given, otherwise a styled wordmark) ---------- */

const wordmarks = [
  "font-display text-[15px] font-extrabold tracking-tight",
  "font-serif text-[16px] font-bold italic",
  "font-display text-[11px] font-bold uppercase tracking-[0.18em]",
  "font-sans text-[15px] font-semibold lowercase",
];

function Mark({ c, i }: { c: Client; i: number }) {
  const shape = i % 3;
  return (
    <span
      className={`grid h-8 w-8 shrink-0 place-items-center text-sm font-extrabold text-white ${
        shape === 0 ? "rounded-full" : shape === 1 ? "rounded-lg" : "rotate-45 rounded-md"
      }`}
      style={{ background: c.color }}
    >
      <span className={shape === 2 ? "-rotate-45" : ""}>{c.name[0]}</span>
    </span>
  );
}

function Card({ c, i }: { c: Client; i: number }) {
  return (
    <div
      style={{ "--c": c.color } as React.CSSProperties}
      className="rounded-2xl border border-navy/10 bg-navy/[0.04] p-1.5 transition duration-300 hover:-translate-y-1.5 hover:border-[var(--c)] hover:shadow-[0_14px_30px_-10px_var(--c)] dark:border-white/10 dark:bg-white/5"
    >
      <div className="flex h-[76px] w-[188px] items-center justify-center gap-2.5 rounded-xl bg-white px-3 text-navy shadow-sm">
        {c.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={c.logo} alt={c.name} className="max-h-12 max-w-full object-contain" />
        ) : (
          <>
            <Mark c={c} i={i} />
            <span className={`truncate ${wordmarks[i % wordmarks.length]}`}>{c.name}</span>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------- one sliding row ---------- */

function Row({
  items,
  offset,
  reverse,
  seconds,
}: {
  items: Client[];
  offset: number;
  reverse?: boolean;
  seconds: number;
}) {
  return (
    <div className="group/row overflow-hidden py-2 [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className={`flex w-max group-hover/row:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ animationDuration: `${seconds}s` }}
      >
        {[...items, ...items].map((c, k) => (
          <div key={c.name + k} className="shrink-0 pr-4">
            <Card c={c} i={offset + (k % items.length)} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- count-up number ---------- */

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{n.toLocaleString()}</span>;
}

/* ---------- section ---------- */

export default function Clients() {
  const rows = [clients.slice(0, 10), clients.slice(10, 20), clients.slice(20, 30)];

  return (
    <section id="clients" className="relative overflow-hidden py-24 dark:bg-[#080C18] md:py-32">
      {/* dotted grid + glows + big ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50 dark:opacity-30"
        style={{
          backgroundImage: "radial-gradient(rgba(100,130,170,0.55) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-navy/10 dark:border-white/5" />
      <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-sun/15 blur-3xl" />

      <div className="relative">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl"
          >
            Trusted by brands that are{" "}
            <span className="bg-gradient-to-r from-sun via-fuchsia-500 to-brand bg-clip-text text-transparent">
              growing online
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-5 max-w-xl text-navy/70 dark:text-white/65"
          >
            Businesses, startups and organisations work with Serve Art for their websites, apps, design and marketing.
          </motion.p>
        </div>

        {/* sliding rows: middle one goes the other way */}
        <div className="mt-14 space-y-2">
          <Row items={rows[0]} offset={0} seconds={48} />
          <Row items={rows[1]} offset={10} seconds={58} reverse />
          <Row items={rows[2]} offset={20} seconds={52} />
        </div>

        {/* stats */}
        <div className="mx-auto mt-16 max-w-4xl px-5">
          <div className="grid grid-cols-2 gap-y-8 border-t border-navy/10 pt-10 dark:border-white/10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-4xl font-extrabold md:text-5xl">
                  <Counter to={s.value} />
                  <span className="text-sun">+</span>
                </p>
                <p className="mt-1 text-sm font-medium text-navy/60 dark:text-white/55">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}