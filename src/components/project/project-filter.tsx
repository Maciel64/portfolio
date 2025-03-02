"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface FilterProps {
  currentFilter: string;
  setFilter: (filter: string) => void;
}

export function Filter({ currentFilter, setFilter }: FilterProps) {
  const t = useTranslations();

  const filters = [
    { id: "all", label: t("All") },
    { id: "personal", label: t("Personal") },
    { id: "academic", label: t("Academic") },
    { id: "client", label: t("Client") },
    { id: "test", label: t("Test") },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6">
      {filters.map((filter) => (
        <div key={filter.id} className="relative">
          {currentFilter === filter.id && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-primary rounded-md"
              transition={{ type: "spring", duration: 0.6 }}
            />
          )}
          <Button
            variant="ghost"
            className={`relative z-10 ${
              currentFilter === filter.id ? "text-primary-foreground" : ""
            }`}
            onClick={() => setFilter(filter.id)}
          >
            {filter.label}
          </Button>
        </div>
      ))}
    </div>
  );
}
