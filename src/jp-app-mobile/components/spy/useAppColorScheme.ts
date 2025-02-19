import { useColorScheme } from "nativewind";
import { Platform } from "react-native";
import { useState, useEffect } from "react";

export const useAppColorScheme = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const [appColorScheme, setAppColorScheme] = useState<"light" | "dark">(
    "light"
  );

  useEffect(() => {
    const currentColorScheme =
      Platform.OS === "web" ? localStorage.getItem("colorScheme") : colorScheme;

    const newColorScheme =
      currentColorScheme == null || currentColorScheme == "light"
        ? "light"
        : "dark";

    setAppColorScheme(newColorScheme);
  }, []);

  const toggleAppColorScheme = () => {
    if (Platform.OS === "web") {
      const colorScheme = localStorage.getItem("colorScheme");
      const newColorScheme =
        colorScheme == null || colorScheme == "light" ? "dark" : "light";

      setAppColorScheme(newColorScheme);
      localStorage.setItem("colorScheme", newColorScheme);
    } else {
      setAppColorScheme(colorScheme == undefined || "light" ? "dark" : "light");
      toggleColorScheme();
    }
  };

  return { appColorScheme, toggleAppColorScheme };
};
