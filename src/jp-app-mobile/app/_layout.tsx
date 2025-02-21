import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import "./globals.css";

import { SpyThemeProvider } from "@/components/spy/SpyThemeProvider";
import { useColorThemeStore } from "@/components/spy/colorThemeStore";
import { useEffect } from "react";
import jpThemes from "./themes";

export default function RootLayout() {
  const setTheme = useColorThemeStore((x) => x.setTheme);
  useEffect(() => setTheme(jpThemes), []);

  return (
    <SpyThemeProvider>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SpyThemeProvider>
  );
}
