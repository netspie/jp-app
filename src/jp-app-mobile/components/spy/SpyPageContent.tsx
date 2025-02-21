import React from "react";
import { Platform, ScrollView, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { twMerge } from "tailwind-merge";
import SpyView from "./SpyView";
import { getTotalTabBarBottomPadding } from "./constants";

type SafeScrollViewProps = {
  children?: React.ReactNode;
  className?: string;
  scrollViewClassName?: string;
  safe?: boolean;
};

const SpyPageContent = (props: SafeScrollViewProps) => {
  var insets = useSafeAreaInsets();

  const getPaddingBottom = () => {
    if (Platform.OS === "ios") {
      return getTotalTabBarBottomPadding() - insets.bottom;
    }

    return 0;
  };

  return (
    <>
      {(props.safe === undefined || props.safe) && (
        <SafeAreaView
          className={twMerge(
            "relative flex flex-col bg-transparent w-full h-full",
            props.className
          )}
          style={{
            paddingBottom: getPaddingBottom(),
          }}
        >
          <ScrollView
            className="w-full"
            contentContainerClassName={`relative p-3 items-center `}
          >
            <SpyView className="flex flex-col md:w-[672px] lg:w-[872px]">
              {props.children}
            </SpyView>
          </ScrollView>
        </SafeAreaView>
      )}

      {!props.safe && (
        <View
          className={twMerge(
            "bg-transparent w-full h-full",
            props.className
          )}
          style={{ paddingBottom: getPaddingBottom(), flexShrink: 1 }}
        >
          <ScrollView
            className="w-full"
            contentContainerClassName={`relative p-3 items-center `}
          >
            <SpyView className="flex flex-col md:w-[672px] lg:w-[872px]">
              {props.children}
            </SpyView>
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default SpyPageContent;
