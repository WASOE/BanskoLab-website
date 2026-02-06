/**
 * Posts content - structured data per locale
 * Domain content lives here, not in messages JSON
 */

import type { Post } from "./types";
import type { AppLocale } from "@/i18n/routing";

export const postsContent: Record<AppLocale, Post[]> = {
  en: [
    {
      slug: "field-site-operations-update",
      title: "Field site operations update: access and safety readiness",
      category: "Field note",
      author: "BanskoLab Foundation",
      date: "2025-01-12",
      summary:
        "Operational updates from The Valley field site including safety checks and delivery readiness.",
      content: [
        "The Valley field site completed its seasonal safety review and access mapping.",
        "Updated logistics workflows were tested with local partners.",
        "Evidence packs and field checklists have been updated for partner review.",
      ],
      relatedProject: "the-valley-field-site",
    },
    {
      slug: "chereshovo-stakeholder-mapping",
      title: "Chereshovo stakeholder mapping: baseline findings",
      category: "Project update",
      author: "BanskoLab Foundation",
      date: "2024-12-06",
      summary:
        "Summary of stakeholder interviews and priority needs for the Chereshovo programme.",
      content: [
        "Stakeholder mapping highlighted three priority areas: skills, access, and coordination.",
        "Local partners confirmed co-design sessions for Q1 delivery planning.",
        "Risk and inclusion mapping is underway with partner input.",
      ],
      relatedProject: "chereshovo-transformation",
    },
    {
      slug: "delivery-systems-rollout",
      title: "Digital delivery systems rollout",
      category: "Toolkit",
      author: "BanskoLab Foundation",
      date: "2024-10-18",
      summary:
        "New reporting and documentation workflows released for partner programmes.",
      content: [
        "Workflow templates and reporting dashboards are now available.",
        "Partner teams received onboarding sessions for data collection protocols.",
        "Updated toolkits focus on measurable outcomes and dissemination.",
      ],
      relatedProject: "digital-systems-for-delivery",
    },
  ],
  bg: [
    {
      slug: "field-site-operations-update",
      title: "Актуализация на операциите на полевия обект: готовност за достъп и безопасност",
      category: "Полева бележка",
      author: "Фондация BanskoLab",
      date: "2025-01-12",
      summary:
        "Оперативни актуализации от полевия обект Долината, включително проверки за безопасност и готовност за доставка.",
      content: [
        "Полевият обект Долината завърши своята сезонна проверка за безопасност и картиране на достъпа.",
        "Актуализираните логистични работни потоци бяха тествани с местни партньори.",
        "Доказателствените пакети и полевите чеклисти са актуализирани за преглед от партньорите.",
      ],
      relatedProject: "the-valley-field-site",
    },
    {
      slug: "chereshovo-stakeholder-mapping",
      title: "Картиране на заинтересованите страни в Черешово: основни констатации",
      category: "Актуализация на проекта",
      author: "Фондация BanskoLab",
      date: "2024-12-06",
      summary:
        "Резюме на интервюта с заинтересовани страни и приоритетни нужди за програмата в Черешово.",
      content: [
        "Картирането на заинтересованите страни подчерта три приоритетни области: умения, достъп и координация.",
        "Местните партньори потвърдиха сесии за съвместен дизайн за планиране на доставката през Q1.",
        "Картирането на риска и включването е в процес с участие на партньори.",
      ],
      relatedProject: "chereshovo-transformation",
    },
    {
      slug: "delivery-systems-rollout",
      title: "Въвеждане на дигитални системи за доставка",
      category: "Комплект инструменти",
      author: "Фондация BanskoLab",
      date: "2024-10-18",
      summary:
        "Нови работни потоци за отчети и документация, пуснати за партньорски програми.",
      content: [
        "Шаблоните за работни потоци и таблата за отчети вече са налични.",
        "Екипите на партньорите получиха сесии за включване за протоколи за събиране на данни.",
        "Актуализираните комплекти инструменти се фокусират върху измерими резултати и разпространение.",
      ],
      relatedProject: "digital-systems-for-delivery",
    },
  ],
};
