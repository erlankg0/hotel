import { cn } from '@/shared/lib/utils';
import { Hero } from '@/widget/hero';

import { Title } from '../ui/title';

const RESTAURANT = {
  subtitle: 'Итальянская кухня',
  video: 'https://cdn.utopiahotels.com/assets/videos/covers/uw-lamonte.webp',
  poster: 'https://cdn.utopiahotels.com/assets/images/pages/lamontekapak0123-lg.jpg',
};

export default function Page() {
  return (
    <section className={cn('page', 'panel')}>
      <Hero
        {...RESTAURANT}
        slot={<Title title={'La Mounte'} />}
      />
    </section>
  );
}