'use client';

import { Marquee } from '@/shared/ui/marquee';

import { AWARDS } from '../model/const';

import styles from './styles.module.scss';

export function AwardsMarquee() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.subtitle}>Awards & Recognition</span>
        <h2 className={styles.title}>Наши награды</h2>
      </div>

      <Marquee>
        {AWARDS.map((award, index) => (
          <AwardCard key={index} {...award} />
        ))}
      </Marquee>
    </section>
  );
}

function AwardCard({
                     title,
                     organization,
                     year,
                   }: {
  title: string;
  organization: string;
  year: string;
}) {
  return (
    <div className={'flex flex-col gap-2 items-center justify-center'}>
      <span className="text-sm opacity-60">{organization}</span>
      <span className="font-medium">{title}</span>
      <span className="text-sm opacity-50">{year}</span>
    </div>
  );
}
