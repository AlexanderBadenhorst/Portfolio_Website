// src/sections/Certificates.tsx
import { certificates } from "@/data/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function Certificates({ containerClass }: { containerClass: string }) {
  return (
    <section className={`${containerClass} section-soft pb-8`} id="certs">
      <h2 className="text-2xl font-bold mb-2">Certificates</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((c, i) => {
          const clickable = !!c.url;
          const open = () => c.url && window.open(c.url, "_blank", "noopener,noreferrer");

          return (
            <Reveal key={c.title} delay={i * 0.03}>
              <Card
                className="group glass hover-glow cursor-pointer hover:ring-1 hover:ring-slate-300/60 dark:hover:ring-slate-700/60"
                role={clickable ? "button" : undefined}
                tabIndex={clickable ? 0 : -1}
                onClick={open}
                onKeyDown={(e) => {
                  if (!clickable) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    open();
                  }
                }}
                aria-label={clickable ? `Open certificate: ${c.title}` : c.title}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between gap-2 text-lg">
                    <span className="inline-flex items-center gap-2">
                      <GraduationCap className="w-5 h-5" />
                      <span className="group-hover:underline underline-offset-4 decoration-slate-400">
                        {c.title}
                      </span>
                    </span>

                    {clickable && (
                      <ExternalLink
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                        aria-hidden
                      />
                    )}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center justify-between gap-3">
                    <span>{c.org}</span>
                    <span className="opacity-75">{c.date}</span>
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
