import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { postsContent } from "@/data/postsContent";
import { JsonLd } from "@/components/seo/JsonLd";
import type { AppLocale } from "@/i18n/routing";
import { orgConfig } from "@/config/org";

type PostDetailProps = {
  params: Promise<{ slug: string; locale: AppLocale }>;
};

export default async function PostDetailPage({ params }: PostDetailProps) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("NewsDetail");
  const posts = postsContent[locale];
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          datePublished: post.date,
          author: {
            "@type": "Organization",
            name: orgConfig.name,
          },
        }}
      />
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        subtitle={`${post.date} · ${post.author}`}
      />
      <Section>
        <Container>
          <div className="max-w-3xl space-y-4 text-sm text-ink/70 md:text-base">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {post.relatedProject ? (
            <div className="mt-8 rounded border border-ink/10 bg-white p-6">
              <p className="text-sm font-semibold text-ink">{t("relatedProject")}</p>
              <Link
                href={`/projects/${post.relatedProject}`}
                className="mt-2 inline-flex text-sm font-semibold text-link"
              >
                {t("viewProjectDetails")}
              </Link>
            </div>
          ) : null}
        </Container>
      </Section>
    </>
  );
}
