import { lazy, Suspense } from "react";
import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/content";

const Scene3D = lazy(() => import("./Scene3D"));

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden"
    >
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-background/10 via-background/50 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 pb-20">
        <p
          className="fade-up-in mb-6 text-sm tracking-[0.28em] text-warm uppercase"
          style={{ animationDelay: "0.05s" }}
        >
          {profile.role}
        </p>
        <h1
          className="fade-up-in font-serif max-w-3xl text-5xl leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl"
          style={{ animationDelay: "0.15s" }}
        >
          {profile.name}
        </h1>
        <p
          className="fade-up-in mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
          style={{ animationDelay: "0.28s" }}
        >
          {profile.summary}
        </p>

        <div
          className="fade-up-in mt-10 flex flex-wrap items-center gap-6"
          style={{ animationDelay: "0.42s" }}
        >
          <button
            onClick={() =>
              document
                .getElementById("work")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
          >
            Selected work
            <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </button>
          <div className="flex items-center gap-2 text-muted-foreground">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full p-2.5 transition-colors duration-300 hover:bg-accent hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-2.5 transition-colors duration-300 hover:bg-accent hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="rounded-full p-2.5 transition-colors duration-300 hover:bg-accent hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
