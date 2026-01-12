'use client';

import { Navigation, Pagination, A11y } from 'swiper/modules';
import {
  Swiper, SwiperSlide,
} from 'swiper/react';

import { RestaurantCard, RestorantTitle, Hours, ReservationInfo } from '@/entities/restaurant';

import { RestaurantGrid } from './restaurant-grid';
import styles from './restaurant-swiper.module.scss';

export function RestaurantsSwiper() {
  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      draggable={true}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination, A11y]}
      className={styles.swiper}
    >
      <SwiperSlide>
        <RestaurantGrid size={4}>
          {/* крупный левый блок */}
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
              url: 'https://cdn.utopiahotels.com/assets/images/pages/turkuazgaleri02-xl.webp',
              alt: 'Beach Restorant',
              type: 'image',
            }} area={{ col: 3, colSpan: 2, row: 1, rowSpan: 1 }}
            slot={<h2>2</h2>}
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
              url: 'https://cdn.utopiahotels.com/assets/images/pages/turkuazgaleri04-xl.webp',
              alt: 'Beach Restorant',
              type: 'image',
            }} area={{ col: 3, colSpan: 2, row: 2, rowSpan: 2 }}
            slot={<h2>5</h2>}
          />
        </RestaurantGrid>
      </SwiperSlide>
      <SwiperSlide>
        <RestaurantGrid size={4}>
          {/* крупный левый блок */}
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
              url: 'https://cdn.utopiahotels.com/assets/images/pages/turkuazgaleri02-xl.webp',
              alt: 'Beach Restorant',
              type: 'image',
            }} area={{ col: 3, colSpan: 2, row: 1, rowSpan: 1 }}
            slot={<h2>2</h2>}
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
              url: 'https://cdn.utopiahotels.com/assets/images/pages/turkuazgaleri04-xl.webp',
              alt: 'Beach Restorant',
              type: 'image',
            }} area={{ col: 3, colSpan: 2, row: 2, rowSpan: 2 }}
            slot={<h2>5</h2>}
          />
        </RestaurantGrid>
      </SwiperSlide>
      <SwiperSlide>
        <RestaurantGrid size={4}>
          {/* крупный левый блок */}
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
              url: 'https://cdn.utopiahotels.com/assets/images/pages/turkuazgaleri02-xl.webp',
              alt: 'Beach Restorant',
              type: 'image',
            }} area={{ col: 3, colSpan: 2, row: 1, rowSpan: 1 }}
            slot={<h2>2</h2>}
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
              url: 'https://cdn.utopiahotels.com/assets/images/pages/turkuazgaleri04-xl.webp',
              alt: 'Beach Restorant',
              type: 'image',
            }} area={{ col: 3, colSpan: 2, row: 2, rowSpan: 2 }}
            slot={<h2>5</h2>}
          />
        </RestaurantGrid>
      </SwiperSlide>
      <SwiperSlide>
        <RestaurantGrid size={4}>
          {/* крупный левый блок */}
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
              url: 'https://cdn.utopiahotels.com/assets/images/pages/turkuazgaleri02-xl.webp',
              alt: 'Beach Restorant',
              type: 'image',
            }} area={{ col: 3, colSpan: 2, row: 1, rowSpan: 1 }}
            slot={<h2>2</h2>}
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
              url: 'https://cdn.utopiahotels.com/assets/images/pages/turkuazgaleri04-xl.webp',
              alt: 'Beach Restorant',
              type: 'image',
            }} area={{ col: 3, colSpan: 2, row: 2, rowSpan: 2 }}
            slot={<h2>5</h2>}
          />
        </RestaurantGrid>
      </SwiperSlide>
    </Swiper>
  );
}