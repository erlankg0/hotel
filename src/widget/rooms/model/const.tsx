import { RoomTab } from '@/entities/room';
import { SwiperUI } from '@/widget/swiper';

const roomTabMock = {
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
const roomTabMockSTDA = {
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
const cornerSuit = {
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
const juniorSuit = {
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
const penthouseSuit = {
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

export const ROOM_TABS = [
  {
    value: 'room',
    label: 'Номера',
    content: (
      <SwiperUI
        delay={5000}
        controls
        navs
        slidesPerView={1}
        spaceBetween={24}
        slides={[
          <div key={1} className="p-1">
            <RoomTab {...roomTabMock} />
          </div>,
          <div key={2} className="p-1">
            <RoomTab {...roomTabMockSTDA} />
          </div>,
        ]}
      />
    ),
  },
  {
    value: 'suite',
    label: 'Сьюты',
    content: (
      <SwiperUI
        delay={5000}
        controls
        navs
        slidesPerView={1}
        spaceBetween={24}
        slides={[
          <div key={1} className="p-1">
            <RoomTab {...cornerSuit} />
          </div>,
          <div key={2} className="p-1">
            <RoomTab {...juniorSuit} />
          </div>,
          <div key={3} className="p-1">
            <RoomTab {...penthouseSuit} />
          </div>,
        ]}
      />
    ),
  },
];
