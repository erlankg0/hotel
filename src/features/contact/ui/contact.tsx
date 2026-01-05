import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { SiFacebook, SiInstagram, SiWhatsapp, SiX } from 'react-icons/si';


import { Separator } from '@/shared/ui/separator';

import styles from './styles.module.scss';

export function Contact() {
  return (
    <article className={styles.contact}>
      <h3 className={styles.contact__title}>Наши контакты</h3>

      <div className={styles.contact__info}>
        <p className={styles.contact__name}>Utopia World</p>

        <address className={styles.contact__contacts}>
          <Link href="tel:+902425262222" aria-label="Позвонить в Utopia World">
            <Phone size={16} />
            <span>+90 (242) 526 22 22</span>
          </Link>

          <Link
            href="https://wa.me/905336508164"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в WhatsApp Utopia World"
          >
            <SiWhatsapp size={16} color={'green'} />
            <span> +90 533 650 81 64</span>
          </Link>

          <Link
            href="mailto:sales@utopiaworld.com.tr"
            aria-label="Написать письмо в Utopia World"
          >
            <Mail size={16} />
            <span>sales@utopiaworld.com.tr</span>
          </Link>

          <Link
            href="https://www.google.com/maps/dir/?api=1&destination=Beldesi+Karagedik+Mavkii,+Merkez+Sk.,+07430+Alanya+Antalya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Открыть адрес на карте"
          >
            <MapPin size={16} />
            <span>
              Beldesi Karagedik Mavkii, Merkez Sk., 07430 Alanya / Antalya
            </span>
          </Link>
        </address>

        <Separator />
        <h4>Наши Социальный сети</h4>
        <ul className={styles.contact__list}>
          <li>
            <Link href={'https://vk.com/utopiaworldtr'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 101 100" fill="none">
                <g clip-path="url(#clip0_2_40)">
                  <path
                    d="M0.5 48C0.5 25.3726 0.5 14.0589 7.52944 7.02944C14.5589 0 25.8726 0 48.5 0H52.5C75.1274 0 86.4411 0 93.4706 7.02944C100.5 14.0589 100.5 25.3726 100.5 48V52C100.5 74.6274 100.5 85.9411 93.4706 92.9706C86.4411 100 75.1274 100 52.5 100H48.5C25.8726 100 14.5589 100 7.52944 92.9706C0.5 85.9411 0.5 74.6274 0.5 52V48Z"
                    fill="#0077FF" />
                  <path
                    d="M53.7085 72.042C30.9168 72.042 17.9169 56.417 17.3752 30.417H28.7919C29.1669 49.5003 37.5834 57.5836 44.25 59.2503V30.417H55.0004V46.8752C61.5837 46.1669 68.4995 38.667 70.8329 30.417H81.5832C79.7915 40.5837 72.2915 48.0836 66.9582 51.1669C72.2915 53.6669 80.8336 60.2086 84.0836 72.042H72.2499C69.7082 64.1253 63.3754 58.0003 55.0004 57.1669V72.042H53.7085Z"
                    fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_2_40">
                    <rect width="100" height="100" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </li>
          <li>
            <Link href={'https://www.instagram.com/utopiaworldtr/'} target={'_blank'}>
              <SiInstagram size={24} color={'rose'} />
            </Link>
          </li>
          <li>
            <Link href={'https://www.facebook.com/UtopiaWorld'} target={'_blank'}>
              <SiFacebook size={24} color={'blue'} />
            </Link>
          </li>
          <li>
            <Link href={'https://x.com/utopiaworldtr'} target={'_blank'}>
              <SiX color={'black'} size={24} />
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}
