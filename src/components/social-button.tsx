"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialButtonProps {
  href: string;
  icon: LucideIcon;
  label: string;
  username: string;
  gradient: string;
  className?: string;
}

export function SocialButton({
  href,
  icon: Icon,
  label,
  username,
  gradient,
  className,
}: SocialButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative group"
    >
      <div
        className={cn(
          "absolute inset-0 rounded-lg opacity-25 group-hover:opacity-100 blur-xl transition-opacity",
          gradient
        )}
      />
      <Button
        asChild
        size="lg"
        variant="outline"
        className={cn(
          "relative w-full border-2 hover:border-primary/50 bg-background/50 backdrop-blur-sm",
          "flex items-center justify-between px-4 py-6",
          "transition-colors duration-200",
          className
        )}
      >
        <Link href={href} target="_blank" className="w-full">
          <div className="flex items-center gap-4">
            <div className={cn("p-2 rounded-md", gradient)}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-medium text-muted-foreground">
                {label}
              </span>
              <span className="text-base font-semibold">{username}</span>
            </div>
          </div>
        </Link>
      </Button>
    </motion.div>
  );
}
