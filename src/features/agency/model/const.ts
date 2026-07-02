import { CategoryEmail, CategoryAgency } from './enum';

export const emailCategories = [
  { value: CategoryEmail.GENERAL, label: 'Общий' },
  { value: CategoryEmail.GUEST_RELATION, label: 'Отношения с гостями' },
  { value: CategoryEmail.CONTACT, label: 'Контактный' },
  { value: CategoryEmail.STOP_SALE, label: 'Стоп-продажа' },
  { value: CategoryEmail.INFO, label: 'Информационный' },
  { value: CategoryEmail.OTHER, label: 'Другое' },
];

export const categoryOptions = [
  { label: 'Агенство', value: CategoryAgency.AGENCY },
  { label: 'Туроператора', value: CategoryAgency.TOUR },
];
