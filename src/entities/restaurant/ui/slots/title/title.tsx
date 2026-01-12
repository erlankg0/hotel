'use client';

import gsap from 'gsap';

import styles from './title.module.scss';

export function RestorantTitle() {
  const setTitle = (el: HTMLHeadingElement | null) => {
    if (!el) return;

    gsap.fromTo(
      el,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
      }
    );
  };

  const setText = (el: HTMLParagraphElement | null) => {
    if (!el) return;

    gsap.fromTo(
      el,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
      }
    );
  };

  return (
    <div className={styles.text}>
      <h2 ref={setTitle}>Turkuaz Restaurant</h2>
      <p ref={setText}>
        Ресторан Turkuaz, где вы можете отведать различные рыбные меню, сопровождает ваши особые моменты во время вашего отпуска.
      </p>
    </div>
  );
}
