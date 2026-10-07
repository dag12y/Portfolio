import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { timeline } from "../data/content";

const Experience = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-border py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Path" title="Experience & study" />

        <ol className="divide-y divide-border border-y border-border">
          {timeline.map((item, index) => (
            <Reveal
              key={item.title}
              as="li"
              delay={index * 90}
              className="group grid gap-3 py-8 transition-colors duration-300 hover:bg-card/70 md:grid-cols-[10rem_1fr_1.2fr] md:gap-8"
            >
              <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                {item.period}
              </p>
              <div>
                <h3 className="text-lg transition-colors duration-300 group-hover:text-warm">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-warm">{item.place}</p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.note}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
