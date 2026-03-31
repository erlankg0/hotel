'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ReviewItem } from '@/entities/review-rating';
import { Contact, useContact } from '@/features/contact';
import { Button } from '@/shared/ui/button';
import { Modal } from '@/shared/ui/modal';
import { Separator } from '@/shared/ui/separator';

import styles from './styles.module.scss';

const NAV_SECTIONS = [
  {
    title: 'Отель',
    links: [
      { label: 'О курорте', href: '/' },
      { label: 'Номера', href: '/rooms' },
      { label: 'Факты и сервисы', href: '/factsheet' },
    ],
  },
  {
    title: 'Впечатления',
    links: [
      { label: 'Рестораны', href: '/food' },
      { label: 'Пляж', href: '/beach' },
      { label: 'Спорт', href: '/sport' },
      { label: 'Развлечения', href: '/entertainment' },
    ],
  },
  {
    title: 'Семейный отдых',
    links: [
      { label: 'Детский клуб', href: '/kids' },
      { label: 'Забронировать', href: '/book/book' },
    ],
  },
] as const;

export function Footer() {
  const { isOpen, setIsOpen } = useContact();

  return (
    <footer className={styles.footer} id={'footer'}>
      <div className={styles.footer__backdrop} aria-hidden>
        <div className={styles.footer__sky} />
        <div className={styles.footer__mist} />
        <div className={styles.footer__ridge} />
        <div className={styles.footer__forest} />
      </div>

      <section className={styles.footer__inner}>
        <article className={styles.footer__top}>
          <div className={styles.footer__reviews_head}>
            <p className={styles.footer__eyebrow}>Отзывы гостей</p>
            <div className={styles.footer__reviews_meta}>
              <span>Независимые площадки</span>
              <span>5 источников</span>
            </div>
          </div>

          <ul className={styles.footer__reviews}>
            <li><ReviewItem source="Google" review_count={5000} maxRating={5} rating={4.7} /></li>
            <li><ReviewItem source="Yandex" review_count={1500} maxRating={5} rating={5} /></li>
            <li><ReviewItem source="Top Hotel's" review_count={8000} maxRating={5} rating={4.7} /></li>
            <li><ReviewItem source="Booking" review_count={1256} maxRating={9} rating={9.1} /></li>
          </ul>

          <Separator className={styles.footer__separator} />
        </article>

        <div className={styles.footer__content}>
          <div className={styles.footer__brand}>
            <Link href="/" className={styles.footer__brand_mark} aria-label="На главную">
              <Image src="/images/logo.svg" alt="Utopia World" width={72} height={72} />
            </Link>

            <div className={styles.footer__brand_copy}>
              <p className={styles.footer__brand_label}>Лесной курорт на склоне</p>
              <p className={styles.footer__brand_text}>
                Отель, утопающий в соснах над морем: тишина горного воздуха, приватная атмосфера
                и мягкий сервис, который ощущается естественно в каждой детали.
              </p>
            </div>

            <div className={styles.footer__cta}>
              <Button
                type="button"
                variant="blur"
                size="lg"
                className={`${styles.footer__button} ${styles.footer__button_primary}`}
                onClick={setIsOpen}
              >
                Связаться с отелем
              </Button>

              <Button
                asChild
                variant="blur"
                size="lg"
                className={`${styles.footer__button} ${styles.footer__button_secondary}`}
              >
                <Link href="/book/book">Забронировать</Link>
              </Button>
            </div>
          </div>

          <div className={styles.footer__nav}>
            {NAV_SECTIONS.map((section) => (
              <nav key={section.title} className={styles.footer__column}>
                <h4>{section.title}</h4>
                {section.links.map((link) => (
                  <Link key={link.label} href={link.href}>{link.label}</Link>
                ))}
              </nav>
            ))}
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <p>© 2026 Utopia World Hotel</p>
          <p>Аланья · Средиземноморское побережье</p>
          <Link href="/">Главная страница</Link>
        </div>

        <div className={styles.footer__signature}>
          <span>Премиальный сервис</span>
          <span>Приватный комфорт</span>
          <span>Отдых без суеты</span>
        </div>
      </section>

      <Modal content={<Contact />} isOpen={isOpen} onClose={setIsOpen} />
    </footer>
  );
}
