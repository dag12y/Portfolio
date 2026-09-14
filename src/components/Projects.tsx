import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { projects } from "../data/content";

const Projects = () => {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section id="work" className="scroll-mt-20 py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-sm tracking-[0.22em] text-warm uppercase">
              Work
            </p>
            <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
              Selected projects
            </h2>
          </div>
            <p className="hidden max-w-xs text-right text-sm text-muted-foreground md:block">
              Featured work in full; smaller pieces below.
            </p>
        </div>

        <div className="space-y-16">
          {featured.map((project, index) => (
            <article
              key={project.id}
              className="grid items-center gap-8 lg:grid-cols-2"
            >
              <div
                className={`overflow-hidden rounded-2xl border border-border bg-card ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover sm:h-80"
                />
              </div>
              <div>
                <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                  {project.category} · {project.status}
                </p>
                <h3 className="font-serif mt-3 text-3xl">{project.title}</h3>
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
                      className="inline-flex items-center gap-1.5 text-warm hover:underline underline-offset-4"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </a>
                  )}
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {rest.map((project) => (
            <article
              key={project.id}
              className="bg-background p-6 transition-colors hover:bg-card"
            >
              <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                {project.category}
              </p>
              <h3 className="font-serif mt-2 text-2xl">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-5 flex gap-4 text-sm">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-warm hover:underline underline-offset-4"
                  >
                    Live
                  </a>
                )}
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
