"use client";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { Code2, Globe, Megaphone, Palette, Smartphone } from "lucide-react";

/* ---------------- Screen slides ---------------- */

function WebSlide() {
  return (
    <div className="h-full bg-white p-4 text-[#0E2A47]">
      <div className="flex items-center justify-between">
        <span className="text-xs font-extrabold text-[#1B75BC]">Nova Studio</span>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-8 rounded bg-slate-200" />
          <span className="h-1.5 w-8 rounded bg-slate-200" />
          <span className="h-1.5 w-8 rounded bg-slate-200" />
          <span className="h-5 w-14 rounded-full bg-[#F58A2E]" />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-[1.2fr_1fr] gap-3">
        <div className="pt-3">
          <div className="h-3.5 w-4/5 rounded bg-[#0E2A47]" />
          <div className="mt-2 h-3.5 w-3/5 rounded bg-[#0E2A47]" />
          <div className="mt-3 h-1.5 w-full rounded bg-slate-200" />
          <div className="mt-1.5 h-1.5 w-5/6 rounded bg-slate-200" />
          <div className="mt-4 flex gap-2">
            <span className="h-6 w-20 rounded-full bg-[#1B75BC]" />
            <span className="h-6 w-16 rounded-full border border-slate-300" />
          </div>
        </div>
        <div className="relative h-[120px] overflow-hidden rounded-xl bg-gradient-to-br from-[#1B75BC] via-fuchsia-500 to-[#F58A2E]">
          <span className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-white/30" />
          <span className="absolute bottom-3 left-3 h-10 w-16 rounded-lg bg-white/90" />
          <span className="absolute bottom-6 right-4 h-8 w-8 rounded-full bg-white/60" />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2">
        {["#1B75BC", "#F58A2E", "#D946EF", "#14B8A6"].map((c) => (
          <div key={c} className="rounded-lg border border-slate-200 p-1.5">
            <div className="h-9 rounded-md" style={{ background: c }} />
            <div className="mt-1.5 h-1.5 w-full rounded bg-slate-200" />
            <div className="mt-1 h-1.5 w-2/3 rounded bg-slate-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

function AppSlide() {
  return (
    <div className="relative h-full overflow-hidden bg-gradient-to-br from-[#0E2A47] to-[#1B75BC]">
      <span className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-fuchsia-500/30 blur-2xl" />
      <span className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-[#F58A2E]/40 blur-2xl" />
      <div className="relative flex h-full items-end justify-center gap-4 pb-0 pt-6">
        {/* shop app */}
        <div className="h-[200px] w-[105px] translate-y-6 rounded-2xl border-2 border-white/40 bg-white p-2">
          <div className="mx-auto h-1 w-8 rounded-full bg-slate-300" />
          <div className="mt-2 h-16 rounded-lg bg-gradient-to-br from-[#F58A2E] to-pink-500" />
          <div className="mt-2 h-2 w-14 rounded bg-slate-300" />
          <div className="mt-1 h-2 w-8 rounded bg-slate-200" />
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            <div className="h-12 rounded-md bg-teal-400/70" />
            <div className="h-12 rounded-md bg-indigo-400/70" />
          </div>
        </div>
        {/* dashboard app */}
        <div className="h-[235px] w-[120px] rounded-2xl border-2 border-white/50 bg-white p-2 shadow-2xl">
          <div className="mx-auto h-1 w-8 rounded-full bg-slate-300" />
          <div className="mt-2 flex items-center justify-between">
            <div className="h-2 w-12 rounded bg-slate-300" />
            <span className="h-4 w-4 rounded-full bg-[#1B75BC]" />
          </div>
          <div className="mt-2 rounded-xl bg-[#0E2A47] p-2">
            <div className="h-1.5 w-8 rounded bg-white/50" />
            <div className="mt-1.5 h-3 w-14 rounded bg-white" />
          </div>
          <div className="mt-3 flex h-16 items-end gap-1">
            {[40, 70, 50, 90, 60, 85].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-[#1B75BC] to-teal-400" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="mt-3 space-y-1.5">
            <div className="flex items-center gap-1.5">
              <span className="h-4 w-4 rounded-full bg-fuchsia-500" />
              <span className="h-1.5 flex-1 rounded bg-slate-200" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-4 w-4 rounded-full bg-[#F58A2E]" />
              <span className="h-1.5 flex-1 rounded bg-slate-200" />
            </div>
          </div>
        </div>
        {/* chat app */}
        <div className="h-[200px] w-[105px] translate-y-6 rounded-2xl border-2 border-white/40 bg-white p-2">
          <div className="mx-auto h-1 w-8 rounded-full bg-slate-300" />
          <div className="mt-2 flex items-center gap-1.5">
            <span className="h-5 w-5 rounded-full bg-gradient-to-br from-fuchsia-500 to-[#F58A2E]" />
            <span className="h-1.5 w-12 rounded bg-slate-300" />
          </div>
          <div className="mt-3 space-y-1.5">
            <div className="h-5 w-16 rounded-lg rounded-tl-none bg-slate-200" />
            <div className="ml-auto h-5 w-14 rounded-lg rounded-tr-none bg-[#1B75BC]" />
            <div className="h-5 w-12 rounded-lg rounded-tl-none bg-slate-200" />
            <div className="ml-auto h-5 w-16 rounded-lg rounded-tr-none bg-[#1B75BC]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function GraphicSlide() {
  return (
    <div className="relative h-full overflow-hidden bg-gradient-to-br from-fuchsia-50 via-white to-orange-50">
      {/* poster */}
      <div className="absolute left-6 top-5 h-[230px] w-[140px] -rotate-3 overflow-hidden rounded-md bg-gradient-to-b from-[#F58A2E] to-pink-600 p-3 shadow-xl">
        <span className="absolute -right-6 top-10 h-24 w-24 rounded-full bg-white/30" />
        <span className="absolute left-4 top-24 h-14 w-14 rounded-full bg-[#1B75BC]" />
        <div className="relative">
          <div className="h-2 w-10 rounded bg-white/90" />
          <div className="mt-8 text-[28px] font-extrabold leading-none text-white">50%</div>
          <div className="mt-1 text-[10px] font-bold uppercase tracking-wide text-white">Summer sale</div>
        </div>
        <div className="absolute bottom-3 left-3 h-5 w-16 rounded-full bg-white" />
      </div>

      {/* logo tile */}
      <div className="absolute left-[185px] top-6 grid h-[105px] w-[105px] place-items-center rounded-2xl bg-white shadow-xl">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#1B75BC] to-fuchsia-500 text-2xl font-extrabold text-white">
          N
        </div>
      </div>

      {/* palette */}
      <div className="absolute right-6 top-8 flex gap-2">
        {["#1B75BC", "#F58A2E", "#D946EF", "#14B8A6"].map((c) => (
          <span key={c} className="h-9 w-9 rounded-full shadow-md ring-2 ring-white" style={{ background: c }} />
        ))}
      </div>

      {/* business card */}
      <div className="absolute bottom-6 left-[190px] h-[90px] w-[150px] rotate-[5deg] rounded-lg bg-[#0E2A47] p-3 shadow-xl">
        <div className="h-3 w-3 rounded-full bg-[#F58A2E]" />
        <div className="mt-4 h-2 w-20 rounded bg-white/90" />
        <div className="mt-1.5 h-1.5 w-14 rounded bg-white/50" />
        <div className="mt-1 h-1.5 w-16 rounded bg-white/30" />
      </div>

      {/* type specimen */}
      <div className="absolute bottom-5 right-6 w-[110px] rounded-xl bg-white p-3 text-center shadow-lg">
        <div className="text-4xl font-extrabold leading-none text-[#0E2A47]">Aa</div>
        <div className="mt-1 h-1.5 w-full rounded bg-slate-200" />
        <svg viewBox="0 0 90 24" className="mt-2 w-full">
          <path d="M3 20 C 25 -6, 55 30, 87 4" fill="none" stroke="#D946EF" strokeWidth="2" strokeLinecap="round" />
          <circle cx="3" cy="20" r="3" fill="#1B75BC" />
          <circle cx="87" cy="4" r="3" fill="#F58A2E" />
        </svg>
      </div>
    </div>
  );
}

const SLIDES = [
  { id: "web", label: "Website", icon: Globe, Comp: WebSlide },
  { id: "apps", label: "Mobile apps", icon: Smartphone, Comp: AppSlide },
  { id: "graphic", label: "Graphic design", icon: Palette, Comp: GraphicSlide },
];

const SLIDE_MS = 4500;

/* ---------------- Floating badges ---------------- */

function FloatBadge({ className, delay, children }: { className: string; delay: number; children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 + delay, duration: 0.5 }}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -12, 0] }}
        transition={{ duration: 4 + delay * 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ---------------- Main component ---------------- */

export default function HeroVisual() {
  const [phase, setPhase] = useState<"off" | "boot" | "run">("off");
  const [index, setIndex] = useState(0);

  // power on sequence
  useEffect(() => {
    const t1 = setTimeout(() => setPhase("boot"), 600);
    const t2 = setTimeout(() => setPhase("run"), 2100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // auto slide change
  useEffect(() => {
    if (phase !== "run") return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % SLIDES.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [phase, index]);

  // mouse tilt
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const sx = useSpring(rawX, { stiffness: 70, damping: 16 });
  const sy = useSpring(rawY, { stiffness: 70, damping: 16 });
  const rotateY = useTransform(sx, (v) => v * 14);
  const rotateX = useTransform(sy, (v) => v * -10);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      rawX.set(e.clientX / window.innerWidth - 0.5);
      rawY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [rawX, rawY]);

  const Active = SLIDES[index].Comp;
  const on = phase !== "off";

  return (
    <div className="relative mx-auto h-[360px] w-full sm:h-[450px] lg:h-[540px]">
      <div className="absolute left-1/2 top-0 h-[540px] w-[540px] origin-top -translate-x-1/2 scale-[.64] sm:scale-[.82] lg:scale-100">
        {/* glow behind the monitor */}
        <div className="absolute inset-x-6 top-6 h-[340px] rounded-full bg-gradient-to-br from-[#1B75BC]/40 via-fuchsia-500/25 to-[#F58A2E]/40 blur-3xl" />

        <div className="relative flex flex-col items-center" style={{ perspective: 1400 }}>
          {/* MONITOR */}
          <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="w-[500px]">
            <div className="rounded-[22px] bg-gradient-to-b from-[#2A3547] to-[#141C2A] p-3 shadow-2xl shadow-black/40 ring-1 ring-white/10">
              {/* screen */}
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg bg-black">
                <AnimatePresence mode="wait">
                  {phase === "boot" && (
                    <motion.div
                      key="boot"
                      initial={{ scaleY: 0.01, scaleX: 0.5, opacity: 0 }}
                      animate={{ scaleY: 1, scaleX: 1, opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#0A1B2E] to-[#10304F]"
                    >
                      <div className="font-display text-3xl font-extrabold">
                        <span className="text-[#4DA3E6]">Serve</span> <span className="text-[#F58A2E]">Art</span>
                      </div>
                      <div className="mt-4 h-1 w-32 overflow-hidden rounded-full bg-white/15">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-[#1B75BC] to-[#F58A2E]"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.1, delay: 0.3 }}
                        />
                      </div>
                    </motion.div>
                  )}
                  {phase === "run" && (
                    <motion.div
                      key={SLIDES[index].id}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      <Active />
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* glass reflection */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/15" />
              </div>
              {/* chin */}
              <div className="flex h-6 items-center justify-center">
                <span
                  className={`h-1.5 w-1.5 rounded-full transition ${
                    on ? "bg-green-400 shadow-[0_0_8px_2px_rgba(74,222,128,0.8)]" : "bg-red-500"
                  }`}
                />
              </div>
            </div>
          </motion.div>

          {/* STAND */}
          <div className="h-[58px] w-[70px] bg-gradient-to-b from-[#2A3547] to-[#1A2332] [clip-path:polygon(18%_0,82%_0,100%_100%,0_100%)]" />
          <div className="h-3 w-[190px] rounded-full bg-gradient-to-b from-[#2A3547] to-[#141C2A] shadow-lg shadow-black/30" />

          {/* TABS */}
          <div className="mt-6 flex gap-2">
            {SLIDES.map((s, i) => {
              const Icon = s.icon;
              const active = i === index && phase === "run";
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => phase === "run" && setIndex(i)}
                  aria-label={`Show ${s.label}`}
                  aria-pressed={active}
                  className={`relative flex items-center gap-1.5 overflow-hidden rounded-full border px-4 py-2 text-xs font-semibold transition ${
                    active
                      ? "border-transparent bg-white text-[#0E2A47] shadow-lg dark:bg-white"
                      : "border-navy/15 bg-white/50 hover:border-sun dark:border-white/20 dark:bg-white/5"
                  }`}
                >
                  <Icon size={14} />
                  {s.label}
                  {active && (
                    <motion.span
                      key={index}
                      className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#1B75BC] to-[#F58A2E]"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* floating badges */}
        <FloatBadge className="-left-2 top-10" delay={0}>
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#1B75BC] to-indigo-600 text-white shadow-xl">
            <Code2 size={22} />
          </span>
        </FloatBadge>
        <FloatBadge className="-right-2 top-0" delay={0.3}>
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-pink-500 text-white shadow-xl">
            <Palette size={22} />
          </span>
        </FloatBadge>
        <FloatBadge className="-right-4 top-[300px]" delay={0.6}>
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#F58A2E] to-red-500 text-white shadow-xl">
            <Megaphone size={22} />
          </span>
        </FloatBadge>
      </div>
    </div>
  );
}