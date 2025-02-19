import { ScrollView, View } from "react-native";
import React from "react";
import SpyView from "./SpyView";
import { SafeAreaView } from "react-native-safe-area-context";

type SafeScrollViewProps = {
  children?: React.ReactNode;
  className?: string;
  scrollViewClassName?: string;
  safe?: boolean;
};

const SpyPageContent = (props: SafeScrollViewProps) => {
  return (
    <>
      {(props.safe === undefined || props.safe) && (
        <SafeAreaView
          className={`relative flex-col bg-white w-full h-full ${props.className}`}
        >
          <ScrollView contentContainerClassName={`relative h-fit w-full p-3`}>
            <SpyView>{props.children}</SpyView>
          </ScrollView>
        </SafeAreaView>
      )}

      {!props.safe && (
        <View
          className={`relative flex-col bg-white w-full h-full ${props.className}`}
        >
          <ScrollView contentContainerClassName={`relative h-fit w-full p-3`}>
            <SpyView>{props.children}</SpyView>
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default SpyPageContent;
