import { groupedSkills } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/Reveal";

export function Skills({ containerClass }: { containerClass: string }) {
  return (
    <section className={`${containerClass} section-soft pb-8`} id="skills">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {groupedSkills.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.04}>
            <div className="glass hover-glow p-4 rounded-2xl">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-wide opacity-70">
                  {group.label}
                </h3>
                <span className="text-[11px] opacity-50">{group.items.length}</span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <Badge
                    key={s}
                    variant="outline"
                    className="
                      rounded-2xl px-3 py-1 text-sm
                      bg-white/60 dark:bg-white/5
                      border border-slate-200/70 dark:border-white/10
                      text-slate-700 dark:text-slate-200
                      shadow-sm transition-colors
                      hover:bg-white/80 dark:hover:bg-white/10
                      hover:border-slate-300/70 dark:hover:border-white/15
                      hover:ring-2 hover:ring-sky-400/15
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
