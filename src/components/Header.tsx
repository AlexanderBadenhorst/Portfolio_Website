import { Button } from "@/components/ui/button";
import { MonitorCog, Sun, Moon, Download, Mail } from "lucide-react";
import { resume, profile } from "@/data/site";
import { gmailComposeUrl } from "@/lib/email";

export function Header({
  containerClass,
  dark,
  onToggleTheme,
}: {
  containerClass: string;
  dark: boolean;
  onToggleTheme: () => void;
}) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
      <div className={`${containerClass} flex items-center justify-between py-3`}>
        {/* Brand */}
        <div className="flex items-center gap-3">
          <MonitorCog className="w-6 h-6" />
          <span className="font-semibold">
            {profile.name.split(" ")[0].toLowerCase()}.dev
          </span>
        </div>

        {/* Nav */}
        <nav className="hidden sm:flex gap-4 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#certs" className="hover:underline">Certificates</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Email via Gmail compose */}
          <Button
            asChild
            size="sm"
            variant="outline"
            className="rounded-2xl"
            title={`Email ${profile.email}`}
          >
            <a
              href={gmailComposeUrl(
                profile.email,
                "Hello from your portfolio",
              )}
              target="_blank"
              rel="noreferrer"
            >
              <Mail className="w-4 h-4 mr-1" /> Email
            </a>
          </Button>

          {resume.enabled && (
  <Button
    size="sm"
    variant="outline"
    className="rounded-2xl"
    disabled
    title="Resume updating — coming soon"
  >
    <Download className="w-4 h-4 mr-1" /> Resume
  </Button>
)}


          <Button
            size="icon"
            variant="outline"
            className="rounded-2xl"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
        </div>
      </div>
    </header>
  );
}
