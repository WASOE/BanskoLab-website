import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { EvidenceStrip } from "@/components/sections/EvidenceStrip";
import { ImageCompare } from "@/components/sections/ImageCompare";
import type { AppLocale } from "@/i18n/routing";
import { orgConfig } from "@/config/org";

type TheValleyPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({
  params,
}: TheValleyPageProps): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("TheValley");
  return {
    title: t("title"),
    description: t("description2"),
  };
}

export default async function TheValleyPage({ params }: TheValleyPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("TheValley");

  const programmeModules = [
    {
      title: t("programmeModules.modules.offGrid.title"),
      whatHappens: t("programmeModules.modules.offGrid.whatHappens"),
      youLeaveWith: t("programmeModules.modules.offGrid.youLeaveWith"),
    },
    {
      title: t("programmeModules.modules.ruralSafeguarding.title"),
      whatHappens: t("programmeModules.modules.ruralSafeguarding.whatHappens"),
      youLeaveWith: t("programmeModules.modules.ruralSafeguarding.youLeaveWith"),
    },
    {
      title: t("programmeModules.modules.fieldDocumentation.title"),
      whatHappens: t("programmeModules.modules.fieldDocumentation.whatHappens"),
      youLeaveWith: t("programmeModules.modules.fieldDocumentation.youLeaveWith"),
    },
    {
      title: t("programmeModules.modules.communityMapping.title"),
      whatHappens: t("programmeModules.modules.communityMapping.whatHappens"),
      youLeaveWith: t("programmeModules.modules.communityMapping.youLeaveWith"),
    },
    {
      title: t("programmeModules.modules.inclusion.title"),
      whatHappens: t("programmeModules.modules.inclusion.whatHappens"),
      youLeaveWith: t("programmeModules.modules.inclusion.youLeaveWith"),
    },
    {
      title: t("programmeModules.modules.partnerCoordination.title"),
      whatHappens: t("programmeModules.modules.partnerCoordination.whatHappens"),
      youLeaveWith: t("programmeModules.modules.partnerCoordination.youLeaveWith"),
    },
  ];

  const evidenceCards = [
    {
      title: t("evidenceCards.activityAgenda.title"),
      body: t("evidenceCards.activityAgenda.body"),
    },
    {
      title: t("evidenceCards.riskPack.title"),
      body: t("evidenceCards.riskPack.body"),
    },
    {
      title: t("evidenceCards.outputs.title"),
      body: t("evidenceCards.outputs.body"),
    },
    {
      title: t("evidenceCards.dissemination.title"),
      body: t("evidenceCards.dissemination.body"),
    },
  ];

  return (
    <>
      {/* Block A: Header + aerial image */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <h1 className="text-[length:var(--step-2)] font-semibold leading-[0.95] text-ink">
                {t("title")}
              </h1>
              <div className="mt-6 space-y-4 text-[length:var(--step-0)] text-ink/70">
                <p>
                  {t("description1")}
                </p>
                <p>
                  {t("description2")}
                </p>
                <p className="text-sm text-ink/60">
                  {t("arrivalNote")}
                </p>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/The Valley/Screencastfrom2024-09-3022-01-26-ezgif.com-video-to-gif-converter-1-1.gif"
                  alt="Field delivery context, Rhodope region (2025)"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Block B: What we run here */}
      <Section className="bg-gray-50">
        <Container>
          <h2 className="text-[length:var(--step-1)] font-semibold text-ink">
            {t("whatPartnersCanDeliver.title")}
          </h2>
          <ul className="mt-6 space-y-3 text-[length:var(--step-0)] text-ink/70">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span>
                {t("whatPartnersCanDeliver.items.learningBlocks")}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span>
                {t("whatPartnersCanDeliver.items.outdoorActivities")}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span>
                {t("whatPartnersCanDeliver.items.partnerSessions")}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span>
                {t("whatPartnersCanDeliver.items.documentation")}
              </span>
            </li>
          </ul>
        </Container>
      </Section>

      {/* Block C: Programme modules */}
      <Section className="bg-white">
        <Container>
          <h2 className="text-[length:var(--step-1)] font-semibold text-ink">
            {t("programmeModules.title")}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programmeModules.map((module, index) => (
              <div
                key={index}
                className="rounded border border-ink/10 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-ink">
                  {module.title}
                </h3>
                <p className="mt-3 text-sm text-ink/70">
                  <span className="font-semibold">{t("programmeModules.whatHappens")}</span> {module.whatHappens}
                </p>
                <p className="mt-2 text-sm text-ink/70">
                  <span className="font-semibold">{t("programmeModules.youLeaveWith")}</span> {module.youLeaveWith}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Block D: Split seasons image */}
      <Section className="bg-gray-50">
        <Container>
          <h1 className="text-[length:var(--step-2)] font-semibold leading-[0.95] text-ink mb-8">
            {t("hero.headline")}
          </h1>
          <ImageCompare
            leftImage="/images/The Valley/1768207815-2996ea84.jpg"
            rightImage="/images/The Valley/1768208001-196d2a1f.jpg"
            leftLabel={t("hero.summerLabel")}
            rightLabel={t("hero.winterLabel")}
            alt="The Valley field site"
          />
          <p className="mt-4 text-[length:var(--step-0)] text-ink/70">
            {t("hero.description")}
          </p>
          <p className="mt-2 text-sm text-ink/60">
            {t("hero.caption")}
          </p>
        </Container>
      </Section>

      {/* Block E: Gallery - How delivery looks on the ground */}
      <Section className="bg-white">
        <Container>
          <h2 className="text-[length:var(--step-1)] font-semibold text-ink">
            {t("activityGallery.title")}
          </h2>
          <p className="mt-4 max-w-3xl text-[length:var(--step-0)] text-ink/70">
            {t("activityGallery.intro")}
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-3">
              <div className="relative aspect-square w-full overflow-hidden rounded">
                <Image
                  src="/images/The Valley/-03e7a985-8967-4a35-9169-36206d128506.png"
                  alt={t("activityGallery.items.firepit.caption")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-sm text-ink/70">
                {t("activityGallery.items.firepit.caption")}
              </p>
            </div>
            <div className="space-y-3">
              <div className="relative aspect-square w-full overflow-hidden rounded">
                <Image
                  src="/images/The Valley/WhatsApp Image 2025-12-03 at 4.36.15 PM (1).jpeg"
                  alt={t("activityGallery.items.porch.caption")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-sm text-ink/70">
                {t("activityGallery.items.porch.caption")}
              </p>
            </div>
            <div className="space-y-3">
              <div className="relative aspect-square w-full overflow-hidden rounded">
                <Image
                  src="/images/The Valley/Lux-cabin-exterior-1768207498-98737209.jpg"
                  alt={t("activityGallery.items.reading.caption")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-sm text-ink/70">
                {t("activityGallery.items.reading.caption")}
              </p>
            </div>
            <div className="space-y-3">
              <div className="relative aspect-square w-full overflow-hidden rounded">
                <Image
                  src="/images/The Valley/f09771dc-4190-435a-bf02-9158f5419cbe.jpg"
                  alt={t("activityGallery.items.sunrise.caption")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-sm text-ink/70">
                {t("activityGallery.items.sunrise.caption")}
              </p>
            </div>
            <div className="space-y-3">
              <div className="relative aspect-square w-full overflow-hidden rounded">
                <Image
                  src="/images/The Valley/1760891864528-oo96olwh9l-WhatsApp-Image-2025-10-14-at-2.05.17-PM-(1).jpeg"
                  alt={t("activityGallery.items.hottub.caption")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-sm text-ink/70">
                {t("activityGallery.items.hottub.caption")}
              </p>
            </div>
            <div className="space-y-3">
              <div className="relative aspect-square w-full overflow-hidden rounded">
                <Image
                  src="/images/The Valley/WhatsApp Image 2026-01-11 at 11.43.40 AM.jpeg"
                  alt={t("activityGallery.items.atv.caption")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-sm text-ink/70">
                {t("activityGallery.items.atv.caption")}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Block F: Delivery workflow */}
      <Section className="bg-gray-50">
        <Container>
          <h2 className="text-[length:var(--step-1)] font-semibold text-ink">
            {t("deliveryWorkflow.title")}
          </h2>
          <p className="mt-4 max-w-3xl text-[length:var(--step-0)] text-ink/70">
            {t("deliveryWorkflow.intro")}
          </p>
          <ol className="mt-6 space-y-2 text-[length:var(--step-0)] text-ink/70">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span>1. {t("deliveryWorkflow.steps.0")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span>2. {t("deliveryWorkflow.steps.1")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span>3. {t("deliveryWorkflow.steps.2")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span>4. {t("deliveryWorkflow.steps.3")}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span>5. {t("deliveryWorkflow.steps.4")}</span>
            </li>
          </ol>
        </Container>
      </Section>

      {/* Block G: Evidence trail */}
      <Section className="bg-white">
        <Container>
          <h2 className="text-[length:var(--step-1)] font-semibold text-ink">
            {t("evidence.title")}
          </h2>
          <p className="mt-4 max-w-3xl text-[length:var(--step-0)] text-ink/70">
            {t("evidence.description")}
          </p>
        </Container>
        <div className="mt-8">
          <EvidenceStrip cards={evidenceCards} />
        </div>
      </Section>

      {/* Block H: Governance */}
      <Section className="bg-gray-50">
        <Container>
          <h2 className="text-[length:var(--step-1)] font-semibold text-ink">
            {t("governance.title")}
          </h2>
          <p className="mt-4 max-w-3xl text-[length:var(--step-0)] text-ink/70">
            {t("governance.description")}
          </p>
          <ul className="mt-6 space-y-3 text-[length:var(--step-0)] text-ink/70">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span>
                {t("governance.items.management")}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span>
                {t("governance.items.costs")}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
              <span>
                {t("governance.items.conflicts")}
              </span>
            </li>
          </ul>
        </Container>
      </Section>

      {/* Block I: Logistics brief */}
      <Section className="bg-white">
        <Container>
          <h2 className="text-[length:var(--step-1)] font-semibold text-ink">
            {t("logisticsBrief.title")}
          </h2>
          <p className="mt-4 max-w-3xl text-[length:var(--step-0)] text-ink/70 mb-6">
            {t("logisticsBrief.description")}
          </p>
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded border border-ink/10">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.5!2d23.507858!3d41.747277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQ0JzUwLjIiTiAyM8KwMzAnMjguMyJF!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
        </Container>
      </Section>


      {/* Contact */}
      <Section className="bg-gray-50">
        <Container>
          <h2 className="text-[length:var(--step-1)] font-semibold text-ink">
            {t("contact.title")}
          </h2>
          <p className="mt-4 text-[length:var(--step-0)] text-ink/70">
            {t("contact.description")}{" "}
            <a
              href={`mailto:${orgConfig.contact.email.info}`}
              className="font-semibold text-link hover:text-link-dark"
            >
              {orgConfig.contact.email.info}
            </a>
          </p>
        </Container>
      </Section>

      {/* Footer note */}
      <Section className="bg-white py-8">
        <Container>
          <p className="text-sm text-ink/60">
            {t("footer")}
          </p>
        </Container>
      </Section>
    </>
  );
}
