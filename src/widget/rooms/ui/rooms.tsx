import { Text } from '@/shared/ui/text';
import { TabsUI } from '@/widget/tabs';

import { ROOM_TABS } from '../model/const';

import styles from './styles.module.scss';


export function Rooms() {
  return (
    <section className={styles.rooms}>
      <div className={`container ${styles.rooms__header}`}>
        <Text tag="h2" size="title" className={styles.rooms__title}>
          Номера и сьюты
        </Text>
        <p className={styles.rooms__subtitle}>
          Пространство для отдыха с видом на Средиземное море
        </p>
      </div>
      <TabsUI defaultValue="room" triggers={ROOM_TABS} />
    </section>
  );
}
