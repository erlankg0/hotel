import { Plane, ChessRook, Binoculars, Info } from 'lucide-react';

import { cn } from '@/shared/lib/utils';
import { Text } from '@/shared/ui/text';

import styles from './styles.module.scss';

export function Places() {
  return (
    <section className={cn('container', styles.place)}>
      <Text tag={'h2'} variant={'title'}>Окружающая среда и расположение</Text>
      <div className={styles.place__inner}>

        <article className={styles.card}>
          <header className={styles.card__header}>
            <Plane size={16} />
            <p>Транспорт</p>
          </header>
          <ol className={styles.card__list}>
            <li className={styles.card__item}>
              <p>Аэропорт Газипаша</p>
              <p>20 км</p>
            </li>
            <li className={styles.card__item}>
              <p>Аэропорт Анталии</p>
              <p>155 км</p>
            </li>
            <li className={styles.card__item}>
              <p>Автобусная остановка</p>
              <p>1 км</p>
            </li>
            <li className={styles.card__item}>
              <p>Махмутлар центр</p>
              <p>5 км</p>
            </li>
            <li className={styles.card__item}>
              <p>ТЦ Akdeniz</p>
              <p>5 км</p>
            </li>
          </ol>
        </article>

        <article className={styles.card}>
          <header className={styles.card__header}>
            <ChessRook size={16} />
            <p>Исторические места</p>
          </header>
          <ol className={styles.card__list}>
            <li className={styles.card__item}>
              <p>Крепость Алании</p>
              <p>15.2 км</p>
            </li>
            <li className={styles.card__item}>
              <p>Syedra Antik Kenti</p>
              <p>4.2 км</p>
            </li>
            <li className={styles.card__item}>
              <p>Исторический мост Dim Çayı Köprüsü</p>
              <p>9.1 км</p>
            </li>
            <li className={styles.card__item}>
              <p>Eşmeli Konak</p>
              <p>14.2 км</p>
            </li>
            <li className={styles.card__item}>
              <p>Дом Ата-Тюрка</p>
              <p>12.1 км</p>
            </li>

          </ol>
        </article>

        <article className={styles.card}>
          <header className={styles.card__header}>
            <Binoculars size={24} />
            <p>Окресноти</p>
          </header>
          <ol className={styles.card__list}>
            <li className={styles.card__item}>
              <p>Пещера Dim</p>
              <p>18.3 км</p>
            </li>
            <li className={styles.card__item}>
              <p>Водапад Dim Çayı</p>
              <p>10.9 км</p>
            </li>
            <li className={styles.card__item}>
              <p>Замок Kızılcaşehir</p>
              <p>22.2 км</p>
            </li>
            <li className={styles.card__item}>
              <p>Гробница Akşebe</p>
              <p>15.2 км</p>
            </li>
          </ol>
        </article>
      </div>
      <article className={styles.place__info}>
        <Info size={12} />
        <p>
          Указанные расстояния рассчитываются по прямой, и фактические расстояния могут варьироваться.
        </p>
      </article>
    </section>
  );
}