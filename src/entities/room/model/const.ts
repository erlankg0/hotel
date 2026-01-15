import type { RoomTabData } from './type';

export const stdv: RoomTabData = {
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
  info: {
    view: 'land',
    balcony: true,
    beds: [{ type: 'TWIN', count: 1 }, { type: 'SNG', count: 1 }, { type: 'EXTRA', count: 1 }],
    floors: '3-4',
    maxCapacity: 3,
    size: 33.4,
    bathCount: 1,
    bedRoomCount: 1,
  },
};
export const stda: RoomTabData = {
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
  info: {
    view: 'land',
    balcony: true,
    beds: [{ type: 'TWIN', count: 1 }, { type: 'SNG', count: 1 }, { type: 'EXTRA', count: 1 }],
    floors: '1-6',
    maxCapacity: 3,
    size: 30,
    bathCount: 1,
    bedRoomCount: 1,
  },
};
export const corner: RoomTabData = {
  title: 'Corner Suite',
  description: 'Мы предлагаем отдых, выходящий за рамки роскоши, в нашем номере Corner Suite.\n' +
    'Вы можете насладиться видом на Средиземное море из крытого джакузи и расслабиться, как пожелаете, в его просторной зоне.',
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
  info: {
    view: 'sea-land',
    balcony: true,
    beds: [{ type: 'TWIN', count: 1 }, { type: 'SNG', count: 1 }, { type: 'EXTRA', count: 1 }],
    floors: '2-6',
    maxCapacity: 4,
    size: 55,
    bathCount: 2,
    bedRoomCount: 1,
  },
};
export const junior: RoomTabData= {
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
  info: {
    view: 'sea-land',
    balcony: true,
    beds: [{ type: 'TWIN', count: 2 }, { type: 'SNG', count: 1 }, { type: 'EXTRA', count: 1 }],
    floors: '2-6',
    maxCapacity: 5,
    size: 70,
    bathCount: 2,
    bedRoomCount: 2,
  },
};
export const penthouse: RoomTabData = {
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
  info: {
    view: 'sea-land',
    balcony: true,
    beds: [{ type: 'TWIN', count: 2 }, { type: 'SNG', count: 1 }, { type: 'EXTRA', count: 1 }],
    floors: '2-6',
    maxCapacity: 5,
    size: 70,
    bathCount: 2,
    bedRoomCount: 2,
  },
};