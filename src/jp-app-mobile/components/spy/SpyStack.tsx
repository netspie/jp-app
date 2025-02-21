import { View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import useIsLargeScreen from "./useIsLargeScreen ";
import { TAB_BAR_WIDTH } from "./constants";
import { useCurrentThemeColors } from "./themeTypes";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

type SpyTabStackProps = {
  children?: React.ReactNode;
  top?: boolean;
};

const SpyStack = (props: SpyTabStackProps) => {
  const isLargeScreen = useIsLargeScreen();
  const { currentThemeColors } = useCurrentThemeColors();

  return (
    <View
      className={`w-full h-full`}
      style={{
        paddingLeft: isLargeScreen && props.top === true ? TAB_BAR_WIDTH : 0,
      }}
    >
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: currentThemeColors.background,
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

export default SpyStack;
