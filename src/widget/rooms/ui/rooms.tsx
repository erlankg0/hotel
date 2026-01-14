import { TabsUI } from '@/widget/tabs';

import { ROOM_TABS } from '../model/const';

import styles from './styles.module.scss';


export function Rooms() {
  return (
    <section className={styles.rooms}>
      <h2 className={styles.rooms__title}>Наши номера & сьюты</h2>
      <TabsUI defaultValue={'room'} triggers={ROOM_TABS} />
    </section>
  );
}