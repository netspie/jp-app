import React from "react";
import SpyStack, { createDefaultStackScreenOptions } from "@/components/spy/SpyStack";
import { Stack } from "expo-router";

const CollectionsLayout = () => {
  return (
    <SpyStack>
      <Stack.Screen name="[id]" options={createDefaultStackScreenOptions()} />
    </SpyStack>
  );
};

export default CollectionsLayout;
