import { Text } from '@/shared/ui/text';

import styles from './styles.module.scss';

export function Entertainment() {
  return (
    <section className={styles.section}>
      <div className={'container'}>
        <header className={styles.header}>
          <Text tag={'span'} variant={'kicker'}>Entertainment</Text>
          <Text tag={'h2'} variant={'title'}>Развлечения</Text>
          <Text tag={'p'} variant={'subtitle'}>
            Захватывающие шоу, яркая анимация и неповторимая средиземноморская атмосфера — каждый момент здесь превращается в праздник!
          </Text>
        </header>
      </div>
    </section>
  );
}