"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeDollarSign,
  Check,
  Cpu,
  Gauge,
  Gem,
  Headset,
  MessagesSquare,
  Phone,
  RefreshCw,
  Server,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import OpenConsult from "./OpenConsult";
import { PHONE, PHONE_DISPLAY } from "@/data/site";

interface Feature {
  title: string;
  text: string;
  icon: LucideIcon;
  color: string;
}

const features: Feature[] = [
  { title: "Fair price", text: "We plan around your budget and agree the scope up front, so there are no surprise costs.", icon: BadgeDollarSign, color: "#10B981" },
  { title: "Fast performance", text: "Pages load quickly and are built to be found on Google.", icon: Gauge, color: "#3B82F6" },
  { title: "Reliable hosting", text: "A hosting setup that keeps your site fast and online.", icon: Server, color: "#6366F1" },
  { title: "Proper security", text: "Secure coding practices keep your data and your customers' data safe.", icon: ShieldCheck, color: "#F43F5E" },
  { title: "Ongoing support", text: "Reach us after launch. We look into problems quickly.", icon: Headset, color: "#14B8A6" },
  { title: "Easy updates", text: "Manage your own content, or send it to us and we update it for you.", icon: RefreshCw, color: "#F59E0B" },
  { title: "Business growth", text: "Built to bring you more visitors, leads and sales.", icon: TrendingUp, color: "#EC4899" },
  { title: "Modern technology", text: "Next.js, Node.js and tools we trust, chosen for speed and long-term stability.", icon: Cpu, color: "#0EA5E9" },
  { title: "Strong branding", text: "Your logo, colors and tone stay consistent everywhere customers meet you.", icon: Gem, color: "#A855F7" },
  { title: "Expert team", text: "Developers, designers and marketers working on your project together.", icon: Users, color: "#EA580C" },
  { title: "Mobile ready", text: "Every site and app works smoothly on phones, tablets and desktops.", icon: Smartphone, color: "#22C55E" },
  { title: "Clear communication", text: "A named contact, regular updates and quick replies.", icon: MessagesSquare, color: "#1B75BC" },
];

const checklist = [
  "A clear plan for your business",
  "Knowing your audience and their needs",
  "A website that reflects your brand",
  "A landing page that converts",
];

// nijer sotti number bosao
const facts = [
  { value: "5+", label: "Years of experience" },
  { value: "100+", label: "Happy clients" },
  { value: "250+", label: "Projects delivered" },
  { value: "10+", label: "Team members" },
];

export default function WhyUs() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-sun/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5">
        <p className="flex items-center gap-3 text-sm font-semibold text-sun">
          <span className="h-0.5 w-8 bg-sun" />
          Why Serve Art
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
          Built the right way, from the first call to launch.
        </h2>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* feature cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                  style={{ "--c": f.color } as React.CSSProperties}
                  className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[var(--c)] hover:shadow-[0_16px_32px_-14px_var(--c)] dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: f.color }}
                  />
                  <div className="flex items-start gap-4">
                    <span
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-xl transition duration-300 group-hover:rotate-6 group-hover:scale-110"
                      style={{ background: `${f.color}1f`, color: f.color }}
                    >
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold">{f.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-navy/65 dark:text-white/60">{f.text}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* contact card */}
          <motion.aside
            id="contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative scroll-mt-28 self-start overflow-hidden rounded-3xl bg-gradient-to-br from-[#0E2A47] to-[#07121F] p-7 text-white shadow-2xl shadow-navy/30 lg:sticky lg:top-28"
          >
            <span className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-sun/30 blur-3xl" />
            <span className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-brand/40 blur-3xl" />

            <div className="relative">
              <h3 className="font-display text-2xl font-extrabold leading-snug">
                Before you start, focus on these four things
              </h3>
              <p className="mt-3 text-sm text-white/70">
                Start with a good set of ideas, then find the right way to tell your audience about them.
              </p>

              <ul className="mt-5 space-y-2.5">
                {checklist.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-sm font-medium">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sun">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {facts.map((f) => (
                  <div key={f.label} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <p className="font-display text-2xl font-extrabold">{f.value}</p>
                    <p className="mt-0.5 text-xs text-white/60">{f.label}</p>
                  </div>
                ))}
              </div>

              <a
                href={`tel:${PHONE}`}
                className="group mt-3 flex items-center gap-3 rounded-xl border border-dashed border-white/25 p-3.5 transition hover:border-sun"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-sun transition group-hover:scale-110">
                  <Phone size={18} />
                </span>
                <span>
                  <span className="block text-xs text-white/60">Call our hotline</span>
                  <span className="block font-display font-bold">{PHONE_DISPLAY}</span>
                </span>
              </a>

              <OpenConsult className="group mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-sun py-3.5 font-semibold text-white shadow-lg shadow-sun/30 transition hover:bg-sun-dark">
                Talk to an expert
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </OpenConsult>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}