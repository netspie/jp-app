import { View, Text, useWindowDimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingsPage = () => {
  const { width } = useWindowDimensions();
  const isLargeScreen = width > 600;

  return (
    <SafeAreaView className={`bg-white h-full`}>
      <Text>SettingsPage</Text>
    </SafeAreaView>
  );
};

export default SettingsPage;
