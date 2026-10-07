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

      {/* Mobile: vertical scrim keeps text readable over the scene. */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-background/20 via-background/65 to-background lg:hidden" />
      {/* Desktop: text side stays solid, scene side stays clear. */}
      <div className="pointer-events-none absolute inset-0 z-[1] hidden bg-gradient-to-r from-background via-background/85 to-transparent lg:block" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-28">
        <div className="lg:max-w-[54%]">
          <div
            className="fade-up-in mb-6 flex flex-wrap items-center gap-x-4 gap-y-3"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for internships &amp; freelance
            </span>
            <p className="text-sm tracking-[0.28em] text-warm uppercase">
              {profile.role}
            </p>
          </div>

          <h1
            className="fade-up-in font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl"
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
      </div>

      {/* Scroll hint */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 hidden justify-center sm:flex">
        <div
          className="fade-up-in flex flex-col items-center gap-2 text-muted-foreground"
          style={{ animationDelay: "0.8s" }}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <span className="relative block h-10 w-px overflow-hidden bg-border">
            <span className="animate-scroll-line absolute inset-0 block bg-warm" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
