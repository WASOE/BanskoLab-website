import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import type { AppLocale } from "@/i18n/routing";

type GetInvolvedPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: GetInvolvedPageProps): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("GetInvolved");
  return {
    title: t("eyebrow"),
    description: t("subtitle"),
  };
}

export default async function GetInvolvedPage({ params }: GetInvolvedPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("GetInvolved");
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
            <div className="rounded border border-ink/10 bg-white p-6">
              <h3 className="text-lg font-semibold text-ink">{t("cards.joinProject.title")}</h3>
              <p className="mt-3 text-sm text-ink/70">
                {t("cards.joinProject.description")}
              </p>
              <div className="mt-4">
                <ButtonLink href="/join" label={t("cards.joinProject.button")} variant="secondary" />
              </div>
            </div>
            <div className="rounded border border-ink/10 bg-white p-6">
              <h3 className="text-lg font-semibold text-ink">{t("cards.openCalls.title")}</h3>
              <p className="mt-3 text-sm text-ink/70">
                {t("cards.openCalls.description")}
              </p>
              <div className="mt-4">
                <ButtonLink href="/open-calls" label={t("cards.openCalls.button")} variant="secondary" />
              </div>
            </div>
            <div className="rounded border border-ink/10 bg-white p-6">
              <h3 className="text-lg font-semibold text-ink">{t("cards.supportDelivery.title")}</h3>
              <p className="mt-3 text-sm text-ink/70">
                {t("cards.supportDelivery.description")}
              </p>
              <div className="mt-4">
                <ButtonLink href="/contact?type=donor" label={t("cards.supportDelivery.button")} />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
