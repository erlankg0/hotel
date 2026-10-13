import styles from './styles.module.scss';

export function HotelAbout() {
  return (
    <article className={styles.about}>
      <p className={styles.about__eyebrow}>Аланья · Средиземноморское побережье</p>
      <h2 className={styles.about__title}>Там, где горы встречаются с морем</h2>
      <span className={styles.about__divider} aria-hidden="true" />
      <p className={styles.about__text}>
        Среди сосновых склонов и над бирюзовым Средиземным морем начинается ваш отдых в Utopia World —
        месте, где природа, простор и тёплое гостеприимство складываются в одно большое впечатление.
      </p>
    </article>
  );
}
