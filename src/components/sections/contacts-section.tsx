"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  Share2,
  MessageSquare,
} from "lucide-react";
import { SocialButton } from "../social-button";

interface ContactSectionProps {
  t: (key: string) => string;
}

export function ContactSection({ t }: ContactSectionProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="py-20"
    >
      <motion.h2
        variants={item}
        className="text-3xl font-bold text-center mb-12"
      >
        {t("Get In Touch")}
      </motion.h2>

      <div className="max-w-4xl mx-auto grid gap-4 px-4 sm:grid-cols-2">
        <motion.div variants={item}>
          <SocialButton
            href="mailto:macielsuassuna14@gmail.com"
            icon={Mail}
            label={t("Email Me")}
            username="macielsuassuna14@gmail.com"
            gradient="bg-gradient-to-r from-violet-600 to-indigo-600"
          />
        </motion.div>

        <motion.div variants={item}>
          <SocialButton
            href="https://www.linkedin.com/in/maciel-suassuna/"
            icon={Linkedin}
            label="LinkedIn"
            username="maciel-suassuna"
            gradient="bg-gradient-to-r from-blue-600 to-cyan-600"
          />
        </motion.div>

        <motion.div variants={item}>
          <SocialButton
            href="https://github.com/Maciel64"
            icon={Github}
            label="GitHub"
            username="Maciel64"
            gradient="bg-gradient-to-r from-gray-700 to-gray-900"
          />
        </motion.div>

        <motion.div variants={item}>
          <SocialButton
            href="https://twitter.com/cubo_magico64"
            icon={Twitter}
            label="Twitter"
            username="@cubo_magico64"
            gradient="bg-gradient-to-r from-blue-400 to-blue-600"
          />
        </motion.div>

        {/* <motion.div variants={item}>
          <SocialButton
            href="https://instagram.com/maciel.sjr"
            icon={Instagram}
            label="Instagram"
            username="maciel.sjr"
            gradient="bg-gradient-to-r from-pink-500 via-rose-500 to-yellow-500"
          />
        </motion.div>

        <motion.div variants={item}>
          <SocialButton
            href="https://reddit.com/u/Maciel_64"
            icon={MessageCircle}
            label="Reddit"
            username="u/Maciel_64"
            gradient="bg-gradient-to-r from-orange-500 to-red-500"
          />
        </motion.div> */}

        <motion.div variants={item}>
          <SocialButton
            href="https://bsky.app/profile/cubomagico.bsky.social"
            icon={Share2}
            label="Bluesky"
            username="cubomagico.bsky.social"
            gradient="bg-gradient-to-r from-sky-400 to-blue-500"
          />
        </motion.div>

        <motion.div variants={item}>
          <SocialButton
            href="https://discord.com/users/macielmano"
            icon={MessageSquare}
            label="Discord"
            username="macielmano"
            gradient="bg-gradient-to-r from-indigo-500 to-purple-500"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
