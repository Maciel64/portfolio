import localFont from "next/font/local";
import "../globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

import { Analytics } from "@vercel/analytics/react";
import { Locales } from "@/i18n/request";

interface IGenerateMetadataProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({
  params: { locale },
}: IGenerateMetadataProps) {
  const t = await getTranslations({ locale });

  return {
    title: t("Maciel Gomes Suassuna Júnior Portfolio"),
    description: t("Maciel Gomes Suassuna Júnior Portfolio"),
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as Locales)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
      <Analytics />
    </html>
  );
}
