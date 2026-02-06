import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

type CaseStudy = {
  title: string;
  context: string;
  activities: string;
  outputs: string;
  evidenceLabel: string;
  evidenceHref: string;
};

type CaseStudyBlockProps = {
  items: CaseStudy[];
};

export function CaseStudyBlock({ items }: CaseStudyBlockProps) {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={cn(
              "card-glass p-8",
              index % 2 === 1 && "lg:translate-y-6",
            )}
          >
            <h3 className="text-lg font-semibold text-ink md:text-xl">
              {item.title}
            </h3>
            <div className="mt-4 space-y-2 text-xs font-mono uppercase tracking-[0.18em] text-ink/60">
              <p>[CONTEXT]: {item.context}</p>
              <p>[ACTIVITIES]: {item.activities}</p>
              <p>[OUTPUTS]: {item.outputs}</p>
              <p className="flex flex-wrap items-center gap-2">
                <span>[EVIDENCE]:</span>
                <a
                  href={item.evidenceHref}
                  className="inline-flex items-center gap-2 font-semibold text-link hover:text-link-dark"
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-ink/20 text-link"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                      className="h-3 w-3"
                    >
                      <path
                        d="M10 3v8m0 0l3-3m-3 3l-3-3M4 13v2h12v-2"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item.evidenceLabel}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
