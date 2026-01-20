import { RestaurantSlide, RESTAURANTS } from '@/entities/restaurant';
import { Text } from '@/shared/ui/text';
import { SwiperUI } from '@/widget/swiper';

import styles from './styles.module.scss';


export function Restaurant() {
  return (
    <section className={styles.section} aria-label="Food & Bar">
      <div className="container">
        <header className={styles.header}>
          <Text tag={'span'} variant={'kicker'}>Food & Bar</Text>
          <Text tag={'h2'} variant={'title'}>Наши рестораны</Text>
          <Text tag={'p'} variant={'subtitle'}> Изысканные вкусы, авторская подача и атмосфера Средиземноморья</Text>
        </header>

        <SwiperUI
          delay={5000}
          navs
          controls
          slidesPerView={1.3}
          spaceBetween={16}
          slides={RESTAURANTS.map((restaurant, index) => (
            <RestaurantSlide key={index} {...restaurant} />
          ))}
        />
      </div>
    </section>
  );
}
