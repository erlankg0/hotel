import { Bed, LucideBath, Scan, SunMoon, Wifi, Tv } from 'lucide-react';

import { Balcony, Tree, Safe, Coffee, Air, Minibar} from '@/shared/icons';
import { Separator } from '@/shared/ui/separator';
import { Gallery } from '@/widget/gallery';


import styles from './page.module.scss';

const FEATURES = [
  { label: '1', Icon: Bed },
  { label: '1', Icon: LucideBath },
  { label: '30 м²', Icon: Scan },
  { label: 'Вид', Icon: SunMoon },
];

const PROPERTY_INFO = [
  { title: 'Тип', value: 'Бунгало' },
  { title: 'Этажность', value: '3–4 этажа' },
  { title: 'Последняя реновация', value: '2025 год' },
];

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <section className={styles.section}>
      <Gallery />
      <article className={styles.col}>
        <h2 className={styles.title}>Стандартный номер в виллах</h2>
        <p>Почувствуйте средиземноморский бриз в своей душе в номере виллы.</p>
        <p>Благодаря широкому балкону вы можете ощутить максимальный комфорт в нашем просторном номере, погрузившись в
          поток уникального вида от зеленого до синего.</p>

      </article>

      <Separator />
      <article>
        <h3>Удобства</h3>
        <ul>
          <li>
            <Balcony size={16} />
          </li>
          <li>
            <Tree size={16} />
          </li>
          <li>
            <Wifi size={16} />
          </li>
          <li>
            <Safe size={16} />
          </li>
          <li>
            <Coffee size={16} />
          </li>
          <li>
            <Minibar size={16} />
          </li>
          <li>
            <Tv size={16} />
          </li>
          <li>
            <Minibar size={16} />
          </li>
          <li>
            <Iron size={16} />
          </li>
        </ul>
      </article>
    </section>
  );
}