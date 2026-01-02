import { FullVideo } from '@/widget/full-video';
import { Header } from '@/widget/header';
import { PriceRequestForm } from '@/widget/price-request-form';

import styles from './page.module.scss';

export default function Page() {
  return (
    <section className={styles.hero}>
      <Header />
      <FullVideo url={'/video/utopia.mp4'} />

      <div className={styles.overlay} />

      <article className={styles.content}>
        <div className={styles.content__info}>
          <p className={styles.content__location}>Alanya, Kargıcak</p>
          <h1 className={styles.content__title}>Utopia World SPA Resort</h1>
        </div>
        <form className={styles.booking}>
          <PriceRequestForm />
        </form>
      </article>
    </section>
  );
}
