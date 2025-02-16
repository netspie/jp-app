import { Platform, ScrollView, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useIsLargeScreen from "./useIsLargeScreen ";
import { TAB_BAR_LEFT_PADDING_CLASS } from "./constants";

type SafeScrollViewProps = {
  children?: React.ReactNode;
  className?: string;
  scrollViewClassName?: string;
};

const SafeScrollView = (props: SafeScrollViewProps) => {
  const isLargeScreen = useIsLargeScreen();

  return (
    <SafeAreaView
      className={`relative flex-col bg-white w-full h-full p-3 ${props.className}`}
    >
      <ScrollView
        contentContainerClassName={`relative h-full w-full ${
          Platform.OS === "web" && "p-3"
        } ${isLargeScreen && TAB_BAR_LEFT_PADDING_CLASS} ${
          props.scrollViewClassName
        }`}
      >
        <View className="relative w-full h-full gap-2">{props.children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SafeScrollView;
