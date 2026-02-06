import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { CallToActionBand } from "@/components/layout/CallToActionBand";
import { ButtonLink } from "@/components/ui/Button";
import type { AppLocale } from "@/i18n/routing";
import { orgConfig } from "@/config/org";

type WorkWithUsPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export default async function WorkWithUsPage({ params }: WorkWithUsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("WorkWithUs");
  
  const offers = [
    t("whatWeOffer.items.projectDesign"),
    t("whatWeOffer.items.hosting"),
    t("whatWeOffer.items.facilitation"),
    t("whatWeOffer.items.evaluation"),
  ];

  const sampleConcepts = [
    {
      title: t("sampleConcepts.concepts.resilience.title"),
      description: t("sampleConcepts.concepts.resilience.description"),
    },
    {
      title: t("sampleConcepts.concepts.outdoor.title"),
      description: t("sampleConcepts.concepts.outdoor.description"),
    },
    {
      title: t("sampleConcepts.concepts.innovation.title"),
      description: t("sampleConcepts.concepts.innovation.description"),
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold text-ink md:text-3xl">
                {t("pif.title")}
              </h2>
              <p className="mt-4 text-sm text-ink/70 md:text-base">
                {t("pif.description")}
              </p>
            </div>
            <div className="rounded border border-ink/10 bg-white p-6 lg:col-span-7">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-ink">{t("pif.label")}</p>
                  <p className="text-sm text-ink/60">{t("pif.updated")}</p>
                </div>
                <ButtonLink
                  href={orgConfig.documents.pif}
                  label={t("pif.download")}
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold text-ink md:text-3xl">
                {t("whatWeOffer.title")}
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-ink/70 md:text-base">
                {offers.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded border border-ink/10 bg-white p-6 lg:col-span-7">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/50">
                {t("whatWeOffer.capacity.title")}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-ink/70">
                <li>• {t("whatWeOffer.capacity.projects")}</li>
                <li>• {t("whatWeOffer.capacity.safeguarding")}</li>
                <li>• {t("whatWeOffer.capacity.evaluation")}</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink/50">
              {t("sampleConcepts.eyebrow")}
            </p>
            <h2 className="text-2xl font-semibold text-ink md:text-3xl">
              {t("sampleConcepts.title")}
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sampleConcepts.map((concept) => (
              <div
                key={concept.title}
                className="rounded border border-ink/10 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-ink">
                  {concept.title}
                </h3>
                <p className="mt-3 text-sm text-ink/70">
                  {concept.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold text-ink md:text-3xl">
                {t("howToStart.title")}
              </h2>
              <p className="mt-4 text-sm text-ink/70 md:text-base">
                {t("howToStart.description")}
              </p>
            </div>
            <div className="rounded border border-ink/10 bg-white p-6 lg:col-span-7">
              <ol className="space-y-3 text-sm text-ink/70">
                <li>{t("howToStart.steps.step1")}</li>
                <li>{t("howToStart.steps.step2")}</li>
                <li>{t("howToStart.steps.step3")}</li>
                <li>{t("howToStart.steps.step4")}</li>
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      <CallToActionBand
        title={t("cta.title")}
        description={t("cta.description")}
        primary={{ label: t("cta.primary"), href: orgConfig.documents.pif }}
        secondary={{ label: t("cta.secondary"), href: "/contact?type=partner" }}
      />
    </>
  );
}
