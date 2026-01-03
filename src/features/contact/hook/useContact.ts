import { create } from 'zustand';

import type { ContactStore } from '../model/type';

export const useContact = create<ContactStore>((set) => ({
  isOpen: false,
  setIsOpen: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
}));
