"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useEducation } from "@/hooks/use-education";

export default function EducationSection() {
  const t = useTranslations();
  const { educationItems, getIcon, getTypeLabel } = useEducation();

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
      id="education"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="py-20"
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        {t("Academic Education")}
      </h2>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20 hidden md:block" />

        <div className="space-y-12">
          {educationItems.map((education, index) => (
            <motion.div
              key={education.id}
              variants={item}
              className={cn(
                "flex flex-col md:flex-row md:items-center gap-4",
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              )}
            >
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />

              <div
                className={cn(
                  "w-full md:w-1/2",
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                )}
              >
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <Badge
                          variant="outline"
                          className="flex items-center gap-1 mb-2"
                        >
                          {getIcon(education.type)}
                          <span>{getTypeLabel(education.type)}</span>
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">
                        {education.title}
                      </CardTitle>
                      <CardDescription className="flex flex-col gap-1">
                        <span className="font-medium text-primary">
                          {education.institution}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          <span>{education.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span>{education.period}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
