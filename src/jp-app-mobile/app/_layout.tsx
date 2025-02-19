import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import "./globals.css";

import { ThemeProvider } from "@/components/spy/SpyThemeProvider";
import { themes } from "./themes";

export default function RootLayout() {
  return (
    <ThemeProvider themes={themes}>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
