'use client';


import Link from 'next/link';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';

import { useSidebar } from '@/features/sidebar';
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from '@/shared/ui/drawer';

import styles from './styles.module.scss';

import type { ReactNode } from 'react';

type NavItem = {
  href: string;
  label: ReactNode;
};

type SocialLink = {
  href: string;
  icon: ReactNode;
  label: string;
  newTab?: boolean;
};

const navItems: NavItem[] = [
  { href: '/rooms', label: 'Номера' },
  { href: '/food', label: 'Рестораны и бары' },
  { href: '/entertainment', label: 'Анимация' },
  { href: '/sport', label: 'Спортивная Академия' },
  {
    href: '/kids',
    label: (
      <>
        <span className={styles.brandRed}>Ma&</span>
        <span className={styles.brandGreen}>Me&</span>
        <span className={styles.brandBlue}>Pa</span>
        {' '}Семейный клуб
      </>
    ),
  },
  { href: '/aquapark', label: 'Аквапарк' },
  { href: '/beach', label: 'Пляж и бассейны' },
  { href: '/spa', label: 'Spa & Wellness' },
  { href: '/book', label: 'Бронирования' },
  { href: '/factsheet', label: 'Factsheet' },
];

const socialLinks: SocialLink[] = [
  {
    href: 'https://vk.com/utopiaworldtr',
    icon: <VkIcon />,
    label: 'VK',
  },
  {
    href: 'https://www.instagram.com/utopiaworldtr/',
    icon: <SiInstagram className={styles.instagramIcon} size={24} />,
    label: 'Instagram',
    newTab: true,
  },
  {
    href: 'https://www.facebook.com/UtopiaWorld',
    icon: <SiFacebook className={styles.facebookIcon} size={24} />,
    label: 'Facebook',
    newTab: true,
  },
  {
    href: 'https://x.com/utopiaworldtr',
    icon: <SiX className={styles.xIcon} size={24} />,
    label: 'X',
    newTab: true,
  },
];

export function SidebarUI() {
  const { closeSidebar, isOpen, setIsOpen } = useSidebar();

  return (
    <Drawer direction="left" onOpenChange={setIsOpen} open={isOpen}>
      <DrawerContent className={styles.sidebar}>
        <DrawerHeader>
          <DrawerTitle>Utopia World</DrawerTitle>
        </DrawerHeader>

        <nav aria-label="Основная навигация">
          <ul className={styles.nav}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={closeSidebar}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <DrawerFooter>
          <h4>Наши Социальные сети</h4>
          <ul className={styles.row}>
            {socialLinks.map((item) => (
              <li key={item.href}>
                <a
                  aria-label={item.label}
                  className={styles.socialLink}
                  href={item.href}
                  rel={item.newTab ? 'noopener noreferrer' : undefined}
                  target={item.newTab ? '_blank' : undefined}>
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function VkIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="24"
      viewBox="0 0 101 100"
      width="24"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#vk-icon-clip)">
        <path
          d="M0.5 48C0.5 25.3726 0.5 14.0589 7.52944 7.02944C14.5589 0 25.8726 0 48.5 0H52.5C75.1274 0 86.4411 0 93.4706 7.02944C100.5 14.0589 100.5 25.3726 100.5 48V52C100.5 74.6274 100.5 85.9411 93.4706 92.9706C86.4411 100 75.1274 100 52.5 100H48.5C25.8726 100 14.5589 100 7.52944 92.9706C0.5 85.9411 0.5 74.6274 0.5 52V48Z"
          fill="#0077FF"
        />
        <path
          d="M53.7085 72.042C30.9168 72.042 17.9169 56.417 17.3752 30.417H28.7919C29.1669 49.5003 37.5834 57.5836 44.25 59.2503V30.417H55.0004V46.8752C61.5837 46.1669 68.4995 38.667 70.8329 30.417H81.5832C79.7915 40.5837 72.2915 48.0836 66.9582 51.1669C72.2915 53.6669 80.8336 60.2086 84.0836 72.042H72.2499C69.7082 64.1253 63.3754 58.0003 55.0004 57.1669V72.042H53.7085Z"
          fill="#FFF"
        />
      </g>
      <defs>
        <clipPath id="vk-icon-clip">
          <rect fill="#FFF" height="100" transform="translate(0.5)" width="100" />
        </clipPath>
      </defs>
    </svg>
  );
}
