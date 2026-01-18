import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { SiWhatsapp } from 'react-icons/si';

import styles from './styles.module.scss';

export function HotelContact() {
  return (
    <article className={styles.contact}>
      <h2 className={styles.contact__title}>Связаться с нами</h2>
      <p className={styles.contact__subtitle}>
        Наша команда готова ответить на все ваши вопросы
      </p>

      <div className={styles.contact__grid}>
        <Link
          href="tel:+902425262222"
          aria-label="Позвонить в Utopia World"
          className={styles.contact__card}
        >
          <div className={styles.contact__card__icon}>
            <Phone size={20} />
          </div>
          <div className={styles.contact__content}>
            <span className={styles.contact__label}>Телефон</span>
            <span className={styles.contact__value}>+90 (242) 526 22 22</span>
          </div>
        </Link>

        <Link
          href="https://wa.me/905336508164"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Написать в WhatsApp Utopia World"
          className={styles.contact__card}
        >
          <div className={`${styles.contact__card__icon} ${styles.whatsapp}`}>
            <SiWhatsapp size={20} color={'green'} />
          </div>
          <div className={styles.contact__content}>
            <span className={styles.contact__label}>WhatsApp</span>
            <span className={styles.contact__value}>+90 533 650 81 64</span>
          </div>
        </Link>

        <Link
          href="mailto:sales@utopiaworld.com.tr"
          aria-label="Написать письмо в Utopia World"
          className={styles.contact__card}
        >
          <div className={styles.contact__card__icon}>
            <Mail size={20} />
          </div>
          <div className={styles.contact__content}>
            <span className={styles.contact__label}>Email</span>
            <span className={styles.contact__value}>sales@utopiaworld.com.tr</span>
          </div>
        </Link>
      </div>
    </article>
  );
}