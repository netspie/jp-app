import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { twMerge } from "tailwind-merge";
import SpyView from "./SpyView";

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
          className={twMerge(
            "relative flex-col bg-transparent w-full h-full",
            props.className
          )}
        >
          <ScrollView contentContainerClassName={`relative h-fit w-full p-3`}>
            <SpyView>{props.children}</SpyView>
          </ScrollView>
        </SafeAreaView>
      )}

      {!props.safe && (
        <View
          className={twMerge(
            "relative flex-col md:items-center bg-transparent w-full h-full",
            props.className
          )}
        >
          <ScrollView contentContainerClassName={`relative h-fit w-full p-3 md:w-[672px] md:w-[672px] lg:w-[872px]`}>
            <SpyView>{props.children}</SpyView>
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default SpyPageContent;
