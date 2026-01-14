import { RestaurantSlide } from '@/entities/restaurant';
import { SwiperUI } from '@/widget/swiper';

import styles from './styles.module.scss';

const RESTAURANTS = [
  {
    url: 'https://cdn.utopiahotels.com/assets/videos/covers/uw-lamonte.mp4',
    alt: 'La Monte',
    title: 'La Monte',
    description: 'Turkuaz mavisi ile Akdeniz atmosferini sonuna kadar yaşayabilmenizi sağlıyor.',
    video: true,
  },
  {
    url: 'https://cdn.utopiahotels.com/assets/videos/covers/uw-turquaz.mp4',
    alt: 'Turkuaz',
    title: 'Turkuaz',
    description: 'Birbirinden farklı balık menülerini tadabileceğiniz Turkuaz Restaurant tatilinizde özel anlarınıza eşlik ediyor.',
    video: true,
  },
  {
    url: 'https://cdn.utopiahotels.com/assets/videos/covers/uw-tugra.mp4',
    alt: 'Tuğra',
    title: 'Tuğra Ana Restaurant',
    description: 'Gün doğumu ile başlayan ve Akdeniz’in her anına eşlik eden Tuğra Restaurant ile enfes lezzetleri deneyimleyin.',
    video: true,
  },
  {
    url: 'https://cdn.utopiahotels.com/assets/videos/covers/uw-turquaz.mp4',
    alt: 'Tuam',
    title: 'Tuam',
    description: 'Anadolu mutfağının en özel lezzetlerini Akdeniz dokusuyla birleştiren eşsiz deneyim.',
    video: true,
  },
];

export function Restaurant() {
  return (
    <section className={styles.section} aria-label="Food & Bar">
      <div className="container">
        <header className={styles.header}>
          <span className={styles.kicker}>Food & Bar</span>
          <h2 className={styles.title}>Наши рестораны</h2>
          <p className={styles.subtitle}>
            Изысканные вкусы, авторская подача и атмосфера Средиземноморья
          </p>
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
