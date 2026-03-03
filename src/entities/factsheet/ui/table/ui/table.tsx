import { ImageUI } from '@/shared/ui/image';
import { Table, TableBody, TableCell, TableRow } from '@/shared/ui/table';

import styles from './styles.module.scss';

import type { TableInfoProps } from '../model/type';

export function TableInfo({ infoType, info, list, title, images }: TableInfoProps) {
  return (
    <section className={styles.info}>
      <h2 className={styles.info__title}>{title}</h2>
      {infoType == 'info'  && (
        info && (
          <div className={styles.grid}>
            <Table>
              <TableBody>
                {info.slice(0, info.length / 2).map((item) => (
                  <TableRow key={item.label}>
                    <TableCell className="font-medium text-muted-foreground w-1/3">
                      {item.label}
                    </TableCell>
                    <TableCell>
                      {item.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Table>
              <TableBody>
                {info.slice(info.length / 2, info.length).map((item) => (
                  <TableRow key={item.label}>
                    <TableCell className="font-medium text-muted-foreground w-1/3">
                      {item.label}
                    </TableCell>
                    <TableCell>
                      {item.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )
      )}
      {infoType == 'list' && (
        list && (
          <div className={styles.grid}>
            <Table>
              <TableBody>
                {list.slice(0, list.length / 2).map((item) => (
                  <TableRow key={item}>
                    <TableCell className="font-medium text-muted-foreground w-1/3">
                      {item}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Table>
              <TableBody>
                {list.slice(list.length / 2, list.length).map((item) => (
                  <TableRow key={item}>
                    <TableCell className="font-medium text-muted-foreground w-1/3">
                      {item}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )
      )}
      {infoType == 'table' && (
        <div className={styles.grid}>
          {images && (images.map((image) => (
            <article className={styles.image_card} key={image.alt}>
              <ImageUI src={image.url} alt={image.alt} aspectRatio={'2 / 1'} />
            </article>
          )))}
          {list && (
            <Table>
              <TableBody>
                {list.map((item) => (
                  <TableRow key={item}>
                    <TableCell className="font-medium text-muted-foreground w-1/3">
                      {item}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      )}
    </section>
  );
}