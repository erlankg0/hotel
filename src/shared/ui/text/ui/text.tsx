import { cn } from '@/shared/lib/utils';

import styles from './styles.module.scss';

import type { TextProps, Variant } from '../model/type';

const classNames: Record<Variant, string> = {
  title: styles.title,
  subtitle: styles.subtitle,
  kicker: styles.kicker,
};

export function Text({ children, tag: Tag, className, variant }: TextProps) {

  return (
    <Tag
      className={cn(
        className,
        classNames[variant],
      )}
    >
      {children}
    </Tag>
  );
}