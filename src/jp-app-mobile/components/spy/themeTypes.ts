import { useAppColorScheme } from "./useAppColorScheme";

export type ThemeColors = {
  primary: string;
  secondary: string;
  tertiary: string;
  accent: string;
  grey: string;
  greyLight: string;
  normal: string;
};

export type DynamicThemes = {
  [themeName: string]: {
    light: ThemeColors;
    dark: ThemeColors;
  };
};

export const useCurrentThemeColors = (themeColors: DynamicThemes) => {
  const { appColorScheme } = useAppColorScheme();

  const currentThemeColors = themeColors?.["classic"]?.[appColorScheme];
  return { currentThemeColors };
};
