import { ThemeProvider } from "./components/ThemeProvider";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { profile } from "./data/content";
import { Analytics } from "@vercel/analytics/react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Path" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Hero />
          <Projects />
          <About />
          <Experience />
          <Contact />
        </main>
        <Analytics />
        <footer className="border-t border-border py-12">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-xs">
              <button
                onClick={() => scrollTo("home")}
                className="font-serif text-2xl tracking-tight transition-colors duration-300 hover:text-warm"
              >
                DY
              </button>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Practical software with a light visual touch — built from Addis
                Ababa, Ethiopia.
              </p>
            </div>

            <nav className="flex flex-col gap-3 text-sm">
              <p className="text-xs tracking-[0.22em] text-warm uppercase">
                Navigate
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {footerLinks.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>

            <div className="flex flex-col gap-3 text-sm">
              <p className="text-xs tracking-[0.22em] text-warm uppercase">
                Elsewhere
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-full p-2 text-muted-foreground transition-colors duration-300 hover:bg-accent hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full p-2 text-muted-foreground transition-colors duration-300 hover:bg-accent hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Email"
                  className="rounded-full p-2 text-muted-foreground transition-colors duration-300 hover:bg-accent hover:text-foreground"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="group ml-2 inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 transition-colors duration-300 hover:border-warm hover:text-warm"
                >
                  Top
                  <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-border px-6 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {profile.name}
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

