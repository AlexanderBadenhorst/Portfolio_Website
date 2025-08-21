// src/sections/Hero.tsx
import { profile, projects, certificates, groupedSkills } from "@/data/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, MapPin, Mail, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { CountUp } from "@/components/CountUp";
import { gmailComposeUrl } from "@/lib/email";

export function Hero({ containerClass }: { containerClass: string }) {
  // derived counts (sum across groups; switch to Set(...) for unique skills if you prefer)
  const projectCount = projects.length;
  const certCount = certificates.length;
  const skillsCount = groupedSkills.reduce((sum, g) => sum + g.items.length, 0);

  const projectLabel = projectCount === 1 ? "Project" : "Projects";
  const certLabel = certCount === 1 ? "Cert" : "Certs";

  return (
    <section className={`${containerClass} section-soft pt-14 sm:pt-20 pb-10 relative`} id="about">
      {/* subtle parallax-ish accent ring */}
      <motion.div
        aria-hidden
        className="absolute -z-10 left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(56,189,248,0.25), transparent)",
        }}
        initial={{ scale: 0.96, opacity: 0.6 }}
        animate={{ scale: 1.02, opacity: 0.85 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      <div className="grid md:grid-cols-5 gap-8 items-center">
        {/* Left: Title & summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight gradient-title">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg opacity-80">{profile.title}</p>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {profile.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="rounded-2xl">
              <a href="#projects">See my work</a>
            </Button>
            <Button asChild variant="outline" className="rounded-2xl">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            <MapPin className="w-4 h-4" /> {profile.location}
            <span className="opacity-30">•</span>
            <a
              href={gmailComposeUrl(profile.email)}
              target="_blank"
              rel="noreferrer"
              className="underline inline-flex items-center gap-2"
              aria-label="Email Alexander via Gmail"
            >
              <Mail className="w-4 h-4" />
              {profile.email}
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <Card className="glass hover-glow">
              <CardContent className="p-4">
                <div className="text-2xl font-bold">
                  <CountUp to={projectCount} duration={0.9} />
                </div>
                <div className="text-xs opacity-70">{projectLabel}</div>
              </CardContent>
            </Card>

            <Card className="glass hover-glow">
              <CardContent className="p-4">
                <div className="text-2xl font-bold">
                  <CountUp to={certCount} duration={0.7} delay={0.05} />
                </div>
                <div className="text-xs opacity-70">{certLabel}</div>
              </CardContent>
            </Card>

            <Card className="glass hover-glow">
              <CardContent className="p-4">
                <div className="text-2xl font-bold">
                  <CountUp to={skillsCount} duration={0.9} delay={0.1} />
                </div>
                <div className="text-xs opacity-70">Skills</div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Right: coding-focused highlights */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="md:col-span-2"
        >
          <Card className="glass hover-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5" /> Highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <div>🚀 Shipped full-stack projects (React/TS • Node/Express • PostgreSQL)</div>
              <div>🗄️ Strong SQL: schema design, joins, window functions, triggers</div>
              <div>✅ Certifications: Intro to Programming, JavaScript, HTMX, Node.js, React, SQL</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
