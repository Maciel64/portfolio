"use client";

import { motion } from "framer-motion";
import { Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useCertificates } from "@/hooks/use-certificates";
import { useTranslations } from "next-intl";
import { useDate } from "@/hooks/use-date";

export function CertificatesSection() {
  const t = useTranslations();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const { certificates, getCategoryIcon, getCategoryLabel } = useCertificates();
  const { formatDateRange, formatDate } = useDate();

  return (
    <motion.section
      id="certificates"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="py-20"
    >
      <h2 className="text-3xl font-bold text-center mb-4">
        {t("Certificates")}
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        {t(
          "Professional certifications and achievements that validate my expertise and skills"
        )}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate) => (
          <motion.div
            key={certificate.id}
            variants={item}
            whileHover={{
              y: -5,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <Card className="h-full flex flex-col border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1 mb-2"
                  >
                    {getCategoryIcon(certificate.category)}
                    <span>{getCategoryLabel(certificate.category)}</span>
                  </Badge>

                  {certificate.logoUrl && (
                    <div className="relative w-10 h-10 rounded-full p-1 overflow-hidden bg-white flex items-center justify-center">
                      <Image
                        src={certificate.logoUrl || "/placeholder.svg"}
                        alt={`${certificate.organization} logo`}
                        width={40}
                        height={40}
                        className="object-contain grayscale"
                      />
                    </div>
                  )}
                </div>
                <CardTitle className="text-xl">{certificate.title}</CardTitle>
                <CardDescription className="flex flex-col gap-1">
                  <span className="font-medium text-primary">
                    {certificate.organization}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>
                      {certificate.expiryDate
                        ? formatDateRange(
                            certificate.issueDate,
                            certificate.expiryDate
                          )
                        : formatDate(certificate.issueDate) + " -"}
                    </span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">
                  {certificate.description}
                </p>
                {certificate.credentialId && (
                  <div className="mt-2 text-xs text-muted-foreground">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="cursor-help border-b border-dotted border-muted-foreground">
                            Credential ID: {certificate.credentialId}
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Unique identifier for this certificate</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full group">
                  <Link
                    href={certificate.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{t("View Certificate")}</span>
                    <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
