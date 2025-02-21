import SpyTabs, {
  createDefaultTabScreenOptions,
} from "@/components/spy/SpyTabs";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <SpyTabs>
      <Tabs.Screen
        name="(home)"
        options={createDefaultTabScreenOptions("Home", "home")}
      />
      <Tabs.Screen
        name="explore"
        options={createDefaultTabScreenOptions("Explore", "airplane")}
      />
      <Tabs.Screen
        name="settings"
        options={createDefaultTabScreenOptions("Settings", "settings")}
      />
    </SpyTabs>
  );
};

export default TabsLayout;
