import Image from 'next/image';
import { LuBed } from 'react-icons/lu';
import { MdOutlineKingBed } from 'react-icons/md';

import { CONTACT, GENERALINFOLEFT, GENERALINFORIGHT, GIFT, HONEYMOON, ROOMS, UAI } from '@/entities/factsheet';
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

    </section>
  );
}