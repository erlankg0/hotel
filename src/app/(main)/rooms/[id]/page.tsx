import { Separator } from '@/shared/ui/separator';
import { Gallery } from '@/widget/gallery';

import styles from './page.module.scss';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <section className={styles.section}>
      <Gallery />
      <h2 className={styles.title}>Стандартный номер в виллах {id}</h2>
      <ul className={styles.row}>
        <li>1 Спальня</li>
        <li>1 С/у</li>
        <li>30 м²</li>
        <li>Вид на сад</li>
      </ul>
      <Separator />
    </section>
  );
}