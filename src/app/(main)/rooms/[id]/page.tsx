import { Gallery } from '@/widget/gallery';

import styles from './page.module.scss';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <section className={styles.section}>
      <Gallery />
      <h2>Стандартный номер в виллах {id}</h2>
      <ul></ul>
    </section>
  );
}