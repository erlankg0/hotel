import { Gallery } from '@/widget/gallery';

import styles from './page.module.scss';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = await params;
  return (
    <section className={styles.section}>
      Room Detail {id.id}
      <Gallery />
    </section>
  );
}