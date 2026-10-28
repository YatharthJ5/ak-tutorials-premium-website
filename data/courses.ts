/**
 * Sample course data. Replace titles, audiences, durations and descriptions
 * with the institute's real programmes. Set `confirmed: true` once verified.
 */
export type Course = {
  slug: string;
  title: string;
  category: "School" | "Competitive" | "Foundation";
  audience: string;
  duration: string;
  description: string;
  confirmed: boolean;
};

export const courseCategories = ["All", "School", "Competitive", "Foundation"] as const;

export const courses: Course[] = [
  {
    slug: "school-subjects",
    title: "[Course: School Subjects]",
    category: "School",
    audience: "[Classes / boards to be confirmed]",
    duration: "[Duration]",
    description:
      "Concept-first classroom teaching with regular practice and revision, aligned to the school syllabus. Description to be replaced with the institute's own.",
    confirmed: false,
  },
  {
    slug: "board-exam-preparation",
    title: "[Course: Board Exam Preparation]",
    category: "School",
    audience: "[Board exam classes to be confirmed]",
    duration: "[Duration]",
    description:
      "Structured revision, answer-writing practice and timed tests ahead of board examinations. Details pending confirmation.",
    confirmed: false,
  },
  {
    slug: "competitive-exams",
    title: "[Course: Competitive Exam Programme]",
    category: "Competitive",
    audience: "[Target exams to be confirmed]",
    duration: "[Duration]",
    description:
      "A paced programme combining concept building, problem practice and mock tests. Exams covered will be listed once confirmed.",
    confirmed: false,
  },
  {
    slug: "foundation-batch",
    title: "[Course: Foundation Batch]",
    category: "Foundation",
    audience: "[Younger classes to be confirmed]",
    duration: "[Duration]",
    description:
      "Early-years grounding in maths and science thinking so later classes feel familiar, not frightening. Placeholder copy.",
    confirmed: false,
  },
  {
    slug: "doubt-clearing",
    title: "[Course: Doubt-Clearing Sessions]",
    category: "School",
    audience: "[Open to enrolled students? To be confirmed]",
    duration: "[Schedule]",
    description:
      "Dedicated slots where students bring the questions that did not click in class. Availability to be confirmed.",
    confirmed: false,
  },
  {
    slug: "test-series",
    title: "[Course: Test Series]",
    category: "Competitive",
    audience: "[Target exams to be confirmed]",
    duration: "[Schedule]",
    description:
      "Regular timed tests with reviewed answers so students learn from each attempt. Format to be confirmed.",
    confirmed: false,
  },
];
