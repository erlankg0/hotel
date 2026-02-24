import { Bed, LucideBath, Tv, Wifi } from 'lucide-react';
import Link from 'next/link';

import { RoomCard, stda, stdv, junior } from '@/entities/room';
import { Air, Balcony, Coffee, Cosmetics, Iron, Minibar, Safe, Tree } from '@/shared/icons';
import { Separator } from '@/shared/ui/separator';
import { Gallery } from '@/widget/gallery';


import styles from './page.module.scss';

const FEATURES = [
  { label: 'Номера с видом на окрестности и море', Icon: Tree },
  { label: 'Номера с балконом', Icon: Balcony },
  { label: 'Система охлаждения с кондиционером', Icon: Air },
  { label: 'Доступ к Wi-Fi в номере', Icon: Wifi },
  { label: 'Ежедневно пополняемый мини-бар', Icon: Minibar },
  { label: 'Наборы в номере и ванной комнате', Icon: Cosmetics },
  { label: 'Набор чая и кофе', Icon: Coffee },
  { label: '32-дюймовый LED-телевизор с международными каналами', Icon: Tv },
  { label: 'Сейф', Icon: Safe },
  { label: 'Зеркало для макияжа', Icon: Cosmetics },
];

const REQUEST = [
  { label: 'Детская кроватка', Icon: Bed },
  { label: 'Набор постельного белья', Icon: LucideBath },
  { label: 'Комплект из одеял', Icon: Cosmetics },
  { label: 'Детская ванночка', Icon: Cosmetics },
  { label: 'Детская горшок', Icon: Cosmetics },
  { label: 'Утюг', Icon: Iron },
];

const PROPERTY_INFO = [
  { title: 'Тип', value: 'Бунгало' },
  { title: 'Этажность', value: '3–4 этажа' },
  { title: 'Реновация', value: '2025 год' },
  { title: 'Площадь', value: '30 м²' },
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
      <div className={'flex flex-col gap-4 my-8'}>
        <article>
          <h3 className={styles.title}>Об номере</h3>
          <ul className={styles.property}>
            {PROPERTY_INFO.map((feature) => {
              return (
                <li key={feature.title} className={styles.property__item}>
                  <p>{feature.title}</p>
                  <p>{feature.value}</p>
                </li>
              );
            })}
          </ul>
        </article>
        <article className={styles.info}>
          <h3 className={styles.title}>Удобства</h3>
          <ul className={styles.info_grid}>
            {FEATURES.map((feature) => {
              const Icon = feature.Icon;
              return (
                <li key={feature.label} className={styles.info__item}>
                  <Icon size={18} className={styles.info__icon} />
                  <p>{feature.label}</p>
                </li>
              );
            })}
          </ul>
        </article>
        <article className={styles.info}>
          <h3 className={styles.title}>По запросу</h3>
          <ul className={styles.info_grid}>
            {REQUEST.map((feature) => {
              const Icon = feature.Icon;
              return (
                <li key={feature.label} className={styles.info__item}>
                  <Icon size={18} className={styles.info__icon} />
                  <p>{feature.label}</p>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
      <div className={styles.other}>
        <h3 className={styles.title}>Ищете другие варианты ?</h3>
        <div className={styles.other__list}>
          <Link href={'/rooms/3'} className={styles.other__card}>
            <RoomCard images={stda.media[2].images} hasVideo={true} video={stda.media[2].video} />
            <p className={styles.other__card__title}>{stda.title}</p>
          </Link>
          <Link href={'/rooms/3'} className={styles.other__card}>
            <RoomCard images={stdv.media[2].images} hasVideo={true} video={stdv.media[2].video} />
            <p className={styles.other__card__title}>{stdv.title}</p>
          </Link>
          <Link href={'/rooms/3'} className={styles.other__card}>
            <RoomCard images={junior.media[2].images} hasVideo={true} video={junior.media[2].video} />
            <p className={styles.other__card__title}>{junior.title}</p>
          </Link>
        </div>
      </div>
    </section>
  );
}