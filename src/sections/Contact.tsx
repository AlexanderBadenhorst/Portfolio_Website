// src/sections/Contact.tsx
import { profile } from "@/data/site";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Mail, ExternalLink } from "lucide-react";
import { gmailComposeUrl } from "@/lib/email";

export function Contact({ containerClass }: { containerClass: string }) {
  return (
    <section className={`${containerClass} section-soft pb-16`} id="contact">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>

      <Card className="rounded-2xl glass hover-glow">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  className="underline"
                  href={gmailComposeUrl(
                    profile.email,
                    "Hello from your portfolio"
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  {profile.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <a
                  className="underline"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>

              {profile.linkedin && (
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  <a
                    className="underline"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              )}
            </div>

            <div className="text-sm opacity-80">
              <p>
                Open to junior full-stack and backend roles with a focus on
                Java/Spring Boot, REST APIs, and SQL. Comfortable working with
                React/TypeScript, PostgreSQL, and modern development tooling.
                Also available for freelance project work.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
