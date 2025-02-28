import { ReactElement } from "react";

export interface IProjectSchema {
  title: string;
  description: string;
  technologies: (typeof technologies)[number]["name"][];
  images: string[];
  type: "personal" | "client" | "academic";
}

export interface ITecnologySchema {
  name: string;
  icon: string | ReactElement;
}

export const technologies: ITecnologySchema[] = [
  {
    name: "Python",
    icon: "https://skillicons.dev/icons?i=python",
  },
  {
    name: "Docker",
    icon: "https://skillicons.dev/icons?i=docker",
  },
  {
    name: "Bootstrap",
    icon: "https://skillicons.dev/icons?i=bootstrap",
  },
  {
    name: "Javascript",
    icon: "https://skillicons.dev/icons?i=js",
  },
  {
    name: "Typescript",
    icon: "https://skillicons.dev/icons?i=ts",
  },
  {
    name: "PostgreSQL",
    icon: "https://skillicons.dev/icons?i=postgresql",
  },
  {
    name: "MongoDB",
    icon: "https://skillicons.dev/icons?i=mongo",
  },
  {
    name: "C#",
    icon: "https://skillicons.dev/icons?i=cs",
  },
  {
    name: ".NET",
    icon: "https://skillicons.dev/icons?i=dotnet",
  },
  {
    name: "TailwindCSS",
    icon: "https://skillicons.dev/icons?i=tailwind",
  },
];

export const projects: IProjectSchema[] = [
  {
    title: "Meetlink",
    description: "",
    technologies: ["Python", "Docker", "Bootstrap", "Javascript", "PostgreSQL"],
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
      "Javascript",
      "MongoDB",
    ],
    images: [],
    type: "academic",
  },
];
