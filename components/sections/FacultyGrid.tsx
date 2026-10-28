import Image from "next/image";
import { faculty } from "@/data/faculty";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { isConfigured } from "@/data/institute";
import Tbc from "@/components/ui/Tbc";

export default function FacultyGrid() {
  return (
    <Stagger className="grid gap-6 md:grid-cols-3">
      {faculty.map((f, i) => (
        <StaggerItem key={i}>
          <article className="h-full border border-rule bg-paper p-6">
            {f.image ? (
              <Image src={f.image} alt={`Portrait of ${f.name}`} width={160} height={160} loading="lazy" className="h-24 w-24 rounded-sm object-cover" />
            ) : (
              <div aria-hidden className="ruled grid h-24 w-24 place-items-center rounded-sm border border-rule bg-paper-dim font-display text-3xl text-ink/50">
                {isConfigured(f.name) ? f.name.charAt(0) : "?"}
              </div>
            )}
            <h3 className="mt-5 text-xl font-semibold">{f.name}</h3>
            <p className="mt-1 font-semibold text-amber-deep">{f.role}</p>
            <p className="mt-3 leading-relaxed text-slate-ink">{f.bio}</p>
            {!isConfigured(f.name) && <div className="mt-4"><Tbc>Profile to be added</Tbc></div>}
          </article>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
