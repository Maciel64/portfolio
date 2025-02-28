"use client";

import { useState } from "react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { technologies } from "@/helpers/projects";
import { motion } from "framer-motion";

export default function TechnologyBadges() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const getTechGradient = (techName: string): string => {
    const gradients = {
      Python: "from-blue-500 to-yellow-500",
      Docker: "from-blue-600 to-cyan-400",
      Bootstrap: "from-purple-700 to-purple-400",
      Javascript: "from-yellow-500 to-amber-300",
      Typescript: "from-blue-700 to-blue-400",
      PostgreSQL: "from-blue-800 to-cyan-600",
      MongoDB: "from-green-600 to-green-400",
      "C#": "from-purple-600 to-indigo-500",
      ".NET": "from-violet-600 to-blue-500",
      TailwindCSS: "from-cyan-500 to-blue-400",
    };

    return (
      gradients[techName as keyof typeof gradients] ||
      "from-gray-700 to-gray-400"
    );
  };

  const badgeVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const glowVariants = {
    initial: {
      opacity: 0,
      scale: 0.95,
    },
    hover: {
      opacity: 0.4,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const iconVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <div className="flex gap-4 flex-wrap my-10">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="relative group"
          onMouseEnter={() => setHoveredTech(tech.name)}
          onMouseLeave={() => setHoveredTech(null)}
        >
          <motion.div
            initial="initial"
            animate={hoveredTech === tech.name ? "hover" : "initial"}
            variants={badgeVariants}
          >
            <Badge
              variant="outline"
              className={cn(
                "w-full flex items-center justify-start gap-3 px-5 py-2 cursor-pointer transition-all duration-300",
                "bg-gradient-to-r",
                getTechGradient(tech.name),
                hoveredTech === tech.name
                  ? "bg-[size:100%_100%] text-white"
                  : "bg-[size:0%_100%] bg-no-repeat text-black"
              )}
            >
              <motion.div variants={iconVariants}>
                {typeof tech.icon === "string" ? (
                  <Image
                    src={tech.icon || "/placeholder.svg"}
                    alt={`${tech.name} icon`}
                    width={20}
                    height={20}
                    className="object-contain"
                    unoptimized={true}
                  />
                ) : (
                  tech.icon
                )}
              </motion.div>
              <span className="text-base font-medium">{tech.name}</span>
            </Badge>
          </motion.div>
          <motion.div
            variants={glowVariants}
            initial="initial"
            animate={hoveredTech === tech.name ? "hover" : "initial"}
            className={cn(
              "absolute inset-0 bg-gradient-to-r blur-xl -z-10",
              getTechGradient(tech.name)
            )}
          />
        </div>
      ))}
    </div>
  );
}
