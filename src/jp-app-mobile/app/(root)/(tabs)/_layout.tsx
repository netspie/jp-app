import React from "react";
import { Tabs } from "expo-router"
import SpyTabs, { createOptions } from "@/components/spy/SpyTabs";
import { useCurrentThemeColors } from "@/components/spy/themeTypes";

const TabsLayout = () => {
  const { currentThemeColors } = useCurrentThemeColors()

  return (
    <SpyTabs>
      <Tabs.Screen name="(home)" options={createOptions("Home", "home", currentThemeColors.secondary)} />
      <Tabs.Screen name="explore" options={createOptions("Explore", "airplane", currentThemeColors.secondary)} />
      <Tabs.Screen name="settings" options={createOptions("Settings", "settings", currentThemeColors.secondary)} />
    </SpyTabs>
  );
};

export default TabsLayout;
