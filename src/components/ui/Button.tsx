/**
 * Button system - Unified button components for links and buttons.
 * 
 * Provides consistent styling, variants, sizes, and accessibility features
 * across all interactive elements.
 */

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

// Base styles shared by all buttons
const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed";

// Size variants
const sizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-sm",
  xl: "px-8 py-4 text-base",
} as const;

// Visual variants
const variants = {
  primary: "bg-brand text-ink hover:bg-brand-dark",
  secondary: "border border-ink/20 text-ink hover:border-ink/40 hover:bg-ink/5",
  ghost: "text-ink hover:bg-ink/5",
  outline: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
  danger: "bg-error text-white hover:bg-error/90",
  success: "bg-success text-white hover:bg-success/90",
  inverse: "bg-ink text-white hover:bg-ink/90",
} as const;

// Button link props (for Next.js Link)
type ButtonLinkProps = {
  href: string;
  label: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children?: ReactNode;
  external?: boolean;
};

// Button element props (for native button)
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
};

/**
 * ButtonLink - A button that renders as a Next.js Link.
 * Use for navigation within the app.
 */
export function ButtonLink({
  href,
  label,
  variant = "primary",
  size = "md",
  className,
  children,
  external = false,
}: ButtonLinkProps) {
  const linkProps = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };

  return (
    <Link
      {...linkProps}
      className={cn(baseStyles, sizes[size], variants[variant], className)}
    >
      {children || label}
    </Link>
  );
}

/**
 * Button - A native button element.
 * Use for form submissions, toggles, and other non-navigation actions.
 */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(baseStyles, sizes[size], variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

/**
 * IconButton - A button optimized for icon-only use.
 * Automatically applies square aspect ratio and appropriate padding.
 */
type IconButtonProps = Omit<ButtonProps, "size"> & {
  size?: "sm" | "md" | "lg";
  "aria-label": string;
};

const iconSizes = {
  sm: "h-8 w-8 p-1.5",
  md: "h-10 w-10 p-2",
  lg: "h-12 w-12 p-3",
} as const;

export function IconButton({
  variant = "ghost",
  size = "md",
  className,
  children,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        baseStyles,
        iconSizes[size],
        variants[variant],
        "rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
