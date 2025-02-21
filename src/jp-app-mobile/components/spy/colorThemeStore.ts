import { create } from "zustand";
import {
  createThemes as createVariableThemes,
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
  setTheme: (theme: DynamicThemes) => void;
};

export const useColorThemeStore = create<ColorThemeStore>((set) => ({
  theme: defaultTheme,
  themeVariables: {},
  setTheme: (theme: DynamicThemes) => {
    var themeVariables = createVariableThemes(theme);
    set(() => ({ theme: theme, themeVariables: themeVariables }));
  },
}));
