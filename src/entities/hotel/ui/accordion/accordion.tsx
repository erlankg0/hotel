import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/shared/ui/accordion';

import styles from './styles.module.scss';

export function HotelAccordion() {
  return (
    <article className={styles.section}>
      <h2 className={styles.section__title}>Информация об отеле</h2>

      <Accordion
        type="single"
        collapsible
        className={styles.accordion}
        defaultValue="item-1"
      >
        <AccordionItem value="item-1" className={styles.accordion__item}>
          <AccordionTrigger className={styles.accordion__trigger}>
            <span className={styles.accordion_title}>Общая информация</span>
          </AccordionTrigger>
          <AccordionContent className={styles.accordion__content}>
            <div className={styles.content}>
              <p>
                Категория отеля — ★★★★★. Курорт работает по концепции Ultra All Inclusive
                и был открыт 29 июня 2007 года.
              </p>
              <p>
                Площадь территории составляет 120 000 м². В отеле 567 номеров, включая
                5 номеров для гостей с ограниченными возможностями.
              </p>
              <p>
                Период работы: с 12 апреля по 31 октября 2026 года.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className={styles.accordionItem}>
          <AccordionTrigger className={styles.accordionTrigger}>
            <span className={styles.accordionTitle}>Расположение</span>
          </AccordionTrigger>
          <AccordionContent className={styles.accordion__content}>
            <div className={styles.content}>
              <p>
                Отель расположен в районе Kargıcak, недалеко от города Аланья, на побережье
                Средиземного моря.
              </p>
              <div className={styles.distanceList}>
                <div className={styles.distanceList__item}>
                  <span className={styles.distanceList__label}>Аланья</span>
                  <span className={styles.distanceList__value}>17 км</span>
                </div>
                <div className={styles.distanceList__item}>
                  <span className={styles.distanceList__label}>Махмутлар</span>
                  <span className={styles.distanceList__value}>5 км</span>
                </div>
                <div className={styles.distanceList__item}>
                  <span className={styles.distanceList__label}>Аэропорт Gazipaşa</span>
                  <span className={styles.distanceList__value}>21 км</span>
                </div>
                <div className={styles.distanceList__item}>
                  <span className={styles.distanceList__label}>Анталья</span>
                  <span className={styles.distanceList__value}>155 км</span>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className={styles.accordionItem}>
          <AccordionTrigger className={styles.accordionTrigger}>
            <span className={styles.accordionTitle}>Инфраструктура и сервисы</span>
          </AccordionTrigger>
          <AccordionContent className={styles.accordionContent}>
            <div className={styles.contentBlock}>
              <div className={styles.featureGrid}>
                <div className={styles.feature}>
                  <h4 className={styles.feature__title}>Пляж</h4>
                  <p className={styles.feature__text}>
                    Песчаный пляж с двумя пирсами в 350 метрах от основной территории
                  </p>
                </div>

                <div className={styles.feature}>
                  <h4 className={styles.feature__title}>Аквапарк</h4>
                  <p className={styles.feature__text}>
                    Аквапарк площадью 15 000 м² с множеством горок и аттракционов
                  </p>
                </div>

                <div className={styles.feature}>
                  <h4 className={styles.feature__title}>Бассейны</h4>
                  <p className={styles.feature__text}>
                    Открытые бассейны 4 224 м² и крытый бассейн 75 м²
                  </p>
                </div>

                <div className={styles.feature}>
                  <h4 className={styles.feature__title}>Рестораны</h4>
                  <p className={styles.feature__text}>
                    Главный ресторан, 3 ресторана à la carte, 3 закусочные, 8 баров
                  </p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </article>
  );
}