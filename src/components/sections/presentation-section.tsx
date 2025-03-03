import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { Github, Mail } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function PresentationSection() {
  const t = useTranslations();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-[80vh] flex flex-col items-center justify-center text-center gap-8"
    >
      <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary">
        <Image
          src="https://github.com/Maciel64.png"
          alt="Profile Picture"
          className="object-cover"
          fill
        />
      </div>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Maciel64</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          {t(
            "Full Stack Developer passionate about creating beautiful and functional web applications"
          )}
        </p>
      </div>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="https://github.com/Maciel64" target="_blank">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="#contact">
            <Mail className="w-4 h-4 mr-2" />
            {t("Contact Me")}
          </Link>
        </Button>
      </div>
    </motion.section>
  );
}
