/**
 * Project utilities for handling deliverables, evidence, required inputs, and timelines.
 * 
 * This module provides utilities to work with structured project data,
 * replacing brittle string matching with type-safe operations.
 */

import type { Project } from "./types";

/**
 * Represents a project item that can be either confirmed or required.
 * This replaces the "REQUIRED INPUT: ..." string pattern.
 */
export type ProjectItem = {
  text: string;
  isRequired: boolean;
};

/**
 * Convert a string array to ProjectItem array.
 * Handles migration from old "REQUIRED INPUT: ..." format.
 */
export function parseProjectItems(items: string[]): ProjectItem[] {
  return items.map((item) => ({
    text: item.replace(/^REQUIRED INPUT:\s*/i, ""),
    isRequired: /^REQUIRED INPUT:/i.test(item),
  }));
}

/**
 * Get only confirmed (non-required) items from a string array.
 */
export function getConfirmedItems(items: string[]): string[] {
  return items.filter((item) => !/^REQUIRED INPUT:/i.test(item));
}

/**
 * Get only required items from a string array.
 * Strips the "REQUIRED INPUT:" prefix for display.
 */
export function getRequiredItems(items: string[]): string[] {
  return items
    .filter((item) => /^REQUIRED INPUT:/i.test(item))
    .map((item) => item.replace(/^REQUIRED INPUT:\s*/i, ""));
}

/**
 * Check if any items in an array are required.
 */
export function hasRequiredItems(items: string[]): boolean {
  return items.some((item) => /^REQUIRED INPUT:/i.test(item));
}

/**
 * Get confirmed deliverables for a project.
 */
export function getConfirmedDeliverables(project: Project): string[] {
  return getConfirmedItems(project.deliverables);
}

/**
 * Get required deliverables for a project.
 */
export function getRequiredDeliverables(project: Project): string[] {
  return getRequiredItems(project.deliverables);
}

/**
 * Get confirmed evidence items for a project.
 */
export function getConfirmedEvidence(project: Project): string[] {
  return getConfirmedItems(project.evidence);
}

/**
 * Get required evidence items for a project.
 */
export function getRequiredEvidence(project: Project): string[] {
  return getRequiredItems(project.evidence);
}

/**
 * Get confirmed partners for a project.
 */
export function getConfirmedPartners(project: Project): string[] {
  return getConfirmedItems(project.partners);
}

/**
 * Get required partners for a project.
 */
export function getRequiredPartners(project: Project): string[] {
  return getRequiredItems(project.partners);
}

/**
 * Get support needed items (these are always required).
 */
export function getSupportNeeded(project: Project): string[] {
  // supportNeeded items are always required, but may have the prefix
  return project.supportNeeded.map((item) =>
    item.replace(/^REQUIRED INPUT:\s*/i, "")
  );
}

/**
 * Format project timeline for display.
 * Re-exports from timeline module for convenience.
 */
export { formatTimeline, hasPhases, getPhases, createTimelineFromString } from "./timeline";
export type { Timeline, TimelinePhase } from "./timeline";
