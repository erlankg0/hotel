import { cn } from '@/shared/lib/utils';
import { BreadcrumbsUI } from '@/widget/breadcrumbs';
import { PriceRequestFullSize } from '@/widget/price-request-form';

import styles from './page.module.scss';


export default async function Page() {
  return (
    <section className={cn(styles.section)}>
      <BreadcrumbsUI />
      <PriceRequestFullSize />


    </section>
  );
}
