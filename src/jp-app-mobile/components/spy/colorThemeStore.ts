import { create } from "zustand";
import {
  defaultThemeVariables,
  DynamicThemes,
  ThemeVariables,
} from "./themeTypes";

const defaultTheme = {
  classic: {
    light: {
      primary: "#FFF",
      secondary: "#FFF",
      tertiary: "#FFF",
      accent: "#FFF",
      grey: "#FFF",
      greyLight: "#FFF",
      normal: "#FFF",
      background: "#FFF",
    },
    dark: {
      primary: "#FFF",
      secondary: "#FFF",
      tertiary: "#FFF",
      accent: "#FFF",
      grey: "#FFF",
      greyLight: "#FFF",
      normal: "#FFF",
      background: "#FFF",
    },
  },
};

type ColorThemeStore = {
  theme: DynamicThemes;
  themeVariables: ThemeVariables;
  setTheme: (theme: DynamicThemes, themeVariables: ThemeVariables) => void;
};

export const useColorThemeStore = create<ColorThemeStore>((set) => ({
  theme: defaultTheme,
  themeVariables: {},
  setTheme: (theme: DynamicThemes, themeVariables: ThemeVariables) => {
    set(() => ({ theme: theme, themeVariables: themeVariables }));
  },
}));
