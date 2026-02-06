/**
 * Jest setup file for test environment configuration.
 */

// Mock Next.js router
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      pathname: "/",
      query: {},
      asPath: "/",
    };
  },
  usePathname() {
    return "/";
  },
  useSearchParams() {
    return new URLSearchParams();
  },
}));

// Mock next-intl
jest.mock("next-intl", () => ({
  useTranslations: () => (key) => key,
  useLocale: () => "en",
}));

jest.mock("next-intl/server", () => ({
  getTranslations: jest.fn(() => async (key) => key),
  getLocale: jest.fn(() => "en"),
  setRequestLocale: jest.fn(),
}));
