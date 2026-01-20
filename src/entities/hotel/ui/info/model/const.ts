import { Clock, MapPin, Mail, Phone } from 'lucide-react';

import type { InfoType } from './type';


export const HOTEL_INFO: InfoType[] = [
  {
    icon: Clock,
    title: 'Заезд',
    content: '14:00',
  },
  {
    icon: Clock,
    title: 'Выезд',
    content: '12:00',
  },
  {
    icon: MapPin,
    title: 'Местоположение',
    content: 'Kargıcak, Аланья',
  },
];

export const HOTEL_CONTACTS: InfoType[] = [
  {
    icon: Phone,
    link: {
      href: 'tel:+902425262222',
      aria_label: 'Позвонить в Utopia World',
    },
    title: 'Телефон',
    content: '+90(242)52-62-222',
  },
  {
    icon: Phone,
    title: 'WhatsApp',
    content: '+905336508164',
    link: {
      href: 'https://wa.me/905336508164',
      aria_label: 'Позвонить в Utopia World WhatsApp',
    },
  },
  {
    icon: Mail,
    title: 'E-Mail',
    content: 'sales@utopiaworld.com.tr',
    link: {
      href: 'mailto:sales@utopiaworld.com.tr',
      aria_label: 'Написать э-почту',
    },
  },
];