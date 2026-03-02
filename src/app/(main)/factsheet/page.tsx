import Image from 'next/image';
import { LuBed } from 'react-icons/lu';
import { MdOutlineKingBed } from 'react-icons/md';

import {
  CONTACT,
  GENERALINFOLEFT,
  GENERALINFORIGHT,
  GIFT,
  HONEYMOON,
  ROOMS,
  UAI,
  REGULARINFOROOM,
  ONREQUESTINFOROOM,
} from '@/entities/factsheet';
import { Grid } from '@/shared/ui/grid';
import { ImageUI } from '@/shared/ui/image';
import { Separator } from '@/shared/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/shared/ui/table';

import styles from './page.module.scss';


export default async function Page() {
  return (
    <section className={'flex flex-col  gap-8'}>
      <div className={styles.desktop}>
        <Image
          src="/images/hotel.jpg"
          alt="Вид на отель"
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
        <article className={styles.content}>
          <p className={styles.content__title}>Utopia World Deluxe Hotel</p>
          <p className={styles.content__period}>Factsheet | 12 Апреля 2026 - 31 октября 2026</p>
        </article>
      </div>
      <section className={styles.info}>
        <h2 className={styles.info__title}>Общая Информация</h2>
        <div className={styles.grid}>
          <Table>
            <TableBody>
              {GENERALINFOLEFT.map((factsheet) => (
                <TableRow key={factsheet.label}>
                  <TableCell className="font-medium text-muted-foreground w-1/3">
                    {factsheet.label}
                  </TableCell>
                  <TableCell>
                    {factsheet.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Table>
            <TableBody>
              {GENERALINFORIGHT.map((factsheet) => (
                <TableRow key={factsheet.label}>
                  <TableCell className="font-medium text-muted-foreground w-1/3">
                    {factsheet.label}
                  </TableCell>
                  <TableCell>
                    {factsheet.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
      <section className={styles.info}>
        <h2 className={styles.info__title}>Контактная информация</h2>
        <div className={styles.grid}>
          <Table>
            <TableBody>
              {CONTACT.map((contact) => (
                <TableRow key={contact.label}>
                  <TableCell className="font-medium text-muted-foreground w-1/3">
                    {contact.label}
                  </TableCell>
                  <TableCell>
                    {contact.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <article className={styles.image_card}>
            <ImageUI src={'/images/poster.jpg'} alt={'Постер'} aspectRatio={'2 / 1'} />
          </article>
        </div>
      </section>
      <Separator />
      <section className={styles.info}>
        <h2 className={styles.info__title}>{UAI.title}</h2>
        <div className={styles.grid}>
          <Table>
            <TableBody>
              {UAI.list.slice(0, UAI.list.length / 2).map((item) => (
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
              {UAI.list.slice(UAI.list.length / 2, UAI.list.length).map((item) => (
                <TableRow key={item}>
                  <TableCell className="font-medium text-muted-foreground w-1/3">
                    {item}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

      </section>
      <section className={styles.info}>
        <h2 className={styles.info__title}>{HONEYMOON.title}</h2>
        <div className={styles.grid}>
          <article className={styles.image_card}>
            <ImageUI src={'/images/honeymoon.webp'} alt={HONEYMOON.title} aspectRatio={'2 / 1'} />
          </article>
          <Table>
            <TableBody>
              {HONEYMOON.list.map((item) => (
                <TableRow key={item}>
                  <TableCell className="font-medium text-muted-foreground w-1/3">
                    {item}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

      </section>
      <div className={styles.grid}>
        <section className={styles.info}>
          <h2 className={styles.info__title}>{GIFT.WENDING}</h2>

          <Table>
            <TableBody>
              {GIFT.list.map((item) => (
                <TableRow key={item}>
                  <TableCell className="font-medium text-muted-foreground w-1/3">
                    {item}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

        </section>
        <section className={styles.info}>
          <h2 className={styles.info__title}>{GIFT.BIRTHDAY}</h2>
          <Table>
            <TableBody>
              {GIFT.list.map((item) => (
                <TableRow key={item}>
                  <TableCell className="font-medium text-muted-foreground w-1/3">
                    {item}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

        </section>
      </div>
      <Separator />
      <div className={styles.info}>
        <h2 className={styles.info__title}>Номера</h2>
        <Grid size={2} className={'h-130'}>
          <div className={styles.big}>
            <ImageUI
              src="https://cdn.utopiahotels.com/assets/images/pages/villastandardutopiaroom01-xl.webp"
              alt="image"
              aspectRatio="auto"
            />
          </div>
          <div className={styles.small}>
            <ImageUI src="https://cdn.utopiahotels.com/assets/images/pages/01worldstandartroom-xl.webp"
                     alt="image"
                     aspectRatio="auto"
            />
          </div>
          <div className={styles.small}>
            <ImageUI
              src="https://cdn.utopiahotels.com/assets/images/pages/cornersuitworld02-xl.webp"
              alt="image"
              aspectRatio="auto"
            />
          </div>
        </Grid>
      </div>
      <section className={styles.info}>
        <h2 className={styles.info__title}>Особенность Номеров и Сьютов</h2>
        <div>
          <Table className="table-fixed w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[20%]">Категория</TableHead>
                <TableHead className="w-[5%]">Площадь</TableHead>
                <TableHead className="w-[10%]">Макс. вместимость</TableHead>
                <TableHead className="w-[65%]">Особенности</TableHead>
              </TableRow>

            </TableHeader>
            <TableBody>
              {ROOMS.map((room) => (
                <TableRow key={room.title}>
                  <TableCell className="font-medium">{room.title}</TableCell>
                  <TableCell>{room.area}</TableCell>
                  <TableCell>{room.capacity} + 1</TableCell>
                  <TableCell>
                    <Table className="table-fixed w-full">
                      <TableHeader>
                        <TableRow>
                          <TableHead>Спальни</TableHead>
                          <TableHead>Сан Узел</TableHead>
                          <TableHead>Балкон</TableHead>
                          <TableHead>Кровати</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>{room.bedRoom}</TableCell>

                          <TableCell>{room.bathRoom}</TableCell>
                          <TableCell>{room.balcony}</TableCell>
                          <TableCell className={'flex flex-row items-center gap-4'}>
                            <div className={'flex flex-row items-center gap-2'}>
                              <MdOutlineKingBed />
                              <p>x {room.beds.twin}</p>
                            </div>
                            <div className={'flex flex-row items-center gap-2'}>
                              <LuBed />
                              <p>x {room.beds.sng}</p>
                            </div>
                            <div className={'flex flex-row items-center gap-2'}>
                              <p>+</p> {room.beds?.extra && (<LuBed />)}
                            </div>
                            <div>
                              {room.beds?.sofa && <> + Диван </>}
                            </div>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
      <section className={styles.info}>
        <h2 className={styles.info__title}>Общие харатеристики номеров</h2>
        <div className={styles.grid}>
          <Table className="table-fixed w-full">
            <TableHeader>Общее</TableHeader>
            <TableBody>
              {REGULARINFOROOM.map((regular) => (
                <TableRow key={regular}>
                  <TableCell className="font-medium">{regular}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Table className="table-fixed w-full">
            <TableHeader>По запросу</TableHeader>
            <TableBody>
              {ONREQUESTINFOROOM.map((request) => (
                <TableRow key={request}>
                  <TableCell className="font-medium">{request}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
      <section className={styles.info}>
        <h2 className={styles.info__title}>Сервис еды и напитков</h2>
        <Table className="table-fixed w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[15%]">Ресторан</TableHead>
              <TableHead className="w-[10%]">Тип</TableHead>
              <TableHead className="w-[10%]">Формат</TableHead>
              <TableHead className="w-[30%]">Описание</TableHead>
              <TableHead className="w-[10%]">Время работы</TableHead>
              <TableHead className="w-[15%]">Ультра всё включено</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell rowSpan={4} className="align-middle font-medium">
                Ресторан Tuğra
              </TableCell>
              <TableCell>Завтрак</TableCell>
              <TableCell rowSpan={4}>Шведский стол</TableCell>
              <TableCell className="align-top break-words whitespace-normal p-2">
                <p>
                  Широкий выбор завтраков по системе «‎шведский стол»‎ и диетического буфета
                </p>
              </TableCell>
              <TableCell>07:00 - 10:00</TableCell>
              <TableCell><p className={'text-green-400'}>Включено</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Поздний завтрак</TableCell>
              <TableCell className="align-top break-words whitespace-normal p-2">
                <p>
                  Завтрак по системе «‎шведский стол»‎ и диетического буфета
                </p>
              </TableCell>
              <TableCell>10:00 - 11:00</TableCell>
              <TableCell><p className={'text-green-400'}>Включено</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Обед</TableCell>
              <TableCell className="align-top break-words whitespace-normal p-2">
                <p>
                  Разнообразный «‎шведский стол»‎ с диетическими и национальными блюдами.
                </p>
              </TableCell>
              <TableCell>12:30 - 14:00</TableCell>
              <TableCell><p className={'text-green-400'}>Включено</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ужин</TableCell>
              <TableCell className="align-top break-words whitespace-normal p-2">
                <p>
                  Разнообразный «‎шведский стол»‎ с диетическими и национальными блюдами и теметическими ужинами.
                </p>
              </TableCell>
              <TableCell>18:30 - 21:00</TableCell>
              <TableCell><p className={'text-green-400'}>Включено</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell rowSpan={2} className="align-middle font-medium">
                Ресторан LA MONTE
              </TableCell>
              <TableCell>Снэк</TableCell>
              <TableCell>Шведский стол</TableCell>
              <TableCell className="align-top break-words whitespace-normal p-2">
                <p>
                  Ночной снэк бар по системе «‎шведский стол»‎
                </p>
              </TableCell>
              <TableCell>22:00 - 06:00</TableCell>
              <TableCell><p className={'text-green-400'}>Включено</p></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Ужин</TableCell>
              <TableCell>Меню</TableCell>
              <TableCell className="align-top break-words whitespace-normal p-2">
                <p>
                  LA MONTE А&apos;ля карт предлогает исключительный опыт итальянской гастрономии, сочетая аутентичные
                  вкусы, отборные свежие ингредиенты и классические блюда в элегантной и стильно атмосфере.
                </p>
              </TableCell>
              <TableCell>19:00 - 21:00</TableCell>
              <TableCell><p className={'text-rose-400'}>Платно</p></TableCell>
            </TableRow>

            <TableRow>
              <TableCell  className="align-middle font-medium">
                Ресторан Tuam
              </TableCell>
              <TableCell>Ужин</TableCell>
              <TableCell>Меню</TableCell>
              <TableCell className="align-top break-words whitespace-normal p-2">
                <p>
                  Tuam представляет турецкое наследие с аутентичным ужинами в традиционной Османской кухне, предлогаия гостям теплое и гостеприимное кулинарное приключения.
                </p>
              </TableCell>
              <TableCell>19:00 - 21:00</TableCell>
              <TableCell><p className={'text-rose-400'}>Платно</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell  className="align-middle font-medium">
                Ресторан TURKUAZ
              </TableCell>
              <TableCell>Ужин</TableCell>
              <TableCell>Меню</TableCell>
              <TableCell className="align-top break-words whitespace-normal p-2">
                <p>
                  TURKUAZ представляет морскую кухню с аутентичными ужинами, предлагая гостям тёплое и гостеприимное кулинарное приключение.
                </p>
              </TableCell>
              <TableCell>19:00 - 21:00</TableCell>
              <TableCell><p className={'text-rose-400'}>Платно</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="align-middle font-medium">
                Cнэк Tuğra
              </TableCell>
              <TableCell>Снэк</TableCell>
              <TableCell className="align-top break-words whitespace-normal p-2">
                <p>
                  Закуски в течении дня по системе «‎шведский стол»‎
                </p>
              </TableCell>
              <TableCell>14:30 - 16:00</TableCell>
              <TableCell><p className={'text-green-400'}>Включено</p></TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="align-middle font-medium">
                Cнэк Аквапарк
              </TableCell>
              <TableCell>Снэк</TableCell>
              <TableCell>Меню</TableCell>

              <TableCell className="align-top break-words whitespace-normal p-2">
                <p>
                  Разнообразный выбор снэков по меню также Gözleme.
                </p>
              </TableCell>
              <TableCell>12:30 - 16:00</TableCell>
              <TableCell><p className={'text-green-400'}>Включено</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="align-middle font-medium">
                Cнэк Пляж
              </TableCell>
              <TableCell>Снэк</TableCell>
              <TableCell>Шведский стол</TableCell>

              <TableCell className="align-top break-words whitespace-normal p-2">
                <p>
                  Закуски в течении дня с потрясающим видом на Средиземное море.
                </p>
              </TableCell>
              <TableCell>12:30 - 16:00</TableCell>
              <TableCell><p className={'text-green-400'}>Включено</p></TableCell>
            </TableRow>
          </TableBody>

        </Table>
      </section>
    </section>
  );
}