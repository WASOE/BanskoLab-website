/**
 * Timeline structure for projects.
 * 
 * This module provides a structured, extensible timeline format that supports
 * both simple date ranges and complex phased timelines. The structure is
 * "additive only" - new fields can be added without breaking existing code.
 */

/**
 * Timeline phase for projects with multiple phases.
 * Each phase can have its own duration, dates, and description.
 */
export type TimelinePhase = {
  name: string;
  startDate?: string;
  endDate?: string;
  duration?: string;
  description?: string;
  // Additive: New fields can be added here without breaking existing code
};

/**
 * Structured timeline data.
 * Supports both simple date ranges and complex phased timelines.
 * 
 * This structure is additive-only: new optional fields can be added
 * without breaking existing code that uses older fields.
 */
export type Timeline = {
  /**
   * Simple duration description (e.g., "10-day youth exchange")
   */
  duration?: string;

  /**
   * Start date or date range start
   * Can be a year ("2023"), date ("2023-06-01"), or descriptive ("Summer 2026")
   */
  start?: string;

  /**
   * End date or date range end
   * Can be a year ("2026"), date ("2026-12-31"), or descriptive ("ongoing")
   */
  end?: string;

  /**
   * Formatted date range string (e.g., "2023 to ongoing", "2024 to 2026")
   * If provided, this takes precedence over start/end for display
   */
  range?: string;

  /**
   * Additional timeline notes or context
   */
  notes?: string;

  /**
   * Phases for multi-phase projects
   */
  phases?: TimelinePhase[];

  /**
   * Raw string format for backward compatibility
   * If provided, this is used as-is for display
   */
  raw?: string;

  // Additive: New optional fields can be added here without breaking existing code
};

/**
 * Format a timeline for display.
 * Handles both string and structured Timeline formats.
 */
export function formatTimeline(timeline: Timeline | string, locations?: string[]): string {
  // If it's a string, use the existing parsing logic
  if (typeof timeline === "string") {
    return formatTimelineString(timeline, locations);
  }

  // If raw string is provided, use it
  if (timeline.raw) {
    return formatTimelineString(timeline.raw, locations);
  }

  // Build display string from structured data
  const parts: string[] = [];

  // Add duration if present
  if (timeline.duration) {
    parts.push(timeline.duration);
  }

  // Add date range
  if (timeline.range) {
    parts.push(timeline.range);
  } else if (timeline.start || timeline.end) {
    const rangeParts: string[] = [];
    if (timeline.start) rangeParts.push(timeline.start);
    if (timeline.end) rangeParts.push(timeline.end);
    if (rangeParts.length > 0) {
      parts.push(rangeParts.join(" to "));
    }
  }

  // Add notes if present
  if (timeline.notes) {
    parts.push(timeline.notes);
  }

  // Add locations if provided
  if (locations && locations.length > 0) {
    parts.push(locations.join(", "));
  }

  return parts.join(" · ");
}

/**
 * Format a timeline string (backward compatibility).
 * Handles the existing string format with "|" separator.
 */
function formatTimelineString(timeline: string, locations?: string[]): string {
  // If timeline already contains location info (via "|"), use it as-is
  if (timeline.includes("|")) {
    return timeline.split("|").map((s) => s.trim()).join(" · ");
  }

  // Otherwise combine timeline with locations
  if (locations && locations.length > 0) {
    return `${timeline} · ${locations.join(", ")}`;
  }

  return timeline;
}

/**
 * Check if a timeline has phases.
 */
export function hasPhases(timeline: Timeline | string): boolean {
  if (typeof timeline === "string") {
    return false;
  }
  return timeline.phases !== undefined && timeline.phases.length > 0;
}

/**
 * Get timeline phases (returns empty array if not phased).
 */
export function getPhases(timeline: Timeline | string): TimelinePhase[] {
  if (typeof timeline === "string") {
    return [];
  }
  return timeline.phases || [];
}

/**
 * Create a simple timeline from a date range string.
 * Useful for migrating existing string timelines.
 */
export function createTimelineFromString(timelineString: string): Timeline {
  // Check if it's a simple date range pattern
  const rangePattern = /^(\d{4})\s*(?:to|-)\s*(ongoing|\d{4})$/i;
  const match = timelineString.match(rangePattern);

  if (match) {
    return {
      start: match[1],
      end: match[2] === "ongoing" ? "ongoing" : match[2],
      range: timelineString,
    };
  }

  // Check if it contains duration and date info separated by "|"
  if (timelineString.includes("|")) {
    const [duration, dateInfo] = timelineString.split("|").map((s) => s.trim());
    return {
      duration,
      notes: dateInfo,
      raw: timelineString, // Keep raw for backward compatibility
    };
  }

  // Default: return as raw string
  return {
    raw: timelineString,
  };
}
