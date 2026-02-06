"use client";

import Image from "next/image";
import {useEffect, useState} from "react";
import {navPrimary} from "@/data/site";
import {cn} from "@/lib/utils";
import {ButtonLink, Button} from "@/components/ui/Button";
import {Container} from "@/components/layout/Container";
import {
  Link,
  usePathname,
  useRouter,
} from "@/i18n/routing";
import {useLocale, useTranslations} from "next-intl";
import type {AppLocale} from "@/i18n/routing";

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale() as AppLocale;
  const t = useTranslations("Header");
  const [isOpen, setIsOpen] = useState(false);
  const [localTime, setLocalTime] = useState("00:00");

  // Map nav href to translation key
  const getNavLabel = (href: string): string => {
    const navKeyMap: Record<string, string> = {
      "/": "navigation.home",
      "/what-we-do": "navigation.whatWeDo",
      "/projects": "navigation.projects",
      "/the-valley": "navigation.fieldSite",
      "/partners": "navigation.partners",
      "/news": "navigation.news",
      "/contact": "navigation.contact",
    };
    return t(navKeyMap[href] || href);
  };


  const switchLocale = (nextLocale: AppLocale) => {
    if (nextLocale === locale || !router) return;
    try {
      router.push({pathname}, {locale: nextLocale});
    } catch (error) {
      console.error("[SiteHeader] Error switching locale:", error);
    }
  };

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Sofia",
      hour: "2-digit",
      minute: "2-digit",
    });
    const updateTime = () => setLocalTime(formatter.format(new Date()));
    updateTime();
    const timer = setInterval(updateTime, 60_000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Safety check: ensure navPrimary exists
  if (!navPrimary || navPrimary.length === 0) {
    console.error("[SiteHeader] navPrimary is empty or undefined!");
    return (
      <header className="sticky top-0 z-50 border-b border-red-500 bg-red-100 p-4">
        <div className="text-red-600">{t("errors.navNotLoaded")}</div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#EAEAEA] bg-white">
      <div className="border-b border-[#EAEAEA] bg-[#F6F6F6] text-ink">
        <Container className="flex h-8 items-center text-[11px] font-medium">
          <div className="flex items-center gap-2">
            <Button
              type="button"
              onClick={() => switchLocale("en")}
              variant={locale === "en" ? "inverse" : "ghost"}
              size="sm"
              className="rounded-full"
              aria-label={locale === "en" ? "English (current language)" : "Switch to English"}
              aria-pressed={locale === "en"}
            >
              EN
            </Button>
            <span className="text-ink/40" aria-hidden="true">|</span>
            <Button
              type="button"
              onClick={() => switchLocale("bg")}
              variant={locale === "bg" ? "inverse" : "ghost"}
              size="sm"
              className="rounded-full"
              aria-label={locale === "bg" ? "Bulgarian (current language)" : "Switch to Bulgarian"}
              aria-pressed={locale === "bg"}
            >
              BG
            </Button>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <div className="hidden items-center gap-3 text-xs font-mono uppercase tracking-widest text-ink/60 md:flex">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
                {t("statusBar.verifiedStatus")} · {t("statusBar.nextAudit")}
              </span>
              <span>{t("statusBar.localTime")}, {localTime}</span>
          </div>
          <Link
            href="/the-valley"
              className="text-xs font-medium uppercase tracking-wide"
          >
              {t("statusBar.visitFieldSite")}
          </Link>
          </div>
        </Container>
      </div>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {t("menu.skipToContent")}
      </a>
      <Container className="py-2 lg:py-0">
        <div className="grid h-14 grid-cols-3 items-center lg:hidden">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="justify-self-start rounded-full"
            onClick={() => setIsOpen(true)}
            aria-label={t("menu.open")}
          >
            ☰
          </Button>
          <div className="flex items-center justify-center">
            {/* Logo removed from mobile header - appears in menu when open */}
          </div>
            <div className="flex items-center justify-end">
            <ButtonLink
              href="/contact?type=funder"
              label={t("buttons.supportProject")}
              className="h-9 px-4 py-0 text-xs"
            />
          </div>
        </div>

        <div className="hidden md:grid h-16 items-center gap-6 md:grid-cols-[260px_1fr_auto] md:items-center">
          <div className="flex min-w-[260px] items-center gap-3 text-ink">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/banskolab/logos/banskolab-logo.png"
                alt={t("logo.alt")}
                width={96}
                height={96}
                className="h-8 w-auto max-w-[180px] object-contain"
                priority
              />
              <div className="leading-tight">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-ink/60">
                  {t("logo.tagline")}
                </span>
              </div>
            </Link>
          </div>

          <nav className="flex items-center justify-center gap-[18px] whitespace-nowrap xl:gap-6">
            {navPrimary && navPrimary.length > 0 ? (
              navPrimary.map((link) => {
                // Normalize pathname for comparison (remove trailing slash)
                // usePathname() from next-intl already returns pathname without locale prefix
                const normalizedPathname = (pathname || "/").replace(/\/$/, "") || "/";
                const normalizedHref = (link.href || "/").replace(/\/$/, "") || "/";
                
                // For home page, exact match only
                // For other pages, match exact or if pathname starts with href
                const isActive = normalizedHref === "/" 
                  ? normalizedPathname === "/"
                  : normalizedPathname === normalizedHref || 
                    normalizedPathname.startsWith(normalizedHref + "/");
                
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "border-b-2 border-transparent pb-1 text-sm font-medium text-ink/70 transition hover:text-ink",
                      isActive && "border-brand text-ink",
                    )}
                  >
                    {getNavLabel(link.href)}
                  </Link>
                );
              })
            ) : (
              <div className="text-xs text-red-500">{t("errors.menuItemsNotLoaded")}</div>
            )}
          </nav>

          <div className="flex items-center justify-end gap-3 whitespace-nowrap">
              <ButtonLink
                href="/partners"
                label={t("buttons.partnerWithUs")}
                variant="secondary"
                className="h-9 px-4 py-0 text-sm whitespace-nowrap flex-shrink-0"
              />
              <ButtonLink
              href="/contact?type=funder"
              label={t("buttons.supportProject")}
                className="h-9 px-4 py-0 text-sm whitespace-nowrap flex-shrink-0"
              />
          </div>
        </div>
      </Container>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 bg-black/60"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="h-full w-[85vw] max-w-[320px] bg-white shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Container className="flex h-full flex-col py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs font-medium text-ink/60">
                  <Button
                    type="button"
                    onClick={() => switchLocale("en")}
                    variant={locale === "en" ? "inverse" : "ghost"}
                    size="sm"
                    className="rounded-full"
                  >
                    EN
                  </Button>
                  <span className="text-ink/40">|</span>
                  <Button
                    type="button"
                    onClick={() => switchLocale("bg")}
                    variant={locale === "bg" ? "inverse" : "ghost"}
                    size="sm"
                    className="rounded-full"
                  >
                    BG
                  </Button>
                </div>
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  className="rounded-full"
                  onClick={() => setIsOpen(false)}
                  aria-label={t("menu.close")}
                >
                  ✕
                </Button>
              </div>
              <div className="mt-6 pb-6 border-b border-ink/10">
                <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/images/banskolab/logos/banskolab-logo.png"
                    alt={t("logo.alt")}
                    width={96}
                    height={96}
                    className="h-8 w-auto max-w-[180px] object-contain"
                    priority
                  />
                  <div className="leading-tight">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-ink/60">
                      {t("logo.tagline")}
                    </span>
                  </div>
                </Link>
              </div>
              <nav className="mt-6 flex flex-col text-base font-semibold text-ink">
                {navPrimary && navPrimary.length > 0 ? (
                  navPrimary.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="py-3"
                      onClick={() => setIsOpen(false)}
                    >
                      {getNavLabel(link.href)}
                    </Link>
                  ))
                ) : (
                  <div className="text-xs text-red-500">Menu items not loaded</div>
                )}
              </nav>
              <div className="mt-auto pt-8 text-sm text-ink/60">
                <Link
                  href="/the-valley"
                  className="mt-4 inline-flex text-xs font-semibold uppercase tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  {t("statusBar.visitFieldSite")}
                </Link>
                <div className="mt-4 text-xs font-mono uppercase tracking-[0.18em] text-ink/60">
                  <p className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
                    {t("statusBar.verifiedStatus")} · {t("statusBar.nextAudit")}
                  </p>
                  <p className="mt-2">{t("statusBar.localTime")}, {localTime}</p>
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  <ButtonLink
                    href="/partners"
                    label={t("buttons.partnerWithUs")}
                    variant="secondary"
                    className="h-9 px-4 py-0 text-sm"
                  />
                  <ButtonLink
                    href="/contact?type=funder"
                    label={t("buttons.supportProject")}
                    className="h-9 px-4 py-0 text-sm"
                  />
                </div>
              </div>
            </Container>
          </div>
        </div>
      ) : null}
    </header>
  );
}
