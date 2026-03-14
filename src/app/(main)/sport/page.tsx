import { HERO_SPORT, GRID_SPORT } from '@/entities/entertainment';
import { cn } from '@/shared/lib/utils';
import { Grid, GridCard } from '@/shared/ui/grid';
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
      <section className={'mx-8 mb-8'}>
        <Grid size={4}>
          {GRID_SPORT.map((item) => (<GridCard key={item.title} {...item} />))}
        </Grid>
      </section>
    </section>
  );
}