import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: "#ffffff" }, headerShown: false, title: "Project" }}>
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: false,
          headerShadowVisible: false,
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default RootLayout;
