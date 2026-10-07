import { Reveal } from "./Reveal";
import { cn } from "./ui/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

const SectionHeader = ({
  eyebrow,
  title,
  description,
  className = "mb-12",
}: SectionHeaderProps) => {
  return (
    <Reveal
      className={cn("flex items-end justify-between gap-6", className)}
    >
      <div>
        <p className="mb-3 text-sm tracking-[0.22em] text-warm uppercase">
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
