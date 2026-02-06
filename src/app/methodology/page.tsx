import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { CallToActionBand } from "@/components/layout/CallToActionBand";
import type { AppLocale } from "@/i18n/routing";
import { orgConfig } from "@/config/org";

type MethodologyPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export default async function MethodologyPage({ params }: MethodologyPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Methodology");
  
  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <Section>
        <Container>
          <div className="max-w-2xl space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-ink md:text-3xl">
                {t("nonFormal.title")}
              </h2>
              <p className="mt-4 text-sm text-ink/70 md:text-base">
                {t("nonFormal.description1")}
              </p>
              <p className="mt-4 text-sm text-ink/70 md:text-base">
                {t("nonFormal.description2")}
              </p>
              </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="max-w-2xl space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-ink md:text-3xl">
                {t("inclusion.title")}
              </h2>
              <p className="mt-4 text-sm text-ink/70 md:text-base">
                {t("inclusion.description1")}
              </p>
              <p className="mt-4 text-sm text-ink/70 md:text-base">
                {t("inclusion.description2")}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-2xl space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-ink md:text-3xl">
                {t("safety.title")}
              </h2>
              <p className="mt-4 text-sm text-ink/70 md:text-base">
                {t("safety.description1")}
              </p>
              <p className="mt-4 text-sm text-ink/70 md:text-base">
                {t("safety.description2")}
              </p>
              <div className="mt-6">
                <a
                  href={orgConfig.policies.safeguarding}
                  className="text-sm font-semibold text-link hover:text-link-dark"
                >
                  {t("safety.link")}
                </a>
              </div>
            </div>
                </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="max-w-2xl space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-ink md:text-3xl">
                {t("monitoring.title")}
              </h2>
              <p className="mt-4 text-sm text-ink/70 md:text-base">
                {t("monitoring.description1")}
              </p>
              <p className="mt-4 text-sm text-ink/70 md:text-base">
                {t("monitoring.description2")}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CallToActionBand
        title={t("cta.title")}
        description={t("cta.description")}
        primary={{ label: t("cta.primary"), href: "/projects" }}
        secondary={{ label: t("cta.secondary"), href: "/contact" }}
      />
    </>
  );
}
