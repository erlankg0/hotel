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
        <Grid size={4}>
          <GridCard
            colSpan={2}
            rowSpan={1}
            image={{ url: 'https://cdn.utopiahotels.com/assets/images/pages/001kaydirak-lg.jpg', alt: 'Горки' }}
            aspectRatio={'2 / 1'}
            title={'Горки'}
            text={'Мы раздвигаем границы развлечений с 8 взрослыми и 4 детскими горками..'}
          />
          <GridCard
            image={{ url: 'https://cdn.utopiahotels.com/assets/images/pages/002rafting-lg.jpg', alt: 'Рафтинг' }}
            aspectRatio={'1 / 1'}
            title={'Рафтинг'}
            text={'Где вы и ваши дети можете пережить захватывающие моменты.'}
          />
          <GridCard
            image={{
              url: 'https://cdn.utopiahotels.com/assets/images/pages/003cocukaqua-lg.jpg',
              alt: 'Детский Аквапарк',
            }}
            aspectRatio={'1 / 1'}
            title={'Детский Аквапарк'}
            text={'Мы создали бассейн для наших маленьких гостей.'}
          />
          <GridCard
            image={{
              url: 'https://cdn.utopiahotels.com/assets/images/pages/004selale-lg.jpg',
              alt: 'Бассейн с водопадом',
            }}
            aspectRatio={'1 / 1'}
            title={'Бассейн с водопадом'}
            text={'Бассейн с водопадом в окруженного соснами.'}
          />
          <GridCard
            image={{
              url: 'https://cdn.utopiahotels.com/assets/images/pages/005aquasnack-lg.jpg',
              alt: 'Аква Ресторан',
            }}
            aspectRatio={'1 / 1'}
            title={'Аква Ресторан'}
            text={'Ресторан Aqua с вкусным меню всегда рядом с Вами.'}
          />
          <GridCard
            colSpan={2}
            rowSpan={2}
            image={{ url: 'https://cdn.utopiahotels.com/assets/images/pages/006aquahavuzz-lg.jpg', alt: 'Аква бассейн' }}
            aspectRatio={'2 / 1'}
            title={'Аква бассейн'}
            text={'Подарите себе спокойное время с аква басесейном'}
          />
        </Grid>
      </div>
    </section>
  );
}