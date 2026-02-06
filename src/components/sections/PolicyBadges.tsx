import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { orgConfig } from "@/config/org";

const badges = [
  { labelKey: "safeguarding", href: orgConfig.policies.safeguarding },
  { labelKey: "privacy", href: orgConfig.policies.privacy },
  { labelKey: "governance", href: "/transparency" },
];

export async function PolicyBadges() {
  const t = await getTranslations("PolicyBadges");

  return (
    <Container>
      <div className="flex flex-wrap gap-3">
        {badges.map((badge) => (
          <Link
            key={badge.labelKey}
            href={badge.href}
            className="rounded border border-ink/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink/70"
          >
            {t(badge.labelKey)}
          </Link>
        ))}
      </div>
    </Container>
  );
}
