/**
 * Performance utilities and optimizations.
 * 
 * Provides utilities for optimizing images, fonts, and other
 * performance-critical aspects of the application.
 */

/**
 * Image optimization settings.
 */
export const imageConfig = {
  /**
   * Default quality for Next.js Image component.
   * 75 is a good balance between quality and file size.
   */
  defaultQuality: 75,

  /**
   * Default sizes for responsive images.
   */
  defaultSizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",

  /**
   * Determine if an image should be prioritized (above the fold).
   */
  shouldPrioritize(context: {
    isAboveFold?: boolean;
    isHero?: boolean;
    isLogo?: boolean;
  }): boolean {
    return Boolean(context.isAboveFold || context.isHero || context.isLogo);
  },
};

/**
 * Font optimization settings.
 */
export const fontConfig = {
  /**
   * Font display strategy.
   * 'swap' shows fallback font immediately, then swaps when custom font loads.
   */
  display: "swap" as const,

  /**
   * Preload critical fonts.
   */
  preload: true,

  /**
   * Font subsets to load.
   */
  subsets: ["latin"] as const,
};

/**
 * Determine if a component should be dynamically imported.
 * Use for heavy components that aren't immediately visible.
 */
export function shouldLazyLoad(context: {
  isAboveFold?: boolean;
  isHeavy?: boolean;
  isInteractive?: boolean;
}): boolean {
  // Don't lazy load if it's above the fold or if it's interactive
  if (context.isAboveFold || context.isInteractive) {
    return false;
  }
  // Lazy load heavy components below the fold
  return Boolean(context.isHeavy);
}
