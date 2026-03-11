import { HERO, GRID_BARS, GRID_SNACK } from '@/entities/food';
import { RESTAURANTS, RestaurantSlide } from '@/entities/restaurant';
import { cn } from '@/shared/lib/utils';
import { Grid, GridCard } from '@/shared/ui/grid';
import { Text } from '@/shared/ui/text';
import { Hero } from '@/widget/hero';
import { Slider } from '@/widget/slider';

export default async function Page() {
  return (
    <section className={cn('panel', 'page')}>
      <Hero {...HERO} />

      <article className={'info'}>
        <h2>Впечатляющая атмосфера Средиземноморья встречается с уникальными мировыми вкусами</h2>
      </article>
      <section className={'mb-2'}>
        <Slider
          kicker={'Food & Bar'}
          title={'Наши рестораны'}
          subtitle={'Изысканные вкусы, авторская подача и атмосфера Средиземноморья'}
          slides={RESTAURANTS.map((restaurant, index) => (
            <RestaurantSlide key={index} {...restaurant} />
          ))}
        />
      </section>
      <section className={'px-12 mb-12'}>
        <article className={'flex flex-col gap-2 my-2'}>
          <Text tag={'h2'} variant={'title'}>Бары</Text>
          <Text tag={'p'} variant={'subtitle'}> Лучшие напитки Средиземноморья</Text>
        </article>
        <Grid size={6}>
          {GRID_BARS.map((item) => (<GridCard key={item.title} {...item} />))}
        </Grid>
      </section>
      <section className={'mb-6'}>
        <div className={'container'}>
          <Text tag={'h2'} variant={'title'}>Снек бары</Text>
          <div key={'1'} className={'flex flex-row gap-2 w-full h-102'}>
            {GRID_SNACK.map((item) => (<GridCard key={item.title} {...item} />))}
          </div>
        </div>
      </section>
    </section>
  );
}