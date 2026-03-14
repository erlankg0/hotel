import { HERO_SPORT } from '@/entities/entertainment';
import { cn } from '@/shared/lib/utils';
import { Hero } from '@/widget/hero';

export default function Page() {
  return (
    <section className={cn('panel', 'page')}>
      <Hero {...HERO_SPORT} />
      <article className={'info'}>
        <h2 className={'info__title'}>
          Творческие спортивные возможности для более энергичного отдыха
        </h2>
      </article>
    </section>
  );
}