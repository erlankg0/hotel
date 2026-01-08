import Image from 'next/image';
import Link from 'next/link';

import { ReviewItem, ReviewList } from '@/entities/review-rating';
import { Separator } from '@/shared/ui/separator';

import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__inner}>
        {/* REVIEWS */}
        <article className={styles.footer__top}>
          <ul className={styles.footer__reviews}>
            <li><ReviewList /></li>

            <li>
              <ReviewItem source="Google" review_count={5000} maxRating={5} rating={4.7} />
            </li>

            <li>
              <ReviewItem source="Yandex" review_count={1500} maxRating={5} rating={5} />
            </li>

            <li>
              <ReviewItem source="Top Hotel's" review_count={8000} maxRating={5} rating={4.7} />
            </li>

            <li>
              <ReviewItem source="Booking" review_count={1256} maxRating={9} rating={9.1} />
            </li>
          </ul>

          <Separator className={styles.footer__separator} />
        </article>

        {/* NAVIGATION */}
        <div className={styles.footer__content}>
          <div className={styles.footer__nav}>
            <nav>
              <h4>Hotel</h4>
              <Link href="/">About</Link>
              <Link href="/">Rooms</Link>
              <Link href="/">Suites</Link>
            </nav>

            <nav>
              <h4>Services</h4>
              <Link href="/">Spa</Link>
              <Link href="/">Restaurant</Link>
              <Link href="/">Activities</Link>
            </nav>

            <nav>
              <h4>Information</h4>
              <Link href="/">Contacts</Link>
              <Link href="/">Location</Link>
              <Link href="/">FAQ</Link>
            </nav>

            <nav>
              <h4>Legal</h4>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms</Link>
            </nav>
          </div>

          {/* BRAND */}
          <div className={styles.footer__brand}>
            <Link href="/">
              <Image src="/images/logo.svg" alt="Utopia World" width={72} height={72} />
            </Link>
            <p>© 2026 Utopia World Hotel</p>
          </div>
        </div>
      </section>
    </footer>
  );
}