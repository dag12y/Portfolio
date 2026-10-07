import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { cn } from "./ui/utils";

const navItems = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Path" },
  { id: "contact", label: "Contact" },
];

const sectionIds = ["home", ...navItems.map((item) => item.id)];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setProgress(
        scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0,
      );

      // Scrollspy: whichever section has crossed 35% of the viewport wins.
      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = id;
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="mx-auto w-full max-w-6xl px-4 pt-4">
        <div
          className={cn(
            "relative flex items-center justify-between overflow-hidden rounded-full border px-5 py-2.5 backdrop-blur-md transition-all duration-300",
            scrolled
              ? "border-border/80 bg-background/90 shadow-lg shadow-black/5"
              : "border-border/50 bg-background/60",
          )}
        >
          {progress > 0 && (
            <div
              className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-warm transition-transform duration-100 ease-out"
              style={{ transform: `scaleX(${progress})` }}
              aria-hidden
            />
          )}
          <button
            onClick={() => scrollToSection("home")}
            className="font-serif text-xl tracking-tight transition-colors duration-300 hover:text-warm"
          >
            DY
          </button>

          <div className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm transition-colors duration-300",
                  activeSection === item.id
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              className="rounded-full p-2 text-foreground"
              onClick={() => setIsOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out md:hidden",
            isOpen
              ? "visible max-h-72 opacity-100"
              : "invisible max-h-0 opacity-0",
          )}
        >
          <div className="mt-2 rounded-3xl border border-border bg-background/95 px-5 py-4 backdrop-blur-md">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "rounded-lg px-2 py-1.5 text-left text-sm transition-colors duration-300",
                    activeSection === item.id
                      ? "bg-accent text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
