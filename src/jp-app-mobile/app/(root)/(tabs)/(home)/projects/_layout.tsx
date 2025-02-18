import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: "#ffffff" },
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShadowVisible: false,
          title: "Projects",
          headerTitle: "Projects",
        }}
      />
      <Stack.Screen
        name="create"
        options={{
          presentation: "modal"
        }}
      />
    </Stack>
  );
};

export default RootLayout;
