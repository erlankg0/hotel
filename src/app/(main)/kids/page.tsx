import { KIDSHERO, GRIDKIDS, Title } from '@/entities/entertainment';
import { Grid, GridCard } from '@/shared/ui/grid';
import { Text } from '@/shared/ui/text';
import { Hero } from '@/widget/hero';

export default function Page() {
  return (
    <section>
      <title>Семеный клуб Ma&Me&Pa</title>
      <Hero {...KIDSHERO} slot={<Title />} />
      <article className={'info'}>
        <h2> Волшебное пространство для игр, творчества и счастливого семейного отдыха.</h2>
      </article>
      <section className={'container'}>
        <Grid size={4}>
          {GRIDKIDS.map((item) => (<GridCard {...item} key={item.title} />))}
        </Grid>
      </section>
      <section className={'px-8'} aria-label={'Недельня программа'}>
        <Text variant={'title'} tag={'h2'}>Программа</Text>
      </section>
    </section>
  );
}