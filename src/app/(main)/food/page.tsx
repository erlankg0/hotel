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
          <article
            style={{
              gridColumn: 'span 2',
              gridRow: 'span 2',
            }}
            className={styles.grid__card}
          >
            <ImageUI src={'/images/pool.webp'} alt="Tuğra Restaurant" aspectRatio={'1 / 1'} />
            <div className={styles.info}>
              <h3 className={styles.info__title}>Бар у бассейна</h3>
              <p>Если вы хотите перекусить или выпить что-нибудь наслаждаясь бассейном, рядом с вами находится бар у
                бассейна с его богатым выбором напитков.</p>
            </div>
          </article>

          <article className={styles.grid__card}>
            <ImageUI src={'/images/tuam.webp'} alt="White Lounge" aspectRatio={'1 / 1'} />
            <div className={styles.info}>
              <h3 className={styles.info__title}>Tuam</h3>
            </div>

          </article>
          <article className={styles.grid__card}>
            <ImageUI src={'https://cdn.utopiahotels.com/assets/images/pages/0008beachbar-lg.webp'} alt="Laguna Bar"
                     aspectRatio={'1 / 1'} />
            <div className={styles.info}>
              <h3 className={styles.info__title} >Пляжный Бар</h3>
            </div>

          </article>
          <article className={styles.grid__card}>
            <ImageUI src={'/images/tugra.webp'} alt="Desserts" aspectRatio={'1 / 1'} />
            <div className={styles.info}>
              <h3 className={styles.info__title}></h3>
              <p></p>
            </div>
          </article>

          <article className={styles.grid__card}>
            <ImageUI src={'/images/lobby.webp'} alt="Cocktails" aspectRatio={'1 / 1'} />
            <div className={styles.info}>
              <h3 className={styles.info__title}>Лобби Бар</h3>
            </div>
          </article>
          <article className={styles.grid__card} style={{ gridColumn: 'span 2' }}>
            <ImageUI src={'/images/laguna.webp'} alt="Cocktails" aspectRatio={'2 / 1'} />
            <div className={styles.info}>
              <h3 className={styles.info__title}>Лагуна бар</h3>
              <p>Где собраны самые вкусные напитки мира Utopia World.</p>
            </div>
          </article>
        </Grid>
      </div>
    </section>
  );
}