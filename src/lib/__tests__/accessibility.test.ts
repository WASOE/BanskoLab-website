/**
 * Tests for accessibility utilities.
 */

import {
  generateAriaId,
  isDecorativeImage,
  generateProjectImageAlt,
  generatePartnerLogoAlt,
  getHeadingLevel,
  getLanguageSwitcherLabel,
  getNavLinkLabel,
} from "../accessibility";

describe("accessibility", () => {
  describe("generateAriaId", () => {
    it("should generate unique IDs with prefix", () => {
      const id1 = generateAriaId("test");
      const id2 = generateAriaId("test");

      expect(id1).toMatch(/^test-/);
      expect(id2).toMatch(/^test-/);
      // IDs should be different
      expect(id1).not.toBe(id2);
    });
  });

  describe("isDecorativeImage", () => {
    it("should return true for decorative image contexts", () => {
      expect(isDecorativeImage("decoration pattern")).toBe(true);
      expect(isDecorativeImage("border image")).toBe(true);
      expect(isDecorativeImage("divider element")).toBe(true);
      expect(isDecorativeImage("spacer image")).toBe(true);
    });

    it("should return false for informative images", () => {
      expect(isDecorativeImage("project activity photo")).toBe(false);
      expect(isDecorativeImage("team member portrait")).toBe(false);
    });
  });

  describe("generateProjectImageAlt", () => {
    it("should generate alt text with context", () => {
      const result = generateProjectImageAlt("Test Project", "learning activity");
      expect(result).toBe("Test Project - learning activity");
    });

    it("should generate alt text without context", () => {
      const result = generateProjectImageAlt("Test Project");
      expect(result).toBe("Test Project project activity");
    });
  });

  describe("generatePartnerLogoAlt", () => {
    it("should generate alt text for partner logo", () => {
      const result = generatePartnerLogoAlt("Test Partner");
      expect(result).toBe("Test Partner logo");
    });
  });

  describe("getHeadingLevel", () => {
    it("should return correct heading level", () => {
      expect(getHeadingLevel(1, 0)).toBe("h1");
      expect(getHeadingLevel(2, 1)).toBe("h3");
      expect(getHeadingLevel(3, -1)).toBe("h2");
    });

    it("should clamp to valid heading levels", () => {
      expect(getHeadingLevel(6, 1)).toBe("h6");
      expect(getHeadingLevel(1, -1)).toBe("h1");
    });
  });

  describe("getLanguageSwitcherLabel", () => {
    it("should generate label for language switch", () => {
      const result = getLanguageSwitcherLabel("en", "bg");
      expect(result).toBe("Switch to Bulgarian (currently English)");
    });

    it("should handle unknown locales", () => {
      const result = getLanguageSwitcherLabel("en", "fr");
      expect(result).toBe("Switch to fr (currently English)");
    });
  });

  describe("getNavLinkLabel", () => {
    it("should add current page indicator", () => {
      const result = getNavLinkLabel("Home", true);
      expect(result).toBe("Home (current page)");
    });

    it("should return label as-is for non-current pages", () => {
      const result = getNavLinkLabel("Home", false);
      expect(result).toBe("Home");
    });
  });
});
