'use client';
import { Calendar1 } from 'lucide-react';

import { HotelGallery } from '@/entities/hotel';
import { RoomPrice } from '@/entities/room';
import { PriceRequest } from '@/features/price';
import { cn } from '@/shared/lib/utils';
import { Text } from '@/shared/ui/text';
import { Cancel } from '@/widget/cancel';
import { Places } from '@/widget/places';

import styles from './page.module.scss';


const IMAGES = [
  'hotel.webp',
  'laguna.webp',
  'poster.jpg',
  'beach.webp',
  'turkish.webp',
];


const gallery = IMAGES.map((image) => ({ url: `/images/${image}`, alt: `/images/${image}` }));
const blocks = [
  {
    title: 'Hotel',
    images: gallery,
  },
  {
    title: 'Рестораны',
    images: gallery,
  },
];

export default function Page() {


  return (
    <main className={cn('page', 'panel', styles.page)}>
      <section className={cn('col', 'container')}>
        <Text tag={'h1'} variant={'title'}>
          Utopia World
        </Text>
        <HotelGallery images={gallery} predImages={gallery.slice(0, 3)} blocks={blocks} />
        <PriceRequest />
        <Cancel />
        <section className={styles.info}>
          <div className="mb-4">
            <Calendar1 className={'w-12 h-12 text-gray-400 mx-auto'} />
          </div>

          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Выберите даты заезда и выезда
          </h2>
          <p className="text-sm text-gray-500">
            Чтобы увидеть доступные номера и цены, укажите даты и количество гостей
          </p>
        </section>
        <section>
          <Text tag={'h2'} variant={'title'}>
            Номера
          </Text>

          <div>
            <div className={'flex flex-col gap-6'}>
              <RoomPrice />
              <RoomPrice />
              <RoomPrice />
              <RoomPrice />
            </div>
          </div>
        </section>
        <Places />
      </section>
    </main>
  );
}