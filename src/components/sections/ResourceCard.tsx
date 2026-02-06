import { Link } from "@/i18n/routing";
import type { Resource } from "@/data/types";

type ResourceCardProps = {
  resource: Resource;
};

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <article className="rounded border border-ink/10 bg-white p-6">
      <div className="flex items-start justify-between gap-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
          {resource.type}
      </p>
        {resource.year && (
          <p className="text-xs font-mono text-ink/50">{resource.year}</p>
        )}
      </div>
      <h3 className="mt-3 text-lg font-semibold text-ink">{resource.title}</h3>
      <p className="mt-2 text-sm text-ink/70">{resource.description}</p>
      <div className="mt-4 space-y-1 text-xs text-ink/60">
        <p>Audience: {resource.audience}</p>
        {resource.project && (
          <p>Project: <Link href={`/projects/${resource.project}`} className="text-link hover:text-link-dark">View project</Link></p>
        )}
        <p>Date: {resource.date}</p>
        <p>License: {resource.license}</p>
      </div>
      <a
        href={resource.file}
        className="mt-4 inline-flex text-sm font-semibold text-link hover:text-link-dark"
      >
        {resource.type === "Media" ? "View gallery" : "Download resource"}
      </a>
    </article>
  );
}
