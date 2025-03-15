import React from "react";
import SpyStack, { createDefaultStackScreenOptions } from "@/components/spy/SpyStack";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <SpyStack>
      <Stack.Screen name="index" options={createDefaultStackScreenOptions()} />
      <Stack.Screen name="[id]" options={createDefaultStackScreenOptions()} />
      <Stack.Screen name="create" options={createDefaultStackScreenOptions({ presentation: "modal" })} />
    </SpyStack>
  );
};

export default RootLayout;
