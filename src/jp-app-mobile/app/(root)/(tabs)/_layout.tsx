import React from "react";
import { Tabs } from "expo-router"
import SpyTabs, { createOptions } from "@/components/spy/SpyTabs";
import { useThemeColors } from "@/app/themes";

const TabsLayout = () => {
  const { themeColors } = useThemeColors()

  return (
    <SpyTabs>
      <Tabs.Screen name="(home)" options={createOptions("Home", "home", themeColors.secondary)} />
      <Tabs.Screen name="explore" options={createOptions("Explore", "airplane", themeColors.secondary)} />
      <Tabs.Screen name="settings" options={createOptions("Settings", "settings", themeColors.secondary)} />
    </SpyTabs>
  );
};

export default TabsLayout;
