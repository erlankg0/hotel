import { HERO_ENTERTAINMENT, GRID_ENTERTAINMENT } from '@/entities/entertainment';
import { cn } from '@/shared/lib/utils';
import { Grid } from '@/shared/ui/grid';
import { ImageHover } from '@/shared/ui/image-hover';
import { Hero } from '@/widget/hero';

import styles from './page.module.scss';

export default async function Page() {
  return (
    <section className={cn('panel', 'page')}>
      <Hero {...HERO_ENTERTAINMENT} />
      <article className={'info'}>
        <h2>Погрузитесь в ритм веселья</h2>
      </article>
      <section className={'px-12 mb-12'}>
        <Grid size={4}>
          {GRID_ENTERTAINMENT.map((item) => (
            <article
              key={item.title}
              className={styles.card}
              style={{ gridRow: `${item.gridRow}`, gridColumn: `${item.gridColumn}` }}>
              <ImageHover
                hasVideo
                images={{
                  ...item.images,
                }}
                video={{ ...item.video }}
                aspectRatio={item.aspectRatio}
              />
              <div className={styles.card__content}>
                <header className={styles.card__text}>
                  <h2 className={styles.card__title}>{item.title}</h2>
                  <p>{item.text}</p>
                </header>
              </div>
            </article>
          ))}
        </Grid>
      </section>
    </section>
  );
}