import React from "react";
import { Tabs } from "expo-router";
import { Platform, Text, useWindowDimensions, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import useIsLargeScreen from "@/components/spy/useIsLargeScreen ";
import { TAB_BAR_HEIGHT, TAB_BAR_WIDTH } from "@/components/spy/constants";

const TabIcon = (
  {
    focused,
    icon,
    title,
  }: {
    focused: boolean;
    icon: any;
    title: string;
  },
  className?: string
) => (
  <View className={`flex-1 flex flex-col items-center ${className}`}>
    {icon}
    {/* <Text
      className={`${
        focused ? "text-primary-300" : "text-black-200"
      } text-xs w-full text-center mt-1`}
    >
      {title}
    </Text> */}
  </View>
);

const TabsLayout = () => {
  const isLargeScreen = useIsLargeScreen();

  return (
    <Tabs
      screenOptions={{
        // tabBarShowLabel: false,
        tabBarVariant: isLargeScreen ? "material" : "uikit",
        tabBarPosition: isLargeScreen ? "left" : "bottom",
        tabBarLabelPosition: "below-icon",
        tabBarActiveBackgroundColor: "transparent",
        tabBarItemStyle: {
          padding: 0,
          margin: 0,
          marginTop: isLargeScreen ? 0 : 12,
          height: isLargeScreen ? TAB_BAR_HEIGHT : undefined,
        },
        tabBarLabelStyle: {
          padding: 0,
          margin: 0,
          minHeight: 200,
        },
        tabBarIconStyle: {
          padding: 0,
          margin: 0,
        },
        tabBarActiveTintColor: "red",
        tabBarStyle: {
          display: "flex",
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#FF3B301A",
          borderTopWidth: 1,
          width: isLargeScreen ? TAB_BAR_WIDTH : "100%",
          height: isLargeScreen ? "100%" : TAB_BAR_HEIGHT,
          paddingBottom: isLargeScreen ? 0 : Platform.OS !== "android" ? 75 : 0,
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          headerShown: false,
          headerTitle: "Home",
          headerBackTitleStyle: {
            fontSize: 0
          },
          tabBarLabelPosition: "below-icon",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={<Ionicons name="home" size={18} color="black" style={{ color: focused ? "red" : "unset"}} />}
              focused={focused}
              title="Home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={<Ionicons name="expand-outline" size={18} color="black" style={{ color: focused ? "red" : "unset"}} />}
              focused={focused}
              title="Explore"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={<Ionicons name="settings" size={18} color="black" style={{ color: focused ? "red" : "unset"}} />}
              focused={focused}
              title="Settings"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
