import { DynamicThemes } from "@/components/spy/themeTypes";
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
      normal: "black",
      background: "#F4F4F4",
    },
    dark: {
      primary: "#FC94A0",
      secondary: "#593DA4",
      tertiary: "green",
      accent: "#f9c04a",
      grey: "#979797",
      greyLight: "#B2B2B2",
      normal: "#E2E2E2",
      background: "#030303",
    },
  },
};

export const jpThemeColorVariables = {
  classic: {
    light: vars({
      "--color-primary-default": "#593DA4",
      "--color-secondary-default": "#FC94A0",
      "--color-tertiary-default": "green",
      "--color-accent-default": "#f9c04a",
      "--color-grey-default": "#979797",
      "--color-grey-light-default": "#F1F3F5",
      "--color-normal-default": "black",
      "--color-background": "#F4F4F4",
    }),
    dark: vars({
      "--color-primary-default": "#FC94A0",
      "--color-secondary-default": "#593DA4",
      "--color-tertiary-default": "green",
      "--color-accent-default": "#f9c04a",
      "--color-grey-default": "#979797",
      "--color-grey-light-default": "#B2B2B2",
      "--color-normal-default": "#E2E2E2",
      "--color-background-default": "#030303",
    }),
  },
};
