import Image from 'next/image';

import styles from './styles.module.scss'

export function HotelHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/poster.jpg"
          alt="Вид на Utopia World Deluxe — главный корпус и территория"
          className={styles.imageWrapper__image}
          fill
          priority
          quality={95}
        />
        <div className={styles.imageWrapper__overlay} />
      </div>

      <div className={styles.hero__content}>
        <div className={styles.badge}>
          <span className={styles.stars}>★★★★★</span>
          <span className={styles.concept}>Ultra All Inclusive</span>
        </div>
        <h1 className={styles.hero__title}>Utopia World Deluxe</h1>
        <p className={styles.hero__subtitle}>Средиземноморская роскошь на побережье Аланьи</p>
      </div>
    </div>

  );
}