import { getTotalTabBarBottomPadding } from "@/components/spy/constants";
import React from "react";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

const ExplorePage = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        paddingLeft: 96,
        paddingBottom: getTotalTabBarBottomPadding() - insets.bottom,
      }}
    >
      <ScrollView className="h-full">
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
        <Text>ExplorePage</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExplorePage;
