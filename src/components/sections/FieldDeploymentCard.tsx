import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ButtonLink } from "@/components/ui/Button";
import type { Project } from "@/data/types";

type FieldDeploymentCardProps = {
  project: Project;
  deploymentId: string;
  tasks: Array<{
    type: "LABOR" | "SYSTEM";
    label: string;
    progress: number;
  }>;
  hardOutputs: string[];
  auditStatus?: "VERIFIED_OUTCOME" | "AUDIT_READY" | "IN_PROGRESS";
};

export function FieldDeploymentCard({
  project,
  deploymentId,
  tasks,
  hardOutputs,
  auditStatus = "AUDIT_READY",
}: FieldDeploymentCardProps) {
  const statusColors = {
    VERIFIED_OUTCOME: "bg-success text-white",
    AUDIT_READY: "bg-brand text-ink",
    IN_PROGRESS: "bg-warning text-white",
  };

  return (
    <article className="card-glass group relative flex h-full flex-col overflow-hidden border-2 border-ink/10">
      {/* Deployment ID Header */}
      <div className="border-b border-ink/10 bg-ink/5 px-6 py-3">
        <p className="text-[10px] font-mono uppercase tracking-widest text-ink/60">
          [ID: {deploymentId}]
        </p>
      </div>

      {/* Image with Tactical Overlay */}
      <div className="relative">
        <div className="aspect-[4/3] w-full overflow-hidden">
          <Image
            src={project.gallery[0]}
            alt={`${project.title} field deployment`}
            width={560}
            height={420}
            className="h-full w-full object-cover brightness-95"
          />
        </div>
        
        {/* Tactical Task List Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/80 to-transparent p-4">
          <div className="space-y-2 text-[10px] font-mono uppercase tracking-widest text-white">
            {tasks.map((task, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span>
                  [{task.type}]: {task.label}
                </span>
                <span className="font-semibold">[{task.progress}%]</span>
              </div>
            ))}
          </div>
        </div>

        {/* Status Seal Badge */}
        <div className="absolute right-4 top-4">
          <div className={`rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest ${statusColors[auditStatus]}`}>
            {auditStatus.replace(/_/g, " ")}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-ink" style={{ fontFamily: 'var(--font-inter), Arial, Helvetica, sans-serif' }}>{project.title}</h3>
        <p className="mt-2 text-xs font-mono uppercase tracking-widest text-ink/60">
          {project.locations.join(", ")} · {project.year}
        </p>

        {/* Hard Outputs */}
        <div className="mt-4 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
            Hard Outputs
          </p>
          <ul className="space-y-1 text-sm font-semibold text-ink">
            {hardOutputs.map((output, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                {output}
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Metadata */}
        <div className="mt-6 space-y-2 border-t border-ink/10 pt-4">
          <p className="text-xs font-mono uppercase tracking-widest text-ink/60">
            [LOCATION]: {project.locations.join(", ")}
          </p>
          <p className="text-xs font-mono uppercase tracking-widest text-ink/60">
            [PROTOCOL]: {project.tags.join(" / ")}
          </p>
          <p className="text-xs font-mono uppercase tracking-widest text-ink/60">
            [AUDIT_STATUS]: {auditStatus.replace(/_/g, " ")}
          </p>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col gap-3">
          <ButtonLink
            href={`/documents/field-evidence-${project.slug}.pdf`}
            label="Download Field Evidence Pack (PDF)"
            variant="secondary"
            className="w-full text-xs"
          />
          <Link
            href={`/projects/${project.slug}`}
            className="text-center text-xs font-semibold text-link hover:text-link-dark"
          >
            View full deployment log →
          </Link>
        </div>
      </div>
    </article>
  );
}
