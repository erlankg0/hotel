'use client';

import {
  HERO,
  FEATURES,
  GRID, Card,
} from '@/entities/beach';
import { useModal } from '@/features/modal';
import { cn } from '@/shared/lib/utils';
import { Grid, GridCard } from '@/shared/ui/grid';
import { Modal } from '@/shared/ui/modal';
import { Text } from '@/shared/ui/text';
import { Hero } from '@/widget/hero';

export default function Page() {
  const { isOpen, open, content, close } = useModal();


  return (
    <section className={cn('panel', 'page')}>
      <Hero {...HERO} />
      <article className={'info'}>
        <h2>Наслаждайтесь солнцем Средиземного моря в наших бассейнах
          и на частном пляже Utopia World.</h2>
      </article>

      <section className="container py-20">
        <header className="text-center mb-16">
          <Text tag="h2" variant="title">Особенности</Text>
          <p className="mt-4 text-neutral-500 max-w-xl mx-auto">
            Частный пляж и коллекция бассейнов для отдыха у Средиземного моря.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

          {FEATURES.list.map((item) => (
            <article key={item.title}>
              <div className="text-4xl font-light mb-4">{item.count}</div>
              <h4 className="uppercase tracking-widest text-sm mb-2">
                {item.title}
              </h4>
              <p className="text-neutral-500 text-sm">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className={'px-12 my-12'}>
        <Grid size={4}>
          {GRID.map((item) => (
            <GridCard {...item} key={item.title} onClick={() => open(<Card {...item.feature} />)} />
          ))}
        </Grid>
      </section>
      <Modal content={content} isOpen={isOpen} onClose={close} />
    </section>
  );
}