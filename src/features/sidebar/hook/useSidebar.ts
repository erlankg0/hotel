import { create } from 'zustand';

import type { SidebarStore } from '../model/type';

export const useSidebar = create<SidebarStore>((set) => ({
  isOpen: false,
  setIsOpen: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),

}));
