import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export type Locales = "en" | "pt" | "es";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = (await requestLocale) as Locales;

  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
