import styles from './styles.module.scss';

export function HotelAbout() {
  return (
    <article className={styles.about}>
      <h2 className={styles.about__title}>Захватывающий путь через лес к синеве Средиземноморья</h2>
      <p className={styles.about__text}>Новый мир, созданный в самом особенном уголке, где вы можете одновременно
        насладиться зеленью и голубизной Средиземноморья... Utopia World станет незаменимым адресом вашего отпуска.
      </p>
    </article>
  );
}