"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Dot {
  x: number;
  y: number;
  bx: number;
  by: number;
  vx: number;
  vy: number;
  r: number;
  c: string;
}

export default function HeroBackground() {
  const ref = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dark = resolvedTheme !== "light";
    const palette = ["#1B75BC", "#F58A2E", "#D946EF", "#14B8A6"];
    const lineRGB = dark ? "255,255,255" : "14,42,71";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: -9999, y: -9999 };
    let w = 0;
    let h = 0;
    let raf = 0;
    let dots: Dot[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(120, Math.floor((w * h) / 12000));
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        bx: (Math.random() - 0.5) * 0.35,
        by: (Math.random() - 0.5) * 0.35,
        vx: 0,
        vy: 0,
        r: Math.random() * 2 + 1.2,
        c: palette[Math.floor(Math.random() * palette.length)],
      }));
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const d of dots) {
        const dx = d.x - mouse.x;
        const dy = d.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 150 && dist > 0) {
          const f = (150 - dist) / 150;
          d.vx += (dx / dist) * f * 0.6;
          d.vy += (dy / dist) * f * 0.6;
        }
        d.vx *= 0.93;
        d.vy *= 0.93;
        d.x += d.bx + d.vx;
        d.y += d.by + d.vy;
        if (d.x < 0 || d.x > w) {
          d.bx *= -1;
          d.x = Math.max(0, Math.min(w, d.x));
        }
        if (d.y < 0 || d.y > h) {
          d.by *= -1;
          d.y = Math.max(0, Math.min(h, d.y));
        }
      }

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dist = Math.hypot(dots[i].x - dots[j].x, dots[i].y - dots[j].y);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(${lineRGB},${(1 - dist / 120) * 0.18})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      for (const d of dots) {
        const m = Math.hypot(d.x - mouse.x, d.y - mouse.y);
        if (m < 180) {
          ctx.strokeStyle = d.c;
          ctx.globalAlpha = (1 - m / 180) * 0.7;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(d.x, d.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
        ctx.fillStyle = d.c;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, [resolvedTheme]);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}