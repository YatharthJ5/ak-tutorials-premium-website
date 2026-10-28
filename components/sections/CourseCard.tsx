import Link from "next/link";
import { ArrowRight, Clock, Users } from "lucide-react";
import type { Course } from "@/data/courses";
import Tbc from "@/components/ui/Tbc";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group flex h-full flex-col border border-rule bg-paper transition-shadow duration-300 hover:shadow-sheet focus-within:shadow-sheet">
      <div className="h-1.5 w-16 bg-amber transition-all duration-300 group-hover:w-full" />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-semibold text-amber-deep">{course.category}</span>
          {!course.confirmed && <Tbc>Details to be confirmed</Tbc>}
        </div>
        <h3 className="mt-3 text-2xl font-semibold leading-snug">{course.title}</h3>
        <dl className="mt-4 space-y-2 text-sm text-slate-ink">
          <div className="flex items-start gap-2"><dt className="sr-only">Audience</dt><Users aria-hidden size={16} className="mt-0.5 shrink-0" /><dd>{course.audience}</dd></div>
          <div className="flex items-start gap-2"><dt className="sr-only">Duration</dt><Clock aria-hidden size={16} className="mt-0.5 shrink-0" /><dd>{course.duration}</dd></div>
        </dl>
        <p className="mt-4 flex-1 leading-relaxed text-slate-ink">{course.description}</p>
        <Link href={`/contact?course=${course.slug}`} className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold underline decoration-amber decoration-2 underline-offset-4 hover:text-amber-deep">
          Enquire about this course <ArrowRight aria-hidden size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
