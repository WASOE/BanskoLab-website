import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { PartnerCategoryTiles } from "@/components/sections/PartnerCategoryTiles";
import { Testimonials } from "@/components/sections/Testimonials";
import { CallToActionBand } from "@/components/layout/CallToActionBand";
import type { AppLocale } from "@/i18n/routing";
import { orgConfig } from "@/config/org";

type PartnersPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: PartnersPageProps): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Partners");
  return {
    title: t("eyebrow"),
    description: t("subtitle"),
  };
}

export default async function PartnersPage({ params }: PartnersPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Partners");
  
  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <Section>
        <Container>
          <div className="mb-12 max-w-2xl space-y-4">
            <h2 className="text-2xl font-semibold text-ink md:text-3xl">
              {t("whoWeWorkWith.title")}
            </h2>
            <p className="text-sm text-ink/70 md:text-base">
              {t("whoWeWorkWith.description")}
            </p>
          </div>
          <PartnerCategoryTiles />
        </Container>
      </Section>


      <Section>
        <Container>
          <div className="max-w-2xl space-y-6">
            <h2 className="text-2xl font-semibold text-ink md:text-3xl">
              {t("partnerRoles.title")}
            </h2>
            <p className="text-sm text-ink/70 md:text-base">
              {t("partnerRoles.description")}
            </p>
            <ul className="space-y-3 text-sm text-ink/70 md:text-base">
              <li>• {t("partnerRoles.examples.municipality")}</li>
              <li>• {t("partnerRoles.examples.schools")}</li>
              <li>• {t("partnerRoles.examples.eu")}</li>
              <li>• {t("partnerRoles.examples.community")}</li>
            </ul>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-2xl space-y-6">
              <h2 className="text-2xl font-semibold text-ink md:text-3xl">
              {t("sponsorship.title")}
              </h2>
            <p className="text-sm text-ink/70 md:text-base">
              {t("sponsorship.description")}
              </p>
            <div className="mt-6">
              <a
                href={orgConfig.documents.partnerPack}
                className="text-sm font-semibold text-link hover:text-link-dark"
              >
                {t("sponsorship.download")}
              </a>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
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
        primary={{ label: t("cta.primary"), href: "/contact?type=partner" }}
        secondary={{ label: t("cta.secondary"), href: "/contact" }}
      />
    </>
  );
}
