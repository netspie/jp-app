import { View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import useIsLargeScreen from "./useIsLargeScreen ";
import { TAB_BAR_WIDTH } from "./constants";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { useCurrentThemeColors } from "./themeHooks";

type SpyTabStackProps = {
  children?: React.ReactNode;
  top?: boolean;
};

const SpyStack = (props: SpyTabStackProps) => {
  const isLargeScreen = useIsLargeScreen();

  return (
    <View
      className={`relative flex flex-col w-full h-full`}
      style={{
        paddingLeft: isLargeScreen && props.top === true ? TAB_BAR_WIDTH : 0,
        position: "relative",
      }}
    >
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            margin: 0,
            height: "auto",
            position: "relative",
            display: "flex",
          },
        }}
      >
        {props.children}
      </Stack>
    </View>
  );
};

export const createDefaultStackOptions = (
  options?: NativeStackNavigationOptions
) => {
  return {
    headerShown: false,
    headerShadowVisible: false,
    ...options,
  };
};

export const createDefaultStackScreenOptions = (
  options?: NativeStackNavigationOptions
): NativeStackNavigationOptions => {
  const { currentThemeColors } = useCurrentThemeColors();

  return {
    contentStyle: {
      backgroundColor: currentThemeColors.background,
      height: "100%",
    },
    headerShown: false,
    headerShadowVisible: false,
    ...options,
  };
};

export default SpyStack;
