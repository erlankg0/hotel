import { cn } from '@/shared/lib/utils';
import {
  Tabs,
  TabsContent,
  TabsTrigger,
  TabsList,
} from '@/shared/ui/tabs';

import styles from './layout.module.scss';


import type { ReactNode } from 'react';

type Wine = {
  title: string,
  value: string,

}
type WinesType = {
  category: string;
  subcategories: {
    category: string;
    wines: Wine[];
  }[]
}

const wines: WinesType[] = [
  {
    category: 'Белые вина',
    subcategories: [{
      category: 'Сухие',
      wines: [
        { title: 'Trio / Chardonnay, Narince, Sultaniye', value: '75 cl' },
        { title: 'Trio / Chardonnay, Narince, Sultaniye', value: '37,5 cl' },
        { title: 'Anfora Chardonnay', value: '75 cl' },
        { title: ' Chardonnay Reserve', value: '75 cl' },
        { title: ' Çankaya', value: '75 cl' },
        { title: ' Dolunca Sarafın Chardonnay', value: '75 cl' },
        { title: ' Dolunca Sarafın Sauvignon Blanc', value: '75 cl' },
      ],
    },
      {
        category: 'Полусухие',
        wines: [
          { title: 'Senfoni', value: '75 cl' },
        ],
      },
      {
        category: 'Сладкие',
        wines: [
          { title: 'Senfoni', value: '75 cl' },
        ],
      },
      {
        category: 'Сладкие',
        wines: [
          { title: 'Senfoni', value: '75 cl' },
        ],
      },
    ],
  },
  {
    category: 'Красные вина',
    subcategories: [{
      category: 'Сухие',
      wines: [
        { title: 'Trio / Shiraz, Karası, Cabernet Sauvignon', value: '75 cl' },
        { title: 'Trio / Shiraz, Karası, Cabernet Sauvignon', value: '37,5 cl' },
        { title: 'Anfora Shiraz', value: '75 cl' },
        { title: 'Shiraz Rezerve', value: '75 cl' },
        { title: 'Anfora Kalecik karası', value: '75 cl' },
        { title: 'Anfora Mertol', value: '75 cl' },
        { title: 'Anfora Öközgüzü, Boğazkere', value: '75 cl' },
        { title: 'Anfora Cabarnet Sauvignon', value: '75 cl' },
        { title: 'Yakut', value: '75 cl' },
        { title: 'Doluca Sarafın Cabernen Sauvignon', value: '75 cl' },
        { title: 'Doluca Sarafın Mertol', value: '75 cl' },
      ],
    },
      {
        category: 'Сладкие',
        wines: [
          { title: 'Senfoni', value: '75 cl' },
        ],
      },
      {
        category: 'Игристые вина',
        wines: [
          { title: 'Anfore Gold', value: '75 cl' },
          { title: 'Henkell Trocken', value: '75 cl' },
        ],
      },
    ],
  },
  {
    category: 'Розовые вина',
    subcategories: [{
      category: 'Сухие',
      wines: [
        { title: 'Trio / Shiraz, Karası, Cabernet Sauvignon', value: '75 cl' },
      ],
    },
    ],
  },
];


const tabMap: Record<string, string> = {
  'Белые вина': 'white',
  'Розовые вина': 'rose',
  'Красные вина': 'red',
};

const dotMap: Record<string, string> = {
  white: styles.dot_white,
  rose: styles.dot_rose,
  red: styles.dot_red,
};

const RESTAURANT_DETAILS = [
  {
    title: 'Часы работы',
    lines: ['Ужин (А ля карт)', '19:00 - 21:00', 'Требуется резервация.'],
  },
  {
    title: 'Бронирование',
    lines: ['Внутренняя Связь 7075', 'guest@utopiaworld.com.tr'],
  },
  {
    title: 'Стиль одежды',
    lines: ['Следует отдавать предпочтение одежде в стиле смарт-кэжуал.'],
  },
  {
    title: 'Примечание',
    lines: ['Предоставляет услуги за дополнительную плату и по предварительному бронированию.'],
  },
] as const;


export default function RestaurantLayout({
                                           children,
                                         }: {
  children: ReactNode;
}) {
  return (
    <section>
      {children}

      <section className="container">
        <div className={styles.header}>
          <p className={styles.header__text}>
            Коллекция вин · à la carte
          </p>
          <h2 className={styles.header__title}>
            Вино<em>тека</em>
          </h2>
        </div>

        <Tabs defaultValue="white">
          {/* ✅ Tabs List */}
          <TabsList className={styles.tablist}>
            {wines.map((wine) => {
              const value = tabMap[wine.category];

              return (
                <TabsTrigger
                  key={value}
                  value={value}
                  className={styles.tablist__item}
                >
                  <div className={cn(styles.dot, dotMap[value])} />
                  <p>{wine.category.replace(' вина', '')}</p>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {wines.map((wine) => {
            const value = tabMap[wine.category];

            return (
              <TabsContent key={value} value={value}>
                {wine.subcategories.map((sub, i) => (
                  <article key={i} className={styles.sub}>
                    <header className={styles.sub__header}>
                      <span className={styles.sub__label}>
                        {sub.category}
                      </span>
                      <span className={styles.sub__rule} />
                    </header>

                    <ul className={styles.wines}>
                      {sub.wines.map((item, idx) => (
                        <li key={idx} className={styles.wines__row}>
                          <span className={styles.wines__name}>
                            {item.title}
                          </span>
                          <span className={styles.wines__rule} />
                          <span className={styles.wines__vol}>
                            {item.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </TabsContent>
            );
          })}
        </Tabs>
      </section>
      <section className={'container'} aria-label={'Информация о ресторане'}>
        <div className={styles.notes}>
          <header className={styles.notes__header}>
            <span className={styles.notes__label}>Полезная информация</span>
            <span className={styles.notes__rule} />
          </header>

          <div className={styles.notes__grid}>
            {RESTAURANT_DETAILS.map((item) => (
              <article key={item.title} className={styles.notes__item}>
                <h3 className={styles.notes__title}>{item.title}</h3>
                <div className={styles.notes__content}>
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}