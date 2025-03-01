"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/language-switcher";
import ThemeSwitcher from "./theme-switcher";

type MobileMenuProps = {
  t: (key: string) => string;
};

export default function MobileMenu({ t }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <Menu className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          >
            <div className="fixed inset-0 z-50">
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">Maciel64</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleMenu}
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, staggerChildren: 0.1 }}
                  className="flex flex-col gap-4 mt-8 py-2 bg-muted shadow-sm"
                >
                  <NavItem href="#about" onClick={toggleMenu}>
                    {t("About")}
                  </NavItem>
                  <NavItem href="#projects" onClick={toggleMenu}>
                    {t("Projects")}
                  </NavItem>
                  <NavItem href="#experience" onClick={toggleMenu}>
                    {t("Professional Experience")}
                  </NavItem>
                  <NavItem href="#contact" onClick={toggleMenu}>
                    {t("Contact")}
                  </NavItem>

                  <div className="mt-4 pt-4 border-t">
                    <div className="flex justify-start">
                      <LanguageSwitcher />
                      <ThemeSwitcher />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavItem({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <Button variant="ghost" className="w-full justify-start text-lg" asChild>
        <Link href={href} onClick={onClick}>
          {children}
        </Link>
      </Button>
    </motion.div>
  );
}
