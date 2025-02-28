import { ReactElement } from "react";

export interface IProjectSchema {
  title: string;
  technologies: (typeof technologies)[number]["name"][];
  images: string[];
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
];

export const projects: IProjectSchema[] = [
  {
    title: "Meetlink",
    technologies: ["Python", "Docker", "Bootstrap", "Javascript", "PostgreSQL"],
    images: [],
  },
];
