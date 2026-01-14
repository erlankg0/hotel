import {  RestaurantCard, ReservationInfo, Hours, RestorantTitle } from '@/entities/restaurant';
import { Grid } from '@/shared/ui/grid/grid';
import { Hero } from '@/widget/hero';
import { Rooms } from '@/widget/rooms';
import { SwiperUI } from '@/widget/swiper';

import type { ReactNode } from 'react';

const restorantSegments: ReactNode[] = [
  <Grid size={4} key={'1'}>
    <RestaurantCard
      media={{
        url: 'https://cdn.utopiahotels.com/assets/videos/covers/uw-turquaz.mp4',
        alt: 'Turkuaz Restaurant',
        type: 'video',
      }} area={{ col: 1, colSpan: 2, row: 1, rowSpan: 2 }}
      slot={<RestorantTitle />}
    />
    <RestaurantCard
      media={{
        url: 'https://cdn.utopiahotels.com/assets/images/pages/turkuazgaleri06-xl.webp',
        alt: 'Beach Restorant',
        type: 'image',
      }} area={{ col: 1, colSpan: 1, row: 3, rowSpan: 1 }}
      slot={<ReservationInfo />}
    />
    <RestaurantCard
      media={{
        url: 'https://cdn.utopiahotels.com/assets/images/pages/turkuazgaleri03-xl.webp',
        alt: 'Beach Restorant',
        type: 'image',
      }} area={{ col: 2, colSpan: 1, row: 3, rowSpan: 1 }}
      slot={<Hours />}
    />
    <RestaurantCard
      media={{
        url: 'https://cdn.utopiahotels.com/assets/images/pages/turkuazgaleri03-xl.webp',
        alt: 'Beach Restorant',
        type: 'image',
      }} area={{ col: 2, colSpan: 1, row: 3, rowSpan: 1 }}
      slot={<Hours />}
    />
  </Grid>,
  <Grid size={4} key={'2'}>
    <RestaurantCard
      media={{
        url: 'https://cdn.utopiahotels.com/assets/videos/covers/uw-turquaz.mp4',
        alt: 'Turkuaz Restaurant',
        type: 'video',
      }} area={{ col: 1, colSpan: 2, row: 1, rowSpan: 2 }}
      slot={<RestorantTitle />}
    />
    <RestaurantCard
      media={{
        url: 'https://cdn.utopiahotels.com/assets/images/pages/turkuazgaleri06-xl.webp',
        alt: 'Beach Restorant',
        type: 'image',
      }} area={{ col: 1, colSpan: 1, row: 3, rowSpan: 1 }}
      slot={<ReservationInfo />}
    />
    <RestaurantCard
      media={{
        url: 'https://cdn.utopiahotels.com/assets/images/pages/turkuazgaleri03-xl.webp',
        alt: 'Beach Restorant',
        type: 'image',
      }} area={{ col: 2, colSpan: 1, row: 3, rowSpan: 1 }}
      slot={<Hours />}
    />
    <RestaurantCard
      media={{
        url: 'https://cdn.utopiahotels.com/assets/images/pages/turkuazgaleri03-xl.webp',
        alt: 'Beach Restorant',
        type: 'image',
      }} area={{ col: 2, colSpan: 1, row: 3, rowSpan: 1 }}
      slot={<Hours />}
    />
  </Grid>,
];

export default function Page() {
  return (
    <section>
      <Hero />
      <Rooms />
      <SwiperUI delay={5000} slides={restorantSegments} controls navs centeredSlides slidesPerView={1.3} />
    </section>
  );
}
