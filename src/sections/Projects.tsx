import { projects } from "@/data/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/Reveal";

export function Projects({ containerClass }: { containerClass: string }) {
  return (
    <section className={`${containerClass} section-soft pb-8`} id="projects">
      <h2 className="text-2xl font-bold mb-2">Projects</h2>
      <p className="text-sm mb-4 opacity-70">A few things I’ve built and tinkered with.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => {
          const hasLive = !!p.live && p.live !== "#";
          const target = hasLive ? p.live! : p.repo;
          const targetLabel = hasLive ? "Live" : "Repo";

          return (
            <Reveal key={p.name} delay={i * 0.03}>
              <Card
                className="group glass hover-glow h-full cursor-pointer hover:ring-1 hover:ring-slate-300/60 dark:hover:ring-slate-700/60"
                role={target ? "button" : undefined}
                tabIndex={target ? 0 : -1}
                onClick={() => target && window.open(target, "_blank", "noopener,noreferrer")}
                onKeyDown={(e) => {
                  if (!target) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    window.open(target, "_blank", "noopener,noreferrer");
                  }
                }}
                aria-label={target ? `${p.name} — open ${targetLabel}` : p.name}
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2">
                      <span className="group-hover:underline underline-offset-4 decoration-slate-400">
                        {p.name}
                      </span>
                      {target && (
                        <span className="text-[10px] uppercase tracking-wide rounded-full px-2 py-0.5 border border-slate-300/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-300">
                          {targetLabel}
                        </span>
                      )}
                    </span>
                    <span className="flex items-center gap-2">
                      {target && (
                        <ArrowUpRight
                          className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                          aria-hidden
                        />
                      )}
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="opacity-80 hover:opacity-100"
                          title="Open GitHub repo"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {hasLive && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          className="opacity-80 hover:opacity-100"
                          title="Open live site"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-3">
                  <p className="text-sm text-slate-600 dark:text-slate-300">{p.blurb}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} className="rounded-2xl" variant="outline">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
