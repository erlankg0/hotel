export type SidebarStore = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  toggleSidebar: () => void;
  closeSidebar: () => void;
};
