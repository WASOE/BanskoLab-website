import { Container } from "@/components/layout/Container";

type EvidenceCard = {
  title: string;
  body: string;
  link?: string;
};

type EvidenceStripProps = {
  cards: EvidenceCard[];
};

export function EvidenceStrip({ cards }: EvidenceStripProps) {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded border border-ink/10 bg-white p-6"
          >
            <h3 className="text-sm font-semibold text-ink">{card.title}</h3>
            <p className="mt-2 text-sm text-ink/70">{card.body}</p>
            {card.link && (
              <a
                href={card.link}
                className="mt-3 inline-flex text-xs font-semibold text-link hover:text-link-dark"
              >
                View evidence →
              </a>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}
