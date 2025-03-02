"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { INonClientProject, Project } from "@/hooks/use-projects";
import { ArrowLeft, Github, Globe } from "lucide-react";
import { ProjectImageGallery } from "@/components/project/project-image-gallery";
import { useState } from "react";
import { ProjectFullscreenGallery } from "@/components/project/project-image-gallery-fullscreen";
import Image from "next/image";
import { ProjectBadge } from "./project-badge";
import Link from "next/link";
import { useTranslations } from "next-intl";
import TechnologyBadge from "../technology-badge";

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const t = useTranslations();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  const handleFullscreen = (index: number) => {
    setInitialSlide(index);
    setIsFullscreen(true);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.slug}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="pb-12"
      >
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 group hover:bg-background"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          {t("Back to projects")}
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ProjectImageGallery
              images={project.images}
              onFullscreen={handleFullscreen}
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6">
              <div className="space-y-6">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h1 className="text-3xl font-bold leading-tight">
                      {project.title}
                    </h1>
                    <ProjectBadge type={project.type} />
                  </div>
                  <p className="text-muted-foreground">
                    {project.description || t("No description available")}
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Globe className="mr-2 h-4 w-4" />
                    {t("Technologies")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <TechnologyBadge tech={tech} key={tech} size="small" />
                    ))}
                  </div>
                </div>

                <Separator />

                {project.type === "client" ? (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      {t("About The Client")}{" "}
                    </h3>
                    {typeof project.clientLogo === "string" && (
                      <>
                        <div className="bg-white rounded-lg p-4 flex items-center justify-center">
                          <Link href={project.clientSite} target="_blank">
                            <Image
                              src={project.clientLogo || "/placeholder.svg"}
                              alt="Client Logo"
                              className="max-h-12 object-contain grayscale"
                              width={200}
                              height={200}
                              unoptimized={true}
                            />
                          </Link>
                        </div>

                        <p className="mt-4 text-muted-foreground text-xs">
                          {project.clientDescription}
                        </p>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    <Button asChild variant="default" className="w-full">
                      <Link
                        href={(project as INonClientProject).github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        {t("View Source Code")}
                      </Link>
                    </Button>
                    {project.liveUrl && (
                      <Button asChild variant="outline" className="w-full">
                        <Link
                          href={(project as INonClientProject).github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Globe className="mr-2 h-4 w-4" />
                          {t("Live Demo")}
                        </Link>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        </div>

        <AnimatePresence>
          {isFullscreen && (
            <ProjectFullscreenGallery
              images={project.images}
              initialSlide={initialSlide}
              onClose={() => setIsFullscreen(false)}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
