import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Container } from "@/components/layout/Container";

type PartnerCategory = {
  titleKey: string;
  image: string;
};

const categories: PartnerCategory[] = [
  {
    titleKey: "intergovernmental",
    image: "/images/banskolab/activities/20211121_151250-scaled.jpg",
  },
  {
    titleKey: "authorities",
    image: "/images/banskolab/activities/10c335fb-5ea2-4dbc-8f34-f8d7386d7ecf.jpg",
  },
  {
    titleKey: "ngos",
    image: "/images/banskolab/activities/20211121_152220-scaled.jpg",
  },
  {
    titleKey: "academia",
    image: "/images/banskolab/activities/20211121_162325-scaled.jpg",
  },
  {
    titleKey: "media",
    image: "/images/banskolab/activities/20211107_150116-scaled.jpg",
  },
  {
    titleKey: "privateSector",
    image: "/images/banskolab/activities/75ede2fb-6bfa-461d-9082-38a09830c1b3.jpg",
  },
];

export async function PartnerCategoryTiles() {
  const t = await getTranslations("PartnerCategoryTiles");

  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const title = t(category.titleKey);
          return (
            <div key={category.titleKey} className="group">
              <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-ink/5">
                <Image
                  src={category.image}
                  alt={title}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-300 will-change-transform group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={75}
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-ink/10" />
              </div>
              <div className="pt-4">
                <h3 className="text-left text-sm font-semibold uppercase tracking-wider text-ink">
                  {title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
