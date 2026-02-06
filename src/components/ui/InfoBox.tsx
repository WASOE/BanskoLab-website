/**
 * InfoBox - A reusable component for displaying highlighted information.
 * 
 * Used for quotes, callouts, partner pack boxes, and other highlighted content.
 */

import { cn } from "@/lib/utils";

type InfoBoxProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "quote" | "highlight";
};

export function InfoBox({
  children,
  className,
  variant = "default",
}: InfoBoxProps) {
  const variantStyles = {
    default: "rounded border border-ink/10 bg-white p-6",
    quote: "rounded border border-ink/10 bg-white p-6",
    highlight: "rounded border border-ink/10 bg-ink/5 p-6",
  };

  const contentStyles = {
    default: "text-sm text-ink/70",
    quote: "text-sm text-ink/70 italic",
    highlight: "text-sm text-ink/70",
  };

  return (
    <div className={cn(variantStyles[variant], className)}>
      <div className={contentStyles[variant]}>
        {children}
      </div>
    </div>
  );
}
