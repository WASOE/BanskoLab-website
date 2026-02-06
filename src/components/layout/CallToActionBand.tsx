import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";

type CallToActionBandProps = {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function CallToActionBand({
  title,
  description,
  primary,
  secondary,
}: CallToActionBandProps) {
  return (
    <div className="bg-brand text-ink">
      <Container>
        <div className="flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-16">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
            <p className="text-sm text-ink/80 md:text-base">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink
              href={primary.href}
              label={primary.label}
              variant="inverse"
            />
            {secondary ? (
              <ButtonLink
                href={secondary.href}
                label={secondary.label}
                variant="ghost"
              />
            ) : null}
          </div>
        </div>
      </Container>
    </div>
  );
}
