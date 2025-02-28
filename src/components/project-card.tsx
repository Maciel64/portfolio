"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { ProjectBadge } from "./project-badge";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    type: "personal" | "client";
    images: string[];
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    initial: { x: 0 },
    hover: {
      x: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="h-full"
    >
      <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300 h-full flex flex-col">
        <CardContent className="p-0 flex flex-col h-full">
          <div className="relative overflow-hidden aspect-video">
            <Carousel className="w-full">
              <CarouselContent>
                {project.images.map((image, index) => (
                  <CarouselItem key={index} className="overflow-hidden">
                    <motion.div
                      variants={imageVariants}
                      className="relative aspect-video"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${t("Project")} ${project.title} image ${index}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          <Separator />

          <div className="p-6 flex flex-col flex-grow">
            <div className="mb-4">
              <ProjectBadge type={project.type} />
            </div>

            <motion.h3
              className="font-bold text-xl mb-3 transition-colors hover:text-primary cursor-pointer"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {project.title}
            </motion.h3>

            <p className="text-muted-foreground mb-6 flex-grow">
              {project.description}
            </p>

            <motion.div whileHover="hover" initial="initial">
              <Button
                variant="secondary"
                className="w-full group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <span className="mr-2">{t("View Project")}</span>
                <motion.div variants={buttonVariants}>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
