import {
  DynamicThemes,
  useCurrentThemeColors,
} from "@/components/spy/themeTypes";
import { vars } from "nativewind";

export const jpThemeColors: DynamicThemes = {
  classic: {
    light: {
      primary: "#593DA4",
      secondary: "#FC94A0",
      tertiary: "green",
      accent: "#f9c04a",
      grey: "#979797",
      greyLight: "#F1F3F5",
    },
    dark: {
      primary: "#FC94A0",
      secondary: "#593DA4",
      tertiary: "green",
      accent: "#f9c04a",
      grey: "#979797",
      greyLight: "#B2B2B2",
    },
  },
};

const themes = {
  classic: {
    light: vars({
      "--color-primary-default": jpThemeColors.classic.light.primary,
      "--color-secondary-default": jpThemeColors.classic.light.secondary,
      "--color-tertiary-default": jpThemeColors.classic.light.tertiary,
      "--color-accent-default": jpThemeColors.classic.light.accent,
      "--color-grey-default": jpThemeColors.classic.light.grey,
      "--color-grey-light-default": jpThemeColors.classic.light.greyLight,
    }),
    dark: vars({
      "--color-primary-default": jpThemeColors.classic.dark.primary,
      "--color-secondary-default": jpThemeColors.classic.dark.secondary,
      "--color-tertiary-default": jpThemeColors.classic.dark.tertiary,
      "--color-accent-default": jpThemeColors.classic.dark.accent,
      "--color-grey-default": jpThemeColors.classic.dark.grey,
      "--color-grey-light-default": jpThemeColors.classic.dark.greyLight,
    }),
  },
};

export default themes;

export const useThemeColors = () => {
  const { currentThemeColors } = useCurrentThemeColors(jpThemeColors);
  const themeColors = currentThemeColors;
  return { themeColors };
};
