import { cn } from '@/shared/lib/utils';
import { Grid } from '@/shared/ui/grid';
import { ImageUI } from '@/shared/ui/image';
import { Hero } from '@/widget/hero';

import styles from './page.module.scss';

export default async function Page() {
  return (
    <section className={cn('panel', styles.page)}>
      <Hero
        preTitle={'Аквапарк'}
        subtitle={'Веселье и умиротворение вместе в сердце природы\n.'}
        title={['Горки', 'Рафтинг', 'Снэк Бар', 'Детский аквапарк', 'Бассейн с водопадом', 'Бассейн', 'Бар']}
        video={'https://cdn.utopiahotels.com/assets/videos/covers/uw-aqua.mp4'}
        poster={'https://cdn.utopiahotels.com/assets/images/pages/001kaydirakmodal-lg.webp'}
      />
      <article className={styles.info}>
        <h2>
          Добро пожаловать в Аквапарк Utopia World — настоящий оазис веселья и релаксации среди величественного
          соснового леса!
        </h2>
      </article>
      <div className={styles.grid}>
        <Grid size={4}>
          <div
            style={{
              gridColumn: 'span 2',
              gridRow: 'span 2',
            }}
            className={styles.grid__card}
          >
            <ImageUI src={'/images/pool.jpg'} alt="Tuğra Restaurant" aspectRatio={'1 / 1'} />
            <p className={styles.grid__card_text}>Text</p>
          </div>

          <div className={styles.grid__card}>
            <ImageUI src={'/images/tuam.jpg'} alt="White Lounge" aspectRatio={'1 / 1'} />
            <p className={styles.grid__card_text}>Text</p>

          </div>
          <div className={styles.grid__card}>
            <ImageUI src={'/images/beach.webp'} alt="Laguna Bar" aspectRatio={'1 / 1'} />
            <p className={styles.grid__card_text}>Text</p>

          </div>
          <div className={styles.grid__card}>
            <ImageUI src={'/images/tugra.webp'} alt="Desserts" aspectRatio={'1 / 1'} />
            <p className={styles.grid__card_text}>Text</p>
          </div>

          <div className={styles.grid__card} style={{ gridColumn: 'span 2' }}>
            <ImageUI src={'/images/beach.webp'} alt="Cocktails" aspectRatio={'2 / 1'} />
            <p className={styles.grid__card_text}>Text</p>
          </div>
        </Grid>
      </div>

    </section>
  );
}