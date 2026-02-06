import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { KeyValueList } from "@/components/ui/KeyValueList";
import { InfoBox } from "@/components/ui/InfoBox";
import { Button } from "@/components/ui/Button";
import type { AppLocale } from "@/i18n/routing";
import { orgConfig } from "@/config/org";

type ContactPageProps = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Contact");
  return {
    title: t("eyebrow"),
    description: t("subtitle"),
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Contact");
  return (
    <>
      <PageHeader
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="rounded border border-ink/10 bg-white p-6">
                <h2 className="text-xl font-semibold text-ink">{t("contactDetails.title")}</h2>
              <KeyValueList
                items={[
                  { key: t("contactDetails.email"), value: orgConfig.contact.email.info },
                  { key: t("contactDetails.phone"), value: orgConfig.contact.phone },
                  { key: t("contactDetails.address"), value: orgConfig.address.full },
                  { key: t("contactDetails.responseTime"), value: "Within 48 hours" },
                ]}
              />
              </div>

              <InfoBox variant="default" className="mt-6">
                <h3 className="text-lg font-semibold text-ink">{t("partnerPack.title")}</h3>
                <a
                  href={orgConfig.documents.partnerPack}
                  className="mt-4 inline-flex text-sm font-semibold text-link hover:text-link-dark"
                  download
                >
                  {t("partnerPack.download")}
                </a>
              </InfoBox>
            </div>
            <div className="rounded border border-ink/10 bg-white p-6 lg:col-span-7">
              <form className="space-y-4" aria-label={t("form.title") || "Contact form"}>
                <div>
                  <label htmlFor="funding-route" className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                    {t("form.fundingRoute")}
                  </label>
                  <select
                    id="funding-route"
                    name="fundingRoute"
                    className="mt-2 w-full rounded-xl border border-ink/10 bg-white px-3 py-2 text-sm"
                    aria-required="true"
                  >
                    <option value="">{t("form.fundingRoutes.select") || "Select funding route"}</option>
                    <option value="erasmus">{t("form.fundingRoutes.erasmus")}</option>
                    <option value="solidarity">{t("form.fundingRoutes.solidarity")}</option>
                    <option value="other">{t("form.fundingRoutes.other")}</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="organisation" className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                      {t("form.organisation")}
                    </label>
                    <input
                      id="organisation"
                      name="organisation"
                      type="text"
                      className="mt-2 w-full rounded-xl border border-ink/10 bg-white px-3 py-2 text-sm"
                      placeholder={t("form.organisationPlaceholder")}
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-person" className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                      {t("form.contactPerson")}
                    </label>
                    <input
                      id="contact-person"
                      name="contactPerson"
                      type="text"
                      className="mt-2 w-full rounded-xl border border-ink/10 bg-white px-3 py-2 text-sm"
                      placeholder={t("form.contactPersonPlaceholder")}
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                      {t("form.email")}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="mt-2 w-full rounded-xl border border-ink/10 bg-white px-3 py-2 text-sm"
                      placeholder={t("form.emailPlaceholder")}
                      aria-required="true"
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                      {t("form.location")}
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      className="mt-2 w-full rounded-xl border border-ink/10 bg-white px-3 py-2 text-sm"
                      placeholder={t("form.locationPlaceholder")}
                      autoComplete="address-level1"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="target-group" className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                      {t("form.targetGroup")}
                    </label>
                    <input
                      id="target-group"
                      name="targetGroup"
                      type="text"
                      className="mt-2 w-full rounded-xl border border-ink/10 bg-white px-3 py-2 text-sm"
                      placeholder={t("form.targetGroupPlaceholder")}
                    />
                  </div>
                  <div>
                    <label htmlFor="timeline" className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                      {t("form.timeline")}
                    </label>
                    <input
                      id="timeline"
                      name="timeline"
                      type="text"
                      className="mt-2 w-full rounded-xl border border-ink/10 bg-white px-3 py-2 text-sm"
                      placeholder={t("form.timelinePlaceholder")}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="what-to-deliver" className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                    {t("form.whatToDeliver")}
                  </label>
                  <input
                    id="what-to-deliver"
                    name="whatToDeliver"
                    type="text"
                    className="mt-2 w-full rounded-xl border border-ink/10 bg-white px-3 py-2 text-sm"
                    placeholder={t("form.whatToDeliverPlaceholder")}
                  />
                </div>
                <div>
                  <label htmlFor="what-you-need" className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                    {t("form.whatYouNeed")}
                  </label>
                  <select
                    id="what-you-need"
                    name="whatYouNeed"
                    className="mt-2 w-full rounded-xl border border-ink/10 bg-white px-3 py-2 text-sm"
                  >
                    <option value="">{t("form.needs.select") || "Select option"}</option>
                    <option value="digital">{t("form.needs.digital")}</option>
                    <option value="field">{t("form.needs.field")}</option>
                    <option value="both">{t("form.needs.both")}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="links" className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                    {t("form.links")}
                  </label>
                  <textarea
                    id="links"
                    name="links"
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-ink/10 bg-white px-3 py-2 text-sm"
                    placeholder={t("form.linksPlaceholder")}
                    aria-describedby="links-description"
                  />
                  <p id="links-description" className="sr-only">
                    {t("form.linksDescription") || "Provide any relevant links or additional information"}
                  </p>
                </div>
                <Button type="submit" variant="primary" size="md">
                  {t("form.submit")}
                </Button>
                <p className="text-xs text-ink/60">{t("form.privacy")}</p>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}