import { useFormatter, useLocale, useTranslations } from "next-intl";

export function useDate() {
  const formatter = useFormatter();
  const locale = useLocale();
  const t = useTranslations("TimeUnits");

  const formatDate = (date: Date) =>
    formatter.dateTime(date, {
      month: "short",
      year: "numeric",
    });

  const getDuration = (start: Date, end: Date) => {
    const from = start < end ? start : end;
    const to = start < end ? end : start;

    let years = to.getFullYear() - from.getFullYear();
    let months = to.getMonth() - from.getMonth();
    let days = to.getDate() - from.getDate();

    if (days < 0) {
      const lastDayOfMonth = new Date(
        to.getFullYear(),
        to.getMonth(),
        0
      ).getDate();
      days += lastDayOfMonth;
      months--;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months, days };
  };

  const timeDistance = (start: Date, end: Date) => {
    const { years, months, days } = getDuration(start, end);
    const parts: string[] = [];

    if (years > 0) {
      parts.push(t("years", { count: years }));
    }
    if (months > 0) {
      parts.push(t("months", { count: months }));
    }
    if (days > 0) {
      parts.push(t("days", { count: days }));
    }

    return new Intl.ListFormat(locale, {
      style: "long",
      type: "conjunction",
    }).format(parts);
  };

  return {
    formatDate,
    getDuration,
    timeDistance,
  };
}
