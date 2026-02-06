import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { resources } from "@/data/resources";
import { ResourceCard } from "@/components/sections/ResourceCard";
import type { AppLocale } from "@/i18n/routing";

type ResearchReportsPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: ResearchReportsPageProps): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ResearchReports");
  return {
    title: t("eyebrow"),
    description: t("subtitle"),
  };
}

export default async function ResearchReportsPage({ params }: ResearchReportsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ResearchReports");
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
            {resources.map((resource) => (
              <ResourceCard key={resource.slug} resource={resource} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
