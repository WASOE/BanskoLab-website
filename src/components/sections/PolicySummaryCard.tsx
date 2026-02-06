import Link from "next/link";
import type { Policy } from "@/data/types";

type PolicySummaryCardProps = {
  policy: Policy;
};

export function PolicySummaryCard({ policy }: PolicySummaryCardProps) {
  return (
    <article className="rounded border border-ink/10 bg-white p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
        Last updated {policy.lastUpdated}
      </p>
      <h3 className="mt-3 text-lg font-semibold text-ink">{policy.title}</h3>
      <p className="mt-2 text-sm text-ink/70">{policy.summary}</p>
      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm font-semibold text-link">
        <Link href={`/policies/${policy.slug}`}>Read policy</Link>
        <a href={policy.pdf}>Download PDF</a>
      </div>
    </article>
  );
}
