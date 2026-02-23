import { Bed, LucideBath, Scan, SunMoon } from 'lucide-react';

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
      <h2 className={styles.title}>Стандартный номер в виллах {id}</h2>
      <ul className={styles.list}>
        {FEATURES.map(({ label, Icon }) => (
          <li key={label} className={styles.list_item}>
            <p>{label}</p>
            <Icon size={18} />
          </li>
        ))}
      </ul>
      <Separator />
      <section>
        <h2 className={styles.title}>About the Property</h2>
        <article>
          <p>Почувствуйте средиземноморский бриз в своей душе в номере виллы.</p>
          <p>Благодаря широкому балкону вы можете ощутить максимальный комфорт в нашем просторном номере, погрузившись в
            поток уникального вида от зеленого до синего.</p>
          <ul className={styles.list}>
            {PROPERTY_INFO.map(({ title, value }) => (
              <li key={title}>
                <p>{title}</p>
                <p>{value}</p>
              </li>
            ))}
          </ul>
        </article>


      </section>
    </section>
  );
}