import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/Section";
import CoursesGrid from "@/components/sections/CoursesGrid";
import CtaBand from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Courses",
  description: "Explore sample programmes at A.K. Tutorials. Course details are placeholders until confirmed by the institute.",
  openGraph: { title: "Courses | A.K. Tutorials" },
};

export default function CoursesPage() {
  return (
    <>
      <PageHeader title="Courses" intro="Find a programme by category and enquire in one click. All course details are sample placeholders until the institute confirms them." />
      <section className="bg-paper py-16 sm:py-20"><div className="container-x"><CoursesGrid /></div></section>
      <CtaBand />
    </>
  );
}
