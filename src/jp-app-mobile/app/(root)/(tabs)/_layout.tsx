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
        options={createDefaultTabScreenOptions("Learn", "book")}
      />
      <Tabs.Screen
        name="settings"
        options={createDefaultTabScreenOptions("Settings", "settings")}
      />
    </SpyTabs>
  );
};

export default TabsLayout;
