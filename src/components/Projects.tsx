import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { projects } from "../data/content";

const Projects = () => {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section id="work" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Work"
          title="Selected projects"
          description="Featured work in full; smaller pieces below."
        />

        <div className="space-y-16">
          {featured.map((project, index) => (
            <Reveal key={project.id} delay={(index % 2) * 120}>
              <article className="group grid items-center gap-8 lg:grid-cols-2">
                <div
                  className={`overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 group-hover:-translate-y-1 group-hover:border-warm/40 group-hover:shadow-xl group-hover:shadow-black/10 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 sm:h-80"
                  />
                </div>
                <div>
                  <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                    {project.category} · {project.status}
                  </p>
                  <h3 className="font-serif mt-3 text-3xl transition-colors duration-300 group-hover:text-warm">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-secondary px-3 py-1 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-5 text-sm">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-warm transition-all duration-300 hover:translate-x-0.5 hover:underline underline-offset-4"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live
                      </a>
                    )}
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors duration-300 hover:text-foreground"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {rest.map((project) => (
            <article
              key={project.id}
              className="group bg-background p-6 transition-colors duration-300 hover:bg-card"
            >
              <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                {project.category}
              </p>
              <h3 className="font-serif mt-2 text-2xl transition-colors duration-300 group-hover:text-warm">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-5 flex gap-4 text-sm">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-warm transition-all duration-300 hover:translate-x-0.5 hover:underline underline-offset-4"
                  >
                    Live
                  </a>
                )}
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  Code
                </a>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
