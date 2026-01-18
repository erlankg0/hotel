import { HotelHero, HotelContact, HotelInfo } from '@/entities/hotel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/ui/accordion';

import styles from './styles.module.scss';

export function Property() {
  return (
    <section className={styles.property}>
      <div className="container">
        <div className={styles.property__wrapper}>
          <HotelHero />

          <div className={styles.contentGrid}>
            <HotelContact />
            <HotelInfo />
            {/* Hotel Information */}
          </div>
        </div>
      </div>
    </section>
  );
}