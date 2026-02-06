import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { team } from "@/data/team";
import { CallToActionBand } from "@/components/layout/CallToActionBand";
import type { AppLocale } from "@/i18n/routing";

type AboutPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("About");
  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-12">
              <h2 className="text-2xl font-semibold text-ink md:text-3xl">
                {t("missionVision.title")}
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold text-ink">{t("missionVision.mission")}</h3>
                  <p className="mt-3 text-sm text-ink/70 md:text-base">
                    {t("missionVision.missionText")}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{t("missionVision.vision")}</h3>
                  <p className="mt-3 text-sm text-ink/70 md:text-base">
                    {t("missionVision.visionText")}
                  </p>
                </div>
              </div>
              <div className="mt-8 rounded border border-ink/10 bg-white p-6">
                <p className="text-base italic text-ink/80">
                  {t("missionVision.quote")}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="max-w-2xl space-y-6">
            <h2 className="text-2xl font-semibold text-ink md:text-3xl">
              {t("values.title")}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  key: "inclusivity",
                  title: t("values.inclusivity.title"),
                  description: t("values.inclusivity.description"),
                },
                {
                  key: "coCreation",
                  title: t("values.coCreation.title"),
                  description: t("values.coCreation.description"),
                },
                {
                  key: "transparency",
                  title: t("values.transparency.title"),
                  description: t("values.transparency.description"),
                },
                {
                  key: "participation",
                  title: t("values.participation.title"),
                  description: t("values.participation.description"),
                },
              ].map((value) => (
                <div key={value.key} className="rounded border border-ink/10 bg-white p-6">
                  <h3 className="text-lg font-semibold text-ink">{value.title}</h3>
                  <p className="mt-3 text-sm text-ink/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-2xl space-y-6">
              <h2 className="text-2xl font-semibold text-ink md:text-3xl">
              {t("howWeWork.title")}
              </h2>
            <p className="text-sm text-ink/70 md:text-base">
              {t("howWeWork.description")}
              </p>
            <div className="pt-4">
              <a
                href="/methodology"
                className="text-sm font-semibold text-link hover:text-link-dark"
              >
                {t("howWeWork.link")}
              </a>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink/50">
              {t("team.eyebrow")}
            </p>
            <h2 className="text-2xl font-semibold text-ink md:text-3xl">
              {t("team.title")}
            </h2>
          </div>
          <div className="mt-8">
            <TeamGrid members={team} />
          </div>
        </Container>
      </Section>

      <CallToActionBand
        title={t("cta.title")}
        description={t("cta.description")}
        primary={{ label: t("cta.primary"), href: "/volunteering" }}
        secondary={{ label: t("cta.secondary"), href: "/contact" }}
      />
    </>
  );
}

export const metadata: Metadata = {
  title: "About BanskoLab Foundation",
  description:
    "BanskoLab is a Bulgarian non-profit delivering rural transformation through digital systems and field implementation. Learn our approach and how we work with partners.",
};
