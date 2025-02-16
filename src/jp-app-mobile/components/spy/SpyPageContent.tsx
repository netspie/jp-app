import { ScrollView } from "react-native";
import React from "react";
import SpyView from "./SpyView";
import { SafeAreaView } from "react-native-safe-area-context";

type SafeScrollViewProps = {
  children?: React.ReactNode;
  className?: string;
  scrollViewClassName?: string;
};

const SpyPageContent = (props: SafeScrollViewProps) => {
  return (
    <SafeAreaView
      className={`relative flex-col bg-white w-full h-full ${props.className}`}
    >
      <ScrollView
        contentContainerClassName={`relative h-full w-full p-3`}
      >
        <SpyView>{props.children}</SpyView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpyPageContent;
