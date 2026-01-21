import { HotelAbout } from '@/entities/hotel';
import { AwardsMarquee } from '@/widget/awards';
import { Hero } from '@/widget/hero';
import { Parallax } from '@/widget/parallax';
import { Restaurant } from '@/widget/restaurant';
import { Rooms } from '@/widget/rooms';

import styles from './page.module.scss';

export default function Page() {
  return (
    <section className={styles.page}>
      <Hero />
      <HotelAbout />
      <Parallax />
      <Restaurant />
      <AwardsMarquee />
      <Rooms />
    </section>
  );
}