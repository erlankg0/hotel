import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type HotelStore = {
  hotelId: string | null;
  setHotelId: (hotelId: string) => void;
  clearHotel: () => void;
};

export const useHotelSwitch = create<HotelStore>()(
  persist(
    (set) => ({
      hotelId: null,

      setHotelId: (hotelId) => set({ hotelId }),

      clearHotel: () => set({ hotelId: null }),
    }),
    {
      name: 'hotel-store',
    },
  ),
);