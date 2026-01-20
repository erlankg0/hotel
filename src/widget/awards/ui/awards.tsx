'use client';
import { Marquee } from '@/shared/ui/marquee';
import { Text } from '@/shared/ui/text';

import { AWARDS } from '../model/const';

import styles from './styles.module.scss';

export function AwardsMarquee() {
  return (
    <section className={styles.section}>
      <div className={'container'}>
        <div className={styles.header}>
          <Text tag={'span'} variant={'kicker'}>Awards & Recognition</Text>
          <Text tag={'h2'} variant={'title'}>Наши награды</Text>
        </div>
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
