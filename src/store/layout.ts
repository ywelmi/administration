import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export type LayoutState = {
  flip: boolean;
  darkMode: boolean;
  toggleSidebar: boolean;
  menuPined: boolean;
  pinedMenus: string[];
  layoutName: string;
  responsiveSearch: boolean;
  scroll: boolean;
  margin: number;

  setFlip: () => void;
  setDarkMode: () => void;
  setToggleSidebar: (v: boolean) => void;
  togglePinedMenu: () => void;
  handlePined: (menu: string) => void;
  handleResponsiveToggle: () => void;
  setResponsiveSearch: () => void;
  toggleScrollMenu: () => void;
  scrollToLeft: () => void;
  scrollToRight: () => void;
};

export const useLayoutStore = create<LayoutState>()(
  immer((set) => ({
    flip: false,
    darkMode: false,
    toggleSidebar: false,
    menuPined: false,
    pinedMenus: [],
    layoutName: "",
    responsiveSearch: false,
    scroll: false,
    margin: 0,
    setFlip: () =>
      set((draft: LayoutState) => {
        draft.flip = !draft.flip;
      }),
    setDarkMode: () => {
      set((draft: LayoutState) => {
        if (draft.darkMode) {
          document.body.classList.remove("light");
          document.body.classList.add("dark-only");
        } else {
          document.body.classList.remove("dark-only");
          document.body.classList.add("light");
        }
        draft.darkMode = !draft.darkMode;
      });
    },
    setToggleSidebar: (v: boolean) => {
      set((draft: LayoutState) => {
        draft.toggleSidebar = v;
      });
    },
    togglePinedMenu: () => {
      set((draft: LayoutState) => {
        draft.menuPined = !draft.menuPined;
      });
    },
    handlePined: (menu) =>
      set((draft: LayoutState) => {
        if (draft.pinedMenus.includes(menu)) {
          let filterMenus = draft.pinedMenus.filter((item) => item !== menu);
          draft.pinedMenus = filterMenus;
        } else {
          draft.pinedMenus = [...draft.pinedMenus, menu];
        }
      }),
    handleResponsiveToggle: () => {
      set((draft: LayoutState) => {
        draft.toggleSidebar = true;
      });
    },
    setResponsiveSearch: () => {
      set((draft: LayoutState) => {
        draft.responsiveSearch = !draft.responsiveSearch;
      });
    },
    toggleScrollMenu: () => {
      set((draft: LayoutState) => {
        draft.scroll = !draft.scroll;
      });
    },
    scrollToLeft() {
      set((draft: LayoutState) => {
        draft.margin += 500;
      });
    },
    scrollToRight() {
      set((draft: LayoutState) => {
        draft.margin -= 500;
      });
    },
  })),
);
