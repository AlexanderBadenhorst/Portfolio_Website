import * as React from "react";
import BackgroundFX from "@/components/BackgroundFX";
import { Header } from "@/components/Header";
import { Hero } from "@/sections/Hero";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Certificates } from "@/sections/Certificates";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function App() {
  const [dark, setDark] = React.useState<boolean>(() => {
    const stored = localStorage.getItem("theme");
    return stored ? stored === "dark" : true;
  });
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const sectionClass = "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8";

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50
                text-slate-900 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-950 dark:to-slate-950
                dark:text-slate-100 transition-colors"
    >
      <BackgroundFX />
      <Header
        containerClass={sectionClass}
        dark={dark}
        onToggleTheme={() => setDark((d) => !d)}
      />
      <Hero containerClass={sectionClass} />
      <Skills containerClass={sectionClass} />
      <Projects containerClass={sectionClass} />
      <Certificates containerClass={sectionClass} />
      <Contact containerClass={sectionClass} />
      <Footer containerClass={sectionClass} />
    </div>
  );
}
