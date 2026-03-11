import { cn } from '@/shared/lib/utils';
import { Grid, GridCard } from '@/shared/ui/grid';
import { Text } from '@/shared/ui/text';
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
        <h2>Наслаждайтесь солнцем Средиземного моря в наших бассейнах
          и на частном пляже Utopia World.</h2>
      </article>
      <section className="container py-20">
        <header className="text-center mb-16">
          <Text tag="h2" variant="title">Особенности</Text>
          <p className="mt-4 text-neutral-500 max-w-xl mx-auto">
            Частный пляж и коллекция бассейнов для отдыха у Средиземного моря.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <article>
            <div className="text-4xl font-light mb-4">7</div>
            <h4 className="uppercase tracking-widest text-sm mb-2">
              Бассейнов
            </h4>
            <p className="text-neutral-500 text-sm">
              Infinity, Relax, главный и крытый бассейны.
            </p>
          </article>

          <article>
            <div className="text-4xl font-light mb-4">350 м</div>
            <h4 className="uppercase tracking-widest text-sm mb-2">
              Частный пляж
            </h4>
            <p className="text-neutral-500 text-sm">
              Песок и галька с лежаками и зонтиками.
            </p>
          </article>

          <article>
            <div className="text-4xl font-light mb-4">2</div>
            <h4 className="uppercase tracking-widest text-sm mb-2">
              Пирса
            </h4>
            <p className="text-neutral-500 text-sm">
              Для купания и отдыха над морем.
            </p>
          </article>

          <article>
            <div className="text-4xl font-light mb-4">1</div>
            <h4 className="uppercase tracking-widest text-sm mb-2">
              Infinity Pool
            </h4>
            <p className="text-neutral-500 text-sm">
              Панорамный бассейн с видом на море.
            </p>
          </article>

          <article>
            <div className="text-4xl font-light mb-4">2</div>
            <h4 className="uppercase tracking-widest text-sm mb-2">
              Детские бассейны
            </h4>
            <p className="text-neutral-500 text-sm">
              Безопасные зоны для детей.
            </p>
          </article>

          <article>
            <div className="text-4xl font-light mb-4">1</div>
            <h4 className="uppercase tracking-widest text-sm mb-2">
              Аквапарк
            </h4>
            <p className="text-neutral-500 text-sm">
              Водные горки и развлечения.
            </p>
          </article>

        </div>
      </section>
      <section className={'px-12 my-12'}>
        <Grid size={4}>
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
            image={{ url: 'https://cdn.utopiahotels.com/assets/images/pages/007iskelesayfa-lg.webp', alt: 'Пирс' }}
            title={'Пирс'}
            text={'Тихий и веселый.'}
            aspectRatio={'1 / 1'}
          />
          <GridCard
            colSpan={2}
            rowSpan={1}
            image={{
              url: 'https://cdn.utopiahotels.com/assets/images/pages/006anahavuz-lg.webp',
              alt: 'Главный бассейн',
            }}
            title={'Главный бассейн'}
            text={'Мы приглашаем вас в главный бассейн, где можно в полной мере насладиться солнцем и водой.'}
            aspectRatio={'2 / 1'}
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