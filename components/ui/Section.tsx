import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** Section wrapper with a notebook-margin rule and a consistent heading block. */
export default function Section({
  id, title, intro, children, tone = "paper", note,
}: { id?: string; title: string; intro?: string; children: ReactNode; tone?: "paper" | "dim" | "ink"; note?: ReactNode }) {
  const bg = tone === "ink" ? "bg-ink text-paper ruled-dark" : tone === "dim" ? "bg-paper-dim" : "bg-paper";
  return (
    <section id={id} aria-labelledby={id ? `${id}-title` : undefined} className={`relative py-20 sm:py-28 ${bg}`}>
      <div className="container-x relative">
        <span aria-hidden className={`absolute -left-1 top-0 hidden h-full w-px lg:block ${tone === "ink" ? "bg-amber-light/50" : "bg-amber/50"}`} />
        <Reveal className="max-w-2xl">
          <h2 id={id ? `${id}-title` : undefined} className="text-3xl font-semibold leading-tight sm:text-5xl">{title}</h2>
          {intro && <p className={`mt-5 text-lg leading-relaxed ${tone === "ink" ? "text-paper/75" : "text-slate-ink"}`}>{intro}</p>}
          {note && <div className="mt-4">{note}</div>}
        </Reveal>
        <div className="mt-12 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}

export function PageHeader({ title, intro }: { title: string; intro: string }) {
  return (
    <header className="ruled-dark relative overflow-hidden bg-ink-deep text-paper">
      <div className="container-x py-20 sm:py-28">
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/75">{intro}</p>
      </div>
      <span aria-hidden className="absolute bottom-0 left-5 top-0 w-px bg-amber-light/40 sm:left-8" />
    </header>
  );
}
