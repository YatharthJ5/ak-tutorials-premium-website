import { achievements } from "@/data/results";
import { FileCheck2 } from "lucide-react";

export default function ResultsPanel() {
  if (achievements.length === 0) {
    return (
      <div className="flex flex-col gap-4 border border-dashed border-amber/70 bg-paper p-8 sm:flex-row sm:items-start">
        <FileCheck2 aria-hidden className="shrink-0 text-amber-deep" size={32} />
        <div>
          <h3 className="text-2xl font-semibold">Official results will be added after confirmation</h3>
          <p className="mt-3 max-w-xl leading-relaxed text-slate-ink">
            To keep this page honest, no marks, ranks or student names are shown until the institute supplies verified records.
            Add them to <code className="rounded-sm bg-paper-dim px-1.5 py-0.5 text-sm">data/results.ts</code> and they appear here automatically.
          </p>
        </div>
      </div>
    );
  }
  return (
    <ul className="divide-y divide-rule border-y border-rule">
      {achievements.map((a) => (
        <li key={a.title + a.detail} className="grid gap-2 py-6 sm:grid-cols-[8rem_1fr]">
          <span className="font-display text-xl font-semibold text-amber-deep">{a.year}</span>
          <div>
            <h3 className="text-xl font-semibold">{a.title}</h3>
            <p className="mt-1 text-slate-ink">{a.detail}</p>
            <p className="mt-1 text-sm text-slate-ink/80">Source: {a.source}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
