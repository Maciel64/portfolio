"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage =
    languages.find((lang) => lang.code === locale) || languages[0];

  const switchLanguage = (language: Language) => {
    const pathWithoutLocale = pathname.replace(/^\/(en|pt|es)/, "");

    router.push(`/${language.code}${pathWithoutLocale}`);
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2 px-3">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-lg"
          >
            {currentLanguage.flag}
          </motion.span>
          <span className="hidden sm:inline">{currentLanguage.name}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </Button>
      </DropdownMenuTrigger>
      <AnimatePresence>
        {isOpen && (
          <DropdownMenuContent
            forceMount
            asChild
            sideOffset={8}
            align="end"
            className="w-48"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => switchLanguage(language)}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span>{language.name}</span>
                  {locale === language.code && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="ml-auto"
                    >
                      <Check className="h-4 w-4" />
                    </motion.span>
                  )}
                </DropdownMenuItem>
              ))}
            </motion.div>
          </DropdownMenuContent>
        )}
      </AnimatePresence>
    </DropdownMenu>
  );
}
