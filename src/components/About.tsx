import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { profile, skills, projects } from "../data/content";

/** Year Dagm started building software — used to calculate the years stat. */
const START_YEAR = 2022;
const yearsBuilding = Math.max(new Date().getFullYear() - START_YEAR, 1);

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-border py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="About"
          title="Building software that stays useful."
          index="02"
          className="mb-12"
        />

        <Reveal className="grid grid-cols-3 divide-x divide-border border-y border-border">
          <div className="px-4 py-8 first:pl-0 last:pr-0 md:py-10">
            <p className="font-serif text-4xl tracking-tight md:text-5xl">
              {yearsBuilding}+
            </p>
            <p className="mt-2 text-xs tracking-[0.14em] text-muted-foreground uppercase">
              Years building
            </p>
          </div>
          <div className="px-4 py-8 first:pl-0 last:pr-0 md:py-10">
            <p className="font-serif text-4xl tracking-tight md:text-5xl">
              {projects.length}
            </p>
            <p className="mt-2 text-xs tracking-[0.14em] text-muted-foreground uppercase">
              Projects shown
            </p>
          </div>
          <div className="px-4 py-8 first:pl-0 last:pr-0 md:py-10">
            <p className="font-serif text-4xl tracking-tight md:text-5xl">AAU</p>
            <p className="mt-2 text-xs tracking-[0.14em] text-muted-foreground uppercase">
              ECE student
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal
            delay={100}
            className="space-y-4 text-muted-foreground leading-relaxed"
          >
            <p>
              I’m a software developer and electrical engineering student. I
              care about tools people actually use: security sandboxes, language
              tech for Ethiopian languages, and small web apps that feel
              considered rather than crowded.
            </p>
            <p>
              I study at Addis Ababa University, train with A2SV, and lead
              community work at SkillBridge. When I’m not shipping, I’m usually
              learning — currently around ML, Rust, and cloud.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <p className="mb-4 text-sm text-muted-foreground">Stack I reach for</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border px-3 py-1 text-sm transition-colors duration-300 hover:border-warm/50 hover:bg-accent hover:text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-1.5 text-sm text-warm underline-offset-4 hover:underline"
            >
              Resume
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
