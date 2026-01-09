'use client';

import { Navigation, Pagination, A11y } from 'swiper/modules';
import {
  Swiper, SwiperSlide,
} from 'swiper/react';

import { RestaurantCard } from '@/entities/restaurant';

import { RestaurantGrid } from './restaurant-grid';

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
      className={'border-2 rounded-xl px-2'}
    >
      <SwiperSlide>
        <RestaurantGrid>
          {/* крупный левый блок */}
          <RestaurantCard
            media={{ url: '', alt: '' }}
            area={{ col: 1, colSpan: 3, row: 1, rowSpan: 3 }}
            slot={<h2>iPhone 16</h2>}
          />

          {/* правый верхний короткий */}
          <RestaurantCard
            media={{ url: '', alt: '' }}
            area={{ col: 4, colSpan: 3, row: 1, rowSpan: 2 }}
            slot={<p>New Colors</p>}
          />

          {/* нижний правый блок */}
          <RestaurantCard
            media={{ url: '', alt: '' }}
            area={{ col: 4, colSpan: 3, row: 3, rowSpan: 3 }}
            slot={<p>More Features</p>}
          />

          {/* дополнительные блоки */}
          <RestaurantCard
            media={{ url: '', alt: '' }}
            area={{ col: 1, colSpan: 2, row: 4, rowSpan: 2 }}
            slot={<p>Specs</p>}
          />

          <RestaurantCard
            media={{ url: '', alt: '' }}
            area={{ col: 3, colSpan: 2, row: 4, rowSpan: 2 }}
            slot={<p>Gallery</p>}
          />
        </RestaurantGrid>
      </SwiperSlide>
      <SwiperSlide>
        <RestaurantGrid>
          {/* крупный левый блок */}
          <RestaurantCard
            media={{ url: '', alt: '' }}
            area={{ col: 1, colSpan: 3, row: 1, rowSpan: 3 }}
            slot={<h2>iPhone 16</h2>}
          />

          {/* правый верхний короткий */}
          <RestaurantCard
            media={{ url: '', alt: '' }}
            area={{ col: 4, colSpan: 3, row: 1, rowSpan: 2 }}
            slot={<p>New Colors</p>}
          />

          {/* нижний правый блок */}
          <RestaurantCard
            media={{ url: '', alt: '' }}
            area={{ col: 4, colSpan: 3, row: 3, rowSpan: 3 }}
            slot={<p>More Features</p>}
          />

          {/* дополнительные блоки */}
          <RestaurantCard
            media={{ url: '', alt: '' }}
            area={{ col: 1, colSpan: 2, row: 4, rowSpan: 2 }}
            slot={<p>Specs</p>}
          />

          <RestaurantCard
            media={{ url: '', alt: '' }}
            area={{ col: 3, colSpan: 1, row: 4, rowSpan: 2 }}
            slot={<p>Gallery</p>}
          />
        </RestaurantGrid>
      </SwiperSlide>
    </Swiper>
  );
}