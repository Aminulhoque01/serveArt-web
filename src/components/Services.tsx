"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/data/services";

export default function Services() {
  const [active, setActive] = useState(0);
  const s = services[active];
  const ActiveIcon = s.icon;

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-6xl">
          Everything your brand needs, in one studio.
        </h2>
        <p className="mt-4 max-w-xl text-lg text-navy/70 dark:text-white/70">
          Pick a service to see what we deliver.
        </p>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <ul className="space-y-2" role="tablist" aria-label="Our services">
            {services.map((item, i) => {
              const Icon = item.icon;
              const on = i === active;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="flex w-full items-center gap-4 rounded-2xl border-l-4 px-4 py-4 text-left transition"
                    style={
                      on
                        ? { borderColor: item.from, background: `linear-gradient(90deg, ${item.from}26, transparent)` }
                        : { borderColor: "transparent" }
                    }
                  >
                    <span
                      className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white"
                      style={{ background: `linear-gradient(135deg, ${item.from}, ${item.to})` }}
                    >
                      <Icon size={22} />
                    </span>
                    <span
                      className={`font-display text-xl font-bold transition md:text-2xl ${
                        on ? "" : "opacity-60"
                      }`}
                    >
                      {item.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="relative min-h-[420px] overflow-hidden rounded-3xl p-8 text-white md:p-10"
                style={{ background: `linear-gradient(135deg, ${s.from}, ${s.to})` }}
              >
                <ActiveIcon
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-10 -right-10 opacity-20"
                  size={260}
                  strokeWidth={1.2}
                />
                <div className="relative">
                  <ActiveIcon size={40} />
                  <h3 className="mt-6 font-display text-3xl font-extrabold md:text-4xl">{s.title}</h3>
                  <p className="mt-4 max-w-md text-lg text-white/90">{s.description}</p>
                  <ul className="mt-6 space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 font-medium">
                        <Check size={18} className="shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/#contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold transition hover:scale-105"
                    style={{ color: s.to }}
                  >
                    Discuss this service
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}