import { stdv, stda, penthouse, junior, corner, RoomTab } from '@/entities/room';
import { SwiperUI } from '@/widget/swiper';

const SWIPER_CONFIG = {
  delay: 10000,
  controls: true,
  navs: true,
  slidesPerView: 1,
  spaceBetween: 24,
} as const;

const createRoomSlider = (rooms: typeof stdv[]) => (
  <SwiperUI
    {...SWIPER_CONFIG}
    slides={rooms.map((room, i) => (
      <div key={i} className="p-1">
        <RoomTab {...room} />
      </div>
    ))}
  />
);

export const ROOM_TABS = [
  {
    value: 'room',
    label: 'Номера',
    content: createRoomSlider([stdv, stda]),
  },
  {
    value: 'suite',
    label: 'Сьюты',
    content: createRoomSlider([corner, junior, penthouse]),
  },
];