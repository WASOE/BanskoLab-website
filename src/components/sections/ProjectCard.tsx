import Image from "next/image";
import { Link } from "@/i18n/routing";
import type { Project } from "@/data/types";
import { PROJECT_STATUS, PROGRAMME_CATEGORY } from "@/data/constants";
import {
  isErasmusProject,
  isFieldDeliveryProject,
  isVillageTransformationProject,
} from "@/data/constants";
import { formatTimeline } from "@/data/projectUtils";

type ProjectCardProps = {
  project: Project;
};

// Calendar icon SVG
const CalendarIcon = () => (
  <svg
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

// Get status color based on status value
const getStatusColor = (status: string) => {
  const statusUpper = status.toUpperCase();
  if (statusUpper === PROJECT_STATUS.ACTIVE || statusUpper === "ONGOING") {
    return "bg-green-100 text-green-800 border-green-200";
  }
  if (statusUpper === PROJECT_STATUS.PLANNED) {
    return "bg-blue-100 text-blue-800 border-blue-200";
  }
  if (statusUpper === PROJECT_STATUS.IN_DESIGN || statusUpper === PROJECT_STATUS.COMPLETED) {
    return "bg-gray-100 text-gray-800 border-gray-200";
  }
  return "bg-gray-100 text-gray-800 border-gray-200";
};

// Get programme label from tags
const getProgrammeLabel = (tags: string[]): string | null => {
  if (isErasmusProject(tags)) {
    return PROGRAMME_CATEGORY.ERASMUS_KA152;
  }
  if (isFieldDeliveryProject(tags)) {
    return PROGRAMME_CATEGORY.FIELD_DELIVERY;
  }
  if (isVillageTransformationProject(tags)) {
    return PROGRAMME_CATEGORY.VILLAGE_TRANSFORMATION;
  }
  return null;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const statusColor = getStatusColor(project.status);
  const programmeLabel = getProgrammeLabel(project.tags);
  const primaryCategory = programmeLabel || project.tags[0] || "Project";
  const isErasmus = isErasmusProject(project.tags);
  const ctaLabel = isErasmus ? "View programme details" : "Read more";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image Container with Overlay Badges */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.gallery[0]}
          alt={`${project.title} - project activity and learning outcomes`}
          width={560}
          height={320}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={75}
          loading="lazy"
        />
        {/* Status and Category Badges - Top Left */}
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${statusColor}`}
          >
            {project.status}
          </span>
          <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700">
            {primaryCategory}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Title */}
        <h3 className="text-xl font-bold leading-tight text-gray-900">
          <Link
            href={`/projects/${project.slug}`}
            className="hover:text-link focus:text-link focus:outline-none focus:ring-2 focus:ring-link focus:ring-offset-2 rounded"
          >
        {project.title}
          </Link>
      </h3>

        {/* Timeline with Calendar Icon */}
        <div className="mt-3 flex items-start gap-2 text-sm text-gray-600">
          <CalendarIcon />
          <span className="flex-1">{formatTimeline(project.timeline, project.locations)}</span>
        </div>

        {/* Description - Truncated to 3 lines */}
        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-700">
          {project.goal}
        </p>

        {/* Outcomes bullets - Show first 2-3 */}
        {project.outcomes.length > 0 && (
          <ul className="mt-4 space-y-1.5 text-xs text-gray-600">
            {project.outcomes.slice(0, 3).map((outcome, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span className="line-clamp-1">{outcome}</span>
        </li>
            ))}
      </ul>
        )}

        {/* Footer Action - Pinned to bottom */}
        <div className="mt-auto pt-6">
        <Link
          href={`/projects/${project.slug}`}
            className="group/link inline-flex items-center text-sm font-semibold text-link transition-all duration-200 hover:text-link-dark"
        >
            {ctaLabel}
            <svg
              className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
        </Link>
        </div>
      </div>
    </article>
  );
}
