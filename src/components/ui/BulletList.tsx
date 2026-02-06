/**
 * BulletList - A reusable bullet list component with consistent styling.
 * 
 * Used for displaying lists of items (activities, outcomes, deliverables, etc.)
 * with consistent spacing and typography.
 */

import { cn } from "@/lib/utils";

type BulletListProps = {
  items: string[];
  className?: string;
  size?: "sm" | "base" | "lg";
  marker?: "bullet" | "dash" | "none";
};

export function BulletList({
  items,
  className,
  size = "base",
  marker = "bullet",
}: BulletListProps) {
  const sizeStyles = {
    sm: "text-xs text-ink/50",
    base: "text-sm text-ink/70 md:text-base",
    lg: "text-base text-ink/70 md:text-lg",
  };

  const markerStyles = {
    bullet: "•",
    dash: "—",
    none: "",
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <ul className={cn("mt-4 space-y-2", sizeStyles[size], className)}>
      {items.map((item, index) => (
        <li key={index}>
          {marker !== "none" && <span className="mr-2">{markerStyles[marker]}</span>}
          {item}
        </li>
      ))}
    </ul>
  );
}
