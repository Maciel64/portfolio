"use client";

import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Briefcase, Code2, FlaskConical, GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";

interface ProjectBadgeProps {
  type: "personal" | "client" | "academic" | "test";
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

  const badges = {
    personal: {
      gradient: "from-violet-600 to-indigo-600",
      icon: <Code2 className="w-4 h-4" />,
      text: t("Personal Project"),
    },
    client: {
      gradient: "from-emerald-600 to-teal-600",
      icon: <Briefcase className="w-4 h-4" />,
      text: t("Client Project"),
    },
    academic: {
      gradient: "from-amber-500 to-orange-600",
      icon: <GraduationCap className="w-4 h-4" />,
      text: t("Academic Project"),
    },
    test: {
      gradient: "from-rose-600 to-pink-600",
      icon: <FlaskConical className="w-4 h-4" />,
      text: t("Test"),
    },
  };

  const { gradient, icon, text } = badges[type];

  return (
    <motion.div
      className="relative"
      initial="initial"
      whileHover="hover"
      animate="initial"
    >
      <motion.div variants={variants}>
        <Badge
          className={`bg-gradient-to-r ${gradient} 
            text-white border-none px-3 py-1.5 text-sm font-medium
            flex items-center gap-1.5 cursor-default shadow-sm rounded-full w-fit`}
        >
          <motion.div variants={iconVariants}>{icon}</motion.div>
          {text}
        </Badge>
      </motion.div>
      <motion.div
        variants={glowVariants}
        className={`absolute inset-0 bg-gradient-to-r ${gradient} 
          blur-xl -z-10 rounded-full`}
      />
    </motion.div>
  );
}
