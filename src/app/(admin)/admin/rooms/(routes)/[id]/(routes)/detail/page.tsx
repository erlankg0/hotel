'use client';

import { Info, Pencil, Sparkles, Image, Plus } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// import { useRoomQuery } from '@/entities/room';

import { UpdateForm } from '@/features/room';
import { Button } from '@/shared/ui/button';
import { Text } from '@/shared/ui/text';
import { Page } from '@/widget/page';

import styles from './page.module.scss';

const navLinks = [
  {
    icon: Info,
    text: 'Основная информация',
  },
  {
    icon: Pencil,
    text: 'Описания',
  },
  {
    icon: Sparkles,
    text: 'Удобства',
  },
  {
    icon: Image,
    text: 'Фотографии',
  },
  {
    icon: Plus,
    text: 'Дополнительно',
  },
];

export default function RoomDetail() {
  const { id } = useParams<{ id: string }>();
  // const { isLoading, data, error } = useRoomQuery(id);
  return (
    <Page>
      <section>
        <div className={styles.header}>
          <div className={styles.header__text}>
            <Text variant={'title'} tag={'h3'} className={styles.header__title}>Редактирования номера</Text>
            <Text tag={'p'} variant={'kicker'}>Обновите информацию о номере и его удобствах</Text>
          </div>
          <div>
            <Button type={'button'}>
              Сохранить изменения
            </Button>
          </div>
        </div>
      </section>
      <section className={styles.content}>
        <nav aria-label={'navigation by section'}>
          {navLinks.map((link, index) => {
            const Icon = link.icon;
            return (<Link href="#" className={styles.link} key={index}>
              <Icon />
              <p>{link.text}</p>
            </Link>);
          })}

        </nav>
        <UpdateForm />
        <div>3</div>
      </section>
    </Page>
  );
}