"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Laptop } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type Theme = "light" | "dark" | "system";

const themes: { value: Theme; label: string; icon: typeof Sun }[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Laptop },
];

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMounted(true);
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      document.documentElement.classList.toggle("dark", systemTheme === "dark");
    } else {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }, [theme]);

  if (!mounted) {
    return null;
  }

  const currentTheme = themes.find((t) => t.value === theme) || themes[0];
  const Icon = currentTheme.icon;

  return (
    <div suppressHydrationWarning>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="w-9 px-0">
            <motion.div
              initial={false}
              animate={{
                scale: isOpen ? 0.9 : 1,
                rotate: isOpen ? 45 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <Icon className="h-[1.2rem] w-[1.2rem]" />
            </motion.div>
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <AnimatePresence>
          {isOpen && (
            <DropdownMenuContent
              forceMount
              asChild
              side="bottom"
              align="end"
              sideOffset={8}
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {themes.map(({ value, label, icon: ItemIcon }) => (
                  <DropdownMenuItem
                    key={value}
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => {
                      setTheme(value);
                      setIsOpen(false);
                    }}
                  >
                    <ItemIcon className="h-4 w-4" />
                    <span>{label}</span>
                    {theme === value && (
                      <motion.div
                        layoutId="theme-check"
                        className="ml-auto h-4 w-4 rounded-full bg-primary"
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      />
                    )}
                  </DropdownMenuItem>
                ))}
              </motion.div>
            </DropdownMenuContent>
          )}
        </AnimatePresence>
      </DropdownMenu>
    </div>
  );
}
