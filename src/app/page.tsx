"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import "./globals.css";

export default function Portfolio() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <header className="fixed top-0 w-full z-50 backdrop-blur-sm border-b">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold"
          >
            Maciel64
          </motion.span>
          <div className="flex gap-4">
            <Button variant="ghost" asChild>
              <Link href="#about">About</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#skills">Skills</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#projects">Projects</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 pt-24">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-h-[80vh] flex flex-col items-center justify-center text-center gap-8"
        >
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary">
            <Image
              src="https://github.com/Maciel64.png"
              alt="Profile Picture"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Maciel64</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Full Stack Developer passionate about creating beautiful and
              functional web applications
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
                Contact Me
              </Link>
            </Button>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "Git",
              "SQL",
            ].map((skill) => (
              <motion.div key={skill} variants={item}>
                <Card className="hover:border-primary transition-colors">
                  <CardContent className="p-6 text-center">{skill}</CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <motion.div key={project} variants={item}>
                <Card className="overflow-hidden hover:border-primary transition-colors">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-muted" />
                    <div className="p-6">
                      <h3 className="font-bold mb-2">Project {project}</h3>
                      <p className="text-muted-foreground mb-4">
                        A brief description of the project and the technologies
                        used.
                      </p>
                      <Button variant="secondary" className="w-full">
                        View Project
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-md mx-auto flex flex-col gap-4">
            <Button size="lg" asChild>
              <Link href="mailto:your.email@example.com">
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="w-4 h-4 mr-2" />
                Connect on LinkedIn
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://github.com/Maciel64" target="_blank">
                <Github className="w-4 h-4 mr-2" />
                Follow on GitHub
              </Link>
            </Button>
          </div>
        </motion.section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Maciel64. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
