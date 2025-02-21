import React from "react";
import { Tabs } from "expo-router"
import SpyTabs, { createDefaultTabScreenOptions } from "@/components/spy/SpyTabs";
import { useCurrentThemeColors } from "@/components/spy/themeTypes";

const TabsLayout = () => {
  const { currentThemeColors } = useCurrentThemeColors()

  return (
    <SpyTabs>
      <Tabs.Screen name="(home)" options={createDefaultTabScreenOptions("Home", "home")} />
      <Tabs.Screen name="explore" options={createDefaultTabScreenOptions("Explore", "airplane")} />
      <Tabs.Screen name="settings" options={createDefaultTabScreenOptions("Settings", "settings")} />
    </SpyTabs>
  );
};

export default TabsLayout;
