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
          <article className={styles.card} style={{ gridRow: 'span 2', gridColumn: 'span 2' }}>
            <ImageHover
              hasVideo
              images={{
                url: '/images/party.webp',
                alt: 'Шоу центр',
              }}
              video={{ url: '/video/FIRESHOW.MOV', alt: 'Шоу Центр' }}
              aspectRatio={'2 / 1'}
            />
            <div className={styles.card__content}>
              <header className={styles.card__text}>
                <h2 className={styles.card__title}>Концерты</h2>
                <p>Где вы можете добавить красок к своим вечерам и освежить свою любовь к различными мероприятиями</p>
              </header>
            </div>
          </article>
          <article className={styles.card} style={{ gridRow: 'span 2', gridColumn: 'span 2' }}>
            <ImageHover
              hasVideo
              images={{
                url: '/images/turkish.webp',
                alt: 'Турецкая ночь',
              }}
              video={{ url: '/video/FASIL.mp4', alt: 'After Шоу' }}
              aspectRatio={'2 / 1'}
            />
            <div className={styles.card__content}>
              <header className={styles.card__text}>
                <h2 className={styles.card__title}>Турецкая ночь</h2>
                <p>Вы можете насладиться разными моментами с &#39;Sıra gecesi&#39; один из важный событий турецкой
                  культуры</p>
              </header>
            </div>
          </article>
          <article className={styles.card} style={{ gridRow: 'span 2', gridColumn: 'span 2' }}>
            <ImageHover
              hasVideo
              images={{
                url: '/images/after.webp',
                alt: 'After шоу',
              }}
              video={{ url: '/video/AFTER.mp4', alt: 'After Шоу' }}
              aspectRatio={'2 / 1'}
            />
            <div className={styles.card__content}>
              <header className={styles.card__text}>
                <h2 className={styles.card__title}>After шоу</h2>
                <p>Не забываемые вечера после шоу, с живой музыкой.</p>
              </header>
            </div>
          </article>
          <article className={styles.card} style={{ gridRow: 'span 2', gridColumn: 'span 2' }}>
            <ImageHover
              hasVideo
              images={{
                url: '/images/theme.webp',
                alt: 'Тематические развлечения',
              }}
              aspectRatio={'2 / 1'}
              video={{ url: '/video/OCTOBER.mp4', alt: 'After Шоу' }}
            />
            <div className={styles.card__content}>
              <header className={styles.card__text}>
                <h2 className={styles.card__title}>Тематические развлечения</h2>
                <p>Вы стать свидетелем различных тематические мероприятии.</p>
              </header>
            </div>
          </article>
        </Grid>
      </section>
    </section>
  );
}