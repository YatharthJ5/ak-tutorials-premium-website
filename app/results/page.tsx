import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/Section";
import Section from "@/components/ui/Section";
import ResultsPanel from "@/components/sections/ResultsPanel";
import Testimonials from "@/components/sections/Testimonials";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Results",
  description: "Verified results and achievements of A.K. Tutorials students, added once confirmed.",
  openGraph: { title: "Results | A.K. Tutorials" },
};

export default function ResultsPage() {
  return (
    <>
      <PageHeader title="Results and achievements" intro="A home for verified exam results and student success stories, shown only when backed by official records." />
      <Section title="Achievements"><ResultsPanel /></Section>
      <Section tone="dim" title="Student stories"><Testimonials /></Section>
      <CtaBand />
    </>
  );
}
