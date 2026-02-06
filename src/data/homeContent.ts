/**
 * Home page content - structured data per locale
 * Long-form content lives here, not in messages JSON
 */

export type HomeContent = {
  hero: {
    title: string;
    description: string;
    imageAlt: string;
    imageCaption: string;
  };
  mission: {
    label: string;
    title: string;
    description: string;
    whatWeDo: {
      label: string;
      text: string;
    };
    whoWeSupport: {
      label: string;
      text: string;
    };
    howWeWork: {
      label: string;
      text: string;
    };
    quote: string;
  };
  environment: {
    title: string;
    description: string;
  };
  whatWeDo: {
    title: string;
    description: string;
    activities: Array<{
      title: string;
      description: string;
    }>;
  };
  projects: {
    title: string;
    description: string;
  };
  news: {
    title: string;
    description: string;
  };
  howWeWork: {
    label: string;
    title: string;
  };
  partners: {
    title: string;
    description: string;
  };
  usage: {
    title: string;
    items: string[];
  };
  updates: {
    label: string;
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  cta: {
    title: string;
    description: string;
  };
};

export const homeContent: Record<"en" | "bg", HomeContent> = {
  en: {
    hero: {
      title: "Empowering rural communities through education and innovation.",
      description:
        "BanskoLab is a rural activation foundation in Bulgaria that supports underprivileged youth through education, technology and community projects. We close the digital gap through education, innovation and intercultural exchange.",
      imageAlt: "BanskoLab Foundation, based in the Bansko region.",
      imageCaption: "BanskoLab Foundation, based in the Bansko region.",
    },
    mission: {
      label: "WHY WE EXIST",
      title: "A mission that starts in Bansko and is built to reach wider.",
      description:
        "We started as an experiment and became a foundation with a clear goal: create positive social change by connecting people through skill-sharing, learning programmes, community building, and volunteering.",
      whatWeDo: {
        label: "What we do:",
        text: "Learning programmes, mentoring, community projects, and events that help people grow skills and confidence.",
      },
      whoWeSupport: {
        label: "Who we support:",
        text: "Underserved communities and people who need access to knowledge, tools, and opportunity.",
      },
      howWeWork: {
        label: "How we work:",
        text: "Open, welcoming, and community-driven. People can co-create, co-host, innovate, and contribute.",
      },
      quote: '"It\'s a playground for everyone."',
    },
    environment: {
      title: "A safe, respectful environment",
      description:
        "We keep BanskoLab welcoming and clear in expectations. For details, read our policies and how we handle privacy and transparency.",
    },
    whatWeDo: {
      title: "What we do",
      description:
        "Our core activities focus on empowering rural communities through practical programs and initiatives.",
      activities: [
        {
          title: "Youth programs",
          description:
            "Training programs, youth exchanges and learning projects that respond to local needs.",
        },
        {
          title: "Workshops",
          description:
            "Language lessons, environmental projects, and digital workshops for skill building.",
        },
        {
          title: "Community projects",
          description:
            "Hands-on activities that combine learning with real community impact.",
        },
        {
          title: "Partnerships",
          description:
            "Collaboration with local centers and international partners for sustainable impact.",
        },
      ],
    },
    projects: {
      title: "Current projects",
      description:
        "Our ongoing and completed projects combine hands-on activities with measurable results.",
    },
    news: {
      title: "News and results",
      description:
        "Recent updates, event reports, and project outcomes from our work in rural communities.",
    },
    howWeWork: {
      label: "HOW WE WORK",
      title: "Open, practical, and community-driven.",
    },
    partners: {
      title: "Partners and sponsors",
      description:
        "We collaborate with local centers, EU programs, NGOs, and community organizations to deliver sustainable impact.",
    },
    usage: {
      title: "What people use BanskoLab for",
      items: [
        "A safe, open environment to meet, work, and collaborate.",
        "Events and skill-sharing that connect locals and foreigners.",
      ],
    },
    updates: {
      label: "Latest updates",
      title: "Evidence, updates, and what we learned.",
      items: [
        {
          title: "Our 90 days challenge",
          description: "Experiments to encourage young entrepreneurs.",
        },
        {
          title: "Donations and costs",
          description: "Why support is needed and how donations are used.",
        },
        {
          title: "Digital Innovation Movement",
          description: "The pillars and projects started under the movement.",
        },
      ],
    },
    cta: {
      title: "Help us scale education and innovation projects beyond Bansko.",
      description:
        "We are building a foundation that reduces the digital divide through learning, mentorship, and community-driven projects. Join, volunteer, or support the work.",
    },
  },
  bg: {
    hero: {
      title: "Усилване на селските общности чрез образование и иновации.",
      description:
        "BanskoLab е фондация за активиране на селските райони в България, която подкрепя обездобена младеж чрез образование, технологии и обществени проекти. Затваряме цифровия разрив чрез образование, иновации и междукултурен обмен.",
      imageAlt: "Фондация BanskoLab, базирана в региона на Банско.",
      imageCaption: "Фондация BanskoLab, базирана в региона на Банско.",
    },
    mission: {
      label: "ЗАЩО СЪЩЕСТВУВАМЕ",
      title: "Мисия, която започва в Банско и е изградена да достигне по-далеч.",
      description:
        "Започнахме като експеримент и станахме фондация с ясна цел: създаване на положителна социална промяна чрез свързване на хора чрез споделяне на умения, образователни програми, изграждане на общност и доброволчество.",
      whatWeDo: {
        label: "Какво правим:",
        text: "Образователни програми, менторство, обществени проекти и събития, които помагат на хората да развиват умения и увереност.",
      },
      whoWeSupport: {
        label: "Кого подкрепяме:",
        text: "Недообслужени общности и хора, които се нуждаят от достъп до знания, инструменти и възможности.",
      },
      howWeWork: {
        label: "Как работим:",
        text: "Отворени, гостоприемни и управлявани от общността. Хората могат да създават заедно, да организират събития, да иноватират и да допринасят.",
      },
      quote: '"Това е детска площадка за всички."',
    },
    environment: {
      title: "Безопасна, уважителна среда",
      description:
        "Поддържаме BanskoLab гостоприемен и ясен в очакванията. За подробности, прочетете нашите политики и как обработваме поверителността и прозрачността.",
    },
    whatWeDo: {
      title: "Какво правим",
      description:
        "Нашите основни дейности се фокусират върху овластяването на селските общности чрез практически програми и инициативи.",
      activities: [
        {
          title: "Младежки програми",
          description:
            "Обучения, младежки обмени и образователни проекти, които отговарят на местните нужди.",
        },
        {
          title: "Работилници",
          description:
            "Уроци по езици, екологични проекти и дигитални работилници за изграждане на умения.",
        },
        {
          title: "Обществени проекти",
          description:
            "Практически дейности, които комбинират обучение с реален общностен въздействие.",
        },
        {
          title: "Партньорства",
          description:
            "Сътрудничество с местни центрове и международни партньори за устойчив въздействие.",
        },
      ],
    },
    projects: {
      title: "Текущи проекти",
      description:
        "Нашите текущи и завършени проекти комбинират практически дейности с измерими резултати.",
    },
    news: {
      title: "Новини и резултати",
      description:
        "Скорошни актуализации, отчети за събития и резултати от проекти от нашата работа в селските общности.",
    },
    howWeWork: {
      label: "КАК РАБОТИМ",
      title: "Отворени, практически и управлявани от общността.",
    },
    partners: {
      title: "Партньори и спонсори",
      description:
        "Сътрудничим с местни центрове, програми на ЕС, НПО и обществени организации за постигане на устойчив въздействие.",
    },
    usage: {
      title: "За какво хората използват BanskoLab",
      items: [
        "Безопасна, отворена среда за срещи, работа и сътрудничество.",
        "Събития и споделяне на умения, които свързват местни и чужденци.",
      ],
    },
    updates: {
      label: "Последни актуализации",
      title: "Доказателства, актуализации и какво научихме.",
      items: [
        {
          title: "Нашето 90-дневно предизвикателство",
          description: "Експерименти за насърчаване на млади предприемачи.",
        },
        {
          title: "Дарения и разходи",
          description: "Защо е необходима подкрепа и как се използват даренията.",
        },
        {
          title: "Движение за дигитални иновации",
          description: "Стълбовете и проектите, започнати под движението.",
        },
      ],
    },
    cta: {
      title: "Помогнете ни да мащабираме образователни и иновационни проекти отвъд Банско.",
      description:
        "Изграждаме фондация, която намалява цифровия разрив чрез обучение, менторство и проекти, управлявани от общността. Присъединете се, станете доброволец или подкрепете работата.",
    },
  },
};
