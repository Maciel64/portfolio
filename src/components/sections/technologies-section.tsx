import { motion } from "framer-motion";
import TechnologyBadge from "../technology-badge";
import { Technologies, technologies } from "@/helpers/technologies";
import { useTranslations } from "next-intl";

export function TechnologiesSection() {
  const t = useTranslations();

  return (
    <motion.section>
      <h2 className="text-3xl font-bold text-center mb-12">
        {t("Technologies I've Worked With")}
      </h2>

      <div className="flex gap-4 flex-wrap my-10">
        {Object.keys(technologies).map((tech) => (
          <TechnologyBadge tech={tech as Technologies} key={tech} />
        ))}
      </div>
    </motion.section>
  );
}
