import { cn } from '@/shared/lib/utils';
import { Grid, GridCard } from '@/shared/ui/grid';
import { Hero } from '@/widget/hero';

const HERO_SPA = {
  preTitle: 'Utopia World Spa',
  subtitle: 'Погрузитесь в программы обновления, которые мягко возвращают телу легкость, а отдыху добавляют тишину и приватность.',
  title: ['SPA', 'Хаммам', 'Сауна', 'Ритуалы', 'Терапии'],
  poster: 'https://cdn.utopiahotels.com/assets/videos/covers/uw-spa.webp',
  video: 'https://cdn.utopiahotels.com/assets/videos/covers/uw-spa.mp4',
};

const GRID_SPA = [
  {
    colSpan: 2,
    rowSpan: 1,
    image: {
      url: 'https://cdn.utopiahotels.com/assets/images/pages/001turkhamami-lg.jpg',
      alt: 'Турецкий хаммам',
    },
    aspectRatio: '2 / 1',
    title: 'Турецкий хаммам',
    text: 'Тысячелетний ритуал с теплой водой и горячим воздухом помогает снять напряжение дня, глубоко расслабиться и вернуть коже мягкость.',
  },
  {
    colSpan: 1,
    rowSpan: 1,
    image: {
      url: 'https://cdn.utopiahotels.com/assets/images/pages/02sauna-lg.jpg',
      alt: 'Сауна',
    },
    aspectRatio: '1 / 1',
    title: 'Сауна',
    text: 'Согревающее пространство, где тепло помогает телу отпустить усталость, а разуму обрести спокойствие и внутреннюю тишину.',
  },
  {
    colSpan: 1,
    rowSpan: 1,
    image: {
      url: 'https://cdn.utopiahotels.com/assets/images/pages/003kapalihavuz-lg.jpg',
      alt: 'Крытый бассейн',
    },
    aspectRatio: '1 / 1',
    title: 'Крытый бассейн',
    text: 'Спокойная альтернатива открытым бассейнам Utopia World: более камерная атмосфера, мягкая вода и ощущение уединенного отдыха.',
  },
  {
    colSpan: 1,
    rowSpan: 1,
    image: {
      url: 'https://cdn.utopiahotels.com/assets/images/pages/04viprituals-lg.jpg',
      alt: 'VIP-ритуалы',
    },
    aspectRatio: '1 / 1',
    title: 'VIP-ритуалы',
    text: 'Персональные программы в специально подготовленных комнатах с ароматическими эссенциями и уходами, созданными под ритм вашего отдыха.',
  },
  {
    colSpan: 1,
    rowSpan: 1,
    image: {
      url: 'https://cdn.utopiahotels.com/assets/images/pages/05restingroom-lg.jpg',
      alt: 'Relax Room',
    },
    aspectRatio: '1 / 1',
    title: 'Relax Room',
    text: 'После SPA-процедур здесь особенно легко задержаться еще немного: расслабиться, перевести дыхание и насладиться полезными напитками.',
  },
  {
    colSpan: 2,
    rowSpan: 1,
    image: {
      url: 'https://cdn.utopiahotels.com/assets/images/pages/06masajterapi-lg.jpg',
      alt: 'Ароматические терапии',
    },
    aspectRatio: '2 / 1',
    title: 'Ароматические терапии',
    text: 'Массажные и ароматические терапии подбираются индивидуально, чтобы подарить телу мягкость, а состоянию - устойчивое чувство покоя.',
  },
];

export default function Page() {
  return (
    <section className={cn('panel', 'page')}>
      <Hero {...HERO_SPA} />
      <article className={'info'}>
        <h2 className={'info__title'}>
          Пространство восстановления, где традиции хаммама, тепло сауны и спокойствие SPA-ритуалов
          собирают отдых в одно цельное ощущение.
        </h2>
      </article>
      <section className={'mx-8 mb-8'}>
        <Grid size={4}>
          {GRID_SPA.map((item) => (<GridCard key={item.title} {...item} />))}
        </Grid>
      </section>
    </section>
  );
}
