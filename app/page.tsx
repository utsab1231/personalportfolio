import { Splash } from "@/components/splash";
import { NameMark } from "@/components/nav/name-mark";
import { SectionRail } from "@/components/nav/section-rail";
import { MobileNav } from "@/components/nav/mobile-nav";
import { ThemeSwitcher } from "@/components/nav/theme-switcher";
import { PageMascot } from "@/components/nav/page-mascot";
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
      <ThemeSwitcher />
      <PageMascot />
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
