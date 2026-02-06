import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";
import { ProofStats } from "@/components/sections/ProofStats";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projectsContent } from "@/data/projectsContent";
import { postsContent } from "@/data/postsContent";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { PolicyBadges } from "@/components/sections/PolicyBadges";
import { CallToActionBand } from "@/components/layout/CallToActionBand";
import { SystemsLayer } from "@/components/sections/SystemsLayer";
import { PartnerCategoryTiles } from "@/components/sections/PartnerCategoryTiles";
import { homeContent } from "@/data/homeContent";
import type { AppLocale } from "@/i18n/routing";

type HomeProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({
  params,
}: HomeProps): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = homeContent[locale];

  return {
    title: "Welcome to BanskoLab",
    description: content.hero.description,
  };
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");
  const content = homeContent[locale];
  const projects = projectsContent[locale];
  const posts = postsContent[locale];

  return (
    <>
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-6">
              <h1 className="text-[length:var(--step-2)] font-semibold leading-[0.95] text-ink">
                {content.hero.title}
              </h1>
              <p className="max-w-xl text-[length:var(--step-0)] text-ink/70">
                {content.hero.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <ButtonLink
                  href="/projects"
                  label={t("buttons.discoverProjects")}
                />
                <ButtonLink
                  href="/about"
                  label={t("buttons.learnMore")}
                  variant="ghost"
                />
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative">
                <Image
                  src="/images/banskolab/activities/d760211d-fba4-4574-84aa-7751a190865e (1).jpg"
                  alt={content.hero.imageAlt}
                  width={640}
                  height={480}
                  className="h-full w-full rounded-lg object-cover brightness-95"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                />
                <p className="mt-3 text-xs text-ink/60">
                  {content.hero.imageCaption}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="grid grid-cols-2 gap-4 lg:col-span-7">
              <div className="col-span-2">
                <Image
                  src="/images/banskolab/activities/a2caf245-11fa-4873-b82b-30599aaa7d87.jpg"
                  alt="BanskoLab community activities"
                  width={720}
                  height={480}
                  className="h-56 w-full rounded-lg object-cover brightness-95 md:h-72"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={75}
                  loading="lazy"
                />
              </div>
              <Image
                src="/images/banskolab/activities/20211121_151545-scaled.jpg"
                alt="BanskoLab community activities"
                width={360}
                height={320}
                className="h-44 w-full rounded-lg object-cover brightness-95 md:h-56"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={75}
                loading="lazy"
              />
              <Image
                src="/images/banskolab/activities/Kids-doing-business-at-the-lab.jpg"
                alt="BanskoLab community activities"
                width={360}
                height={320}
                className="h-44 w-full rounded-lg object-cover brightness-95 md:h-56"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={75}
                loading="lazy"
              />
            </div>
            <div className="space-y-6 lg:col-span-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-ink/50">
                  {content.mission.label}
                </p>
                <h2 className="mt-3 text-[length:var(--step-1)] font-semibold text-ink">
                  {content.mission.title}
                </h2>
              </div>
              <p className="text-sm text-ink/70">{content.mission.description}</p>
              <ul className="space-y-3 text-sm text-ink/70">
                <li>
                  <span className="font-semibold text-ink">
                    {content.mission.whatWeDo.label}
                  </span>{" "}
                  {content.mission.whatWeDo.text}
                </li>
                <li>
                  <span className="font-semibold text-ink">
                    {content.mission.whoWeSupport.label}
                  </span>{" "}
                  {content.mission.whoWeSupport.text}
                </li>
                <li>
                  <span className="font-semibold text-ink">
                    {content.mission.howWeWork.label}
                  </span>{" "}
                  {content.mission.howWeWork.text}
                </li>
              </ul>
              <div className="rounded border border-ink/10 bg-white p-6">
                <p className="text-sm text-ink/70 italic">
                  {content.mission.quote}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <ProofStats />

      <SystemsLayer />

      <Section>
        <Container>
          <div className="max-w-2xl space-y-4">
            <h2 className="text-[length:var(--step-1)] font-semibold text-ink">
              {content.environment.title}
            </h2>
            <p className="text-[length:var(--step-0)] text-ink/70">
              {content.environment.description}
            </p>
          </div>
        </Container>
        <div className="mt-12">
          <PolicyBadges />
        </div>
      </Section>

      <Section>
        <Container>
          <div className="max-w-2xl space-y-4">
            <h2 className="text-[length:var(--step-1)] font-semibold text-ink">
              {content.whatWeDo.title}
            </h2>
            <p className="text-[length:var(--step-0)] text-ink/70">
              {content.whatWeDo.description}
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {content.whatWeDo.activities.map((activity) => (
              <div
                key={activity.title}
                className="card-glass flex h-full flex-col p-6"
              >
                <h3 className="text-lg font-semibold text-ink">
                  {activity.title}
                </h3>
                <p className="mt-3 text-sm text-ink/70">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-[length:var(--step-1)] font-semibold text-ink">
                {content.projects.title}
              </h2>
              <p className="mt-4 text-sm text-ink/70">
                {content.projects.description}
              </p>
            </div>
            <ButtonLink
              href="/projects"
              label={t("buttons.viewAllProjects")}
              variant="secondary"
            />
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-[length:var(--step-1)] font-semibold text-ink">
                {content.news.title}
              </h2>
              <p className="mt-4 text-sm text-ink/70">
                {content.news.description}
              </p>
            </div>
            <ButtonLink
              href="/news"
              label={t("buttons.readMore")}
              variant="secondary"
            />
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <article key={post.slug} className="card-glass p-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                  {post.category} · {post.date}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-ink">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-ink/70">{post.summary}</p>
                <a
                  href={`/news/${post.slug}`}
                  className="mt-4 inline-flex text-sm font-semibold text-link"
                >
                  {t("buttons.readMore")} →
                </a>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink/50">
              {content.howWeWork.label}
            </p>
            <h2 className="text-[length:var(--step-1)] font-semibold text-ink">
              {content.howWeWork.title}
            </h2>
          </div>
        </Container>
        <div className="mt-12">
          <ProcessSteps />
        </div>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mb-12 max-w-2xl space-y-4">
            <h2 className="text-[length:var(--step-1)] font-semibold text-ink">
              {content.partners.title}
            </h2>
            <p className="text-[length:var(--step-0)] text-ink/70">
              {content.partners.description}
            </p>
          </div>
          <PartnerCategoryTiles />
          <div className="mt-8 text-center">
            <ButtonLink
              href="/partners"
              label={t("buttons.becomePartner")}
              variant="primary"
              className="bg-ink text-white hover:bg-ink/90 focus-visible:ring-brand"
            />
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="max-w-2xl space-y-4">
            <h2 className="text-[length:var(--step-1)] font-semibold text-ink">
              {content.usage.title}
            </h2>
            <ul className="space-y-3 text-[length:var(--step-0)] text-ink/70">
              {content.usage.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-ink/50">
                {content.updates.label}
              </p>
              <h2 className="mt-3 text-[length:var(--step-1)] font-semibold text-ink">
                {content.updates.title}
              </h2>
            </div>
            <ButtonLink
              href="/news"
              label={t("buttons.viewAllUpdates")}
              variant="secondary"
            />
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {content.updates.items.map((item) => (
              <article key={item.title} className="card-glass p-8">
                <h3 className="text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ink/70">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <CallToActionBand
        title={content.cta.title}
        description={content.cta.description}
        primary={{ label: t("buttons.joinLab"), href: "/join" }}
        secondary={{ label: t("buttons.getInvolved"), href: "/get-involved" }}
      />
    </>
  );
}
