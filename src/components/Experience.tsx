import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { timeline } from "../data/content";

const Experience = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-border py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Path" title="Experience & study" index="03" />

        <ol>
          {timeline.map((item, index) => {
            const isLast = index === timeline.length - 1;
            return (
              <Reveal
                key={item.title}
                as="li"
                delay={index * 90}
                className="group grid gap-x-8 gap-y-2 rounded-xl py-6 transition-colors duration-300 hover:bg-card/70 md:-mx-4 md:grid-cols-[8rem_2rem_1fr] md:px-4 md:py-8"
              >
                <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground md:pt-1 md:text-right">
                  {item.period}
                </p>

                <div className="relative hidden md:block">
                  {!isLast && (
                    <span
                      aria-hidden
                      className={`absolute left-1/2 w-px -translate-x-1/2 bg-border ${
                        index === 0 ? "top-8" : "inset-y-0"
                      }`}
                    />
                  )}
                  <span
                    aria-hidden
                    className="absolute top-7 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-warm transition-transform duration-300 group-hover:scale-125"
                  />
                </div>

                <div className="md:pt-0.5">
                  <h3 className="font-serif text-xl transition-colors duration-300 group-hover:text-warm">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-warm">{item.place}</p>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {item.note}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
