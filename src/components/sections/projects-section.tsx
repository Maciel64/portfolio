"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project/project-card";
import { ProjectDetail } from "@/components/project/project-details";
import { projects } from "@/helpers/projects";
import type { Project } from "@/helpers/projects";
import { Filter } from "@/components/project/project-filter";
import { useTranslations } from "next-intl";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const t = useTranslations();

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.type === filter);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      {!selectedProject ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              {t("Featured Projects")}
            </h1>
            <p className="text-muted-foreground text-center max-w-2xl mb-8">
              {t(
                "A collection of personal, academic, for clients and technical tests projects I've worked on"
              )}
            </p>
            <Filter currentFilter={filter} setFilter={setFilter} />
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </motion.div>
      ) : (
        <ProjectDetail
          project={selectedProject}
          onBack={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
