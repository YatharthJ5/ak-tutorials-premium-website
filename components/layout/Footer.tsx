import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Tbc from "@/components/ui/Tbc";
import { institute, isConfigured, nav, phoneHref, emailHref, whatsappHref } from "@/data/institute";

const socials = [
  { key: "instagram", label: "Instagram", Icon: Instagram },
  { key: "facebook", label: "Facebook", Icon: Facebook },
  { key: "youtube", label: "YouTube", Icon: Youtube },
];

export default function Footer() {
  const activeSocials = socials.filter((s) => institute.social[s.key]);
  const row = "flex items-start gap-3 hover:text-amber-light";
  return (
    <footer className="ruled-dark bg-ink-deep text-paper/80">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1.3fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm leading-relaxed">{institute.tagline} Enquire today to find the right batch for your child.</p>
          {activeSocials.length > 0 ? (
            <ul className="mt-6 flex gap-3">
              {activeSocials.map(({ key, label, Icon }) => (
                <li key={key}>
                  <a href={institute.social[key]} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-sm border border-paper/25 hover:bg-paper hover:text-ink"><Icon aria-hidden size={18} /></a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 text-sm text-paper/60">Social links appear here once added in <code>data/institute.ts</code>.</p>
          )}
        </div>
        <nav aria-label="Footer">
          <h2 className="font-display text-xl text-paper">Explore</h2>
          <ul className="mt-4 space-y-1">
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="inline-flex min-h-10 items-center hover:text-amber-light">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div id="footer-contact">
          <h2 className="font-display text-xl text-paper">Contact</h2>
          <ul className="mt-4 space-y-3">
            <li><a href={phoneHref()} className={row}><Phone aria-hidden size={18} className="mt-1 shrink-0 text-amber-light" />{institute.phone}{!isConfigured(institute.phone) && <Tbc />}</a></li>
            <li><a href={whatsappHref()} className={row}><MessageCircle aria-hidden size={18} className="mt-1 shrink-0 text-amber-light" />WhatsApp{!isConfigured(institute.whatsapp) && <Tbc />}</a></li>
            <li><a href={emailHref()} className={row}><Mail aria-hidden size={18} className="mt-1 shrink-0 text-amber-light" />{institute.email}</a></li>
            <li className="flex items-start gap-3"><MapPin aria-hidden size={18} className="mt-1 shrink-0 text-amber-light" />{institute.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/15">
        <p className="container-x py-5 text-sm text-paper/60">{institute.demoNotice} &copy; {new Date().getFullYear()} {institute.name}.</p>
      </div>
    </footer>
  );
}
