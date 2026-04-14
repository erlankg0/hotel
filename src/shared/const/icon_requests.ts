import {
  Bed,
  Coffee,
  Droplets,
  Sparkles,
  Truck,
  Baby,
  Clock,
} from 'lucide-react';

import type { LucideIcon } from 'lucide-react';


export enum RequestKey {
  TOWEL = 'TOWEL',
  PILLOW = 'PILLOW',
  WATER = 'WATER',
  CLEANING = 'CLEANING',
  BREAKFAST = 'BREAKFAST',
  ROOM_SERVICE = 'ROOM_SERVICE',
  EXTRA_BED = 'EXTRA_BED',
  BABY_COT = 'BABY_COT',
  TAXI = 'TAXI',
  LATE_CHECKOUT = 'LATE_CHECKOUT',
}

export const REQUEST_LABEL_RU: Record<string, string> = {
  TOWEL: 'Полотенце',
  PILLOW: 'Подушка',
  WATER: 'Вода',
  CLEANING: 'Уборка',
  BREAKFAST: 'Завтрак',
  ROOM_SERVICE: 'Обслуживание в номер',
  EXTRA_BED: 'Доп. кровать',
  BABY_COT: 'Детская кроватка',
  TAXI: 'Такси',
  LATE_CHECKOUT: 'Поздний выезд',
};

export const REQUEST_ICONS: Record<RequestKey, LucideIcon> = {
  [RequestKey.TOWEL]: Droplets,
  [RequestKey.PILLOW]: Bed,
  [RequestKey.WATER]: Droplets,
  [RequestKey.CLEANING]: Sparkles,
  [RequestKey.BREAKFAST]: Coffee,
  [RequestKey.ROOM_SERVICE]: Truck,
  [RequestKey.EXTRA_BED]: Bed,
  [RequestKey.BABY_COT]: Baby,
  [RequestKey.TAXI]: Truck,
  [RequestKey.LATE_CHECKOUT]: Clock,
};