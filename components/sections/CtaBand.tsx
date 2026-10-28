import { Phone, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { institute, phoneHref, whatsappHref } from "@/data/institute";

export default function CtaBand() {
  return (
    <section aria-labelledby="cta-title" className="bg-amber">
      <Reveal className="container-x flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 id="cta-title" className="text-3xl font-semibold leading-tight text-ink-deep sm:text-4xl">Find the right batch for your child.</h2>
          <p className="mt-3 text-ink-deep/80">Send an enquiry and the institute will get back to you with batch and admission details.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <Button href="/contact" className="!bg-ink-deep !text-paper hover:!bg-ink">{institute.enquiryCta}</Button>
          <Button href={phoneHref()} variant="secondary" className="!border-ink-deep/50 !text-ink-deep hover:!bg-ink-deep hover:!text-paper"><Phone aria-hidden size={18} /> Call</Button>
          <Button href={whatsappHref()} variant="secondary" className="!border-ink-deep/50 !text-ink-deep hover:!bg-ink-deep hover:!text-paper"><MessageCircle aria-hidden size={18} /> WhatsApp</Button>
        </div>
      </Reveal>
    </section>
  );
}
