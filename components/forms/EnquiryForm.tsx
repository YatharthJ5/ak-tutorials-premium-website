"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, MessageCircle } from "lucide-react";
import { courses } from "@/data/courses";
import { institute, isConfigured, whatsappHref } from "@/data/institute";

type Values = { name: string; phone: string; course: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter the student's or parent's name.";
  const digits = v.phone.replace(/\D/g, "");
  if (!/^[+\d\s()-]+$/.test(v.phone.trim()) || digits.length < 10 || digits.length > 15) e.phone = "Enter a valid phone number with 10 to 15 digits.";
  if (!v.course) e.course = "Choose a course, or select “Not sure yet”.";
  if (v.message.length > 500) e.message = "Please keep the message under 500 characters.";
  return e;
}

const field = "mt-2 block min-h-12 w-full rounded-sm border bg-paper px-4 py-3 text-base text-ink placeholder:text-slate-ink/60";

export default function EnquiryForm() {
  const params = useSearchParams();
  const preset = params.get("course") ?? "";
  const [values, setValues] = useState<Values>({ name: "", phone: "", course: courses.some((c) => c.slug === preset) ? preset : "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  const set = (k: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((s) => ({ ...s, [k]: e.target.value }));
    if (errors[k]) setErrors((s) => ({ ...s, [k]: undefined }));
  };

  const courseLabel = values.course === "not-sure" ? "Not sure yet" : courses.find((c) => c.slug === values.course)?.title ?? "";
  const waText = `Hello ${institute.name}, I would like to enquire about admission.\nName: ${values.name}\nPhone: ${values.phone}\nCourse: ${courseLabel}${values.message ? `\nMessage: ${values.message}` : ""}`;

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length === 0) setDone(true);
    else document.getElementById("form-errors")?.focus();
  }

  const errCount = Object.keys(errors).length;
  const err = (k: keyof Values) => errors[k] && <p id={`${k}-err`} className="mt-2 flex items-center gap-1.5 text-sm font-medium text-red-700"><AlertCircle aria-hidden size={15} />{errors[k]}</p>;
  const bd = (k: keyof Values) => (errors[k] ? "border-red-600" : "border-ink/30");
  const aria = (k: keyof Values) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <AnimatePresence mode="wait">
      {done ? (
        <motion.div key="ok" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} role="status" className="border border-amber bg-paper p-8">
          <CheckCircle2 aria-hidden className="text-amber-deep" size={36} />
          <h3 className="mt-4 text-2xl font-semibold">Your enquiry is ready, but not yet sent</h3>
          <p className="mt-3 leading-relaxed text-slate-ink">
            This is a demonstration site with no server connected, so nothing has been stored or delivered to the institute.
            To reach the institute, send your details on WhatsApp or call.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {isConfigured(institute.whatsapp) ? (
              <a href={whatsappHref(waText)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-amber px-6 font-semibold text-ink-deep hover:bg-amber-light">
                <MessageCircle aria-hidden size={18} /> Send on WhatsApp
              </a>
            ) : (
              <p className="text-sm text-slate-ink">WhatsApp sending activates once a number is set in <code>data/institute.ts</code>.</p>
            )}
            <button type="button" onClick={() => setDone(false)} className="min-h-12 rounded-sm border border-ink/30 px-6 font-semibold hover:bg-ink hover:text-paper">Edit details</button>
          </div>
        </motion.div>
      ) : (
        <motion.form key="form" noValidate onSubmit={onSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 border border-rule bg-paper p-6 sm:p-8" aria-label="Admission enquiry form">
          {errCount > 0 && (
            <div id="form-errors" tabIndex={-1} role="alert" className="flex items-start gap-2 border border-red-600 bg-red-50 p-4 text-sm font-medium text-red-800">
              <AlertCircle aria-hidden size={18} className="mt-0.5 shrink-0" /> Please fix the {errCount} highlighted {errCount === 1 ? "field" : "fields"} and try again.
            </div>
          )}
          <div>
            <label htmlFor="name" className="font-semibold">Name</label>
            <input id="name" name="name" autoComplete="name" value={values.name} onChange={set("name")} className={`${field} ${bd("name")}`} placeholder="Student or parent name" {...aria("name")} />
            {err("name")}
          </div>
          <div>
            <label htmlFor="phone" className="font-semibold">Phone number</label>
            <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={set("phone")} className={`${field} ${bd("phone")}`} placeholder="e.g. +91 98765 43210" {...aria("phone")} />
            {err("phone")}
          </div>
          <div>
            <label htmlFor="course" className="font-semibold">Course of interest</label>
            <select id="course" name="course" value={values.course} onChange={set("course")} className={`${field} ${bd("course")}`} {...aria("course")}>
              <option value="">Select a course</option>
              {courses.map((c) => <option key={c.slug} value={c.slug}>{c.title}</option>)}
              <option value="not-sure">Not sure yet</option>
            </select>
            {err("course")}
          </div>
          <div>
            <label htmlFor="message" className="font-semibold">Message <span className="font-normal text-slate-ink">(optional)</span></label>
            <textarea id="message" name="message" rows={4} value={values.message} onChange={set("message")} className={`${field} ${bd("message")}`} placeholder="Class, subjects, or any questions" {...aria("message")} />
            <p className="mt-1 text-right text-xs text-slate-ink">{values.message.length}/500</p>
            {err("message")}
          </div>
          <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-ink px-6 font-semibold text-paper hover:bg-ink-soft sm:w-auto">Prepare my enquiry</button>
          <p className="text-sm text-slate-ink">Demo mode: this form validates your details but does not transmit them anywhere.</p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
