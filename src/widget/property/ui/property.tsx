import { HotelHero, HotelInfo, HotelAccordion, HOTEL_INFO, HOTEL_CONTACTS, HotelAbout } from '@/entities/hotel';

import styles from './styles.module.scss';

export function Property() {
  return (
    <section className={styles.property}>
      <div className="container">
        <div className={styles.property__wrapper}>
          <HotelAbout />
          <HotelHero />
          <div className={styles.contentGrid}>
            <HotelInfo list={HOTEL_CONTACTS} />
            <HotelInfo list={HOTEL_INFO} />
            <HotelAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}