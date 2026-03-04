import { cn } from '@/shared/lib/utils';
import { Grid } from '@/shared/ui/grid';
import { ImageUI } from '@/shared/ui/image';
import { Hero } from '@/widget/hero';

import styles from './page.module.scss';

export default async function Page() {
  return (
    <section className={cn('panel', styles.page)}>
      <Hero
        preTitle={'Рестораны и бары'}
        subtitle={'Ваше путешествие к неожиданным вкусам продолжается в отеле Utopia World, где встречаются кухни разных культур.'}
        title={['Lobby bar', 'White Lounge', 'Laguna Bar', 'La Mounte', 'Pool Bar', 'Tuam', 'Beach Bar', 'Detox Bar', 'Relax Bar', 'Aqua Snack', 'Patisserie', 'Tuğra Restaurant']}
        video={'https://cdn.utopiahotels.com/assets/videos/covers/uw-rest.mp4'}
        poster={'/images/poster.jpg'}
      />

      <article className={styles.info}>
        <h2>Впечатляющая атмосфера Средиземноморья встречается с уникальными мировыми вкусами</h2>
      </article>
      <div className={styles.grid}>
        <Grid size={5}>
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

          <div className={styles.grid__card}>
            <ImageUI src={'/images/laguna.jpg'} alt="Cocktails" aspectRatio={'1 / 1'} />
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