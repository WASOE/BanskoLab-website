import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { postsContent } from "@/data/postsContent";
import type { AppLocale } from "@/i18n/routing";

type NewsPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export default async function NewsPage({ params }: NewsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("News");
  const posts = postsContent[locale];
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
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded border border-ink/10 bg-white p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                  {post.category} · {post.date}
                </p>
                <h2 className="mt-3 text-lg font-semibold text-ink">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-ink/70">{post.summary}</p>
                <a
                  href={`/news/${post.slug}`}
                  className="mt-4 inline-flex text-sm font-semibold text-link"
                >
                  {t("readUpdate")}
                </a>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

export const metadata: Metadata = {
  title: "News and field notes",
  description:
    "Project updates, results and publications from BanskoLab. Evidence of delivery and lessons that others can reuse.",
};
