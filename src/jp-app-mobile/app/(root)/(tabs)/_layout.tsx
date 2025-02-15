import React from "react";
import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: any;
  title: string;
}) => (
  <View className="flex-1 mt-3 flex flex-col items-center">
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
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#FF3B301A",
          borderTopWidth: 1,
          minHeight: 70,
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
