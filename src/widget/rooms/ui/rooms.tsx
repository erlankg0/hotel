import { RoomTab } from '@/entities/room';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/shared/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';

import styles from './styles.module.scss';

export const roomTabMock = {
  title: 'Стандартный номер в виллах',
  description:
    'Почувствуйте средиземноморский бриз в своей душе в номере виллы.\n\n' +
    'Благодаря широкому балкону вы можете ощутить максимальный комфорт в нашем просторном номере, ' +
    'погрузившись в поток уникального вида от зелёного до синего.',
  images: [
    {
      id: 'villa-standard-1',
      url: 'https://cdn.utopiahotels.com/assets/images/pages/villastandardutopiaroom01-xl.webp',
      alt: 'Стандартный номер виллы — интерьер',
    },
    {
      id: 'villa-standard-2',
      url: 'https://cdn.utopiahotels.com/assets/images/pages/villastandardutopiaroom02-xl.webp',
      alt: 'Стандартный номер виллы — спальня',
    },
    {
      id: 'villa-standard-3',
      url: 'https://cdn.utopiahotels.com/assets/images/pages/villastandardutopiaroom03-xl.webp',
      alt: 'Стандартный номер виллы — балкон с видом',
    },
  ],
};
export const roomTabMockSTDA = {
  title: 'Стандартный номер',
  description: 'Каждый день вы будете сопровождать великолепный танец природы.\n' +
    'Очень приятно отдыхать в нашем Стандартном номере, который сопровождает захватывающий дух вид в мир Utopia World…\n',
  images: [
    {
      id: 'stda-1',
      url: 'https://cdn.utopiahotels.com/assets/images/pages/01worldstandartroom-xl.webp',
      alt: 'Стандартный номер виллы — интерьер',
    },
    {
      id: 'stda-2',
      url: 'https://cdn.utopiahotels.com/assets/images/pages/02worldstandartroom-xl.webp',
      alt: 'Стандартный номер виллы — спальня',
    },
    {
      id: 'stda-3',
      url: 'https://cdn.utopiahotels.com/assets/images/pages/03worldstandartroom-xl.webp',
      alt: 'Стандартный номер виллы — балкон с видом',
    },
  ],
};
export const cornerSuit = {
  title: 'Corner Suite',
  description: 'Мы предлагаем отдых, выходящий за рамки роскоши, в нашем номере Corner Suite.\n' +
    'Вы можете насладиться видом на Средиземное море из крытого джакузи и расслабиться, как пожелаете, в его просторной зоне.\n' +
    '\n',
  images: [
    {
      id: 'corner-1',
      url: 'https://cdn.utopiahotels.com/assets/images/pages/cornersuitworld02-xl.webp',
      alt: 'Стандартный номер виллы — интерьер',
    },
    {
      id: 'corner-2',
      url: 'https://cdn.utopiahotels.com/assets/images/pages/cornersuitworld03-xl.webp',
      alt: 'Стандартный номер виллы — спальня',
    },
    {
      id: 'corner-3',
      url: 'https://cdn.utopiahotels.com/assets/images/pages/cornersuitworld04-xl.webp',
      alt: 'Стандартный номер виллы — балкон с видом',
    },
  ],
};
export const juniorSuit = {
  title: 'Junior Suite',
  description: 'Junior Suite предлагает комфортное жилое пространство для больших семей благодаря 2 отдельным спальням.\n',
  images: [
    {
      id: 'junior-1',
      url: 'https://cdn.utopiahotels.com/assets/images/pages/juniorsuitgaleri02-xl.webp',
      alt: 'Стандартный номер виллы — интерьер',
    },
    {
      id: 'junior-2',
      url: 'https://cdn.utopiahotels.com/assets/images/pages/juniorsuitgaleri03-xl.webp',
      alt: 'Стандартный номер виллы — спальня',
    },
    {
      id: 'junior-3',
      url: 'https://cdn.utopiahotels.com/assets/images/pages/juniorsuitgaleri04-xl.webp',
      alt: 'Стандартный номер виллы — балкон с видом',
    },
  ],
};
export const penthouseSuit = {
  title: 'Penthouse Suit',
  description: 'Комната, предназначенная для вашего комфорта, где вы можете дышать тишиной вечера и одновременно наблюдать за Средиземным морем на своей террасе.\n',
  images: [
    {
      id: 'Penthouse-1',
      url: 'https://cdn.utopiahotels.com/assets/images/pages/dubelxroomworld01-xl.webp',
      alt: 'Стандартный номер виллы — интерьер',
    },
    {
      id: 'Penthouse-2',
      url: 'https://cdn.utopiahotels.com/assets/images/pages/dubelxroomworld02-xl.webp',
      alt: 'Стандартный номер виллы — спальня',
    },
    {
      id: 'Penthouse-3',
      url: 'https://cdn.utopiahotels.com/assets/images/pages/dubelxroomworld03-xl.webp',
      alt: 'Стандартный номер виллы — балкон с видом',
    },
  ],
};


export function Rooms() {
  return (
    <section className={styles.rooms}>
      <h2 className={styles.rooms__title}>Наши номера & сьюты</h2>

      <Tabs defaultValue={'rooms'} className={styles.tabs}>
        <div className={'container'}>
          <TabsList className={styles.tabs__trigerList}>
            <TabsTrigger className={styles.tabs__trigger} value={'rooms'}>Номера</TabsTrigger>
            <TabsTrigger className={styles.tabs__trigger} value={'suites'}>Сьюты</TabsTrigger>
          </TabsList>
          <TabsContent value={'rooms'}>
            <Carousel className="w-full">
              <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <RoomTab {...roomTabMock} />
                    </div>
                  </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <RoomTab {...roomTabMockSTDA} />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
          <TabsContent value={'suites'}>
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <RoomTab {...cornerSuit} />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <RoomTab {...juniorSuit} />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <RoomTab {...penthouseSuit} />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
}