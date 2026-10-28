import { institute } from "@/data/institute";

/** Text-based brand mark: a ruled-paper monogram + wordmark. Swap for an image logo if one is supplied. */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span aria-hidden className={`relative grid h-10 w-10 place-items-center rounded-sm font-display text-lg font-bold ${light ? "bg-paper text-ink" : "bg-ink text-paper"}`}>
        {institute.shortName}
        <span className="absolute bottom-1.5 left-1.5 right-1.5 h-0.5 bg-amber" />
      </span>
      <span className={`font-display text-xl font-semibold tracking-tight ${light ? "text-paper" : "text-ink"}`}>{institute.name}</span>
    </span>
  );
}
