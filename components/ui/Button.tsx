import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
};

const styles = {
  primary: "bg-amber text-ink-deep hover:bg-amber-light",
  secondary: "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  ghost: "text-ink underline decoration-amber decoration-2 underline-offset-4 hover:text-amber-deep",
  light: "border border-paper/40 text-paper hover:bg-paper hover:text-ink",
};

/** Link-styled button. Handles internal, tel:, mailto: and external URLs. */
export default function Button({ href, children, variant = "primary", className = "" }: Props) {
  const cls = `inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-6 py-3 text-base font-semibold transition-colors duration-200 ${styles[variant]} ${className}`;
  const external = href.startsWith("http");
  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return <Link href={href} className={cls}>{children}</Link>;
}
