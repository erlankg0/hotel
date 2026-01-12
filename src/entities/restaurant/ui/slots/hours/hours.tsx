'use client';

import gsap from 'gsap';

import styles from './hours.module.scss';

export function Hours() {
  const setHours = (el: HTMLDivElement | null) => {
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
    <div className={styles.hours} ref={setHours}>
      <h4 className={styles.title}>Часы работы</h4>

      <p className={styles.type}>
        Ужин <span>(A la carte)</span>
      </p>

      <p className={styles.time}>19:00 – 21:00</p>

      <p className={styles.note}>Требуется резервация</p>
    </div>
  );
}
