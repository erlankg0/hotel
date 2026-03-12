import { HERO } from '@/entities/entertainment';
import { cn } from '@/shared/lib/utils';
import { Grid } from '@/shared/ui/grid';
import { ImageHover } from '@/shared/ui/image-hover';
import { Hero } from '@/widget/hero';

import styles from './page.module.scss';

export default async function Page() {
  return (
    <section className={cn('panel', 'page')}>
      <Hero {...HERO} />
      <article className={'info'}>
        <h2>Погрузитесь в ритм веселья</h2>
      </article>
      <section className={'px-12 mb-12'}>
        <Grid size={4}>
          <article className={styles.card}>
            <ImageHover
              hasVideo
              images={{
                url: 'https://cdn.utopiahotels.com/assets/images/pages/001Arenashowcenter-lg.jpg',
                alt: 'After шоу'
              }}
              video={{ url: '/AFTER.mp4', alt: 'After Шоу' }}
            />
          </article>
          <article className={styles.card}>
            <ImageHover
              hasVideo
              images={{
                url: 'https://cdn.utopiahotels.com/assets/images/pages/001Arenashowcenter-lg.jpg',
                alt: 'After шоу'
              }}
              video={{ url: '/AFTER.mp4', alt: 'After Шоу' }}
            />
          </article>
          <article className={styles.card}>
            <ImageHover
              hasVideo
              images={{
                url: 'https://cdn.utopiahotels.com/assets/images/pages/001Arenashowcenter-lg.jpg',
                alt: 'After шоу'
              }}
              video={{ url: '/AFTER.mp4', alt: 'After Шоу' }}
            />
          </article>
          <article className={styles.card}>
            <ImageHover
              hasVideo
              images={{
                url: 'https://cdn.utopiahotels.com/assets/images/pages/001Arenashowcenter-lg.jpg',
                alt: 'After шоу'
              }}
              video={{ url: '/AFTER.mp4', alt: 'After Шоу' }}
            />
          </article>
        </Grid>
      </section>
    </section>
  );
}