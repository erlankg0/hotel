import styles from './styles.module.scss';

export function Title({ title }: { title: string }) {
  return (
    <h1 className={styles.title}>{title}</h1>
  );
}