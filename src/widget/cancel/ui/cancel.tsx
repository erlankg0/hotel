import { ShieldCheck, Info } from 'lucide-react';

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
} from '@/shared/ui/drawer';

import styles from './styles.module.scss';

export function Cancel() {
  return (
    <section className={styles.cancel}>
      <ShieldCheck className={styles.icon} />

      <h2>Условия отмены бронирования</h2>

      <Drawer direction={'bottom'}>
        <DrawerTrigger>
          <Info size={14} />
        </DrawerTrigger>

        <DrawerContent className={styles.cancel__drawer}>
          <DrawerHeader>Отмена и возврат</DrawerHeader>

          <div className={styles.cancel__content}>
            <p>
              Отмена бронирования возможна не позднее чем за{' '}
              <strong>10 рабочих дней</strong> до даты заезда.
            </p>

            <p>
              При отмене в установленный срок возврат осуществляется в полном
              объёме.
            </p>

            <p>
              При отмене менее чем за 10 рабочих дней могут применяться штрафные
              санкции.
            </p>

            <hr />

            <p>
              Возврат денежных средств осуществляется{' '}
              <strong>только на тот же счёт или карту</strong>, с которой была
              произведена оплата.
            </p>

            <p>
              Возврат <strong>третьим лицам невозможен</strong>.
            </p>

            <p>
              Срок возврата зависит от банка и может составлять от 3 до 45
              рабочих дней.
            </p>

            <hr />

            <p>
              В случае незаезда (No-Show) без предварительного уведомления
              бронирование считается неиспользованным.
            </p>

            <p>
              Отель оставляет за собой право удержать стоимость полной суммы проживания.
            </p>
          </div>
        </DrawerContent>
      </Drawer>
    </section>
  );
}