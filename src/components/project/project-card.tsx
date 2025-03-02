"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { INonClientProject, Project } from "@/hooks/use-projects";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProjectBadge } from "./project-badge";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const t = useTranslations();

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={item}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
      className="h-full"
    >
      <Card
        className="overflow-hidden h-full cursor-pointer hover:shadow-lg transition-shadow duration-300 flex flex-col"
        onClick={onClick}
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.images[0] || "/placeholder.svg?height=400&width=600"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-2 right-2">
            <ProjectBadge type={project.type} />
          </div>
        </div>
        <CardContent className="pt-2 flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold">{project.title}</h3>
            {project.type === "client" ? (
              <Link
                href={project.clientSite}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="relative flex-shrink-0 -mt-12 mb-2 ml-auto"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-background bg-white dark:bg-white/90 shadow-md">
                  <Image
                    width={64}
                    height={64}
                    src={project.clientLogo || "/placeholder.svg"}
                    className="w-full h-full object-contain p-2 transition-all duration-200 hover:scale-110 hover:grayscale-0 grayscale"
                    alt={`Client for project ${project.title}`}
                    unoptimized={true}
                  />
                </div>
              </Link>
            ) : (
              <Link
                href={(project as INonClientProject).github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={20} />
              </Link>
            )}
          </div>
          <p className="text-muted-foreground line-clamp-2">
            {project.description || t("Click to see project details")}
          </p>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-1 pt-0">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="outline" className="mr-1 mb-1">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="mb-1">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
