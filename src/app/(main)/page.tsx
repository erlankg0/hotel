import { AwardsMarquee } from '@/widget/awards';
import { Hero } from '@/widget/hero';
import { Restaurant } from '@/widget/restaurant';
import { Rooms } from '@/widget/rooms';


export default function Page() {
  return (
    <section>
      <Hero />
      <AwardsMarquee />
      <Restaurant />
      <Rooms />
    </section>
  );
}
