import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { calls } from "@/data/calls";
import type { AppLocale } from "@/i18n/routing";

type OpenCallsPageProps = {
  params: Promise<{ locale: AppLocale }>;
  searchParams?: Promise<{
    location?: string;
  }>;
};

const uniqueValues = (values: string[]) =>
  Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));

export default async function OpenCallsPage({ params, searchParams }: OpenCallsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("OpenCalls");
  const resolvedSearchParams = await searchParams;
  const locationFilter = resolvedSearchParams?.location;
  const locations = uniqueValues(calls.map((call) => call.location));

  const filtered = calls.filter((call) => {
    if (locationFilter && call.location !== locationFilter) return false;
    return true;
  });

  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <Section>
        <Container>
          <form
            method="get"
            className="rounded border border-ink/10 bg-white p-6"
          >
            <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">
              {t("filters.location")}
            </label>
            <select
              name="location"
              defaultValue={locationFilter ?? ""}
              className="mt-2 w-full rounded-xl border border-ink/10 bg-white px-3 py-2 text-sm md:max-w-xs"
            >
              <option value="">{t("filters.allLocations")}</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="mt-4 rounded bg-brand px-6 py-2 text-sm font-semibold text-ink"
            >
              {t("filters.applyFilters")}
            </button>
          </form>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {filtered.map((call) => (
              <article
                key={call.slug}
                className="rounded border border-ink/10 bg-white p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                  {t("deadline")} {call.deadline}
                </p>
                <h2 className="mt-3 text-lg font-semibold text-ink">
                  {call.title}
                </h2>
                <p className="mt-2 text-sm text-ink/70">
                  {call.dates} · {call.location}
                </p>
                <a
                  href={`/open-calls/${call.slug}`}
                  className="mt-4 inline-flex text-sm font-semibold text-link"
                >
                  {t("viewDetails")}
                </a>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
