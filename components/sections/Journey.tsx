import { journey } from "@/data/content";
import Section from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

/** A real sequence, so numbered steps are meaningful here. */
export default function Journey() {
  return (
    <Section id="journey" tone="dim" title="From first call to steady progress" intro="What a family can expect, step by step. Bracketed steps await the institute's real process.">
      <Stagger className="grid gap-0 md:grid-cols-4">
        {journey.map((j, i) => (
          <StaggerItem key={j.title} className="relative border-l border-amber/60 py-2 pl-6 pr-4 md:border-l-0 md:border-t md:pl-0 md:pr-6 md:pt-8">
            <span aria-hidden className="absolute -left-[9px] top-3 h-4 w-4 rounded-full border-2 border-amber bg-paper-dim md:-top-[9px] md:left-0" />
            <p className="font-display text-sm font-semibold text-amber-deep">Step {i + 1}</p>
            <h3 className="mt-1 text-xl font-semibold">{j.title}</h3>
            <p className="mt-2 leading-relaxed text-slate-ink">{j.body}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
