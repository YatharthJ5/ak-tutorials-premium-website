"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { institute, nav, phoneHref } from "@/data/institute";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="container-x flex h-[72px] items-center justify-between gap-4">
        <Link href="/" aria-label={`${institute.name} home`}><Logo /></Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => {
            const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
            return (
              <Link key={n.href} href={n.href} aria-current={active ? "page" : undefined}
                className="relative py-2 text-[15px] font-medium text-ink hover:text-amber-deep">
                {n.label}
                {active && <motion.span layoutId="nav-underline" className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-amber" />}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={phoneHref()} aria-label="Call the institute" className="grid h-12 w-12 place-items-center rounded-sm border border-ink/20 hover:bg-ink hover:text-paper">
            <Phone aria-hidden size={18} />
          </a>
          <Link href="/contact" className="inline-flex min-h-12 items-center rounded-sm bg-ink px-5 font-semibold text-paper hover:bg-ink-soft">
            {institute.enquiryCtaShort}
          </Link>
        </div>

        <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"} className="grid h-12 w-12 place-items-center rounded-sm border border-ink/20 lg:hidden">
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }} className="absolute inset-x-0 top-full border-b border-rule bg-paper shadow-sheet lg:hidden">
            <nav aria-label="Mobile" className="container-x flex flex-col py-4">
              {nav.map((n, i) => (
                <motion.div key={n.href} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.04 * i }}>
                  <Link href={n.href} className="flex min-h-14 items-center border-b border-rule font-display text-2xl">{n.label}</Link>
                </motion.div>
              ))}
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-sm bg-amber font-semibold text-ink-deep">{institute.enquiryCta}</Link>
                <a href={phoneHref()} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-ink/30 font-semibold">
                  <Phone aria-hidden size={18} /> Call the institute
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
