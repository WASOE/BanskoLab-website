/**
 * Tests for constants and helper functions.
 */

import {
  PROJECT_STATUS,
  PROGRAMME_CATEGORY,
  PARTNER_TYPE,
  isErasmusProject,
  isFieldDeliveryProject,
  isVillageTransformationProject,
} from "../constants";

describe("constants", () => {
  describe("PROJECT_STATUS", () => {
    it("should have all expected status values", () => {
      expect(PROJECT_STATUS.PLANNED).toBe("PLANNED");
      expect(PROJECT_STATUS.ACTIVE).toBe("ACTIVE");
      expect(PROJECT_STATUS.IN_DESIGN).toBe("IN DESIGN");
      expect(PROJECT_STATUS.COMPLETED).toBe("COMPLETED");
    });
  });

  describe("PROGRAMME_CATEGORY", () => {
    it("should have all expected category values", () => {
      expect(PROGRAMME_CATEGORY.ERASMUS_KA152).toBe("ERASMUS+ KA152");
      expect(PROGRAMME_CATEGORY.FIELD_DELIVERY).toBe("FIELD DELIVERY");
      expect(PROGRAMME_CATEGORY.VILLAGE_TRANSFORMATION).toBe(
        "VILLAGE TRANSFORMATION"
      );
    });
  });

  describe("PARTNER_TYPE", () => {
    it("should have all expected partner type values", () => {
      expect(PARTNER_TYPE.MUNICIPALITY).toBe("Municipality");
      expect(PARTNER_TYPE.PARTNER).toBe("Partner");
      expect(PARTNER_TYPE.PROGRAMME).toBe("Programme");
      expect(PARTNER_TYPE.INSTITUTION).toBe("Institution");
    });
  });

  describe("isErasmusProject", () => {
    it("should return true for Erasmus+ projects", () => {
      expect(
        isErasmusProject(["ERASMUS+ KA152", "Youth", "Bulgaria"])
      ).toBe(true);
      expect(isErasmusProject(["KA152", "Other tag"])).toBe(true);
      expect(isErasmusProject(["Some tag", "ERASMUS+ Programme"])).toBe(true);
    });

    it("should return false for non-Erasmus projects", () => {
      expect(isErasmusProject(["FIELD DELIVERY", "Other"])).toBe(false);
      expect(isErasmusProject([])).toBe(false);
    });
  });

  describe("isFieldDeliveryProject", () => {
    it("should return true for field delivery projects", () => {
      expect(isFieldDeliveryProject(["FIELD DELIVERY", "Other"])).toBe(true);
      expect(
        isFieldDeliveryProject(["Field delivery project", "Other"])
      ).toBe(true);
    });

    it("should return false for non-field delivery projects", () => {
      expect(isFieldDeliveryProject(["ERASMUS+ KA152"])).toBe(false);
      expect(isFieldDeliveryProject([])).toBe(false);
    });
  });

  describe("isVillageTransformationProject", () => {
    it("should return true for village transformation projects", () => {
      expect(
        isVillageTransformationProject(["VILLAGE TRANSFORMATION", "Other"])
      ).toBe(true);
      expect(
        isVillageTransformationProject(["Village transformation project"])
      ).toBe(true);
    });

    it("should return false for non-village transformation projects", () => {
      expect(isVillageTransformationProject(["ERASMUS+ KA152"])).toBe(false);
      expect(isVillageTransformationProject([])).toBe(false);
    });
  });
});
