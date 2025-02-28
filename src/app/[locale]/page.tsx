"use client";

import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import TechnologyBadges from "@/components/sections/technologies-badges";
import { projects } from "@/helpers/projects";

import { ProjectCard } from "@/components/project-card";

export default function Portfolio() {
  const t = useTranslations();

  const container = {
    hidden: { opacity: 0 },

    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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
          <div className="flex gap-4">
            <Button variant="ghost" asChild>
              <Link href="#about">{t("About")}</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#projects">{t("Projects")}</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#contact">{t("Contact")}</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 pt-24">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-h-[80vh] flex flex-col items-center justify-center text-center gap-8"
        >
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary">
            <Image
              src="https://github.com/Maciel64.png"
              alt="Profile Picture"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Maciel64</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {t(
                "Full Stack Developer passionate about creating beautiful and functional web applications"
              )}
            </p>
          </div>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="https://github.com/Maciel64" target="_blank">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="#contact">
                <Mail className="w-4 h-4 mr-2" />
                {t("Contact Me")}
              </Link>
            </Button>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("Featured Projects")}
          </h2>

          <TechnologyBadges />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("Get In Touch")}
          </h2>
          <div className="max-w-md mx-auto flex flex-col gap-4">
            <Button size="lg" asChild>
              <Link href="mailto:macielsuassuna14@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                {t("Email Me")}
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link
                href="https://www.linkedin.com/in/maciel-suassuna/"
                target="_blank"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                {t("Connect on LinkedIn")}
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://github.com/Maciel64" target="_blank">
                <Github className="w-4 h-4 mr-2" />
                {t("Follow on GitHub")}
              </Link>
            </Button>
          </div>
        </motion.section>
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
