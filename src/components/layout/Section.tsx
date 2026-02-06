import { cn } from "@/lib/utils";

type SectionProps = {
  className?: string;
  children: React.ReactNode;
};

export function Section({ className, children }: SectionProps) {
  return (
    <section className={cn("py-20", className)}>
      {children}
    </section>
  );
}
