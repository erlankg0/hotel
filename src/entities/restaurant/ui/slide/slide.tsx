import Link from 'next/link';

import { FullVideo } from '@/widget/full-video';

import styles from './styles.module.scss';

type Props = {
  url: string;
  title: string;
  description: string;
  video?: boolean;
};

export function RestaurantSlide({ url, title, description, video }: Props) {
  return (
    <article className={styles.card}>
      {video ? (
        <FullVideo url={url} />
      ) : (
        <div
          className={styles.bg}
          style={{ backgroundImage: `url(${url})` }}
        />
      )}

      <div className={styles.overlay} />

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      <Link
        href={`/restaurant/${encodeURIComponent(title)}`}
        className={styles.link}
      >
        Подробнее
      </Link>
    </article>
  );
}
