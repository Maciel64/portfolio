"use client";

import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Briefcase, Code2 } from "lucide-react";
import { useTranslations } from "next-intl";

interface ProjectBadgeProps {
  type: "personal" | "client";
}

export function ProjectBadge({ type }: ProjectBadgeProps) {
  const t = useTranslations();

  const variants = {
    initial: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    initial: {
      rotate: 0,
    },
    hover: {
      rotate: 15,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const glowVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    hover: {
      opacity: 0.2,
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };

  if (type === "personal") {
    return (
      <motion.div
        className="relative"
        initial="initial"
        whileHover="hover"
        animate="initial"
      >
        <motion.div variants={variants}>
          <Badge
            className="bg-gradient-to-r from-violet-600 to-indigo-600 
              text-white border-none px-3 py-1.5 text-sm font-medium
              flex items-center gap-1.5 cursor-default w-fit rounded-full"
          >
            <motion.div variants={iconVariants}>
              <Code2 className="w-4 h-4" />
            </motion.div>
            {t("Client Project")}
          </Badge>
        </motion.div>
        <motion.div
          variants={glowVariants}
          className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 
            blur-xl -z-10 rounded-full"
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      className="relative"
      initial="initial"
      whileHover="hover"
      animate="initial"
    >
      <motion.div variants={variants}>
        <Badge
          className="bg-gradient-to-r from-emerald-600 to-teal-600 
            text-white border-none px-3 py-1.5 text-sm font-medium
            flex items-center gap-1.5 cursor-default w-fit rounded-full"
        >
          <motion.div variants={iconVariants}>
            <Briefcase className="w-4 h-4" />
          </motion.div>
          {t("Client Project")}
        </Badge>
      </motion.div>
      <motion.div
        variants={glowVariants}
        className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 
          blur-xl -z-10 rounded-full"
      />
    </motion.div>
  );
}
