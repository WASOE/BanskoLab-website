import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section className="bg-white min-h-screen flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h1 className="text-[length:var(--step-2)] font-semibold text-ink">
            404
          </h1>
          <p className="text-[length:var(--step-0)] text-ink/70">
            This page could not be found.
          </p>
          <div className="flex gap-4 justify-center">
            <ButtonLink href="/en" label="Go to Home" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
