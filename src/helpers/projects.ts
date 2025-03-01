import { Technologies } from "./technologies";

export interface IProjectSchema {
  title: string;
  description: string;
  technologies: Technologies[];
  images: string[];
  type: "personal" | "client" | "academic";
  link?: string;
}

export const projects: IProjectSchema[] = [
  {
    title: "Meetlink",
    description: "",
    technologies: ["Python", "Docker", "Bootstrap", "JavaScript", "PostgreSQL"],
    images: [
      "/img/projects/meetlink/001.png",
      "/img/projects/meetlink/002.png",
      "/img/projects/meetlink/003.png",
      "/img/projects/meetlink/004.png",
      "/img/projects/meetlink/005.png",
      "/img/projects/meetlink/006.png",
    ],
    type: "client",
  },
  {
    title: "CisReg UNP",
    description: "",
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
    link: "https://github.com/Samue1Fontes/CisReg_UNP",
  },
];
