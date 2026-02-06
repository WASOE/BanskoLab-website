/**
 * ContentCard - A reusable card component for displaying content sections.
 * 
 * Used throughout the site for consistent card styling with title and content.
 */

import { cn } from "@/lib/utils";

type ContentCardProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "glass" | "highlighted";
};

export function ContentCard({
  title,
  children,
  className,
  variant = "default",
}: ContentCardProps) {
  const baseStyles = "rounded border p-6";
  
  const variantStyles = {
    default: "border-ink/10 bg-white",
    glass: "card-glass border-ink/20",
    highlighted: "border-ink/10 bg-ink/5",
  };

  return (
    <div className={cn(baseStyles, variantStyles[variant], className)}>
      {title && (
        <h2 className="text-xl font-semibold text-ink">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}
