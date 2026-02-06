/**
 * Tests for timeline utilities.
 */

import {
  formatTimeline,
  hasPhases,
  getPhases,
  createTimelineFromString,
  type Timeline,
} from "../timeline";

describe("timeline", () => {
  describe("formatTimeline", () => {
    it("should format string timeline with locations", () => {
      const result = formatTimeline("2024 to 2026", ["Location 1", "Location 2"]);
      expect(result).toBe("2024 to 2026 · Location 1, Location 2");
    });

    it("should handle timeline string with pipe separator", () => {
      const result = formatTimeline(
        "10-day exchange | Starting Summer 2026",
        ["Location"]
      );
      expect(result).toBe("10-day exchange · Starting Summer 2026 · Location");
    });

    it("should format structured timeline", () => {
      const timeline: Timeline = {
        duration: "10-day exchange",
        start: "2024",
        end: "2026",
      };
      const result = formatTimeline(timeline, ["Location"]);
      expect(result).toBe("10-day exchange · 2024 to 2026 · Location");
    });

    it("should use raw string if provided", () => {
      const timeline: Timeline = {
        raw: "Custom timeline string",
      };
      const result = formatTimeline(timeline);
      expect(result).toBe("Custom timeline string");
    });
  });

  describe("hasPhases", () => {
    it("should return false for string timeline", () => {
      expect(hasPhases("2024 to 2026")).toBe(false);
    });

    it("should return true for timeline with phases", () => {
      const timeline: Timeline = {
        phases: [
          { name: "Phase 1", startDate: "2024-01-01" },
          { name: "Phase 2", startDate: "2024-06-01" },
        ],
      };
      expect(hasPhases(timeline)).toBe(true);
    });

    it("should return false for timeline without phases", () => {
      const timeline: Timeline = {
        start: "2024",
        end: "2026",
      };
      expect(hasPhases(timeline)).toBe(false);
    });
  });

  describe("getPhases", () => {
    it("should return empty array for string timeline", () => {
      expect(getPhases("2024 to 2026")).toEqual([]);
    });

    it("should return phases from timeline", () => {
      const phases = [
        { name: "Phase 1", startDate: "2024-01-01" },
        { name: "Phase 2", startDate: "2024-06-01" },
      ];
      const timeline: Timeline = { phases };
      expect(getPhases(timeline)).toEqual(phases);
    });
  });

  describe("createTimelineFromString", () => {
    it("should parse date range pattern", () => {
      const result = createTimelineFromString("2024 to 2026");
      expect(result.start).toBe("2024");
      expect(result.end).toBe("2026");
      expect(result.range).toBe("2024 to 2026");
    });

    it("should parse date range with ongoing", () => {
      const result = createTimelineFromString("2023 to ongoing");
      expect(result.start).toBe("2023");
      expect(result.end).toBe("ongoing");
    });

    it("should parse timeline with pipe separator", () => {
      const result = createTimelineFromString(
        "10-day exchange | Starting Summer 2026"
      );
      expect(result.duration).toBe("10-day exchange");
      expect(result.notes).toBe("Starting Summer 2026");
    });

    it("should return raw string for unrecognized patterns", () => {
      const result = createTimelineFromString("Custom timeline format");
      expect(result.raw).toBe("Custom timeline format");
    });
  });
});
