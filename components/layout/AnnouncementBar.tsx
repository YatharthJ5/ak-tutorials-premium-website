import Link from "next/link";
import { institute } from "@/data/institute";

export default function AnnouncementBar() {
  return (
    <div className="bg-ink-deep text-paper">
      <div className="container-x flex min-h-10 items-center justify-center gap-3 py-2 text-center text-sm">
        <p>{institute.announcement}</p>
        <Link href="/contact" className="hidden shrink-0 font-semibold text-amber-light underline underline-offset-4 sm:inline">
          Enquire
        </Link>
      </div>
    </div>
  );
}
