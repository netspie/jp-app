import { ScrollView, View } from "react-native";
import React from "react";
import SpyView from "./SpyView";

type SafeScrollViewProps = {
  children?: React.ReactNode;
  className?: string;
  scrollViewClassName?: string;
};

const SpyPageContent = (props: SafeScrollViewProps) => {
  return (
    <View
      className={`relative flex-col bg-white w-full h-full ${props.className}`}
    >
      <ScrollView
        contentContainerClassName={`relative h-full w-full p-3`}
      >
        <SpyView>{props.children}</SpyView>
      </ScrollView>
    </View>
  );
};

export default SpyPageContent;
