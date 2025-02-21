import React from "react";
import { Tabs } from "expo-router"
import SpyTabs, { createOptions as createDefaulTabScreenOptions } from "@/components/spy/SpyTabs";
import { useCurrentThemeColors } from "@/components/spy/themeTypes";

const TabsLayout = () => {
  const { currentThemeColors } = useCurrentThemeColors()

  return (
    <SpyTabs>
      <Tabs.Screen name="(home)" options={createDefaulTabScreenOptions("Home", "home")} />
      <Tabs.Screen name="explore" options={createDefaulTabScreenOptions("Explore", "airplane")} />
      <Tabs.Screen name="settings" options={createDefaulTabScreenOptions("Settings", "settings")} />
    </SpyTabs>
  );
};

export default TabsLayout;
