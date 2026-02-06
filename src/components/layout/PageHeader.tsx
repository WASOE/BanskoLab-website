import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  subtitle: string;
  eyebrow?: string;
  align?: "left" | "center";
};

export function PageHeader({
  title,
  subtitle,
  eyebrow,
  align = "left",
}: PageHeaderProps) {
  return (
    <div className="bg-white">
      <Container>
        <div
          className={cn(
            "py-12 md:py-20 lg:py-24",
            align === "center" && "text-center",
          )}
        >
          {eyebrow ? (
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-ink/60">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-3 text-[length:var(--step-2)] font-semibold text-ink">
            {title}
          </h1>
          <p
            className={cn(
              "mt-4 text-[length:var(--step-0)] text-ink/70",
              align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl",
            )}
          >
            {subtitle}
          </p>
        </div>
      </Container>
    </div>
  );
}
