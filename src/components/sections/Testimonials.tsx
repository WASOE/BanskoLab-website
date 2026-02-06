import { Container } from "@/components/layout/Container";
import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {testimonials.map((item) => (
          <figure
            key={item.name}
            className="rounded border border-ink/10 bg-white p-6 md:p-8"
          >
            <blockquote className="text-base text-ink/80 md:text-lg">
              “{item.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-ink/60">
              {item.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </Container>
  );
}
