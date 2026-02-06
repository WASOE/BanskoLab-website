import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { policies } from "@/data/policies";
import { PolicySummaryCard } from "@/components/sections/PolicySummaryCard";
import type { AppLocale } from "@/i18n/routing";

type PoliciesPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export default async function PoliciesPage({ params }: PoliciesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Policies.list");
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
            {policies.map((policy) => (
              <PolicySummaryCard key={policy.slug} policy={policy} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
