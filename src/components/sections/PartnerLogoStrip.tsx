import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { partners } from "@/data/partners";

export function PartnerLogoStrip() {
  // Determine logo styling based on file type
  const getLogoStyle = (logoPath: string) => {
    // Logos that likely have backgrounds that need treatment
    if (logoPath.includes('Belitsa_Municipality') || 
        logoPath.includes('Bansko-municipality') ||
        logoPath.includes('logo.png') ||
        logoPath.includes('european union')) {
      return {
        className: 'mix-blend-multiply',
        style: {
          filter: 'contrast(1.3) brightness(1.05) saturate(1.2)',
        }
      };
    }
    // Clean logos that just need slight enhancement
    return {
      className: '',
      style: {
        filter: 'contrast(1.1)',
      }
    };
  };

  return (
    <Container>
      <div className="rounded border border-ink/10 bg-white px-4 py-6 md:px-8 md:py-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-ink/60">
          Trusted partners
        </p>
        <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => {
            const logoStyle = getLogoStyle(partner.logo);
            return (
              <div
                key={partner.name}
                className="flex flex-col items-center justify-center space-y-3"
              >
                <div className="flex items-center justify-center rounded-lg bg-white p-4 h-28 w-full border border-ink/10 shadow-sm">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={200}
                    height={120}
                    className={`max-h-20 w-auto object-contain ${logoStyle.className}`}
                    style={logoStyle.style}
                  />
                </div>
                <p className="text-xs font-semibold text-ink/90 text-center leading-tight max-w-[140px] px-1">
                  {partner.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
