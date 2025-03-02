import { Award, BookOpen, GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";

type Education = {
  id: string;
  type: "degree" | "course" | "certification";
  title: string;
  institution: string;
  location: string;
  period: string;
};

export function useEducation() {
  const t = useTranslations();
  const educationItems: Education[] = [
    {
      id: "education-1",
      type: "degree",
      title: t("Bachelor of Computer Science"),
      institution: "Universidade Potiguar",
      location: "Natal, Rio Grande do Norte",
      period: "2023 - 2026",
    },
    {
      id: "education-2",
      type: "certification",
      title: t("Technical IT Course"),
      institution: "Instituto Federal da Paraíba",
      location: "Sousa, Paraíba",
      period: "2019 - 2021",
    },
  ];

  const getIcon = (type: Education["type"]) => {
    switch (type) {
      case "degree":
        return <GraduationCap className="w-5 h-5" />;
      case "certification":
        return <Award className="w-5 h-5" />;
      case "course":
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const getTypeLabel = (type: Education["type"]) => {
    switch (type) {
      case "degree":
        return t("Academic Degree");
      case "certification":
        return t("Professional Certification");
      case "course":
        return t("Specialized Course");
    }
  };

  return {
    educationItems,
    getIcon,
    getTypeLabel,
  };
}
