import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "@/components/ui/Providers";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { institute } from "@/data/institute";

export const metadata: Metadata = {
  metadataBase: new URL(institute.siteUrl),
  title: { default: `${institute.name} | ${institute.tagline}`, template: `%s | ${institute.name}` },
  description: institute.description,
  openGraph: { type: "website", siteName: institute.name, title: `${institute.name} | ${institute.tagline}`, description: institute.description, locale: "en_IN" },
  twitter: { card: "summary_large_image" },
};
export const viewport: Viewport = { themeColor: "#0A1730", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-amber focus:px-4 focus:py-3 focus:font-semibold focus:text-ink-deep">Skip to content</a>
        <Providers>
          <AnnouncementBar />
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
