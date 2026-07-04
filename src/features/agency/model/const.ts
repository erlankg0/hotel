import { CategoryContact, CategoryAgency } from './enum';

export const contactCategories = [
  { value: CategoryContact.GENERAL, label: 'Общий' },
  { value: CategoryContact.GUEST_RELATION, label: 'Отношения с гостями' },
  { value: CategoryContact.CONTACT, label: 'Контактный' },
  { value: CategoryContact.STOP_SALE, label: 'Стоп-продажа' },
  { value: CategoryContact.INFO, label: 'Информационный' },
  { value: CategoryContact.OTHER, label: 'Другое' },
];

export const categoryOptions = [
  { label: 'Агенство', value: CategoryAgency.AGENCY },
  { label: 'Туроператора', value: CategoryAgency.TOUR },
];
