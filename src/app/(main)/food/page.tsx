import { cn } from '@/shared/lib/utils';
import { Grid, GridCard } from '@/shared/ui/grid';
import { Hero } from '@/widget/hero';

export default async function Page() {
  return (
    <section className={cn('panel', 'page')}>
      <Hero
        preTitle={'Рестораны и бары'}
        subtitle={'Ваше путешествие к неожиданным вкусам продолжается в отеле Utopia World, где встречаются кухни разных культур.'}
        title={['Lobby bar', 'White Lounge', 'Laguna Bar', 'La Mounte', 'Pool Bar', 'Tuam', 'Beach Bar', 'Detox Bar', 'Relax Bar', 'Aqua Snack', 'Patisserie', 'Tuğra Restaurant']}
        video={'https://cdn.utopiahotels.com/assets/videos/covers/uw-rest.mp4'}
        poster={'/images/poster.jpg'}
      />

      <article className={'info'}>
        <h2>Впечатляющая атмосфера Средиземноморья встречается с уникальными мировыми вкусами</h2>
      </article>
      <div className={'px-[3rem] mb-[3rem]'}>
        <Grid size={5}>
          <GridCard
            colSpan={2}
            rowSpan={2}
            image={{ url: '/images/pool.webp', alt: 'Tuğra Restaurant' }}
            aspectRatio={'1 / 1'}
            title={'Бар у бассейна'}
            text={'Если вы хотите перекусить или выпить что-нибудь наслаждаясь бассейном, рядом с вами находится бар у бассейна с его богатым выбором напитков.'}
          />
          <GridCard
            image={{ url: '/images/tuam.webp', alt: 'White Lounge' }}
            aspectRatio={'1 / 1'}
            title={'Tuam'}
          />
          <GridCard
            image={{ url: 'https://cdn.utopiahotels.com/assets/images/pages/0008beachbar-lg.webp', alt: 'Laguna Bar' }}
            aspectRatio={'1 / 1'}
            title={'Пляжный Бар'}
          />
          <GridCard
            image={{ url: '/images/tugra.webp', alt: 'Desserts' }}
            aspectRatio={'1 / 1'}
            title={'Пляжный Бар'}
          />
          <GridCard
            image={{ url: '/images/lobby.webp', alt: 'Cocktails' }}
            aspectRatio={'1 / 1'}
            title={'Лобби Бар'}
          />

          <GridCard
            colSpan={2}
            image={{ url: '/images/laguna.webp', alt: 'Laguna Bar' }}
            aspectRatio={'2 / 1'}
            title={'Лагуна бар'}
            text={'Где собраны самые вкусные напитки мира Utopia World'}
          />
        </Grid>
      </div>
    </section>
  );
}