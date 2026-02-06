import { cn } from "@/lib/utils";

type BadgeProps = {
  label: string;
  className?: string;
};

export function Badge({ label, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded bg-ink/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink/70 font-mono",
        className,
      )}
    >
      {label}
    </span>
  );
}
