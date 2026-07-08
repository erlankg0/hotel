export enum Category {
  GENERAL = 'GENERAL',
  GUEST_RELATION = 'GUEST_RELATION',
  INFO = 'INFO',
  STOP_SALE = 'STOP_SALE',
  CONTACT = 'CONTACT',
  OTHER = 'OTHER',
}

export enum CategoryAgency {
  AGENCY = 'AGENCY',
  TOUR = 'TOUR',
}

export const contactCategories = [
  { value: Category.GENERAL, label: 'Общий' },
  { value: Category.GUEST_RELATION, label: 'Отношения с гостями' },
  { value: Category.CONTACT, label: 'Контактный' },
  { value: Category.STOP_SALE, label: 'Стоп-продажа' },
  { value: Category.INFO, label: 'Информационный' },
  { value: Category.OTHER, label: 'Другое' },
];

export const categoryOptions = [
  { label: 'Агенство', value: CategoryAgency.AGENCY },
  { label: 'Туроператора', value: CategoryAgency.TOUR },
];
