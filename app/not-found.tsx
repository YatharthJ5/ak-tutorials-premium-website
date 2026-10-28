import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="container-x py-32">
      <h1 className="text-5xl font-semibold">That page is not in this notebook.</h1>
      <p className="mt-4 max-w-lg text-lg text-slate-ink">The link may be old or mistyped. Head back to the homepage or see the courses.</p>
      <div className="mt-8 flex gap-3"><Button href="/">Go home</Button><Button href="/courses" variant="secondary">Courses</Button></div>
    </section>
  );
}
