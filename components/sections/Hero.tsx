"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { institute, phoneHref } from "@/data/institute";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const lines = [
  { text: "Q.  Solve  2x + 6 = 14", delay: 0.7 },
  { text: "2x = 14 − 6", delay: 1.2 },
  { text: "2x = 8", delay: 1.7 },
  { text: "x = 4", delay: 2.2, answer: true },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const sheetY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);
  const backY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 110]);

  return (
    <section ref={ref} aria-labelledby="hero-title" className="ruled-dark relative overflow-hidden bg-ink-deep text-paper">
      <span aria-hidden className="absolute bottom-0 left-5 top-0 w-px bg-amber-light/40 sm:left-8" />
      <div className="container-x grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div className="lg:pl-6">
          <motion.h1 id="hero-title" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}
            className="text-5xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">
            Learning that shows its working.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-paper/80 sm:text-xl">
            {institute.name} helps students understand each idea before they practise it, so results come from clarity rather than cramming.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4, ease }}
            className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">{institute.enquiryCta} <ArrowRight aria-hidden size={18} /></Button>
            <Button href="/courses" variant="light">Explore courses</Button>
          </motion.div>
          <motion.a href={phoneHref()} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="mt-6 inline-flex min-h-11 items-center gap-2 text-paper/80 underline decoration-amber-light underline-offset-4 hover:text-amber-light">
            <Phone aria-hidden size={16} /> Prefer to talk? Call the institute
          </motion.a>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-label="Illustrative worked example in a notebook">
          <motion.div style={{ y: backY }} aria-hidden className="absolute inset-0 translate-x-5 translate-y-4 rotate-[3deg] rounded-sm bg-paper-dim/90" />
          <motion.div style={{ y: sheetY }} initial={{ opacity: 0, rotate: -6, y: 40 }} animate={{ opacity: 1, rotate: -1.5 }} transition={{ duration: 0.9, delay: 0.3, ease }}
            className="relative">
            <div className="drift relative overflow-hidden rounded-sm bg-paper text-ink shadow-sheet ruled">
              <span aria-hidden className="absolute bottom-0 left-12 top-0 w-px bg-amber" />
              <div className="px-6 pb-10 pt-6 pl-16 sm:pl-20">
                <p className="text-sm font-medium text-slate-ink">Illustrative sample, not a real student&apos;s work</p>
                <div className="mt-6 space-y-[11px] font-display text-2xl italic sm:text-3xl" style={{ lineHeight: "21px" }}>
                  {lines.map((l) => (
                    <motion.p key={l.text} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: l.delay, duration: 0.5 }}
                      className={`relative inline-block w-full py-[5px] ${l.answer ? "font-semibold" : ""}`}>
                      {l.text}
                      {l.answer && (
                        <svg aria-hidden viewBox="0 0 140 56" className="absolute -left-3 -top-2 h-12 w-32 overflow-visible">
                          <motion.ellipse cx="62" cy="30" rx="58" ry="22" fill="none" stroke="#C98A1B" strokeWidth="2.5"
                            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.8, duration: 0.7 }} />
                        </svg>
                      )}
                    </motion.p>
                  ))}
                </div>
                <svg aria-hidden viewBox="0 0 60 50" className="absolute bottom-6 right-6 h-14 w-14 overflow-visible">
                  <motion.path d="M6 28 L22 44 L54 6" fill="none" stroke="#C98A1B" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 3.4, duration: 0.6, ease: "easeOut" }} />
                </svg>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.8 }}
                  className="mt-8 max-w-[14rem] text-sm font-semibold text-amber-deep">Each step written out, so each step can be checked.</motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
