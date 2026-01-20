import { HotelAbout } from '@/entities/hotel';
import { AwardsMarquee } from '@/widget/awards';
import { Hero } from '@/widget/hero';
import { Restaurant } from '@/widget/restaurant';
import { Rooms } from '@/widget/rooms';

import styles from './page.module.scss';

export default function Page() {
  return (
    <section className={styles.page}>
      <Hero />
      <HotelAbout />
      <Restaurant />
      <AwardsMarquee />
      <Rooms />
    </section>
  );
}