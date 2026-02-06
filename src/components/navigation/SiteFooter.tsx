import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/Container";
import { orgConfig } from "@/config/org";

export async function SiteFooter() {
  const t = await getTranslations("Footer");
  return (
    <footer id="transparency-dashboard" className="border-t border-ink/10 bg-white">
      <Container>
        {/* Verified Compliance Block */}
        <div className="border-b border-ink/10 pb-8">
          <div className="card-glass p-6">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-ink/50">
              {t("compliance.title")}
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                  {t("compliance.legalIdentity")}
                </p>
                <p className="text-sm text-ink/70">{t("compliance.legalName")}</p>
                <p className="font-mono text-xs text-ink">UIC: {orgConfig.registration.uic}</p>
                <p className="font-mono text-xs text-ink">OID: {orgConfig.registration.oid}</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                  {t("compliance.governance")}
                </p>
                <p className="text-sm text-ink/70">
                  <Link href="/transparency#board-of-directors" className="hover:text-ink">
                    {t("links.boardOfDirectors")}
                  </Link>
                </p>
                <p className="text-sm text-ink/70">
                  <Link href="/transparency#legal-representative" className="hover:text-ink">
                    {t("links.legalRepresentative")}
                  </Link>
                </p>
                <p className="text-sm text-ink/70">
                  <a href={orgConfig.documents.annualReport} className="hover:text-ink">
                    {t("links.annualReport")}
                  </a>
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                  {t("compliance.registrationStatus")}
                </p>
                <p className="text-sm text-ink/70">{t("compliance.foundationType")}</p>
                <p className="text-sm text-ink/70">{t("compliance.registered")}</p>
                <p className="text-sm text-ink/70">{t("compliance.status")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          {/* Column 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/banskolab/logos/banskolab-logo.png"
                alt={t("about.logoAlt")}
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <h3 className="text-lg font-semibold text-ink">
                {t("about.title")}
              </h3>
            </div>
            <p className="text-sm text-ink/70">
              {t("about.description")}
            </p>
          </div>

          {/* Column 2: Governance */}
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink/50">
              {t("links.governance")}
            </p>
            <ul className="space-y-2 text-sm text-ink/70">
              <li>
                <Link href="/transparency#board-of-directors" className="hover:text-ink">
                  {t("links.boardOfDirectors")}
                </Link>
              </li>
              <li>
                <Link href="/transparency#legal-representative" className="hover:text-ink">
                  {t("links.legalRepresentative")}
                </Link>
              </li>
              <li>
                <Link href="/transparency" className="hover:text-ink">
                  {t("links.governanceTransparency")}
                  </Link>
                </li>
              <li>
                <a
                  href={orgConfig.documents.annualReport}
                  className="hover:text-ink"
                >
                  {t("links.annualReport")}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quality Standards */}
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink/50">
              {t("links.qualityStandards")}
            </p>
            <ul className="space-y-2 text-sm text-ink/70">
              <li>
                <Link href={orgConfig.policies.safeguarding} className="hover:text-ink">
                  {t("links.safeguardingPolicy")}
                </Link>
              </li>
              <li>
                <Link href="/policies/code-of-conduct" className="hover:text-ink">
                  {t("links.codeOfConduct")}
                </Link>
              </li>
              <li>
                <Link href={orgConfig.policies.privacy} className="hover:text-ink">
                  {t("links.gdprCompliance")}
                  </Link>
                </li>
            </ul>
          </div>

          {/* Column 4: Erasmus+ Readiness */}
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink/50">
              {t("links.erasmusReadiness")}
            </p>
            <ul className="space-y-2 text-sm text-ink/70">
              <li>
                <a
                  href={orgConfig.documents.partnerPack}
                  className="font-semibold text-link hover:text-link-dark"
                >
                  {t("links.partnerPack")}
                </a>
              </li>
              <li>
                <Link href="/transparency#quality-label" className="hover:text-ink">
                  {t("links.qualityLabelStatus")}
                </Link>
              </li>
            </ul>
            <div className="mt-6 space-y-1 text-xs text-ink/60">
              <p>{t("contact.address")}</p>
              <p>{t("contact.email")}</p>
            </div>
          </div>
        </div>
      </Container>
      <div className="border-t border-ink/10 py-6 text-center text-xs text-ink/50">
        {t("copyright")}
      </div>
    </footer>
  );
}
