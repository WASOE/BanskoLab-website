import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { CallToActionBand } from "@/components/layout/CallToActionBand";
import type { AppLocale } from "@/i18n/routing";

type WhatWeDoPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: WhatWeDoPageProps): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("WhatWeDo");
  return {
    title: t("eyebrow"),
    description: t("subtitle"),
  };
}

export default async function WhatWeDoPage({ params }: WhatWeDoPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("WhatWeDo");
  
  const capabilities = [
    {
      id: "digital-systems",
      title: t("capabilities.digitalSystems.title"),
      description: t("capabilities.digitalSystems.description"),
    },
    {
      id: "learning",
      title: t("capabilities.learning.title"),
      description: t("capabilities.learning.description"),
    },
    {
      id: "field-delivery",
      title: t("capabilities.fieldDelivery.title"),
      description: t("capabilities.fieldDelivery.description"),
    },
    {
      id: "replication",
      title: t("capabilities.replication.title"),
      description: t("capabilities.replication.description"),
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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {capabilities.map((capability) => (
              <div
                key={capability.id}
                id={capability.id}
                className="card-glass p-8"
              >
                <h3 className="text-lg font-semibold text-ink">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm text-ink/70">
                  {capability.description}
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
              <h2 className="text-[length:var(--step-1)] font-semibold text-ink">
                {t("quality.title")}
              </h2>
              <p className="mt-4 text-[length:var(--step-0)] text-ink/70">
                {t("quality.description")}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:col-span-7">
              {[
                t("quality.items.safeguarding"),
                t("quality.items.inclusion"),
                t("quality.items.gdpr"),
                t("quality.items.risk"),
              ].map((item) => (
                <div
                  key={item}
                  className="card-glass p-8"
                >
                  <p className="text-sm text-ink/70">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CallToActionBand
        title={t("cta.title")}
        description={t("cta.description")}
        primary={{ label: t("cta.primary"), href: "/work-with-us" }}
        secondary={{ label: t("cta.secondary"), href: "/contact" }}
      />
    </>
  );
}
