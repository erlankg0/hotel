'use client';

import { ChevronDown } from 'lucide-react';

import { Contact, useContact } from '@/features/contact';
import { Modal } from '@/shared/ui/modal';
import { FullVideo } from '@/widget/full-video';

import styles from './styles.module.scss';

export function Hero() {
  const { isOpen, setIsOpen } = useContact();
  return (
    <section className={styles.hero}>
      <div className={styles.hero__inner}>
        <div className={styles.hero__text}>
          <div className={styles.hero__text__pre_title}>
            <p>Welcome</p>
            <ChevronDown />
          </div>
          <h1 className={styles.hero__text__main_title}>Utopia World hotel</h1>
          <p>Alanya, Kargıcak</p>
        </div>
        <div className={styles.desktop}>
          <FullVideo url={'/video/utopia.mp4'} />
        </div>
      </div>
      <Modal content={<Contact />} isOpen={isOpen} onClose={setIsOpen} />
    </section>
  );
}
