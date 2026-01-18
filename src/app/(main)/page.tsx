import { AwardsMarquee } from '@/widget/awards';
import { Hero } from '@/widget/hero';
import { Property } from '@/widget/property';
import { Restaurant } from '@/widget/restaurant';
import { Rooms } from '@/widget/rooms';

import styles from './page.module.scss';

export default function Page() {
  return (
    <section className={styles.page}>
      <Hero />
      <AwardsMarquee />
      <Property />
      <Restaurant />
      <Rooms />
    </section>
  );
}