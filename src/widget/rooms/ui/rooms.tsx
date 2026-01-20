import { Text } from '@/shared/ui/text';
import { TabsUI } from '@/widget/tabs';

import { ROOM_TABS } from '../model/const';

import styles from './styles.module.scss';


export function Rooms() {
  return (
    <section className={styles.rooms}>
      <div className={'container'}>
        <Text tag={'h2'} variant={'title'} className={'text-center'}>Наши номера & сьюты</Text>
      </div>
      <TabsUI defaultValue={'room'} triggers={ROOM_TABS} />
    </section>
  );
}