import { profile, skills, projects } from "../data/content";

const About = () => {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border py-24">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-3 text-sm tracking-[0.22em] text-warm uppercase">
            About
          </p>
          <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
            Building software that stays useful.
          </h2>
          <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
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
          </div>
        </div>

        <div className="flex flex-col justify-between gap-10">
          <div className="grid grid-cols-3 gap-6 border-y border-border py-8">
            <div>
              <p className="font-serif text-3xl">3+</p>
              <p className="mt-1 text-xs text-muted-foreground">Years building</p>
            </div>
            <div>
              <p className="font-serif text-3xl">{projects.length}</p>
              <p className="mt-1 text-xs text-muted-foreground">Shown here</p>
            </div>
            <div>
              <p className="font-serif text-3xl">AAU</p>
              <p className="mt-1 text-xs text-muted-foreground">ECE student</p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm text-muted-foreground">Stack I reach for</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border px-3 py-1 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-sm text-warm underline-offset-4 hover:underline"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
