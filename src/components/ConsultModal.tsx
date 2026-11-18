"use client";
import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, Loader2, Phone, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store";
import { closeConsult } from "@/store/uiSlice";
import { PHONE, PHONE_DISPLAY, serviceOptions } from "@/data/site";

type Status = "idle" | "sending" | "sent" | "error";
const empty = { name: "", phone: "", email: "", service: "", message: "", website: "" };

const field =
  "w-full rounded-xl border border-navy/15 bg-navy/[0.03] px-4 py-3 text-sm outline-none transition placeholder:text-navy/45 focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/15 dark:border-white/15 dark:bg-white/5 dark:placeholder:text-white/40 dark:focus:bg-white/10";

export default function ConsultModal() {
  const { consultOpen, service } = useAppSelector((s) => s.ui);
  const dispatch = useAppDispatch();
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const firstRef = useRef<HTMLInputElement>(null);

  // khulle form reset hobe ar click kora service select thakbe
  useEffect(() => {
    if (!consultOpen) return;
    setForm({ ...empty, service });
    setStatus("idle");
    setError("");
    const t = setTimeout(() => firstRef.current?.focus(), 200);
    return () => clearTimeout(t);
  }, [consultOpen, service]);

  // Esc diye bondho ar page scroll lock
  useEffect(() => {
    if (!consultOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dispatch(closeConsult());
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [consultOpen, dispatch]);

  const set = (k: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Could not send your message.");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Could not send your message. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      {consultOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-ink/70 p-0 backdrop-blur-sm sm:items-center sm:p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => e.target === e.currentTarget && dispatch(closeConsult())}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="consult-title"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[84vh] w-full max-w-[500px] overflow-y-auto rounded-t-3xl bg-white shadow-2xl dark:bg-[#0C1626] sm:rounded-3xl"
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-brand via-fuchsia-500 to-sun" />

            <button
              type="button"
              aria-label="Close form"
              onClick={() => dispatch(closeConsult())}
              className="absolute right-4 top-5 grid h-9 w-9 place-items-center rounded-full border border-navy/15 transition hover:border-sun hover:text-sun dark:border-white/20"
            >
              <X size={16} />
            </button>

            <div className="p-6 sm:p-8">
              {status === "sent" ? (
                <div className="py-8 text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 15 }}>
                    <CheckCircle2 size={64} className="mx-auto text-green-500" />
                  </motion.div>
                  <h3 className="mt-5 font-display text-2xl font-extrabold">Message sent</h3>
                  <p className="mx-auto mt-2 max-w-xs text-navy/70 dark:text-white/70">
                    Thanks, {form.name.split(" ")[0] || "there"}. Our team will contact you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => dispatch(closeConsult())}
                    className="mt-7 rounded-full bg-brand px-7 py-3 font-semibold text-white transition hover:bg-brand-dark"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <p className="flex items-center gap-2 text-sm font-semibold text-sun">
                    <span className="h-0.5 w-6 bg-sun" />
                    Serve Art
                  </p>
                  <h3 id="consult-title" className="mt-2 font-display text-xl font-extrabold sm:text-xl">
                    Free project consultation
                  </h3>
                  <p className="mt-1 text-sm text-navy/65 dark:text-white/65">
                    Tell us about your project and our team will reach out within 24 hours.
                  </p>

                  <form onSubmit={submit} className="mt-3 space-y-2.5">
                    <input ref={firstRef} className={field} placeholder="Your name *" required value={form.name} onChange={set("name")} autoComplete="name" />
                    <input className={field} type="tel" placeholder="Phone" value={form.phone} onChange={set("phone")} autoComplete="tel" />
                    <input className={field} type="email" placeholder="Email *" required value={form.email} onChange={set("email")} autoComplete="email" />

                    <div className="relative">
                      <select
                        className={`${field} appearance-none pr-10 [&>option]:text-navy`}
                        required
                        value={form.service}
                        onChange={set("service")}
                      >
                        <option value="" disabled>
                          Select a service *
                        </option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={18} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-navy/50 dark:text-white/50" />
                    </div>

                    <textarea className={`${field} min-h-[110px] resize-y`} placeholder="Message" value={form.message} onChange={set("message")} />

                    {/* spam bot trap: manush dekhe na */}
                    <input
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      value={form.website}
                      onChange={set("website")}
                      className="absolute left-[-9999px] h-0 w-0 opacity-0"
                      name="website"
                    />

                    {status === "error" && (
                      <p role="alert" className="rounded-lg bg-red-500/10 px-3 py-2 text-sm font-medium text-red-600 dark:text-red-400">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sun to-[#E5642A] py-3.5 font-semibold text-white shadow-lg shadow-sun/30 transition hover:brightness-110 disabled:opacity-70"
                    >
                      {status === "sending" ? (
                        <>
                          <Loader2 size={18} className="animate-spin" /> Sending
                        </>
                      ) : (
                        <>
                          Send message <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-6 flex items-center gap-3 border-t border-navy/10 pt-5 text-sm dark:border-white/10">
                    <span className="text-navy/50 dark:text-white/50">Or</span>
                    <a
                      href={`tel:${PHONE}`}
                      className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-4 py-2 font-semibold transition hover:border-sun hover:text-sun dark:border-white/20"
                    >
                      <Phone size={14} />
                      Call us now: {PHONE_DISPLAY}
                    </a>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}