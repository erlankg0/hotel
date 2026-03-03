import Image from 'next/image';
import { LuBed } from 'react-icons/lu';
import { MdOutlineKingBed } from 'react-icons/md';

import {
  CONTACT,
  GENERALINFO,
  GIFT,
  HONEYMOON,
  ONREQUESTINFOROOM,
  REGULARINFOROOM,
  ROOMS,
  DISABLED,
  UAI,
  TableInfo,
} from '@/entities/factsheet';
import { Grid } from '@/shared/ui/grid';
import { ImageUI } from '@/shared/ui/image';
import { Separator } from '@/shared/ui/separator';
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/shared/ui/table';

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
      <TableInfo infoType={'info'} info={GENERALINFO} title={'Общая Информация'} />

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
            <ImageUI src={'https://cdn.utopiahotels.com/assets/images/pages/genelworldgaleri3-xl.webp'} alt={'Постер'}
                     aspectRatio={'2 / 1'} />
          </article>
        </div>
      </section>
      <Separator />
      <TableInfo infoType={'list'} {...UAI} />

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
        <h2 className={styles.info__title}>Общие характеристики номеров</h2>
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
        <h2 className={styles.info__title}>ВОЗМОЖНОСТИ ДЛЯ ГОСТЕЙ С ОГРАНИЧЕННЫМИ ФИЗИЧЕСКИМИ ВОЗМОЖНОСТЯМИ</h2>
        <Table>
          <TableBody>
            {DISABLED.map((item) => (
              <TableRow key={item}>
                <TableCell>
                  <p className={'text-muted-foreground'}>{item}</p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
      <section className={styles.info}>
        <h2 className={styles.info__title}>Рестораны и Снэк бары</h2>
        <Grid size={2} className={'h-130'}>
          <div className={styles.big}>
            <ImageUI
              src="https://cdn.utopiahotels.com/assets/images/pages/tugragalerirest02-xl.webp"
              alt="image"
              aspectRatio="auto"
            />
          </div>
          <div className={styles.small}>
            <ImageUI src="https://cdn.utopiahotels.com/assets/images/pages/beachsnackglri6-xl.webp"
                     alt="image"
                     aspectRatio="auto"
            />
          </div>
          <div className={styles.small}>
            <ImageUI
              src="https://cdn.utopiahotels.com/assets/images/pages/0009aquasnackmodal-lg.webp"
              alt="image"
              aspectRatio="auto"
            />
          </div>
        </Grid>
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
              <TableCell>Шведский стол</TableCell>
              <TableCell className="align-top break-words whitespace-normal p-2">
                <p>
                  Широкий выбор завтраков по системе «‎шведский стол»‎ и диетического буфета
                </p>
              </TableCell>
              <TableCell>07:00 - 10:00</TableCell>
              <TableCell><p className={'text-green-400 text-right'}>Включено</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Поздний завтрак</TableCell>
              <TableCell>Шведский стол</TableCell>
              <TableCell className="align-top break-words whitespace-normal p-2">
                <p>
                  Завтрак по системе «‎шведский стол»‎ и диетического буфета
                </p>
              </TableCell>
              <TableCell>10:00 - 11:00</TableCell>
              <TableCell><p className={'text-green-400 text-right'}>Включено</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Обед</TableCell>
              <TableCell>Шведский стол</TableCell>
              <TableCell className="align-top break-words whitespace-normal p-2">
                <p>
                  Разнообразный «‎шведский стол»‎ с диетическими и национальными блюдами.
                </p>
              </TableCell>
              <TableCell>12:30 - 14:00</TableCell>
              <TableCell><p className={'text-green-400 text-right'}>Включено</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ужин</TableCell>
              <TableCell>Шведский стол</TableCell>
              <TableCell className="align-top break-words whitespace-normal p-2">
                <p>
                  Разнообразный «‎шведский стол»‎ с диетическими и национальными блюдами и теметическими ужинами.
                </p>
              </TableCell>
              <TableCell>18:30 - 21:00</TableCell>
              <TableCell><p className={'text-green-400 text-right'}>Включено</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="align-middle font-medium">
                А ля карте LA MONTE
              </TableCell>
              <TableCell>Снэк</TableCell>
              <TableCell>Шведский стол</TableCell>
              <TableCell className="align-top break-words whitespace-normal p-2">
                <p>
                  Ночной снэк бар по системе «‎шведский стол»‎
                </p>
              </TableCell>
              <TableCell>22:00 - 06:00</TableCell>
              <TableCell><p className={'text-green-400 text-right'}>Включено</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="align-middle font-medium">
                Cнэк Tuğra
              </TableCell>
              <TableCell>Снэк</TableCell>
              <TableCell>Шведский стол</TableCell>
              <TableCell className="align-top break-words whitespace-normal p-2">
                <p>
                  Закуски в течении дня по системе «‎шведский стол»‎
                </p>
              </TableCell>
              <TableCell>14:30 - 16:00</TableCell>
              <TableCell><p className={'text-green-400 text-right'}>Включено</p></TableCell>
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
              <TableCell><p className={'text-green-400 text-right'}>Включено</p></TableCell>
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
              <TableCell><p className={'text-green-400 text-right'}>Включено</p></TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="align-middle font-medium">
                Мороженое
              </TableCell>
              <TableCell colSpan={3}>Снэк</TableCell>
              <TableCell>14:30 - 16:30</TableCell>
              <TableCell><p className={'text-green-400 text-right'}>Включено</p></TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="align-middle font-medium">
                Кондитерская
              </TableCell>
              <TableCell colSpan={2}>Снэк</TableCell>
              <TableCell>Шоколад, Торты, Печенье, Выпечка</TableCell>

              <TableCell>11:00 - 23:00</TableCell>
              <TableCell><p className={'text-green-400 text-right'}>Включено</p></TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="align-middle font-medium">
                Room Service
              </TableCell>
              <TableCell colSpan={3}></TableCell>

              <TableCell>24 часа</TableCell>
              <TableCell><p className={'text-rose-400 text-right'}>Платно</p></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
      <section className={styles.info}>
        <h2 className={styles.info__title}>А ля карт рестораны</h2>
        <Grid size={2} className={'h-130'}>
          <div className={styles.big}>
            <ImageUI
              src="https://cdn.utopiahotels.com/assets/images/pages/turkuazgaleri06-xl.webp"
              alt="image"
              aspectRatio="auto"
            />
          </div>
          <div className={styles.small}>
            <ImageUI
              src="https://cdn.utopiahotels.com/assets/images/pages/lamontegaleri03-xl.webp"
              alt="image"
              aspectRatio="auto"
            />
          </div>
          <div className={styles.small}>
            <ImageUI
              src="https://cdn.utopiahotels.com/assets/images/pages/tuamgaleri04-xl.webp"
              alt="image"
              aspectRatio="auto"
            />
          </div>
        </Grid>
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
              <TableCell className="align-middle font-medium">
                Ресторан LA MONTE
              </TableCell>
              <TableCell>Ужин</TableCell>
              <TableCell>Меню</TableCell>
              <TableCell className="align-top break-words whitespace-normal p-2">
                <p>
                  LA MONTE А&apos;ля карт предлогает исключительный опыт итальянской гастрономии, сочетая аутентичные
                  вкусы, отборные свежие ингредиенты и классические блюда в элегантной и стильно атмосфере.
                </p>
              </TableCell>
              <TableCell>19:00 - 21:00</TableCell>
              <TableCell><p className={'text-rose-400 text-right'}>Платно</p></TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="align-middle font-medium">
                Ресторан Tuam
              </TableCell>
              <TableCell>Ужин</TableCell>
              <TableCell>Меню</TableCell>
              <TableCell className="align-top break-words whitespace-normal p-2">
                <p>
                  Tuam представляет турецкое наследие с аутентичным ужинами в традиционной Османской кухне, предлогаия
                  гостям теплое и гостеприимное кулинарное приключения.
                </p>
              </TableCell>
              <TableCell>19:00 - 21:00</TableCell>
              <TableCell><p className={'text-rose-400 text-right'}>Платно</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="align-middle font-medium">
                Ресторан TURKUAZ
              </TableCell>
              <TableCell>Ужин</TableCell>
              <TableCell>Меню</TableCell>
              <TableCell className="align-top break-words whitespace-normal p-2">
                <p>
                  TURKUAZ представляет морскую кухню с аутентичными ужинами, предлагая гостям тёплое и гостеприимное
                  кулинарное приключение.
                </p>
              </TableCell>
              <TableCell>19:00 - 21:00</TableCell>
              <TableCell><p className={'text-rose-400 text-right'}>Платно</p></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
      <section className={styles.info}>
        <h2 className={styles.info__title}>Бары</h2>
        <ImageUI
          src="https://cdn.utopiahotels.com/assets/images/pages/0006poolbar-lg.webp"
          alt="image"
          aspectRatio="2/1"
        />
        <Table className="table-fixed w-full">
          <TableHeader>
            <TableRow>
              <TableHead className={'w-[70%]'}>Названия</TableHead>
              <TableHead>Время работы</TableHead>
              <TableHead>Ультра всё включено</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="align-middle font-medium">
                Лобби Бар
              </TableCell>
              <TableCell>24 часа</TableCell>
              <TableCell><p className={'text-green-400 text-right'}>Включено</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="align-middle font-medium">
                Лагуна Бар
              </TableCell>
              <TableCell>10:00 - 01:00</TableCell>
              <TableCell><p className={'text-green-400 text-right'}>Включено</p></TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="align-middle font-medium">
                Бар у бассейна
              </TableCell>
              <TableCell>10:00 - 01:00</TableCell>
              <TableCell><p className={'text-green-400 text-right'}>Включено</p></TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="align-middle font-medium">
                Бар у аквапарка
              </TableCell>
              <TableCell>10:00 - 17:00</TableCell>
              <TableCell><p className={'text-green-400 text-right'}>Включено</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="align-middle font-medium">
                Пляжный Бар
              </TableCell>
              <TableCell>10:00 - 17:00</TableCell>
              <TableCell><p className={'text-green-400 text-right'}>Включено</p></TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="align-middle font-medium">
                Бар у Релакс бассейна
              </TableCell>
              <TableCell>10:00 - 17:00</TableCell>
              <TableCell><p className={'text-green-400 text-right'}>Включено</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="align-middle font-medium">
                Бар в ночном клубе
              </TableCell>
              <TableCell>23:00 - 02:00</TableCell>
              <TableCell><p className={'text-green-400 text-right'}>Включено</p></TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="align-middle font-medium">
                Детокс Бар
              </TableCell>
              <TableCell>10:00 - 18:00</TableCell>
              <TableCell><p className={'text-green-400 text-right'}>Включено</p></TableCell>
            </TableRow>

          </TableBody>
        </Table>
        <Table>
          <TableHeader>
            <h2>Концепция напитков</h2>
            <TableRow>
              <TableHead>Тип</TableHead>
              <TableHead className={'w-[50%]'}>Описания</TableHead>
              <TableHead>Локация</TableHead>
              <TableHead>Ультра всё включено</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="align-middle font-medium">
                Безалкогольные напитки
              </TableCell>
              <TableCell className={'flex flex-col gap-2'}>
                <p> Coca-Cola, Coca-Cola Zero,Pepsi, Fanta, Sprite, Мин. вода, Schweppes, Энергетические напитки,
                  Лимонад, Айран, Вода.</p>
                <p>* Свежевыжатый апельсиновый сок на завтраке</p>
              </TableCell>
              <TableCell>Все Бары
              </TableCell>
              <TableCell><p className={'text-green-400 text-right'}>Включено</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="align-middle font-medium">
                Горячие напитки
              </TableCell>
              <TableCell className={'flex flex-col gap-2'}>
                <p>Coffee, Espresso, Americano, Cappuccino, Cafe Latte, Cafe Mocha, Macchiato, Горячий шоколад, Турецкое
                  кофе, Чай</p>
                <p>* Свежевыжатый апельсиновый сок на завтраке</p>
              </TableCell>
              <TableCell>Все Бары
              </TableCell>
              <TableCell><p className={'text-green-400 text-right'}>Включено</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="align-middle font-medium">
                Мини-Бар
              </TableCell>
              <TableCell className={'flex flex-col gap-2'}>
                <p> Coca-Cola, Fanta, Sprite, Мин. вода, Вода, Пиво, Фруктовые соки.</p>
              </TableCell>
              <TableCell>Все Бары
              </TableCell>
              <TableCell><p className={'text-green-400 text-right'}>Включено</p></TableCell>
            </TableRow>
          </TableBody>
          <TableFooter className={'text-xs font-mono'}>
            <TableRow>
              <TableCell colSpan={4}>
                Турецкое кофе подается в специально отведенных барах.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={4}>
                Местные и некоторые импортные алкогольные и безалкогольные напитки предоставляются бесплатно
                в пределах марок, установленных отелем.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={4}>
                Отель оставляет за собой право изменить установленные им марки напитков
                без предварительного уведомления третьих лиц.
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </section>
      <section className={styles.info}>
        <h2 className={styles.info__title}>Центр SPA и оздоровления</h2>

        <Table className="table-fixed w-full">
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead></TableHead>
              <TableHead></TableHead>
              <TableHead></TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Крытый бассейн</TableCell>
              <TableCell>Сауна</TableCell>
              <TableCell>Паровая комната</TableCell>
              <TableCell>Турецкая баня</TableCell>
              <TableCell><p className={'text-green-400 text-right'}>Включено</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Массаж и терапия</TableCell>
              <TableCell>Уход за кожей</TableCell>
              <TableCell>Уход за телом</TableCell>
              <TableCell>Маникюр, педикюр</TableCell>
              <TableCell><p className={'text-rose-400 text-right'}>Платно</p></TableCell>
            </TableRow>
          </TableBody>
          <TableFooter className={'text-xs font-mono'}>
            <TableRow>
              <TableCell colSpan={5}>
                SPA - открыт 7 дней в неделю с 09:00 - 18:00.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={5}>
                Гости обязаны сообщить о проблемах со здоровьем руководству SPA перед использованием услуг SPA
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </section>
      <section className={styles.info}>
        <h2 className={styles.info__title}>Конференц - залы</h2>

        <Table className="table-fixed w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Названия</TableHead>
              <TableHead>Ширина (м)</TableHead>
              <TableHead>Длина (м)</TableHead>
              <TableHead>Высота (м)</TableHead>
              <TableHead>Площадь (м2)</TableHead>
              <TableHead>Классная рассадка</TableHead>
              <TableHead>Театральная рассадка</TableHead>
              <TableHead>Банкетная рассадка</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Ephlatun</TableCell>
              <TableCell>15,10</TableCell>
              <TableCell>32,85</TableCell>
              <TableCell>3,65</TableCell>
              <TableCell>485</TableCell>
              <TableCell>430 чел.</TableCell>
              <TableCell>600 чел.</TableCell>
              <TableCell>325 чел.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Maun</TableCell>
              <TableCell>6,50</TableCell>
              <TableCell>8,30</TableCell>
              <TableCell>3,65</TableCell>
              <TableCell>52</TableCell>
              <TableCell>40 чел.</TableCell>
              <TableCell>50 чел.</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
      <section className={styles.info}>
        <h2 className={styles.info__title}>Дополнительная информация</h2>

        <Table className="table-fixed w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Услуга</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Прокат авто</TableCell>
              <TableCell className={'text-rose-400 text-right'}>Платно</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Кальянная</TableCell>
              <TableCell className={'text-rose-400 text-right'}>Платно</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Моторные водные виды спорта</TableCell>
              <TableCell className={'text-rose-400 text-right'}>Платно</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Трансфер из аэропорта</TableCell>
              <TableCell className={'text-rose-400 text-right'}>Платно</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Няня</TableCell>
              <TableCell className={'text-rose-400 text-right'}>Платно</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Детская коляска</TableCell>
              <TableCell className={'text-rose-400 text-right'}>Платно</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Детская кровать, горшок, ванна и плед</TableCell>
              <TableCell className={'text-green-400 text-right'}>Включено</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Room Service</TableCell>
              <TableCell className={'text-rose-400 text-right'}>Платно</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Мини-бар пополняется один раз в день бесплатно. Дополнительное пополнение осуществляется за
                дополнительную плату.</TableCell>
              <TableCell className={'text-blue-400 text-right'}> Включено (1 раз в день)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Пакет услуг для медового месяца (дополнительно оплачиваются услуги вне стандартной
                концепции).</TableCell>
              <TableCell className={'text-blue-400 text-right'}> Частично включено</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Юбилейный пакет (дополнительно оплачиваются услуги вне стандартной концепции)</TableCell>
              <TableCell className={'text-blue-400 text-right'}> Частично включено</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Питание и напитки вне концепции Ultra All Inclusive</TableCell>
              <TableCell className={'text-rose-400 text-right'}> Платно</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Магазины и лавки</TableCell>
              <TableCell className={'text-rose-400 text-right'}> Платно</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Доктор</TableCell>
              <TableCell className={'text-rose-400 text-right'}> Платно</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </section>
  );
}