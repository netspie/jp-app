import React from "react";
import SpyStack, {
  createDefaultStackScreenOptions,
} from "@/components/spy/SpyStack";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <SpyStack top>
      <Stack.Screen name="index" options={createDefaultStackScreenOptions()} />
    </SpyStack>
  );
};

export default RootLayout;
