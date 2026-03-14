import { HERO_KIDS, GRID_KIDS, DAYS, PROGRAM, Title, Program } from '@/entities/entertainment';
import { Grid, GridCard } from '@/shared/ui/grid';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/shared/ui/table';
import { Text } from '@/shared/ui/text';
import { Hero } from '@/widget/hero';

export default function Page() {
  return (
    <section>
      <title>Семейный клуб Ma&Me&Pa</title>
      <Hero {...HERO_KIDS} slot={<Title />} />
      <article className={'info'}>
        <h2> Волшебное пространство для игр, творчества и счастливого семейного отдыха.</h2>
      </article>
      <section className={'container'}>
        <Grid size={4}>
          {GRID_KIDS.map((item) => (<GridCard {...item} key={item.title} />))}
        </Grid>
      </section>
      <section className={'px-8'} aria-label={'Недельня программа'}>
        <Text variant={'title'} tag={'h2'} className={'py-6'}>Программа</Text>
        <div className={'w-full overflow-x-auto'}>
          <Table>
            <TableHeader>
              <TableRow>
                {DAYS.map(day => (<TableHead className={'font-semibold w-1/6'} key={day}>{day}</TableHead>))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {PROGRAM.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((item, colIndex) => {
                    if (!item) return null;
                    return (
                      <TableCell key={colIndex} rowSpan={item?.rowSpan}>
                        <Program {...item} />
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </section>
  );
}