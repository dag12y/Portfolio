import { Reveal } from "./Reveal";
import { cn } from "./ui/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  /** Editorial section number, e.g. "01". */
  index?: string;
}

const SectionHeader = ({
  eyebrow,
  title,
  description,
  className = "mb-12",
  index,
}: SectionHeaderProps) => {
  return (
    <Reveal
      className={cn("flex items-end justify-between gap-6", className)}
    >
      <div>
        <p className="mb-3 flex items-center gap-2 text-sm tracking-[0.22em] text-warm uppercase">
          {index ? (
            <>
              <span className="text-warm/50">{index}</span>
              <span aria-hidden className="text-warm/30">
                /
              </span>
            </>
          ) : null}
          {eyebrow}
        </p>
        <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="hidden max-w-xs text-right text-sm text-muted-foreground md:block">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
};

export { SectionHeader };
