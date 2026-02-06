/**
 * Central constants for project statuses, programme categories, and partner types.
 * 
 * These constants replace string matching with type-safe enums/unions,
 * reducing silent bugs from typos and inconsistent casing.
 */

/**
 * Project status values.
 * Use these constants instead of string literals.
 */
export const PROJECT_STATUS = {
  PLANNED: "PLANNED",
  ACTIVE: "ACTIVE",
  IN_DESIGN: "IN DESIGN",
  COMPLETED: "COMPLETED",
} as const;

export type ProjectStatus = typeof PROJECT_STATUS[keyof typeof PROJECT_STATUS];

/**
 * Programme category tags.
 * These identify the type of programme/project.
 */
export const PROGRAMME_CATEGORY = {
  ERASMUS_KA152: "ERASMUS+ KA152",
  FIELD_DELIVERY: "FIELD DELIVERY",
  VILLAGE_TRANSFORMATION: "VILLAGE TRANSFORMATION",
} as const;

export type ProgrammeCategory = typeof PROGRAMME_CATEGORY[keyof typeof PROGRAMME_CATEGORY];

/**
 * Partner type values.
 */
export const PARTNER_TYPE = {
  MUNICIPALITY: "Municipality",
  PARTNER: "Partner",
  PROGRAMME: "Programme",
  INSTITUTION: "Institution",
} as const;

export type PartnerType = typeof PARTNER_TYPE[keyof typeof PARTNER_TYPE];

/**
 * Check if a project is an Erasmus+ project.
 */
export function isErasmusProject(tags: string[]): boolean {
  return tags.some(
    (tag) =>
      tag === PROGRAMME_CATEGORY.ERASMUS_KA152 ||
      tag.includes("ERASMUS+") ||
      tag.includes("KA152")
  );
}

/**
 * Check if a project is a field delivery project.
 */
export function isFieldDeliveryProject(tags: string[]): boolean {
  return tags.some(
    (tag) =>
      tag === PROGRAMME_CATEGORY.FIELD_DELIVERY ||
      tag.toLowerCase().includes("field delivery")
  );
}

/**
 * Check if a project is a village transformation project.
 */
export function isVillageTransformationProject(tags: string[]): boolean {
  return tags.some(
    (tag) =>
      tag === PROGRAMME_CATEGORY.VILLAGE_TRANSFORMATION ||
      tag.toLowerCase().includes("village transformation")
  );
}
