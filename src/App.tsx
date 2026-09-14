import { ThemeProvider } from "./components/ThemeProvider";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { profile } from "./data/content";

export default function App() {
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
        <footer className="border-t border-border py-8">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} {profile.name}
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
