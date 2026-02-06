import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { calls } from "@/data/calls";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CallToActionBand } from "@/components/layout/CallToActionBand";
import { JsonLd } from "@/components/seo/JsonLd";
import type { AppLocale } from "@/i18n/routing";

type CallDetailProps = {
  params: Promise<{ slug: string; locale: AppLocale }>;
};

export default async function CallDetailPage({ params }: CallDetailProps) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("OpenCalls.detail");
  const call = calls.find((item) => item.slug === slug);

  if (!call) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Event",
          name: call.title,
          startDate: call.dates,
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: {
            "@type": "Place",
            name: call.location,
          },
        }}
      />
      <PageHeader
        eyebrow={t("eyebrow")}
        title={call.title}
        subtitle={`${call.dates} · ${call.location}`}
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded border border-ink/10 bg-white p-6">
                <h2 className="text-lg font-semibold text-ink">{t("summary.title")}</h2>
                <div className="mt-4 space-y-2 text-sm text-ink/70">
                  <p>{t("summary.deadline")} {call.deadline}</p>
                  <p>{t("summary.eligibility")} {call.eligibility.join(", ")}</p>
                  <p>{t("summary.lastUpdated")} {call.lastUpdated}</p>
                </div>
              </div>
              <div className="rounded border border-ink/10 bg-white p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/50">
                  {t("learningOutcomes.title")}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-ink/70">
                  {call.learningOutcomes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6 lg:col-span-7">
              <div className="rounded border border-ink/10 bg-white p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/50">
                  {t("agenda.title")}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-ink/70">
                  {call.agenda.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded border border-ink/10 bg-white p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/50">
                  {t("practical.title")}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-ink/70">
                  {call.practical.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-ink/50">
                  {t("practical.whatIsCovered")}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-ink/70">
                  {call.coveredCosts.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded border border-ink/10 bg-white p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/50">
                  {t("safety.title")}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-ink/70">
                  {call.safety.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded border border-ink/10 bg-white p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/50">
                  {t("faq.title")}
                </h3>
                <div className="mt-4">
                  <FAQAccordion items={call.faq} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CallToActionBand
        title={t("cta.title")}
        description={t("cta.description")}
        primary={{ label: t("cta.primary"), href: call.applicationLink }}
        secondary={{ label: t("cta.secondary"), href: "/contact?type=participant" }}
      />
    </>
  );
}
