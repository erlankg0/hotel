import { FoodBar } from '@/widget/FB';
import { Hero } from '@/widget/hero';
import { Rooms } from '@/widget/rooms';


export default function Page() {
  return (
    <section>
      <Hero />
      <Rooms />
      <FoodBar />
    </section>
  );
}
