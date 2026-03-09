import { cn } from '@/shared/lib/utils';
import { Grid, GridCard } from '@/shared/ui/grid';
import { Hero } from '@/widget/hero';

export default async function Page() {
  return (
    <section className={cn('panel', 'page')}>
      <Hero
        preTitle={'Аквапарк'}
        subtitle={'Веселье и умиротворение вместе в сердце природы\n.'}
        title={['Горки', 'Рафтинг', 'Снэк Бар', 'Детский аквапарк', 'Бассейн с водопадом', 'Бассейн', 'Бар']}
        video={'https://cdn.utopiahotels.com/assets/videos/covers/uw-aqua.mp4'}
        poster={'https://cdn.utopiahotels.com/assets/images/pages/001kaydirakmodal-lg.webp'}
      />
      <article className={'info'}>
        <h2>
          Добро пожаловать в Аквапарк Utopia World — настоящий оазис веселья и релаксации среди величественного
          соснового леса!
        </h2>
      </article>
      <div className={'px-12 my-12'}>
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