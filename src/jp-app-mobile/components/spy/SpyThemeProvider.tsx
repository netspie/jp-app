import { createContext } from "react";
import { View } from "react-native";
import { useCurrentThemeColorVariables } from "./themeHooks";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<{
  theme: "light" | "dark";
}>({
  theme: "light",
});

export const SpyThemeProvider = (props: ThemeProviderProps) => {
  const { currentThemeColorVariables, appColorScheme } =
    useCurrentThemeColorVariables();

  return (
    <ThemeContext.Provider value={{ theme: appColorScheme }}>
      <View style={currentThemeColorVariables} className="flex-1">
        {props.children}
      </View>
    </ThemeContext.Provider>
  );
};
