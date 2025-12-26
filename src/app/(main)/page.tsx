import { FullVideo } from '@/widget/full-video';
import { Header } from '@/widget/header';

import styles from './page.module.scss';

export default function Page() {
  return (
    <section className={styles.hero}>
      <Header />
      <FullVideo url={'/video/utopia.mp4'} />

      <div className={styles.overlay} />

      <div className={styles.content}>
        <p>Alanya, Kargıcak</p>
        <h1>Utopia World SPA Resort</h1>
      </div>
    </section>
  );
}
