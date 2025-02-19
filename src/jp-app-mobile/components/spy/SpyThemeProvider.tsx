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
  const { value } = useAppColorScheme();

  return (
    <ThemeContext.Provider value={{ theme: value }}>
      <View style={props.themes["classic"][value]} className="flex-1">
        {props.children}
      </View>
    </ThemeContext.Provider>
  );
};
