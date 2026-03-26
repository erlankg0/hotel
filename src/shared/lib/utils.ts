import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const weekdayFormatter = new Intl.DateTimeFormat('ru-RU', {
  weekday: 'long',
});

export function formatWeekday(date: Date) {
  const value = weekdayFormatter.format(date);
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function getGuestLabel(count: number) {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return `${count} гость`;
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return `${count} гостя`;
  }

  return `${count} гостей`;
}
