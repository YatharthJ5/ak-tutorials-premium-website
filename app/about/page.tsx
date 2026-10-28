import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/Section";
import Section from "@/components/ui/Section";
import Approach from "@/components/sections/Approach";
import FacultyGrid from "@/components/sections/FacultyGrid";
import CtaBand from "@/components/sections/CtaBand";
import Tbc from "@/components/ui/Tbc";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { values } from "@/data/content";
import { institute } from "@/data/institute";

export const metadata: Metadata = {
  title: "About",
  description: "About A.K. Tutorials: teaching philosophy, methodology, faculty and values.",
  openGraph: { title: "About | A.K. Tutorials" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About A.K. Tutorials" intro="A coaching institute built around one idea: students learn best when they can see, and explain, how they got to an answer." />
      <Section title="Our story" note={<Tbc>Institute history to be supplied</Tbc>}>
        <Reveal className="max-w-2xl space-y-5 text-lg leading-relaxed text-slate-ink">
          <p>{institute.name} is an educational coaching institute. [Add the institute&apos;s founding story, year, founder and location here.]</p>
          <p>[Add a short paragraph on who the institute serves and what families can expect.]</p>
        </Reveal>
      </Section>
      <Section tone="dim" title="Teaching philosophy" intro="Marks follow understanding. Our classrooms are organised around that order, not the reverse.">
        <Reveal className="max-w-2xl text-lg leading-relaxed text-slate-ink">
          <p>A student who can explain a step can repeat it under exam pressure. So we ask for reasoning in class, praise honest mistakes, and treat every wrong answer as information about what to teach next. [Replace with the institute&apos;s own philosophy.]</p>
        </Reveal>
      </Section>
      <Approach />
      <Section title="Mission and values">
        <Stagger className="grid gap-8 md:grid-cols-3">
          {values.map((v) => (
            <StaggerItem key={v.title} className="border-t-2 border-amber pt-5">
              <h3 className="text-2xl font-semibold">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-ink">{v.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
      <Section tone="dim" title="Faculty" intro="Profiles will list verified qualifications and subjects."><FacultyGrid /></Section>
      <CtaBand />
    </>
  );
}
