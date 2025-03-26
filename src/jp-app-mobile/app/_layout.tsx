import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { SplashScreen, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import "./globals.css";

import { SpyThemeProvider } from "@/components/spy/SpyThemeProvider";
import { useColorThemeStore } from "@/components/spy/colorThemeStore";
import { useEffect } from "react";
import jpThemes from "./themes";

import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { ActivityIndicator, LogBox } from "react-native";
import { tokenCache } from "./tokenCache";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useReactQueryDevTools } from "@dev-plugins/react-query";
import { useAuth } from "@clerk/clerk-react";
import { createDefaultStackScreenOptions } from "@/components/spy/SpyStack";
import queryClient from "./queryClient";
import InitialLayout from "./(root)/_layout";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}

LogBox.ignoreLogs(["Clerk: Clerk has been loaded with development keys"]);

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const setTheme = useColorThemeStore((x) => x.setTheme);
  useEffect(() => setTheme(jpThemes), []);

  return (
    <QueryClientProvider client={queryClient}>
      <SpyThemeProvider>
        <GestureHandlerRootView>
          <BottomSheetModalProvider>
            <ClerkProvider
              publishableKey={publishableKey}
              tokenCache={tokenCache}
            >
              <ClerkLoaded>
                <InitialLayout />
              </ClerkLoaded>
            </ClerkProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SpyThemeProvider>
    </QueryClientProvider>
  );
}
