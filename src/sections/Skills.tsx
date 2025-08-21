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
                    variant="secondary"
                    className="px-3 py-1 rounded-2xl text-sm"
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
