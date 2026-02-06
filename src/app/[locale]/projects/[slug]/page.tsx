import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { projectsContent } from "@/data/projectsContent";
import { CallToActionBand } from "@/components/layout/CallToActionBand";
import type { AppLocale } from "@/i18n/routing";
import { orgConfig } from "@/config/org";
import {
  getConfirmedDeliverables,
  getRequiredDeliverables,
  hasRequiredItems,
  getSupportNeeded,
  formatTimeline,
} from "@/data/projectUtils";
import {
  isErasmusProject as checkIsErasmusProject,
  isFieldDeliveryProject,
  isVillageTransformationProject,
} from "@/data/constants";
import { ContentCard } from "@/components/ui/ContentCard";
import { BulletList } from "@/components/ui/BulletList";
import { KeyValueList } from "@/components/ui/KeyValueList";
import { InfoBox } from "@/components/ui/InfoBox";

type ProjectDetailProps = {
  params: Promise<{ slug: string; locale: AppLocale }>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Projects.detail");
  const projects = projectsContent[locale];
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const isErasmusProject = checkIsErasmusProject(project.tags);
  const isFieldSite = project.slug === "the-valley-field-site" || isFieldDeliveryProject(project.tags);
  const isVillageTransformation = project.slug === "chereshovo-transformation" || isVillageTransformationProject(project.tags);

  // Get 2-line summary for hero - these are project-specific summaries that come from project data
  // The project.goal is already locale-aware from projectsContent[locale]
  const getHeroSummary = () => {
    // If needed, they could be moved to the project data files
    return project.goal;
  };

  return (
    <>
      <PageHeader
        eyebrow={`${t("eyebrow")} · ${project.year}`}
        title={project.title}
        subtitle={getHeroSummary()}
      />

      <Section>
        <Container>
          <div className="max-w-4xl space-y-8">
            {/* Key Facts */}
            <ContentCard title={t("keyFacts")}>
              <KeyValueList
                items={[
                  { key: t("location"), value: project.locations.join(", ") },
                  ...(isErasmusProject
                    ? [
                        { key: t("participantProfile"), value: project.targetGroups[0] },
                        { key: t("duration"), value: t("durationValue") },
                      ]
                    : []),
                  ...(isFieldSite
                    ? [
                        { key: t("status"), value: project.status },
                        { key: t("start"), value: "2023" },
                      ]
                    : []),
                  ...(isVillageTransformation
                    ? [
                        { key: t("timeline"), value: formatTimeline(project.timeline, project.locations) },
                        { key: t("status"), value: project.status },
                      ]
                    : []),
                  ...(!isErasmusProject && !isFieldSite && !isVillageTransformation
                    ? [
                        { key: t("status"), value: project.status },
                        { key: t("timeline"), value: formatTimeline(project.timeline, project.locations) },
                      ]
                    : []),
                ]}
              />
            </ContentCard>

            {/* Why this project exists (Erasmus+ only) */}
            {isErasmusProject && (
              <ContentCard title={t("whyExists")}>
                <p className="mt-4 text-sm text-ink/70 md:text-base">
                  Chereshovo is remote with limited youth opportunities, low digital connectivity, and little exposure to broader European experiences. The exchange creates a safe, structured space for youth to build competence, pride, and agency through real work in their own community.
                </p>
              </ContentCard>
            )}

            {/* Objectives */}
            <ContentCard
              title={
                isErasmusProject
                  ? t("objectives")
                  : isFieldSite
                    ? t("whatHappens")
                    : isVillageTransformation
                      ? t("workstreams")
                      : t("objectives")
              }
            >
              {isErasmusProject ? (
                <BulletList
                  items={[
                    "Build skills and confidence through practical community tasks and guided reflection",
                    "Strengthen inclusion and intercultural dialogue between rural youth across countries",
                    "Improve local environment and community pride through tangible actions",
                    "Develop European identity and active citizenship through lived participation",
                    "Build partner capacity and a base for follow-up projects",
                  ]}
                />
              ) : isFieldSite || isVillageTransformation ? (
                <BulletList items={project.activities} />
              ) : (
                <BulletList items={project.outcomes} />
              )}
            </ContentCard>

            {/* Activities and methodology (Erasmus+ only) */}
            {isErasmusProject && (
              <ContentCard title={t("activities")}>
                <BulletList items={project.activities} />
              </ContentCard>
            )}

            {/* Inclusion and safeguarding (Erasmus+ only) */}
            {isErasmusProject && (
              <ContentCard title={t("inclusion")}>
                <p className="mt-4 text-sm text-ink/70 md:text-base">
                  {project.riskNotes[0]}
                </p>
                <p className="mt-4 text-sm text-ink/70">
                  {t("safeguardingNote")}{" "}
                  <a
                    href={orgConfig.policies.safeguarding}
                    className="font-semibold text-link hover:text-link-dark"
                  >
                    {t("safeguardingLink")}
                  </a>
                </p>
              </ContentCard>
            )}

            {/* Preparation and risk management (Erasmus+ only) */}
            {isErasmusProject && project.riskNotes.length > 1 && (
              <ContentCard title={t("preparation")}>
                <p className="mt-4 text-sm text-ink/70 md:text-base">
                  {project.riskNotes[1]}
                </p>
              </ContentCard>
            )}

            {/* Dissemination and evidence (Erasmus+ only) */}
            {isErasmusProject && (
              <ContentCard title={t("dissemination")}>
                <BulletList
                  items={project.deliverables.filter(
                    (d) =>
                      d.includes("documentation") ||
                      d.includes("dissemination") ||
                      d.includes("archive") ||
                      d.includes("closing event") ||
                      d.includes("report")
                  )}
                />
              </ContentCard>
            )}

            {/* Outputs */}
            <ContentCard title={t("outputs")}>
              {(() => {
                const confirmedDeliverables = getConfirmedDeliverables(project);
                const requiredDeliverables = getRequiredDeliverables(project);
                
                // For Erasmus+ projects, filter to specific output types
                const displayDeliverables = isErasmusProject
                  ? confirmedDeliverables.filter(d => 
                      d.includes("trail") || 
                      d.includes("clean-up") || 
                      d.includes("Digital stories") || 
                      d.includes("documentation") || 
                      d.includes("dissemination") || 
                      d.includes("archive") || 
                      d.includes("closing event") || 
                      d.includes("report")
                    )
                  : confirmedDeliverables;
                
                return (
                  <>
                    <BulletList items={displayDeliverables} />
                    {requiredDeliverables.length > 0 && (
                      <div className="mt-4 rounded bg-ink/5 p-4">
                        <p className="text-xs font-semibold text-ink/60">{t("requiredInputs")}</p>
                        <BulletList items={requiredDeliverables} size="sm" />
                      </div>
                    )}
                  </>
                );
              })()}
            </ContentCard>

            {/* Follow-up (Erasmus+ only) */}
            {isErasmusProject && (
              <ContentCard title={t("followUp")}>
                <BulletList
                  items={[
                    t("followUpItems.reunion"),
                    t("followUpItems.youthpass"),
                    t("followUpItems.initiatives"),
                    t("followUpItems.followUpProjects"),
                  ]}
                />
              </ContentCard>
            )}

            {/* How it connects to other projects (Field Site only) */}
            {isFieldSite && (
              <ContentCard title={t("connections")}>
                <p className="mt-4 text-sm text-ink/70 md:text-base">
                  This site supports programme delivery quality and scalability for village-based projects like Chereshovo.
                </p>
              </ContentCard>
            )}

            {/* Required inputs */}
            {project.supportNeeded.length > 0 && (
              <ContentCard title={t("requiredInputsTitle")} variant="highlighted">
                <BulletList items={getSupportNeeded(project)} />
              </ContentCard>
            )}
          </div>
        </Container>
      </Section>

      <CallToActionBand
        title={t("cta.title")}
        description={t("cta.description")}
        primary={{ label: t("cta.primary"), href: "/contact" }}
        secondary={t("cta.secondary") ? { label: t("cta.secondary"), href: "/work-with-us" } : undefined}
      />
    </>
  );
}