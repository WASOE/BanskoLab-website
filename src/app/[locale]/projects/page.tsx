import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { projectsContent } from "@/data/projectsContent";
import { ProjectCard } from "@/components/sections/ProjectCard";
import type { AppLocale } from "@/i18n/routing";

type ProjectsPageProps = {
  params: Promise<{ locale: AppLocale }>;
  searchParams?: Promise<{
    year?: string;
    tag?: string;
    status?: string;
    location?: string;
  }>;
};

const uniqueValues = (values: string[]) =>
  Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));

export async function generateMetadata({ params }: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Projects");
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function ProjectsPage({ params, searchParams }: ProjectsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Projects");
  const projects = projectsContent[locale];
  
  const resolvedSearchParams = await searchParams;
  const yearFilter = resolvedSearchParams?.year;
  const tagFilter = resolvedSearchParams?.tag;
  const statusFilter = resolvedSearchParams?.status;
  const locationFilter = resolvedSearchParams?.location;

  const filtered = projects.filter((project) => {
    if (yearFilter && project.year.toString() !== yearFilter) return false;
    if (tagFilter && !project.tags.includes(tagFilter)) return false;
    if (statusFilter && project.status !== statusFilter) return false;
    if (locationFilter && !project.locations.includes(locationFilter)) return false;
    return true;
  });

  const years = uniqueValues(projects.map((project) => project.year.toString()));
  const tags = uniqueValues(projects.flatMap((project) => project.tags));
  const statuses = uniqueValues(projects.map((project) => project.status));
  const locations = uniqueValues(projects.flatMap((project) => project.locations));

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
            className="grid grid-cols-1 gap-4 rounded border border-ink/10 bg-white p-6 md:grid-cols-2 lg:grid-cols-4"
          >
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                {t("filters.year")}
              </label>
              <select
                name="year"
                defaultValue={yearFilter ?? ""}
                className="mt-2 w-full rounded-xl border border-ink/10 bg-white px-3 py-2 text-sm"
              >
                <option value="">{t("filters.allYears")}</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                {t("filters.theme")}
              </label>
              <select
                name="tag"
                defaultValue={tagFilter ?? ""}
                className="mt-2 w-full rounded-xl border border-ink/10 bg-white px-3 py-2 text-sm"
              >
                <option value="">{t("filters.allThemes")}</option>
                {tags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                {t("filters.status")}
              </label>
              <select
                name="status"
                defaultValue={statusFilter ?? ""}
                className="mt-2 w-full rounded-xl border border-ink/10 bg-white px-3 py-2 text-sm"
              >
                <option value="">{t("filters.allStatuses")}</option>
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                {t("filters.location")}
              </label>
              <select
                name="location"
                defaultValue={locationFilter ?? ""}
                className="mt-2 w-full rounded-xl border border-ink/10 bg-white px-3 py-2 text-sm"
              >
                <option value="">{t("filters.allLocations")}</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2 lg:col-span-4">
              <button
                type="submit"
                className="mt-2 rounded bg-brand px-6 py-2 text-sm font-semibold text-ink"
              >
                {t("filters.applyFilters")}
              </button>
            </div>
          </form>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
