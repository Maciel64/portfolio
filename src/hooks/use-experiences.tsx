import { useTranslations } from "next-intl";

interface Experience {
  company: string;
  role: string;
  init: Date;
  end?: Date;
  description: string;
  skills: string[];
  linkedin: string;
  site: string;
}
export function useExperiences() {
  const t = useTranslations();

  const experiences: Experience[] = [
    {
      company: "Higtom.com",
      role: t("FullStack Developer"),
      init: new Date(2025, 0, 28),
      description: "",
      skills: [
        "TypeScript",
        "React",
        "Next",
        "Node",
        "TypeScript",
        "PostgreSQL",
      ],
      site: "https://hightomdev.com/",
      linkedin: "https://www.linkedin.com/company/hightom/",
    },
    {
      company: "Yoobe.co",
      role: t("FullStack Developer"),
      init: new Date(2023, 8, 8),
      end: new Date(2025, 2, 5),
      description: t("yoobe_description"),
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next",
        "Ruby",
        "Rails",
        "GCP",
        "PostgreSQL",
        "Docker",
        "Node.js",
        "NestJS",
      ],
      linkedin: "https://www.linkedin.com/company/yoobe-co/",
      site: "https://yoobe.co/",
    },
    {
      company: "Fusion Clinic Brasil",
      role: t("TI Specialist"),
      init: new Date(2023, 8, 13),
      end: new Date(2025, 2, 5),
      description: t("fusionclinic_description"),
      skills: [
        "PHP",
        "Laravel",
        "TypeScript",
        "React",
        "Next",
        "AWS",
        "MySQL",
        "Docker",
      ],
      linkedin: "https://www.linkedin.com/company/fusion-clinic-brasil/",
      site: "https://fusionclinic.com.br",
    },
  ];

  return {
    experiences,
  };
}
