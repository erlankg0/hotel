import { Text } from '@/shared/ui/text';

import type { ProgramProps } from '../model/type';

export function Program({ title, text, time, age }: ProgramProps) {
  return (
    <article className={'space-y-1 py-3'}>
      {title && (<Text size={'kicker'} tag={'h3'}>{title}</Text>)}
      {text && (<Text tag={'p'} size={'subtitle'}>{text}</Text>)}
      {age && (<Text tag={'p'} size={'subtitle'}>{age}</Text>)}
      {time && (<Text tag={'p'} size={'subtitle'}>{time}</Text>)}
    </article>
  );
}