import { approach } from "@/data/content";
import Section from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export default function Approach() {
  return (
    <Section id="approach" tone="ink" title="Teaching that makes thinking visible" intro="Four habits shape how every class is taught.">
      <Stagger className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {approach.map((a) => (
          <StaggerItem key={a.title} className="border-t border-paper/25 pt-6">
            <h3 className="text-2xl font-semibold">{a.title}</h3>
            <p className="mt-3 max-w-md leading-relaxed text-paper/75">{a.body}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
