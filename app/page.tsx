import { Splash } from "@/components/splash";
import { NameMark } from "@/components/nav/name-mark";
import { SectionRail } from "@/components/nav/section-rail";
import { MobileNav } from "@/components/nav/mobile-nav";
import { ThemeToggle } from "@/components/nav/theme-toggle";
import { Worm } from "@/components/worm";
import { Intro } from "@/components/sections/intro";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { About } from "@/components/sections/about";
import { Tryouts } from "@/components/sections/tryouts";
import { Contact } from "@/components/sections/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <Splash />
      <NameMark />
      <SectionRail />
      <MobileNav />
      <ThemeToggle />
      <Worm />
      <main className="flex-grow">
        <Intro />
        <Experience />
        <Projects />
        <Stack />
        <About />
        <Tryouts />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
