/**
 * Accessibility utilities and helpers.
 * 
 * Provides utilities for ensuring WCAG 2.1 AA compliance and
 * improving accessibility across the application.
 */

/**
 * Generate a unique ID for ARIA relationships.
 */
export function generateAriaId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Check if an image should be decorative (empty alt) or informative.
 * Decorative images should have alt="" and aria-hidden="true".
 */
export function isDecorativeImage(context: string): boolean {
  // Images that are purely decorative (patterns, borders, etc.)
  const decorativePatterns = [
    "decoration",
    "pattern",
    "border",
    "divider",
    "spacer",
    "ornament",
  ];
  return decorativePatterns.some((pattern) =>
    context.toLowerCase().includes(pattern)
  );
}

/**
 * Generate descriptive alt text for project images.
 */
export function generateProjectImageAlt(
  projectTitle: string,
  context?: string
): string {
  if (context) {
    return `${projectTitle} - ${context}`;
  }
  return `${projectTitle} project activity`;
}

/**
 * Generate descriptive alt text for partner logos.
 */
export function generatePartnerLogoAlt(partnerName: string): string {
  return `${partnerName} logo`;
}

/**
 * Ensure heading hierarchy is correct.
 * Returns the appropriate heading level based on context.
 */
export function getHeadingLevel(
  baseLevel: 1 | 2 | 3 | 4 | 5 | 6,
  increment: number = 0
): `h${1 | 2 | 3 | 4 | 5 | 6}` {
  const level = Math.min(6, Math.max(1, baseLevel + increment));
  return `h${level}` as `h${1 | 2 | 3 | 4 | 5 | 6}`;
}

/**
 * Generate ARIA label for language switcher button.
 */
export function getLanguageSwitcherLabel(
  locale: string,
  targetLocale: string
): string {
  const localeNames: Record<string, string> = {
    en: "English",
    bg: "Bulgarian",
  };
  return `Switch to ${localeNames[targetLocale] || targetLocale} (currently ${localeNames[locale] || locale})`;
}

/**
 * Generate ARIA label for navigation links.
 */
export function getNavLinkLabel(label: string, isCurrent: boolean): string {
  return isCurrent ? `${label} (current page)` : label;
}
