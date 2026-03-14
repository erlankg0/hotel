export const HERO = {
  preTitle: 'Анимация',
  subtitle: 'Utopia World поднимет ваш отдых на необыкновенный уровень благодаря различным мероприятиям. Погрузитесь в волшебную атмосферу Утопии.',
  title: ['Шоу центр', 'After Шоу', 'Концерты', 'Ночной Клуб', 'Турецкая ночь', 'Спортивные активности'],
  video: 'https://cdn.utopiahotels.com/assets/videos/covers/uw-enter.mp4',
  poster: 'https://cdn.utopiahotels.com/assets/images/pages/080220221940-lg.jpg',
};

export const GRID = [
  {
    images: {
      url: '/images/party.webp',
      alt: 'Шоу центр',
    },
    video: { url: '/video/FIRESHOW.MOV', alt: 'Шоу Центр' },
    aspectRatio: '2 / 1',
    gridRow: 'span 2',
    gridColumn: 'span 2',
    title: 'Концерты',
    text: 'Где вы можете добавить красок к своим вечерам и освежить свою любовь к различными мероприятиями',
  },
  {
    images: {
      url: '/images/turkish.webp',
      alt: 'Турецкая ночь',
    },
    video: { url: '/video/FASIL.mp4', alt: 'Турецкая ночь' },
    aspectRatio: '2 / 1',
    gridRow: 'span 2',
    gridColumn: 'span 2',
    title: 'Турецкая ночь',
    text: 'Вы можете насладиться разными моментами с \'Sıra gecesi\' один из важный событий турецкой культуры',
  },
  {
    images: {
      url: '/images/after.webp',
      alt: 'After шоу',
    },
    video: { url: '/video/AFTER.mp4', alt: 'After Шоу' },
    aspectRatio: '2 / 1',
    gridRow: 'span 2',
    gridColumn: 'span 2',
    title: 'After шоу',
    text: 'Не забываемые вечера после шоу, с живой музыкой.',
  },
  {
    images: {
      url: '/images/theme.webp',
      alt: 'Тематические развлечения',
    },
    video: { url: '/video/OCTOBER.mp4', alt: 'Тематические развлечения' },
    aspectRatio: '2 / 1',
    gridRow: 'span 2',
    gridColumn: 'span 2',
    title: 'Тематические развлечения',
    text: 'Вы стать свидетелем различных тематические мероприятии.',
  },
];

export const KIDSHERO = {
  preTitle: 'Семейный клуб',
  subtitle: 'Мы создали волшебный мир, в котором мы даем детям возможность свободно развлекаться в удобной и продуманной зоне, где семьи могут качественно проводить время со своими детьми.',
  video: '/video/MAMEPA.mp4',
  poster: '/images/poster.jpg',
};

export const GRIDKIDS = [
  {
    colSpan: 2,
    rowSpan: 1,
    image: { url: 'https://cdn.utopiahotels.com/assets/images/pages/002workshoplar-lg.jpg', alt: 'Мастер-Классы' },
    aspectRatio: '2 / 1',
    title: 'Мастер-Классы',
    text: 'Творческие мастер-классы, где дети могут создавать и учиться через игру.',
  },
  {
    colSpan: 2,
    rowSpan: 2,
    image: {
      url: '/images/bubble.webp',
      alt: 'Шоу программы',
    },
    aspectRatio: '2 / 1',
    title: 'Шоу программы',
    text: 'Яркие шоу и выступления, создающие атмосферу праздника.',
  },
  {
    colSpan: 1,
    rowSpan: 1,
    image: {
      url: '/images/mamepa2.webp',
      alt: 'Спортивные игры',
    },
    aspectRatio: '1 / 1',
    title: 'Спортивные игры',
    text: 'Активные и весёлые игры для наших маленьких гостей.',
  },
  {
    image: { url: '/images/mamepa1.webp', alt: 'Тематические праздники' },
    aspectRatio: '1 / 1',
    title: 'Тематические праздники',
    text: 'Где вы и ваши дети можете пережить захватывающие моменты.',

    colSpan: 1,
    rowSpan: 1,
  },
];

export const DAYS = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

