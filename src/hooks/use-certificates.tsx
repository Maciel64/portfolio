import { Award, FileCheck, Languages, Shield } from "lucide-react";
import { useTranslations } from "next-intl";

export type Certificate = {
  id: string;
  title: string;
  organization: string;
  issueDate: Date;
  expiryDate?: Date;
  description: string;
  credentialLink: string;
  credentialId?: string;
  logoUrl?: string;
  category: "development" | "design" | "cloud" | "data" | "languages" | "other";
};

export function useCertificates() {
  const t = useTranslations();

  const certificates: Certificate[] = [
    {
      id: "cert-1",
      title: t("Oficial Certified EF SET 66/100 (C1 Effective Proficiency)"),
      organization: "EF International Language Campuses",
      issueDate: new Date(2025, 1, 1),
      expiryDate: new Date(2035, 11, 1),
      description: t("efset_certificate_description"),
      credentialLink: "https://cert.efset.org/pt/oZ3ByL",
      logoUrl:
        "https://a.storyblok.com/f/71234/103x24/da9ab91cbd/efset-logo_black.svg",
      category: "languages",
    },
  ];

  const getCategoryIcon = (category: Certificate["category"]) => {
    switch (category) {
      case "development":
        return <FileCheck className="w-4 h-4" />;
      case "design":
        return <Award className="w-4 h-4" />;
      case "cloud":
        return <Shield className="w-4 h-4" />;
      case "data":
        return <FileCheck className="w-4 h-4" />;
      case "languages":
        return <Languages className="w-4 h-4" />;
      default:
        return <Award className="w-4 h-4" />;
    }
  };

  const getCategoryLabel = (category: Certificate["category"]) => {
    switch (category) {
      case "development":
        return t("Development");
      case "design":
        return t("Design");
      case "cloud":
        return t("Cloud Computing");
      case "data":
        return t("Data Science");
      case "languages":
        return t("Languages");
      default:
        return t("Other");
    }
  };

  return {
    certificates,
    getCategoryIcon,
    getCategoryLabel,
  };
}
