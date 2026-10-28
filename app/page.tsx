import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import CoursesPreview from "@/components/sections/CoursesPreview";
import Approach from "@/components/sections/Approach";
import Journey from "@/components/sections/Journey";
import ResultsPanel from "@/components/sections/ResultsPanel";
import FacultyGrid from "@/components/sections/FacultyGrid";
import Testimonials from "@/components/sections/Testimonials";
import FaqSection from "@/components/sections/FaqSection";
import CtaBand from "@/components/sections/CtaBand";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CoursesPreview />
      <Approach />
      <Journey />
      <Section id="results" title="Results, once they are verified" intro="Achievements are shown only when the institute can support them with official records.">
        <Reveal><ResultsPanel /></Reveal>
        <div className="mt-8"><Button href="/results" variant="ghost">Visit the results page</Button></div>
      </Section>
      <Section id="faculty" tone="dim" title="The teachers in the room" intro="Faculty profiles are placeholders until names, subjects and qualifications are confirmed.">
        <FacultyGrid />
      </Section>
      <Section id="testimonials" title="What students and parents say"><Testimonials /></Section>
      <FaqSection />
      <CtaBand />
    </>
  );
}
