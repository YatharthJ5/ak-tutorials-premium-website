import { testimonials } from "@/data/testimonials";
import Tbc from "@/components/ui/Tbc";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function Testimonials() {
  const hasSample = testimonials.some((t) => t.isSample);
  return (
    <div>
      {hasSample && (
        <p role="note" className="mb-8 max-w-2xl border-l-4 border-amber bg-paper-dim p-4 text-sm leading-relaxed text-slate-ink">
          <strong className="text-ink">Sample content.</strong> These are layout placeholders, not real testimonials. Genuine, consented quotes will replace them.
        </p>
      )}
      <Stagger className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <StaggerItem key={i}>
            <figure className="flex h-full flex-col border-t-2 border-ink pt-5">
              <blockquote className="flex-1 font-display text-xl leading-snug">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-5 text-sm text-slate-ink">
                <span className="font-semibold text-ink">{t.name}</span>, {t.context} {t.isSample && <Tbc>Sample</Tbc>}
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
