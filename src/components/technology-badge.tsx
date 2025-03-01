"use client";

import { useState } from "react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { technologies, Technologies } from "@/helpers/technologies";

interface TechnologyBadgeProps {
  tech: Technologies;
  size?: "default" | "small" | "micro";
}

export default function TechnologyBadge({
  tech,
  size = "default",
}: TechnologyBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getTechGradient = (techName: string): string => {
    const gradients = {
      Python: "from-blue-500 to-yellow-500",
      Docker: "from-blue-600 to-cyan-400",
      Bootstrap: "from-purple-700 to-purple-400",
      JavaScript: "from-yellow-500 to-amber-300",
      TypeScript: "from-blue-700 to-blue-400",
      PostgreSQL: "from-blue-800 to-cyan-600",
      MongoDB: "from-green-600 to-green-400",
      "C#": "from-purple-600 to-indigo-500",
      ".NET": "from-violet-600 to-blue-500",
      TailwindCSS: "from-cyan-500 to-blue-400",
      Node: "from-green-700 to-green-500",
      Ruby: "from-red-700 to-red-500",
      PHP: "from-indigo-600 to-blue-400",
      Java: "from-red-600 to-orange-500",
      React: "from-cyan-500 to-blue-400",
      Arduino: "from-teal-500 to-cyan-400",
      Laravel: "from-red-600 to-red-400",
      Git: "from-orange-600 to-orange-400",
      Next: "from-gray-900 to-gray-600",
      Linux: "from-yellow-500 to-gray-700",
      Flask: "from-gray-800 to-gray-500",
      NestJS: "from-red-700 to-red-500",
      Rails: "from-red-700 to-red-500",
      MySQL: "from-blue-600 to-orange-400",
      AWS: "from-orange-500 to-yellow-400",
      Kubernetes: "from-blue-600 to-blue-400",
      Nginx: "from-green-600 to-green-400",
      Redis: "from-red-600 to-red-400",
      Terraform: "from-purple-700 to-purple-600",
      C: "from-blue-600 to-blue-400",
      GraphQL: "from-pink-600 to-purple-400",
      Jenkins: "from-red-500 to-gray-100",
      RabbitMQ: "from-orange-600 to-orange-400",
      Kali: "from-blue-900 to-blue-500",
    } as const;

    return (
      gradients[techName as keyof typeof gradients] ||
      "from-gray-700 to-gray-400"
    );
  };

  const badgeVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  };

  const glowVariants = {
    initial: { opacity: 0, scale: 0.95 },
    hover: {
      opacity: 0.4,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        variants={badgeVariants}
      >
        <Badge
          variant="outline"
          className={cn(
            "w-full flex items-center justify-start transition-all duration-300 bg-gradient-to-r text-primary",
            getTechGradient(tech),
            isHovered
              ? "bg-[size:100%_100%]"
              : "bg-[size:0%_100%] bg-no-repeat",
            {
              "px-5 py-2 gap-3 text-base": size === "default",
              "px-4 py-1.5 gap-2 text-sm": size === "small",
              "px-3 py-1 text-xs": size === "micro",
            }
          )}
        >
          {size !== "micro" && (
            <motion.div variants={iconVariants}>
              {typeof technologies[tech] === "string" ? (
                <Image
                  src={technologies[tech]}
                  alt={`${tech} icon`}
                  width={size === "small" ? 16 : 20}
                  height={size === "small" ? 16 : 20}
                  className="object-contain"
                  unoptimized={true}
                />
              ) : (
                technologies[tech]
              )}
            </motion.div>
          )}
          <span>{tech}</span>
        </Badge>
      </motion.div>
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        className={cn(
          "absolute inset-0 bg-gradient-to-r blur-xl -z-10",
          getTechGradient(tech)
        )}
      />
    </div>
  );
}
