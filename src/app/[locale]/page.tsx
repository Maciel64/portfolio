"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

import ExperienceSection from "@/components/sections/experiences-section";
import LanguageSwitcher from "@/components/language-switcher";
import MobileMenu from "@/components/mobile-menu";
import ThemeSwitcher from "@/components/theme-switcher";

import {
  CertificatesSection,
  ContactSection,
  EducationSection,
  PresentationSection,
  ProjectsSection,
  TechnologiesSection,
} from "@/components/sections";

export default function Portfolio() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <header className="fixed top-0 w-full z-50 backdrop-blur-sm border-b">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold"
          >
            Maciel64
          </motion.span>

          <div className="hidden md:flex md:items-center md:gap-4">
            <Button variant="ghost" asChild>
              <Link href="#about">{t("About")}</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#projects">{t("Projects")}</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#experience">{t("Professional Experience")}</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#education">{t("Academic Education")}</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#certificates">{t("Certificates")}</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#contact">{t("Contact")}</Link>
            </Button>
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>

          <MobileMenu t={t} />
        </nav>
      </header>

      <main className="container mx-auto px-4 pt-24">
        <PresentationSection />

        <TechnologiesSection />

        <ProjectsSection />

        <ExperienceSection />

        <EducationSection />

        <CertificatesSection />

        <ContactSection />
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Maciel64. {t("All rights reserved")}.
          </p>
        </div>
      </footer>
    </div>
  );
}
