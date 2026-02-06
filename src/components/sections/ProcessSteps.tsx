import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/Container";
import { processSteps } from "@/data/site";

export async function ProcessSteps() {
  const t = await getTranslations("ProcessSteps");

  // Map step titles to translation keys
  const stepKeyMap: Record<string, string> = {
    "Open door": "openDoor",
    "Co-create": "coCreate",
    "Build": "build",
    "Share": "share",
  };

  return (
    <Container>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => {
          const stepKey = stepKeyMap[step.title] || step.title.toLowerCase().replace(/\s+/g, "");
          return (
            <div
              key={step.title}
              className="rounded border border-ink/10 bg-white p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                {t("step")} {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-ink">
                {t(`${stepKey}.title`)}
              </h3>
              <p className="mt-2 text-sm text-ink/70">
                {t(`${stepKey}.description`)}
              </p>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
