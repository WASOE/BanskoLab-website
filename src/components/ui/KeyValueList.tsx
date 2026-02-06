/**
 * KeyValueList - A reusable component for displaying key-value pairs.
 * 
 * Used for displaying structured information like contact details, project facts, etc.
 */

import { cn } from "@/lib/utils";

type KeyValuePair = {
  key: string;
  value: React.ReactNode;
};

type KeyValueListProps = {
  items: KeyValuePair[];
  className?: string;
  size?: "sm" | "base" | "lg";
  keyClassName?: string;
  valueClassName?: string;
};

export function KeyValueList({
  items,
  className,
  size = "base",
  keyClassName,
  valueClassName,
}: KeyValueListProps) {
  const sizeStyles = {
    sm: "text-xs text-ink/70",
    base: "text-sm text-ink/70 md:text-base",
    lg: "text-base text-ink/70 md:text-lg",
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div className={cn("mt-4 space-y-2", sizeStyles[size], className)}>
      {items.map((item, index) => (
        <p key={index}>
          <strong className={cn("text-ink", keyClassName)}>
            {item.key}
          </strong>{" "}
          <span className={valueClassName}>{item.value}</span>
        </p>
      ))}
    </div>
  );
}
