import { useColorScheme } from "nativewind";
import { Platform } from "react-native";
import { useEffect, useCallback } from "react";
import { useColorSchemeStore } from "./colorSchemeStore";

export const useAppColorScheme = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const store = useColorSchemeStore();

  useEffect(() => {
    const currentColorScheme =
      Platform.OS === "web" ? localStorage.getItem("colorScheme") : colorScheme;

    const newColorScheme =
      currentColorScheme == null || currentColorScheme == "light"
        ? "light"
        : "dark";

    store.setValue(newColorScheme);
  }, []);

  const toggleAppColorScheme = useCallback(() => {
    if (Platform.OS === "web") {
      const colorScheme = localStorage.getItem("colorScheme");
      const newColorScheme =
        colorScheme == null || colorScheme == "light" ? "dark" : "light";

      store.setValue(newColorScheme);
      localStorage.setItem("colorScheme", newColorScheme);
    } else {
      toggleColorScheme();
      store.setValue(store.value == "light" ? "dark" : "light");
    }
  }, [store.value]);

  const appColorScheme = store.value;
  return { appColorScheme, toggleAppColorScheme };
};
