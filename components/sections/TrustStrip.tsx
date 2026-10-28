import { trustFacts, isConfigured } from "@/data/institute";
import Tbc from "@/components/ui/Tbc";
import { Reveal } from "@/components/ui/Reveal";

export default function TrustStrip() {
  return (
    <section aria-label="Institute at a glance" className="border-b border-rule bg-paper-dim">
      <Reveal className="container-x py-8">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-6 lg:grid-cols-4 lg:divide-x lg:divide-rule">
          {trustFacts.map((f) => (
            <div key={f.label} className="lg:px-6 lg:first:pl-0">
              <dt className="text-sm text-slate-ink">{f.label}</dt>
              <dd className="mt-1 font-display text-xl font-semibold">
                {f.value}
                {!isConfigured(f.value) && <span className="ml-2 align-middle"><Tbc>Verify</Tbc></span>}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
