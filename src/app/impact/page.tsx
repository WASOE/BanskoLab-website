import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { impactMetrics } from "@/data/site";
import { Testimonials } from "@/components/sections/Testimonials";
import { CallToActionBand } from "@/components/layout/CallToActionBand";
import type { AppLocale } from "@/i18n/routing";

type ImpactPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export default async function ImpactPage({ params }: ImpactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Impact");
  
  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <Section>
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded border border-ink/10 bg-white p-6"
              >
                <p className="text-2xl font-semibold text-ink md:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-ink/60">{metric.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold text-ink md:text-3xl">
                {t("outcomesByTheme.title")}
              </h2>
              <p className="mt-4 text-sm text-ink/70 md:text-base">
                {t("outcomesByTheme.description")}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-7">
              {[
                t("outcomesByTheme.items.inclusion"),
                t("outcomesByTheme.items.skills"),
                t("outcomesByTheme.items.civic"),
                t("outcomesByTheme.items.environment"),
              ].map((item) => (
                <div
                  key={item}
                  className="rounded border border-ink/10 bg-white p-6"
                >
                  <p className="text-sm text-ink/70">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink/50">
              {t("testimonials.eyebrow")}
            </p>
            <h2 className="text-2xl font-semibold text-ink md:text-3xl">
              {t("testimonials.title")}
            </h2>
          </div>
          <div className="mt-8">
            <Testimonials />
          </div>
        </Container>
      </Section>

      <CallToActionBand
        title={t("cta.title")}
        description={t("cta.description")}
        primary={{ label: t("cta.primary"), href: "/contact?type=funder" }}
        secondary={{ label: t("cta.secondary"), href: "/projects" }}
      />
    </>
  );
}
