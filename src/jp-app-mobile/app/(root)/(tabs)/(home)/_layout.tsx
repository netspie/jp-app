import React from "react";
import { Stack } from "expo-router";
import useIsLargeScreen from "@/components/spy/useIsLargeScreen ";
import { View } from "react-native";
import { TAB_BAR_WIDTH } from "@/components/spy/constants";

const RootLayout = () => {
  const isLargeScreen = useIsLargeScreen();

  return (
    <View
      className={`w-full h-full`}
      style={{ paddingLeft: isLargeScreen ? TAB_BAR_WIDTH : 0 }}
    >
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: "#ffffff" },
          headerShown: false,
          title: "",
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
            headerShadowVisible: false,
            headerBackTitle: "Back",
          }}
        />
      </Stack>
    </View>
  );
};

export default RootLayout;
