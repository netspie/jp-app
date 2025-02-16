import React from "react";
import { Tabs } from "expo-router";
import { Image, Text, useWindowDimensions, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

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
    <Text
      className={`${
        focused ? "text-primary-300" : "text-black-200"
      } text-xs w-full text-center mt-1`}
    >
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  const { width } = useWindowDimensions();
  const isLargeScreen = width > 600;

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarVariant: isLargeScreen ? "material" : "uikit",
        tabBarPosition: isLargeScreen ? "left" : "bottom",
        tabBarLabelPosition: "below-icon",
        tabBarActiveBackgroundColor: "transparent",
        tabBarItemStyle: {
          padding: 0,
          margin: 0,
          marginTop: isLargeScreen ? 0 : 12,
          height: isLargeScreen ? 65 : undefined,
        },
        tabBarLabelStyle: {
          padding: 0,
          margin: 0,
        },
        tabBarIconStyle: {
          padding: 0,
          margin: 0,
        },
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#FF3B301A",
          borderTopWidth: 1,
          width: isLargeScreen ? 75 : "100%",
          height: isLargeScreen ? "100%" : 65,
          paddingBottom: isLargeScreen ? 0 : 75,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={<Ionicons name="home" size={18} color="black" />}
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
              icon={<Ionicons name="expand-outline" size={18} color="black" />}
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
              icon={<Ionicons name="settings" size={18} color="black" />}
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