export const PROGRAMTABLE = [
  [
    { title: 'BAMBINO', text: 'Сенсорные игры', time: '10:30', age: '1-3 года', rowSpan: 1 },
    { title: 'LUMO', text: 'Светящий столик', time: '10:30', age: '1-3 года', rowSpan: 1 },
    { title: 'SENTIDO', text: 'Художественное рисование', time: '10:30', age: '1-3 года', rowSpan: 1 },
    { title: 'CIBO', text: 'Кухня', time: '10:30', age: '1-3 года', rowSpan: 1 },
    { title: 'BAMBINO', text: 'Сенсорные игры', time: '10:30', age: '1-3 года', rowSpan: 1 },
    { title: 'LUMO', text: 'Светящий столик', time: '10:30', age: '1-3 года', rowSpan: 1 },
    { title: 'SENTIDO', text: 'Художественное рисование', time: '10:30', age: '1-3 года', rowSpan: 1 },
  ],

  [
    { title: 'ARTE', text: 'Художественная мастерская', time: '11:30', age: '4-12 лет', rowSpan: 1 },
    { title: 'TENIS', text: 'Теннисный корт', time: '11:30', age: '4-12 лет', rowSpan: 1 },
    { title: 'SCOUT', text: 'Эксперименты', time: '11:30', age: '4-12 лет', rowSpan: 1 },
    { title: 'NAMASTE', text: 'Йога', time: '11:30', age: '4-12 лет', rowSpan: 1 },
    { title: 'CULTURE', text: 'Пермальтура', time: '11:30', age: '4-12 лет', rowSpan: 1 },
    { title: 'CIBO', text: 'Кухня', time: '11:30', age: '4-12 лет', rowSpan: 1 },
    { title: 'MOTUS', text: 'Подвижные игры', time: '11:30', age: '4-12 лет', rowSpan: 1 },
  ],

  [
    { title: 'SONGO', text: 'Мастерская дизайна', time: '14:00', age: '4-12 лет', rowSpan: 1 },
    { title: 'RITMO', text: 'Музыка и ритмика', time: '14:00', age: '4-12 лет', rowSpan: 1 },
    { title: 'LUMO', text: 'Светящий столик', time: '14:00', age: '4-12 лет' },
    { title: 'SONGO', text: 'Мастерская дизайна', time: '14:00', age: '4-12 лет', rowSpan: 1 },
    { title: 'MOCTAIL', text: 'Мастерская коктейлей', time: '14:00', age: '4-12 лет', rowSpan: 1 },
    { title: 'CULTURE', text: 'Пермальтура', time: '14:00', age: '4-12 лет', rowSpan: 1 },
    { title: 'SONGO', text: 'Мастерская дизайна', time: '14:00', age: '4-12 лет', rowSpan: 1 },
  ],

  [
    { title: 'CIBO', text: 'Кухня', time: '15:00', age: '4-12 лет', rowSpan: 1 },
    { title: 'SONGO', text: 'Мастерская дизайна', time: '15:00', age: '4-12 лет', rowSpan: 1 },
    { title: 'ARTE', text: 'Художественная мастерская', time: '15:00', age: '4-12 лет', rowSpan: 1 },
    { title: 'LOUPE', text: 'Квест по поиску сокровищ', time: '15:00', age: '4-12 лет', rowSpan: 2 },
    { title: 'LUMO', text: 'Светящий столик', time: '15:00', age: '4-12 лет', rowSpan: 1 },
    { title: 'ARTE', text: 'Художественная мастерская', time: '15:00', age: '4-12 лет', rowSpan: 1 },
    { title: 'CIBO', text: 'Кухня', time: '15:00', age: '4-12 лет', rowSpan: 1 },
  ],

  [
    { title: 'MOTUS', text: 'Подвижные игры', time: '16:00', age: '4-12 лет', rowSpan: 1 },
    { title: 'BALOON', text: 'Шариковая вечеринка', time: '16:00', age: '4-12 лет', rowSpan: 2 },
    { title: 'CAMPO', text: 'Поход', time: '16:00', age: '4-12 лет', rowSpan: 2 },
    { title: 'CIBO', text: 'Кухня', time: '16:00', age: '4-12 лет', rowSpan: 1 },
    { title: 'RITMO', text: 'Музыка и ритмика', time: '16:00', age: '4-12 лет', rowSpan: 1 },
    { title: 'LUMO', text: 'Светящий столик', time: '16:00', age: '4-12 лет', rowSpan: 1 },
  ],

  [
    { title: 'MAGIC', text: 'Школа волшебства', time: '17:00', age: '4-12 лет', rowSpan: 1 },
    null,
    null,
    { title: 'BUBLE', text: 'Мыльные пузыри', time: '17:00', age: '4-12 лет', rowSpan: 1 },
    { title: 'SCOUT', text: 'Эксперименты', time: '17:00', age: '4-12 лет', rowSpan: 1 },
    { title: 'SONGO', text: 'Мастерская дизайна', time: '17:00', age: '4-12 лет', rowSpan: 1 },
    { title: 'SCOUT', text: 'Эксперименты', time: '17:00', age: '4-12 лет', rowSpan: 1 },
  ],

  [
    { title: 'DISKO', text: 'Дискотека', time: '20:30', age: '4-12 лет', rowSpan: 1 },
    { title: 'DISKO', text: 'Дискотека', time: '20:30', age: '4-12 лет', rowSpan: 1 },
    { title: 'DISKO', text: 'Дискотека', time: '20:30', age: '4-12 лет', rowSpan: 1 },
    { title: 'DISKO', text: 'Дискотека', time: '20:30', age: '4-12 лет', rowSpan: 1 },
    { title: 'DISKO', text: 'Дискотека', time: '20:30', age: '4-12 лет', rowSpan: 1 },
    { title: 'DISKO', text: 'Дискотека', time: '20:30', age: '4-12 лет', rowSpan: 1 },
    { title: 'DISKO', text: 'Дискотека', time: '20:30', age: '4-12 лет', rowSpan: 1 },
  ],

  [
    { title: 'FUNFAIR', text: 'Семейное время', time: '19:30 - 23:00', age: '4-12 лет', rowSpan: 1 },
    { title: 'FUNFAIR', text: 'Семейное время', time: '19:30 - 23:00', age: '4-12 лет', rowSpan: 1 },
    { title: 'FUNFAIR', text: 'Семейное время', time: '19:30 - 23:00', age: '4-12 лет', rowSpan: 1 },
    { title: 'FUNFAIR', text: 'Семейное время', time: '19:30 - 23:00', age: '4-12 лет', rowSpan: 1 },
    { title: 'FUNFAIR', text: 'Семейное время', time: '19:30 - 23:00', age: '4-12 лет', rowSpan: 1 },
    { title: 'FUNFAIR', text: 'Семейное время', time: '19:30 - 23:00', age: '4-12 лет', rowSpan: 1 },
    { title: 'FUNFAIR', text: 'Семейное время', time: '19:30 - 23:00', age: '4-12 лет', rowSpan: 1 },
  ],
];
