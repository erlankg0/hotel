'use client';

import gsap from 'gsap';
import styles from './reservation.module.scss';

export function ReservationInfo() {
  const setCard = (el: HTMLDivElement | null) => {
    if (!el) return;

    gsap.fromTo(
      el.children,
      {
        y: 20,
        opacity: 0,
        filter: 'blur(6px)',
      },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      }
    );
  };

  return (
    <div className={styles.card} ref={setCard}>
      <h4 className={styles.title}>Бронирование</h4>

      <div className={styles.item}>
        <div>
          <div className={styles.label}>Внутренняя связь</div>
          <div className={styles.value}>7075</div>
        </div>
      </div>

      <div className={styles.item}>
        <div>
          <div className={styles.label}>Email</div>
          <a
            href="mailto:guest@utopiaworld.com.tr"
            className={styles.email}
          >
            guest@utopiaworld.com.tr
          </a>
        </div>
      </div>
    </div>
  );
}
