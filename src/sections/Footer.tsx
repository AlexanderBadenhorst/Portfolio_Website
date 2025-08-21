import { profile } from "@/data/site";

export function Footer({ containerClass }: { containerClass: string }) {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-6">
      <div className={`${containerClass} flex flex-col sm:flex-row items-center justify-between gap-3 text-sm opacity-70`}>
        <div>© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
        <div className="flex items-center gap-3">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
