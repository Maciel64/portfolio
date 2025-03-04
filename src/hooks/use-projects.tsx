import { Technologies } from "@/helpers/technologies";
import { useTranslations } from "next-intl";

export type ProjectTypes = "personal" | "academic" | "test" | "client";

export interface IBaseProject {
  title: string;
  description: string;
  technologies: Technologies[];
  images: string[];
  slug: string;
}

export interface IClientProject extends IBaseProject {
  type: "client";
  clientLogo: string;
  clientDescription: string;
  clientSite: string;
}

export interface INonClientProject extends IBaseProject {
  type: "personal" | "academic" | "test";
  github: string;
  liveUrl?: string;
}

export type Project = IClientProject | INonClientProject;

export function useProjects() {
  const t = useTranslations();

  const projects: Project[] = [
    {
      title: "Meetlink",
      description: t("meetlink_description"),
      technologies: [
        "Python",
        "Docker",
        "Bootstrap",
        "JavaScript",
        "PostgreSQL",
      ],
      images: [
        "/img/projects/meetlink/001.png",
        "/img/projects/meetlink/002.png",
        "/img/projects/meetlink/003.png",
        "/img/projects/meetlink/004.png",
        "/img/projects/meetlink/005.png",
        "/img/projects/meetlink/006.png",
      ],
      type: "client",
      slug: "meetlink",
      clientLogo:
        "https://seeklogo.com/images/N/natal-shopping-logo-8AFE9A0EB8-seeklogo.com.png",
      clientDescription: t("natalshopping_description"),
      clientSite: "https://www.natalshopping.com.br/",
    },
    {
      title: t("Hightom Technical Test"),
      description: t("hightom_technical_test_description"),
      technologies: ["NestJS", "TypeScript", "Redis", "PostgreSQL", "Docker"],
      images: ["/img/projects/hightom_technical_test/001.png"],
      type: "test",
      github: "https://github.com/Maciel64/desafio-tech-hightom",
      slug: "hightom-technical-test",
    },
    {
      title: "CisReg UNP",
      description: t("cisreg_unp_description"),
      technologies: [
        "C#",
        "Docker",
        ".NET",
        "TailwindCSS",
        "JavaScript",
        "MongoDB",
      ],
      images: ["/img/projects/cisreg_unp/001.png"],
      type: "academic",
      github: "https://github.com/Samue1Fontes/CisReg_UNP",
      slug: "cisreg-unp",
    },
    {
      title: t("Fusion Clinic Technical Test"),
      description: t("fusion_clinic_technical_test_description"),
      technologies: ["React", "JavaScript", "TailwindCSS"],
      images: ["/img/projects/fusion_clinic_technical_test/001.png"],
      type: "test",
      github: "https://github.com/Maciel64/fusion-clinic-test",
      slug: "fusion-clinic-technical-test",
    },
  ];

  return {
    projects,
  };
}
