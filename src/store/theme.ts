import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import ConfigDB from "../Config/ThemeConfig";

const default_color = ConfigDB.data.color.primary_color;
const secondary_color = ConfigDB.data.color.secondary_color;
const mix_layout = ConfigDB.data.color.mix_background_layout;

export type ThemeState = {
  layout: string;
  colorBackground1: string;
  colorBackground2: string;
  mix_background_layout: string;
  openCus: boolean;
  sidebarIconType: string;
  colorLight: {
    primary: string;
    secondary: string;
  };
  setLayout: (layout: string) => void;
  setOpenCus: (openCus: boolean) => void;
  setColorBackground1: (bg: string) => void;
  setColorBackground2: (bg: string) => void;
  setMixBackgroundLayout: (layout: string) => void;
  setColorLight: (color: {
    primary: string;
    secondary: string;
  }) => void;
};

export const useThemeStore = create<ThemeState>()(
  immer((set) => ({
    layout: ConfigDB.data.settings.layout_class,
    colorBackground1: default_color,
    colorBackground2: secondary_color,
    mix_background_layout: mix_layout,
    openCus: false,
    sidebarIconType: "stroke",
    colorLight: {
      primary: default_color,
      secondary: secondary_color,
    },
    setLayout: (layout: string) =>
      set((state: ThemeState) => {
        state.layout = layout;
      }),
    setOpenCus: (openCus: boolean) =>
      set((state: ThemeState) => {
        state.openCus = openCus;
      }),
    setColorBackground1: (bg: string) =>
      set((state: ThemeState) => {
        state.colorBackground1 = bg;
      }),
    setColorBackground2: (bg: string) =>
      set((state: ThemeState) => {
        state.colorBackground2 = bg;
      }),
    addSidebarIconType: (icon: string) =>
      set((state: ThemeState) => {
        ConfigDB.data.settings.sidebar.iconType = icon;
        state.sidebarIconType = icon;
        state.openCus = false;
      }),
    setMixBackgroundLayout: (layout: string) =>
      set((state: ThemeState) => {
        state.mix_background_layout = layout;
      }),
    setColorLight: (color) =>
      set((state: ThemeState) => {
        state.colorLight = color;
      }),
  })),
);
