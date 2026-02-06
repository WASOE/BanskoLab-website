import {createNavigation} from "next-intl/navigation";
import {defineRouting} from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "bg"],
  defaultLocale: "en",
  localePrefix: "always",
});

export const locales = ["en", "bg"] as const;
export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = "en";

export const localePrefix = "always";

// Phase 1: keep pathnames identical across locales
export const pathnames = {
  "/": "/",
  "/projects": "/projects",
  "/news": "/news",
  "/partners": "/partners",
  "/contact": "/contact",
  "/what-we-do": "/what-we-do",
  "/transparency": "/transparency",
  "/policies": "/policies",
  "/get-involved": "/get-involved",
  "/the-valley": "/the-valley",
} as const;

export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);
