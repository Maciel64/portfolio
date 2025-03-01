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
      description: t(
        "Led development of multiple web applications using React, Next.js, and Node.js. Implemented CI/CD pipelines and mentored junior developers."
      ),
      skills: ["React", "Next.js", "Node.js", "TypeScript", "CI/CD"],
      site: "https://hightomdev.com/",
      linkedin: "https://www.linkedin.com/company/hightom/",
    },
    {
      company: "Yoobe.co",
      role: t("FullStack Developer"),
      init: new Date(2023, 8, 8),
      end: new Date(2025, 2, 5),
      description: t(
        "Developed responsive user interfaces and implemented state management solutions. Collaborated with UX/UI designers to create intuitive user experiences."
      ),
      skills: ["JavaScript", "React", "Redux", "SCSS", "Responsive Design"],
      linkedin: "https://www.linkedin.com/company/yoobe-co/",
      site: "https://yoobe.co/",
    },
    {
      company: "Fusion Clinic Brasil",
      role: "TI Specialist",
      init: new Date(2023, 8, 13),
      end: new Date(2025, 2, 5),
      description: t(
        "Built and maintained client websites. Assisted in the development of web applications and implemented responsive designs."
      ),
      skills: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],
      linkedin: "https://www.linkedin.com/company/fusion-clinic-brasil/",
      site: "https://fusionclinic.com.br",
    },
  ];

  return {
    experiences,
  };
}
