"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Calendar, Building2, Briefcase, Globe, Linkedin } from "lucide-react";
import { useExperiences } from "@/hooks/use-experiences";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Link from "next/link";
import { useDate } from "@/hooks/use-date";
import TechnologyBadge from "../tecnology-badge";
import { Technologies } from "@/helpers/tecnologies";

export default function ExperienceSection() {
  const t = useTranslations();
  const { experiences } = useExperiences();
  const { formatDate, timeDistance } = useDate();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="experience"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="py-20"
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        {t("Professional Experience")}
      </h2>

      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={item}
            className="mb-12 relative pl-8 border-l-2 border-primary"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />

            <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">{exp.company}</h3>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Calendar className="w-4 h-4 mx-2" />
                    </TooltipTrigger>
                    <TooltipContent>
                      {timeDistance(exp.init, exp.end ?? new Date())}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <span>
                  {formatDate(exp.init)} - {exp.end && formatDate(exp.end)}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-3 text-lg text-primary">
              <Briefcase className="w-4 h-4" />
              <span>{exp.role}</span>
            </div>

            <p className="mb-4 text-muted-foreground">{exp.description}</p>

            <div className="w-full flex justify-between">
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <TechnologyBadge
                    tech={skill as Technologies}
                    key={skill}
                    size="micro"
                  />
                ))}
              </div>

              <div className="flex flex-col md:flex-row gap-1">
                <Link
                  href={exp.site}
                  target="_blank"
                  className="bg-muted-foreground p-1 rounded-md text-white"
                >
                  <Globe className="w-4 h-4" />
                </Link>
                <Link
                  href={exp.linkedin}
                  target="_blank"
                  className="bg-linkedin p-1 rounded-md text-white"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
