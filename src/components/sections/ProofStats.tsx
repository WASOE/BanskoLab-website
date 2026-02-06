import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/Container";
import { stats } from "@/data/site";

export async function ProofStats() {
  const t = await getTranslations("ProofStats");

  // Map stat labels to translation keys
  const statKeyMap: Record<string, string> = {
    "Members": "members",
    "Active projects": "activeProjects",
    "Upcoming events": "upcomingEvents",
    "Volunteer roles": "volunteerRoles",
  };

  return (
    <div className="border-y border-[#EEE] bg-white">
      <Container>
        <div className="grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {stats.map((stat) => {
            const statKey = statKeyMap[stat.label] || stat.label.toLowerCase().replace(/\s+/g, "");
            return (
              <div key={stat.label} className="space-y-1">
                {stat.value && (
                <p className="text-2xl font-semibold text-ink md:text-3xl font-mono">
                  {stat.value}
                </p>
                )}
                <p className="text-xs font-mono uppercase tracking-[0.18em] text-ink/60">
                  {t(statKey)}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
