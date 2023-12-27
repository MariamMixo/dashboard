import create from 'zustand';

interface MenuStoreState {
  toggleMenu: boolean;
  selectedLayout: string | null; // Puedes utilizar el nombre del layout o un identificador único
  setToggleMenu: (value: boolean) => void;
  setSelectedLayout: (layout: string) => void;
}

export const useMenuStore = create<MenuStoreState>((set) => ({
  toggleMenu: false,
  selectedLayout: null,
  setToggleMenu: (value) => set({ toggleMenu: value }),
  setSelectedLayout: (layout) => set({ selectedLayout: layout }),
}));