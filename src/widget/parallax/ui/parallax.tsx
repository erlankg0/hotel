'use client';

import { AdultEntertainment } from '@/entities/entertainment';
import { Text } from '@/shared/ui/text';


export function Parallax() {

  return (
    <section>
      <header className={'container'}>
        <Text tag={'span'} variant={'kicker'}>Entertainment</Text>
        <Text tag={'h2'} variant={'title'}>Развления и анимация</Text>
      </header>
      <section>
        <AdultEntertainment />
      </section>
    </section>
  );
}