import { faqs } from "@/data/content";
import Section from "@/components/ui/Section";
import Accordion from "@/components/ui/Accordion";

export default function FaqSection() {
  return (
    <Section id="faq" title="Questions families ask" intro="Answers marked in brackets will be replaced with the institute's confirmed details.">
      <div className="max-w-3xl"><Accordion items={faqs} /></div>
    </Section>
  );
}
