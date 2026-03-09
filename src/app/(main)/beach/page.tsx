import { cn } from '@/shared/lib/utils';
import { Grid, GridCard } from '@/shared/ui/grid';
import { Hero } from '@/widget/hero';

export default async function Page() {
  return (
    <section className={cn('panel', 'page')}>
      <Hero
        title={['Пляж', 'Relax Бассейн', 'Детский бассейн', 'Infinity Бассейн', 'Главный бассейн', 'Пирс', 'Крытый бассейн']}
        video={'https://cdn.utopiahotels.com/assets/videos/covers/uw-beach.webp'}
        poster={'https://cdn.utopiahotels.com/assets/images/pages/070220221417-lg.jpg'}
      />
      <article className={'info'}>
        <h2>Присоединяйтесь к волшебному миру Средиземноморья с Utopia World Hotels. Наслаждайтесь моментом с чистым кислородом от зелени и спокойствием от синевы.</h2>
      </article>
      <section className={'px-[3rem] my-[3rem]'}>
        <Grid size={5}>
          <GridCard
            colSpan={2}
            rowSpan={1}
            image={{ url: 'https://cdn.utopiahotels.com/assets/images/pages/001plajsayfa-lg.jpg', alt: 'Пляж' }}
            title={'Пляж'}
            text={'Сделайте освежающий шаг в прохладные воды Средиземного моря по золотому песку Utopia World.'}
            aspectRatio={'2 / 1'}
          />
          <GridCard
            image={{
              url: 'https://cdn.utopiahotels.com/assets/images/pages/002relaxhavuz-lg.jpg',
              alt: 'Relax Бассейн',
            }}
            title={'Relax Бассейн'}
            text={'Наслаждаясь великолепным видом на Средиземное море.'}
            aspectRatio={'1 / 1'}
          />
          <GridCard
            image={{
              url: 'https://cdn.utopiahotels.com/assets/images/pages/005yarimayhavuz-lg.webp',
              alt: 'Infinity Бассейн',
            }}
            title={'Infinity Бассейн'}
            text={'Это за гранью мечтаний с бассейном в форме полумесяца.'}
            aspectRatio={'1 / 1'}
          />
          <GridCard
            image={{
              url: 'https://cdn.utopiahotels.com/assets/images/pages/006anahavuz-lg.webp',
              alt: 'Главный бассейн',
            }}
            title={'Главный бассейн'}
            text={'Мы приглашаем вас в главный бассейн, где можно в полной мере насладиться солнцем и водой.'}
            aspectRatio={'1 / 1'}
          />
          <GridCard
            image={{ url: 'https://cdn.utopiahotels.com/assets/images/pages/007iskelesayfa-lg.webp', alt: 'Пирс' }}
            title={'Пирс'}
            text={'Тихий и веселый.'}
            aspectRatio={'1 / 1'}
          />
          <GridCard
            image={{
              url: 'https://cdn.utopiahotels.com/assets/images/pages/009kapalihavuz-lg.jpg',
              alt: 'Крытый бассейн',
            }}
            title={'Крытый бассейн'}
            text={'Удовольствие от бассейна, где прохладная вода сменяется более теплой.'}
            aspectRatio={'2 / 1'}
          />
        </Grid>
      </section>
    </section>
  );
}