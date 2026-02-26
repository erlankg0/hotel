import Image from 'next/image';

import { Table, TableBody, TableCell, TableRow } from '@/shared/ui/table';

import styles from './page.module.scss';

const GENERALINFOLEFT: { label: string, value: string }[] = [
  {
    label: 'Категория Отеля',
    value: '5 *',
  },
  {
    label: 'Концепция',
    value: 'Ультра всё включено',
  },
  {
    label: 'Дата открытия',
    value: '29.06.2007',
  },
  {
    label: 'Последняя реновация',
    value: '11.04.2026',
  },
  {
    label: 'Период работы',
    value: '12.04.2026 - 31.10.2026',
  },
  {
    label: 'Общее количество номеров',
    value: '567',
  },
  {
    label: 'Площадь',
    value: '120.000 м²',
  },
  {
    label: 'Общее количество конференц-залов',
    value: '2',
  },
];
const GENERALINFORIGHT: { label: string, value: string }[] = [
  {
    label: 'Территория аквапарка',
    value: '15.000 м²',
  },
  {
    label: 'Пляж',
    value: 'Песчаный пляж (350 м) и 2 пирса',
  },
  {
    label: 'Открытые бассейны',
    value: '4224 м² (глубина 120 - 145 см)',
  },
  {
    label: 'Крытый бассейн',
    value: '75 м² (глубина 150 см)',
  },
  {
    label: 'Рестораны',
    value: '1 Главный ресторан, 3 ресторана A la carte, 3 ресторана-закусочных',
  },
  {
    label: 'Бары',
    value: '8 баров, 1 кондитерская',
  },
];
const CONTACT: { label: string, value: string }[] = [
  {
    label: 'Адрес',
    value: 'Kargıcak Mahallesi, Alanya/Antalya',
  },
  {
    label: 'Телефоны',
    value: '+90 242 526 22 22 - +90 242 526 28 28',
  },
  {
    label: 'Электронная почта',
    value: 'sales@utopiaworld.com.tr',
  },
  {
    label: 'Веб Сайт',
    value: 'utopiaworld.com',
  },
  {
    label: 'GPS координаты',
    value: '36.45073, 32.13228',
  },
  {
    label: 'Номера для инвалидов',
    value: '5',
  },
  {
    label: 'Расстояния',
    value: 'Алания 17 км, Анталия 155 км, Газипаша 21 км, Махмутлар 5 км',
  },
]

export default async function Page() {
  return (
    <section>
      <div className={styles.desktop}>
        <Image
          src="/images/hotel.jpg"
          alt="Вид на отель"
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        <article className={styles.content}>
          <p className={styles.content__title}>Utopia World Deluxe Hotel</p>
          <p className={styles.content__period}>Factsheet | 12 Апреля 2026 - 31 октября 2026</p>
        </article>
      </div>
      <section className={styles.info}>
        <h2 className={styles.info__title}>Общая Информация</h2>
        <div className={styles.grid}>
          <Table>
            <TableBody>
              {GENERALINFOLEFT.map((factsheet) => (
                <TableRow key={factsheet.label}>
                  <TableCell className="font-medium text-muted-foreground w-1/3">
                    {factsheet.label}
                  </TableCell>
                  <TableCell>
                    {factsheet.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              {GENERALINFORIGHT.map((factsheet) => (
                <TableRow key={factsheet.label}>
                  <TableCell className="font-medium text-muted-foreground w-1/3">
                    {factsheet.label}
                  </TableCell>
                  <TableCell>
                    {factsheet.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
      <section className={styles.info}>
        <h2 className={styles.info__title}>Контактная информация</h2>
        <div>
          <Table>
            <TableBody>
              {CONTACT.map((contact) => (
                <TableRow key={contact.label}>
                  <TableCell className="font-medium text-muted-foreground w-1/3">
                    {contact.label}
                  </TableCell>
                  <TableCell>
                    {contact.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              {CONTACT.map((contact) => (
                <TableRow key={contact.label}>
                  <TableCell className="font-medium text-muted-foreground w-1/3">
                    {contact.label}
                  </TableCell>
                  <TableCell>
                    {contact.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </section>
  );
}