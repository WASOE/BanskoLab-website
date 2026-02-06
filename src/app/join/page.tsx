import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { CallToActionBand } from "@/components/layout/CallToActionBand";
import type { AppLocale } from "@/i18n/routing";

type JoinPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export default async function JoinPage({ params }: JoinPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Join");
  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                key: "whoCanApply",
                title: t("cards.whoCanApply.title"),
                text: t("cards.whoCanApply.text"),
              },
              {
                key: "whatToExpect",
                title: t("cards.whatToExpect.title"),
                text: t("cards.whatToExpect.text"),
              },
              {
                key: "selectionProcess",
                title: t("cards.selectionProcess.title"),
                text: t("cards.selectionProcess.text"),
              },
              {
                key: "costsAndFunding",
                title: t("cards.costsAndFunding.title"),
                text: t("cards.costsAndFunding.text"),
              },
              {
                key: "codeOfConduct",
                title: t("cards.codeOfConduct.title"),
                text: t("cards.codeOfConduct.text"),
              },
              {
                key: "inclusionSupport",
                title: t("cards.inclusionSupport.title"),
                text: t("cards.inclusionSupport.text"),
              },
            ].map((item) => (
              <div
                key={item.key}
                className="rounded border border-ink/10 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm text-ink/70">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CallToActionBand
        title={t("cta.title")}
        description={t("cta.description")}
        primary={{ label: t("cta.primary"), href: "/open-calls" }}
        secondary={{ label: t("cta.secondary"), href: "/contact?type=participant" }}
      />
    </>
  );
}
