import type { Metadata } from "next";
import { Suspense } from "react";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/ui/Section";
import EnquiryForm from "@/components/forms/EnquiryForm";
import Tbc from "@/components/ui/Tbc";
import { institute, isConfigured, phoneHref, whatsappHref, emailHref } from "@/data/institute";

export const metadata: Metadata = {
  title: "Contact & Admissions",
  description: "Enquire about admission at A.K. Tutorials by form, phone or WhatsApp.",
  openGraph: { title: "Contact & Admissions | A.K. Tutorials" },
};

export default function ContactPage() {
  const rows = [
    { Icon: Phone, label: "Call", value: institute.phone, href: phoneHref(), ok: isConfigured(institute.phone) },
    { Icon: MessageCircle, label: "WhatsApp", value: institute.whatsapp, href: whatsappHref(), ok: isConfigured(institute.whatsapp) },
    { Icon: Mail, label: "Email", value: institute.email, href: emailHref(), ok: isConfigured(institute.email) },
  ];
  return (
    <>
      <PageHeader title="Contact and admissions" intro="Send an enquiry, call, or message on WhatsApp. The institute's real contact details will appear here once confirmed." />
      <section className="bg-paper py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="mb-6 text-3xl font-semibold">Admission enquiry</h2>
            <Suspense fallback={<p className="text-slate-ink">Loading form…</p>}><EnquiryForm /></Suspense>
          </div>
          <div id="details" className="space-y-8">
            <div>
              <h2 className="text-3xl font-semibold">Reach the institute</h2>
              <ul className="mt-6 divide-y divide-rule border-y border-rule">
                {rows.map(({ Icon, label, value, href, ok }) => (
                  <li key={label}>
                    {ok ? (
                      <a href={href} className="flex min-h-16 items-center gap-4 py-3 hover:text-amber-deep"><Icon aria-hidden size={20} className="text-amber-deep" /><span><span className="block text-sm text-slate-ink">{label}</span>{value}</span></a>
                    ) : (
                      <div className="flex min-h-16 items-center gap-4 py-3"><Icon aria-hidden size={20} className="text-amber-deep" /><span><span className="block text-sm text-slate-ink">{label}</span>{value} <Tbc /></span></div>
                    )}
                  </li>
                ))}
                <li className="flex min-h-16 items-center gap-4 py-3"><Clock aria-hidden size={20} className="text-amber-deep" /><span><span className="block text-sm text-slate-ink">Office hours</span>{institute.hours}</span></li>
              </ul>
            </div>
            <div>
              <h2 className="flex items-center gap-3 text-2xl font-semibold">Find us {!isConfigured(institute.address) && <Tbc />}</h2>
              <p className="mt-3 flex items-start gap-2 text-slate-ink"><MapPin aria-hidden size={18} className="mt-1 shrink-0" />{institute.address}</p>
              {institute.mapEmbedUrl ? (
                <iframe title="Map showing the institute's location" src={institute.mapEmbedUrl} loading="lazy" className="mt-4 h-64 w-full border border-rule" />
              ) : (
                <div className="ruled mt-4 grid h-56 place-items-center border border-dashed border-amber/70 bg-paper-dim p-6 text-center text-slate-ink">
                  Map appears here once the address is confirmed and a map embed URL is added.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
