import { useAppColorScheme } from "./useAppColorScheme";
import { useColorThemeStore } from "./colorThemeStore";
import { vars } from "nativewind";

export type ThemeColors = {
  primary: string;
  secondary: string;
  tertiary: string;
  accent: string;
  grey: string;
  greyLight: string;
  paragraph: string;
  background: string;
};

export type DynamicThemes = {
  [themeName: string]: {
    light: ThemeColors;
    dark: ThemeColors;
  };
};

export const defaultThemeColors: ThemeColors = {
  primary: "black", // Purple
  secondary: "gray", // Light pink
  tertiary: "green", // Green
  accent: "#f9c04a", // Yellow
  grey: "#979797", // Grey
  greyLight: "#F1F3F5", // Light grey
  paragraph: "black", // Black
  background: "#F4F4F4", // Light background grey
};

export type ThemeVariables = {
  [key: string]: {
    light: { [key: string]: string };
    dark: { [key: string]: string };
  };
};

export const defaultThemeVariables = vars({
  "--color-primary-default": "#593DA4", // Purple
  "--color-secondary-default": "#FC94A0", // Light pink
  "--color-tertiary-default": "green", // Green
  "--color-accent-default": "#f9c04a", // Yellow
  "--color-grey-default": "#979797", // Grey
  "--color-greyLight-default": "#F1F3F5", // Light grey
  "--color-paragraph-default": "black", // Black
  "--color-background": "#F4F4F4", // Light background grey
});

export const useCurrentThemeColors = () => {
  const { appColorScheme } = useAppColorScheme();
  const theme = useColorThemeStore((x) => x.theme);

  const currentThemeColors = theme?.["classic"]?.[appColorScheme];
  return { currentThemeColors, appColorScheme };
};

export const useCurrentThemeColorVariables = () => {
  const { appColorScheme } = useAppColorScheme();
  const themeVariables = useColorThemeStore((x) => x.themeVariables);

  return {
    currentThemeColorVariables:
      themeVariables["classic"]?.[appColorScheme] ?? defaultThemeVariables,
    appColorScheme,
  };
};

export function createThemes(themes: DynamicThemes) {
  var themeVariableEntries = Object.entries(themes).map((theme) => {
    return {
      key: theme[0],
      value: {
        light: vars(createSchemeVariables(theme[1].light)),
        dark: vars(createSchemeVariables(theme[1].dark)),
      },
    };
  });

  return Object.fromEntries(themeVariableEntries.map((x) => [x.key, x.value]));
}

function createSchemeVariables(themeColors: ThemeColors) {
  const themeColorsEntries = Object.entries(themeColors);
  const variablesEntries = themeColorsEntries.map((x) => ({
    key: "--color-" + x[0] + "-default",
    value: x[1],
  }));

  const schemeVariables = Object.create(null);
  variablesEntries.forEach((kv) => (schemeVariables[kv.key] = kv.value));

  return schemeVariables;
}
