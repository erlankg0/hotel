import { Text } from '@/shared/ui/text';

import styles from './layout.module.scss';
import {
  Tabs,
  TabsContent,
  TabsTrigger,
  TabsList,
} from '@/shared/ui/tabs';
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
    category: 'Розовые вина',
    subcategories: [{
      category: 'Сухие',
      wines: [
        { title: 'Trio / Shiraz, Karası, Cabernet Sauvignon', value: '75 cl' },
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
];


export default function RestaurantLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      {children}
      <section className={'container'}>
        <div className={styles.header}>
          <p className={styles.header__text}>
            Коллекция вин · à la carte
          </p>
          <h2 className={styles.header__title}>
            Вино<em>тека</em>
          </h2>
        </div>
        <Tabs>
          <TabsList>
            <TabsTrigger value={'white'}>Белые</TabsTrigger>
            <TabsTrigger value={'rose'}>Розовые</TabsTrigger>
            <TabsTrigger value={'red'}>Красные</TabsTrigger>
          </TabsList>
        </Tabs>
      </section>
    </section>
  );
}