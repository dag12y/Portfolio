import { timeline } from "../data/content";

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm tracking-[0.22em] text-warm uppercase">
          Path
        </p>
        <h2 className="font-serif mb-12 text-4xl tracking-tight md:text-5xl">
          Experience & study
        </h2>

        <ol className="divide-y divide-border border-y border-border">
          {timeline.map((item) => (
            <li
              key={item.title}
              className="grid gap-3 py-8 md:grid-cols-[10rem_1fr_1.2fr] md:gap-8"
            >
              <p className="text-sm text-muted-foreground">{item.period}</p>
              <div>
                <h3 className="text-lg">{item.title}</h3>
                <p className="mt-1 text-sm text-warm">{item.place}</p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.note}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
