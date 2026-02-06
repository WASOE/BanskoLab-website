import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { policies } from "@/data/policies";
import type { AppLocale } from "@/i18n/routing";

type PolicyDetailProps = {
  params: Promise<{ "policy-slug": string; locale: AppLocale }>;
};

export default async function PolicyDetailPage({ params }: PolicyDetailProps) {
  const { "policy-slug": policySlug, locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Policies");
  const policy = policies.find((item) => item.slug === policySlug);

  if (!policy) {
    notFound();
  }

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={policy.title}
        subtitle={`Last updated ${policy.lastUpdated}`}
      />
      <Section>
        <Container>
          <div className="max-w-3xl space-y-4 text-sm text-ink/70 md:text-base">
            <p className="rounded-2xl border border-ink/10 bg-white p-4 text-ink/80">
              {policy.summary}
            </p>
            {policy.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <a
              href={policy.pdf}
              className="inline-flex text-sm font-semibold text-link"
            >
              {t("downloadPdf")}
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
