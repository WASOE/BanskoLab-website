import { getTranslations, setRequestLocale } from "next-intl/server";
import { getLocale } from "next-intl/server";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";

export async function SystemsLayer() {
  const locale = await getLocale();
  setRequestLocale(locale);
  const t = await getTranslations("SystemsLayer");

  const items = [
    "weeklySessions",
    "activeProjects",
    "volunteerRoles",
    "howToContribute",
    "erasmusPipeline",
  ];

  return (
    <div className="bg-[#1A1A1A] text-white">
      <Container>
        <div className="py-12 md:py-16">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-wide text-white/80">
              {t("title")}
            </p>
            <h2 className="mb-8 text-2xl font-semibold text-white md:text-3xl">
              {t("heading")}
            </h2>
            <ul className="mb-8 space-y-4 text-sm text-white/90 md:text-base">
              {items.map((itemKey) => (
                <li key={itemKey} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E2FF00]" />
                  {t(`items.${itemKey}`)}
                </li>
              ))}
            </ul>
            <ButtonLink
              href="/get-involved"
              label={t("button")}
              variant="primary"
              className="bg-[#E2FF00] text-[#1A1A1A] hover:bg-[#E2FF00]/90"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
