import { HERO, GRID } from '@/entities/aquapark';
import { cn } from '@/shared/lib/utils';
import { Grid, GridCard } from '@/shared/ui/grid';
import { Hero } from '@/widget/hero';

export default async function Page() {
  return (
    <section className={cn('panel', 'page')}>
      <Hero {...HERO} />
      <article className={'info'}>
        <h2>
          Добро пожаловать в Аквапарк Utopia World — настоящий оазис веселья и релаксации среди величественного
          соснового леса!
        </h2>
      </article>
      <div className={'px-12 my-12'}>
        <Grid size={4}>
          {GRID.map((item) => (<GridCard {...item} key={item.title} />))}
        </Grid>
      </div>
    </section>
  );
}