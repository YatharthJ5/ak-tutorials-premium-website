"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { courses, courseCategories } from "@/data/courses";
import CourseCard from "./CourseCard";

export default function CoursesGrid() {
  const [cat, setCat] = useState<(typeof courseCategories)[number]>("All");
  const shown = cat === "All" ? courses : courses.filter((c) => c.category === cat);
  return (
    <div>
      <div role="group" aria-label="Filter courses by category" className="flex flex-wrap gap-2">
        {courseCategories.map((c) => (
          <button key={c} type="button" onClick={() => setCat(c)} aria-pressed={cat === c}
            className={`min-h-11 rounded-sm border px-5 text-sm font-semibold transition-colors ${cat === c ? "border-ink bg-ink text-paper" : "border-ink/25 hover:border-ink"}`}>
            {c}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-ink" aria-live="polite">
        {shown.length === 0 ? "No courses in this category yet." : `Showing ${shown.length} sample ${shown.length === 1 ? "course" : "courses"}`}
      </p>
      <motion.div layout className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((c) => (
            <motion.div key={c.slug} layout initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.3 }}>
              <CourseCard course={c} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
