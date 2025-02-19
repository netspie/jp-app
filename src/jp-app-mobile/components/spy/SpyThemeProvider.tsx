import { useColorScheme } from "nativewind";
import { createContext, useEffect, useState } from "react";
import { Platform, View } from "react-native";
import { useAppColorScheme } from "./useAppColorScheme";

interface ThemeProviderProps {
  children: React.ReactNode;
  themes: {
    [key: string]: {
      light: { [key: string]: string };
      dark: { [key: string]: string };
    };
  };
}

export const ThemeContext = createContext<{
  theme: "light" | "dark";
}>({
  theme: "light",
});

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { appColorScheme } = useAppColorScheme();
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setColorScheme(colorScheme)
  }, [appColorScheme]);

  return (
    <ThemeContext.Provider value={{ theme: colorScheme }}>
      <View style={props.themes["classic"][colorScheme]} className="flex-1">
        {props.children}
      </View>
    </ThemeContext.Provider>
  );
};
