import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{ contentStyle: { backgroundColor: "#ffffff" }, title: "Projects"}}>
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
