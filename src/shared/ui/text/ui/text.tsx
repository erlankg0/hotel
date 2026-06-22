import { cn } from '@/shared/lib/utils';

import styles from './styles.module.scss';

import type { TextProps, TextSize, TextTone } from '../model/type';

const sizeClassNames: Record<TextSize, string> = {
  title: styles.title,
  subtitle: styles.subtitle,
  kicker: styles.kicker,
  body: styles.body,
};

const toneClassNames: Record<TextTone, string> = {
  default: styles.default,
  info: styles.info,
  danger: styles.danger,
  success: styles.success,
};

export function Text({
                       children,
                       tag: Tag = 'p',
                       className,
                       size = 'body',
                       tone = 'default',
                     }: TextProps) {
  return (
    <Tag
      className={cn(
        sizeClassNames[size],
        toneClassNames[tone],
        className,
      )}
    >
      {children}
    </Tag>
  );
}