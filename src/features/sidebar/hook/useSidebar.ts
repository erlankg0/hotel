import { create } from 'zustand';

import type { SidebarStore } from '../model/type';

export const useSidebar = create<SidebarStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) =>
    set({
      isOpen,
    }),
  toggleSidebar: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
  closeSidebar: () =>
    set({
      isOpen: false,
    }),
}));
