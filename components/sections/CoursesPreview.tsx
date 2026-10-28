import { courses } from "@/data/courses";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import CourseCard from "./CourseCard";

export default function CoursesPreview() {
  return (
    <Section id="courses" title="Programmes for every stage of school" intro="Sample programmes shown below. The institute's confirmed courses, batches and durations will replace them.">
      <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.slice(0, 3).map((c) => (<StaggerItem key={c.slug}><CourseCard course={c} /></StaggerItem>))}
      </Stagger>
      <div className="mt-10"><Button href="/courses" variant="secondary">See all courses</Button></div>
    </Section>
  );
}
