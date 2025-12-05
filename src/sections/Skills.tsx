import { groupedSkills } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/Reveal";

export function Skills({ containerClass }: { containerClass: string }) {
  return (
    <section className={`${containerClass} section-soft pb-8`} id="skills">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>

      
      <div className="columns-1 md:columns-2 gap-6 space-y-6">
  {groupedSkills.map((group, i) => (
    <Reveal key={group.label} delay={i * 0.04}>
      <div className="glass hover-glow p-4 rounded-2xl flex flex-col break-inside-avoid">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-wide opacity-70">
            {group.label}
          </h3>
          <span className="text-[11px] opacity-50">
            {group.items.length}
          </span>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {group.items.map((s) => (
            <Badge
              key={s}
              variant="outline"
              className="
                rounded-xl px-3 py-1 text-sm
                bg-white/5 dark:bg-white/5
                border border-white/10
                text-slate-300 dark:text-slate-200
                hover:bg-white/10 
                transition
              "
            >
              {s}
            </Badge>
          ))}
        </div>
      </div>
    </Reveal>
  ))}
</div>

    </section>
  );
}
