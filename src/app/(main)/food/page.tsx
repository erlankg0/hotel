import { RESTAURANTS, RestaurantSlide } from '@/entities/restaurant';
import { cn } from '@/shared/lib/utils';
import { Grid, GridCard } from '@/shared/ui/grid';
import { Text } from '@/shared/ui/text';
import { Hero } from '@/widget/hero';
import { Slider } from '@/widget/slider';

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
          <GridCard
            colSpan={2}
            rowSpan={2}
            image={{ url: '/images/pool.webp', alt: 'Tuğra Restaurant' }}
            aspectRatio={'1 / 1'}
            title={'Бар у бассейна'}
            text={'Если вы хотите перекусить или выпить что-нибудь наслаждаясь бассейном, рядом с вами находится бар у бассейна с его богатым выбором напитков.'}
          />
          <GridCard
            colSpan={2}
            image={{
              url: 'https://cdn.utopiahotels.com/assets/images/pages/0008beachbar-lg.webp',
              alt: 'Пляжный Бар',
            }}
            aspectRatio={'2 / 1'}
            title={'Пляжный Бар'}
            text={'Все, что нужно для отдыха на пляже.'}
          />
          <GridCard
            image={{
              url: 'https://cdn.utopiahotels.com/assets/images/pages/0010relaxbar-lg.jpg',
              alt: 'Relax Бар',
            }}
            rowSpan={2}
            aspectRatio={'1 / 2'}
            title={'Relax Бар'}
            text={'Вы можете отдохнуть от приятной средиземноморской жары в релакс-баре.'}
          />
          <GridCard
            image={{ url: '/images/lobby.webp', alt: 'Cocktails' }}
            aspectRatio={'1 / 2'}
            title={'Лобби Бар'}
            text={'Лобби-бар ждет вас с богатым выбором напитков.'}
            rowSpan={2}
          />
          <GridCard
            colSpan={2}
            image={{ url: '/images/laguna.webp', alt: 'Laguna Bar' }}
            aspectRatio={'2 / 1'}
            title={'Лагуна бар'}
            text={'Где собраны самые вкусные напитки мира Utopia World'}
          />
        </Grid>
      </section>
      <section className={'mb-2 container'}>
        <Text tag={'h2'} variant={'title'}>Снек бары</Text>
        <div key={'1'} className={'flex flex-row gap-2 w-full h-102'}>
          <GridCard
            image={{
              url: 'https://cdn.utopiahotels.com/assets/images/pages/0014sahilsnack-lg.jpg',
              alt: 'White Lounge',
            }}
            aspectRatio={'1 / 2'}
            title={'White Lounge'}
            text={'С Beach Snack все, что вам нужно, находится в одном шаге от вас.'}
          />
          <GridCard
            image={{
              url: 'https://cdn.utopiahotels.com/assets/images/pages/0009aquasnack-lg.jpg',
              alt: 'Aqua Snack',
            }}
            rowSpan={2}
            aspectRatio={'1 / 2'}
            title={'Aqua Snack'}
            text={'Aqua Snack предлагает вам вкусные закуски..'}
          />
          <GridCard
            image={{
              url: 'https://cdn.utopiahotels.com/assets/images/pages/0012pastane-lg.jpg',
              alt: 'Кондитерская',
            }}
            rowSpan={2}
            aspectRatio={'1 / 2'}
            title={'Кондитерская'}
            text={'Самые восхитительные вкусы Мира Утопии ждут вас в нашей Кондитерской..'}
          />
        </div>
      </section>
    </section>
  );
}