import { Hero } from '@/widget/hero';
import { Parallax } from '@/widget/parallax';

import styles from './page.module.scss';

export default function Page() {
  return (
    <section className={styles.page}>
      <Hero />
      <Parallax />
      {/* <HotelAbout />
      <Entertainment />
      <Parallax />
      <Restaurant />
      <AwardsMarquee />
      <Rooms /> */}
    </section>
  );
}