import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';

import styles from './style.module.scss';

import type { TabsPros } from '../model/type';


export function TabsUI({ triggers, defaultValue }: TabsPros) {
  return (
    <Tabs defaultValue={defaultValue}>
      <div className={'container'}>
        <TabsList className={styles.triggerList}>
          {triggers.map((trigger, index) => (
            <TabsTrigger value={trigger.value} key={index}>{trigger.label}</TabsTrigger>
          ))}
        </TabsList>
        {triggers.map((content, index) => (
          <TabsContent value={content.value} key={index}>
            {content.content}
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}