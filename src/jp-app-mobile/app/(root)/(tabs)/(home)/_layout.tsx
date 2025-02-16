import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: "#ffffff" }, headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          headerShadowVisible: false,
          headerBackTitle: "Back",
          title: "Home",
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default RootLayout;
