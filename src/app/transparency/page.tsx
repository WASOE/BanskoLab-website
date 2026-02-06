import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { ContentCard } from "@/components/ui/ContentCard";
import { KeyValueList } from "@/components/ui/KeyValueList";
import Link from "next/link";
import type { AppLocale } from "@/i18n/routing";
import { orgConfig } from "@/config/org";

type TransparencyPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export default async function TransparencyPage({ params }: TransparencyPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Transparency");
  
  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <ContentCard variant="glass" title={t("financial.title")} className="p-8">
              <p className="mt-4 text-sm text-ink/70">
                {t("financial.description")}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink/70">
                <li>
                  <Link
                    href={orgConfig.documents.financialPolicy}
                    className="font-semibold text-link hover:text-link-dark"
                  >
                    {t("financial.policy")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={orgConfig.documents.annualReport}
                    className="font-semibold text-link hover:text-link-dark"
                  >
                    {t("financial.report")}
                  </Link>
                </li>
              </ul>
            </ContentCard>

            <ContentCard variant="glass" title={t("safeguarding.title")} className="p-8">
              <p className="mt-4 text-sm text-ink/70">
                {t("safeguarding.description")}
              </p>
              <div className="mt-4">
                <Link
                  href={orgConfig.policies.safeguarding}
                  className="text-sm font-semibold text-link hover:text-link-dark"
                >
                  {t("safeguarding.code")}
                </Link>
              </div>
            </ContentCard>

            <ContentCard variant="glass" title={t("privacy.title")} className="p-8">
              <p className="mt-4 text-sm text-ink/70">
                {t("privacy.description")}
              </p>
              <div className="mt-4">
                <Link
                  href={orgConfig.documents.privacyPolicy}
                  className="text-sm font-semibold text-link hover:text-link-dark"
                >
                  {t("privacy.policy")}
                </Link>
              </div>
            </ContentCard>

            <ContentCard variant="glass" title={t("risk.title")} className="p-8">
              <p className="mt-4 text-sm text-ink/70">
                {t("risk.description")}
              </p>
              <div className="mt-4">
                <Link
                  href={orgConfig.documents.riskManagement}
                  className="text-sm font-semibold text-link hover:text-link-dark"
                >
                  {t("risk.plan")}
                </Link>
              </div>
            </ContentCard>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="card-glass h-full p-8 lg:col-span-7">
              <h2 className="text-xl font-semibold text-ink">
                {t("organization.title")}
              </h2>
              <p className="mt-4 text-sm text-ink/70">
                {t("organization.description")}
              </p>
              <div className="mt-6 space-y-3 text-sm text-ink/70">
                <p>{t("organization.legalName")}</p>
                <p>{t("organization.legalForm")}</p>
                <p>{t("organization.registration")}</p>
                <p>{t("organization.uic")}</p>
                <p>{t("organization.address")}</p>
                <p>{t("organization.representative")}</p>
                <p>{t("organization.anbi")}</p>
              </div>
              <div className="mt-6 space-y-3 text-sm text-ink/70">
                <p className="text-sm font-semibold text-ink">{t("organization.board")}</p>
                <ul className="space-y-2">
                  <li>{t("organization.founder")}</li>
                </ul>
              </div>
            </div>
            <div className="card-glass h-full p-8 lg:col-span-5">
              <h3 className="text-lg font-semibold text-ink">{t("legalIdentity.title")}</h3>
              <div className="mt-4 space-y-2 text-sm text-ink/70">
                <p>
                  <span className="font-semibold text-ink">{t("legalIdentity.oid")}</span> {orgConfig.registration.oid}
                </p>
                <p>
                  <span className="font-semibold text-ink">{t("legalIdentity.uic")}</span> {orgConfig.registration.uic}
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-ink/70">
                <li>
                  <Link
                    href={orgConfig.documents.registrationExtract}
                    className="font-semibold text-link hover:text-link-dark"
                  >
                    {t("legalIdentity.registration")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={orgConfig.documents.annualReport}
                    className="font-semibold text-link hover:text-link-dark"
                  >
                    {t("legalIdentity.annualReport")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
