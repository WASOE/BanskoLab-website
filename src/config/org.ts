/**
 * Central configuration for BanskoLab Foundation organization constants.
 * 
 * This file serves as the single source of truth for:
 * - Organization identification (name, registration IDs)
 * - Contact information (address, emails)
 * - Document paths
 * - Audit and compliance dates
 * - Status information
 * 
 * Update values here to propagate changes across the entire application.
 */

export const orgConfig = {
  // Organization Identity
  name: "BanskoLab Foundation",
  legalName: '"BanskoLab" Foundation',
  legalForm: "Foundation (non-profit)",
  
  // Registration IDs
  registration: {
    oid: "E10308541",
    uic: "207128442",
    pic: "207128442", // Same as UIC
  },
  
  // Address
  address: {
    street: "1 Pirin Street",
    city: "Bansko",
    postalCode: "2770",
    country: "BG",
    countryName: "Bulgaria",
    full: "1 Pirin Street, Bansko 2770, Bulgaria",
  },
  
  // Contact
  contact: {
    email: {
      info: "info@banskolab.com",
      hello: "hello@banskolab.com",
      primary: "info@banskolab.com", // Default contact email
    },
    phone: "+359 87 634 2540",
    website: "https://banskolab.com",
  },
  
  // Legal Representative
  legalRepresentative: "Jose Fiallo",
  
  // Compliance & Audit
  compliance: {
    nextAuditDate: "2026-06-30",
    verifiedStatus: "ACTIVE",
    foundationType: "Foundation (non-profit)",
    registered: "Registered in Bulgaria",
    status: "Active",
  },
  
  // Document Paths
  documents: {
    annualReport: "/documents/annual-report-2024.pdf",
    partnerPack: "/documents/partner-pack-v1.5.pdf",
    pif: "/documents/BanskoLab_PIF_v4_2.pdf",
    financialPolicy: "/documents/financial-policy-v1.2.pdf",
    privacyPolicy: "/documents/privacy-policy-v1.2.pdf",
    safeguarding: "/documents/code-of-conduct-and-safety-plan-v1.2.pdf",
    riskManagement: "/documents/risk-management-plan-v1.2.pdf",
    registrationExtract: "/documents/registration-extract-e10308541.pdf",
  },
  
  // Policy Routes (not documents, but pages)
  policies: {
    safeguarding: "/policies/safeguarding",
    privacy: "/policies/privacy",
    codeOfConduct: "/policies/code-of-conduct",
  },
} as const;

// Type-safe access helpers
export type OrgConfig = typeof orgConfig;
