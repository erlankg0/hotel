import { KIDSHERO } from '@/entities/entertainment';
import { Hero } from '@/widget/hero';

export default function Page() {
  return (
    <section>
      <Hero {...KIDSHERO} />
      <article className={'info'}>
        <h2>Мы создали волшебный мир, в котором мы даем детям возможность свободно развлекаться в удобной и продуманной
          зоне.</h2>
      </article>
    </section>
  );
}