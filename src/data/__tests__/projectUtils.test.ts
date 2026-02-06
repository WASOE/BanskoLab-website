/**
 * Tests for project utilities.
 */

import {
  parseProjectItems,
  getConfirmedItems,
  getRequiredItems,
  hasRequiredItems,
  getConfirmedDeliverables,
  getRequiredDeliverables,
  getSupportNeeded,
} from "../projectUtils";
import type { Project } from "../types";

describe("projectUtils", () => {
  describe("parseProjectItems", () => {
    it("should parse items with REQUIRED INPUT prefix", () => {
      const items = [
        "Confirmed item",
        "REQUIRED INPUT: Required item",
        "Another confirmed item",
      ];
      const result = parseProjectItems(items);

      expect(result).toHaveLength(3);
      expect(result[0]).toEqual({ text: "Confirmed item", isRequired: false });
      expect(result[1]).toEqual({ text: "Required item", isRequired: true });
      expect(result[2]).toEqual({
        text: "Another confirmed item",
        isRequired: false,
      });
    });

    it("should handle case-insensitive REQUIRED INPUT prefix", () => {
      const items = ["required input: Test item"];
      const result = parseProjectItems(items);

      expect(result[0]).toEqual({ text: "Test item", isRequired: true });
    });
  });

  describe("getConfirmedItems", () => {
    it("should return only non-required items", () => {
      const items = [
        "Confirmed item",
        "REQUIRED INPUT: Required item",
        "Another confirmed",
      ];
      const result = getConfirmedItems(items);

      expect(result).toEqual(["Confirmed item", "Another confirmed"]);
    });

    it("should return empty array if all items are required", () => {
      const items = [
        "REQUIRED INPUT: Item 1",
        "REQUIRED INPUT: Item 2",
      ];
      const result = getConfirmedItems(items);

      expect(result).toEqual([]);
    });
  });

  describe("getRequiredItems", () => {
    it("should return only required items with prefix stripped", () => {
      const items = [
        "Confirmed item",
        "REQUIRED INPUT: Required item",
        "REQUIRED INPUT: Another required",
      ];
      const result = getRequiredItems(items);

      expect(result).toEqual(["Required item", "Another required"]);
    });
  });

  describe("hasRequiredItems", () => {
    it("should return true if any items are required", () => {
      const items = ["Confirmed", "REQUIRED INPUT: Required"];
      expect(hasRequiredItems(items)).toBe(true);
    });

    it("should return false if no items are required", () => {
      const items = ["Confirmed 1", "Confirmed 2"];
      expect(hasRequiredItems(items)).toBe(false);
    });
  });

  describe("getConfirmedDeliverables", () => {
    it("should return confirmed deliverables from project", () => {
      const project: Project = {
        slug: "test",
        title: "Test Project",
        year: 2024,
        goal: "Test goal",
        timeline: "2024",
        locations: [],
        partners: [],
        targetGroups: [],
        activities: [],
        deliverables: ["Confirmed deliverable", "REQUIRED INPUT: Required"],
        outcomes: [],
        status: "ACTIVE",
        riskNotes: [],
        evidence: [],
        supportNeeded: [],
        tags: [],
        gallery: [],
        lastUpdated: "2024-01-01",
      };

      const result = getConfirmedDeliverables(project);
      expect(result).toEqual(["Confirmed deliverable"]);
    });
  });

  describe("getSupportNeeded", () => {
    it("should strip REQUIRED INPUT prefix from support needed items", () => {
      const project: Project = {
        slug: "test",
        title: "Test Project",
        year: 2024,
        goal: "Test goal",
        timeline: "2024",
        locations: [],
        partners: [],
        targetGroups: [],
        activities: [],
        deliverables: [],
        outcomes: [],
        status: "ACTIVE",
        riskNotes: [],
        evidence: [],
        supportNeeded: [
          "REQUIRED INPUT: Support item 1",
          "Support item 2",
          "REQUIRED INPUT: Support item 3",
        ],
        tags: [],
        gallery: [],
        lastUpdated: "2024-01-01",
      };

      const result = getSupportNeeded(project);
      expect(result).toEqual([
        "Support item 1",
        "Support item 2",
        "Support item 3",
      ]);
    });
  });
});
