'use client';

import { Marquee } from '@/shared/ui/marquee';

import { AWARDS } from '../model/const';



export function AwardsMarquee() {
  return (
    <section>
      <Marquee pauseOnHover >
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
    <div>
      <span className="text-sm opacity-60">{organization}</span>
      <span className="font-medium">{title}</span>
      <span className="text-sm opacity-50">{year}</span>
    </div>
  );
}
