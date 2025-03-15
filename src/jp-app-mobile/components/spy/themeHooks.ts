import { useColorThemeStore } from "./colorThemeStore";
import { defaultThemeVariables } from "./themeTypes";
import { useAppColorScheme } from "./useAppColorScheme";

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
