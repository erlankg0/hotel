import { KIDSHERO, GRIDKIDS, DAYS, Title, Program } from '@/entities/entertainment';
import { Grid, GridCard } from '@/shared/ui/grid';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/shared/ui/table';
import { Text } from '@/shared/ui/text';
import { Hero } from '@/widget/hero';

export default function Page() {
  return (
    <section>
      <title>Семеный клуб Ma&Me&Pa</title>
      <Hero {...KIDSHERO} slot={<Title />} />
      <article className={'info'}>
        <h2> Волшебное пространство для игр, творчества и счастливого семейного отдыха.</h2>
      </article>
      <section className={'container'}>
        <Grid size={4}>
          {GRIDKIDS.map((item) => (<GridCard {...item} key={item.title} />))}
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
              <TableRow>
                <TableCell>
                  <Program
                    title="BAMBINO"
                    text="Сенсорные игры"
                    time="10:30"
                    age="1-3 года"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="LUMO"
                    text="Светящий столик"
                    time="10:30"
                    age="1-3 года"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="SENTIDO"
                    text="Художественное рисование"
                    time="10:30"
                    age="1-3 года"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="CIBO"
                    text="Кухня"
                    time="10:30"
                    age="1-3 года"
                  />
                </TableCell>

                <TableCell>
                  <Program
                    title="BAMBINO"
                    text="Сенсорные игры"
                    time="10:30"
                    age="1-3 года"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="LUMO"
                    text="Светящий столик"
                    time="10:30"
                    age="1-3 года"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="SENTIDO"
                    text="Художественное рисование"
                    time="10:30"
                    age="1-3 года"
                  />
                </TableCell>

              </TableRow>
              <TableRow>
                <TableCell>
                  <Program
                    title="ARTE"
                    text="Художественная мастерская"
                    time="11:30"
                    age="4-12 лет"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="TENIS"
                    text="Тенисный корт"
                    time="11:30"
                    age="4-12 лет"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="SCOUT"
                    text="Мастерская экспериментов"
                    time="11:30"
                    age="4-12 лет"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="NAMASTE"
                    text="Йога"
                    time="11:30"
                    age="4-12 лет"
                  />
                </TableCell>

                <TableCell>
                  <Program
                    title="CULTURE"
                    text="Пермальтура"
                    time="11:30"
                    age="4-12 лет"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="CIBO"
                    text="Кухня"
                    time="11:30"
                    age="4-12 лет"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="MOTUS"
                    text="Подвижные игры"
                    time="11:30"
                    age="4-12 лет"
                  />
                </TableCell>

              </TableRow>
              <TableRow>
                <TableCell>
                  <Program
                    title="SONGO"
                    text="Мастерская дизайна"
                    time="14:00"
                    age="4-12 лет"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="RITMO"
                    text="Музыка и ритмика"
                    time="14:00"
                    age="4-12 лет"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="LUMO"
                    text="Светящий столик"
                    time="14:00"
                    age="4-12 лет"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="SONGO"
                    text="Мастерская дизайна"
                    time="14:00"
                    age="4-12 лет"
                  />
                </TableCell>

                <TableCell>
                  <Program
                    title="MOCTAIL"
                    text="Мастерская коктелей"
                    time="14:00"
                    age="4-12 лет"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="CULTURE"
                    text="Пермальтура"
                    time="14:00"
                    age="4-12 лет"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="SONGO"
                    text="Мастерская дизайна"
                    time="14:00"
                    age="4-12 лет"
                  />
                </TableCell>

              </TableRow>
              <TableRow>
                <TableCell>
                  <Program
                    title="CIBO"
                    text="Кухня"
                    time="15:00"
                    age="4-12 лет"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="SONGO"
                    text="Мастреская дизайна"
                    time="15:00"
                    age="4-12 лет"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="ARTE"
                    text="Художественная мастерская"
                    time="15:00"
                    age="4-12 лет"
                  />
                </TableCell>
                <TableCell rowSpan={2}>
                  <Program
                    title="LOUPE"
                    text="Квест по поиску сокровищ"
                    time="15:00"
                    age="4-12 лет"
                  />
                </TableCell>

                <TableCell>
                  <Program
                    title="LUMO"
                    text="Светящий столик"
                    time="15:00"
                    age="4-12 лет"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="ARTE"
                    text="Художественная мастерская"
                    time="15:00"
                    age="4-12 лет"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="CIBO"
                    text="Кухня"
                    time="15:00"
                    age="4-12 лет"
                  />
                </TableCell>

              </TableRow>
              <TableRow>
                <TableCell>
                  <Program
                    title="LUMO"
                    text="Светящий столик"
                    time="10:30"
                    age="1-3 года"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="SENTIDO"
                    text="Художественное рисование"
                    time="10:30"
                    age="1-3 года"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="CIBO"
                    text="Кухня"
                    time="10:30"
                    age="1-3 года"
                  />
                </TableCell>

                <TableCell>
                  <Program
                    title="BAMBINO"
                    text="Сенсорные игры"
                    time="10:30"
                    age="1-3 года"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="LUMO"
                    text="Светящий столик"
                    time="10:30"
                    age="1-3 года"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="SENTIDO"
                    text="Художественное рисование"
                    time="10:30"
                    age="1-3 года"
                  />
                </TableCell>

              </TableRow>
              <TableRow>
                <TableCell>
                  <Program
                    title="BAMBINO"
                    text="Сенсорные игры"
                    time="10:30"
                    age="1-3 года"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="LUMO"
                    text="Светящий столик"
                    time="10:30"
                    age="1-3 года"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="SENTIDO"
                    text="Художественное рисование"
                    time="10:30"
                    age="1-3 года"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="CIBO"
                    text="Кухня"
                    time="10:30"
                    age="1-3 года"
                  />
                </TableCell>

                <TableCell>
                  <Program
                    title="BAMBINO"
                    text="Сенсорные игры"
                    time="10:30"
                    age="1-3 года"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="LUMO"
                    text="Светящий столик"
                    time="10:30"
                    age="1-3 года"
                  />
                </TableCell>
                <TableCell>
                  <Program
                    title="SENTIDO"
                    text="Художественное рисование"
                    time="10:30"
                    age="1-3 года"
                  />
                </TableCell>

              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </section>
  );
}