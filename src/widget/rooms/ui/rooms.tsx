import { RoomCard } from '@/shared/ui/room-card';

import styles from './styles.module.scss';

export function Rooms() {
  return (
    <section className={styles.rooms}>
      <h2 className={styles.rooms__title}>Наши номера & сьюты</h2>
      <RoomCard url={'https://cdn.utopiahotels.com/assets/images/pages/villastandardutopiaroom01-lg.webp'}
                title={'villa standart room'} />

    </section>
  );
}