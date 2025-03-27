import React from "react";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { twMerge } from "tailwind-merge";

type SpySafeAreaViewProps = {
  children?: React.ReactNode;
  className?: string;
};

const SpySafeAreaView = (props: SpySafeAreaViewProps) => {
  return (
    <SafeAreaView
      className={twMerge("bg-background", props.className)}
      style={{
        marginTop: ["web", "android"].includes(Platform.OS) ? 8 : 0,
        flexShrink: 1,
      }}
    >
      {props.children}
    </SafeAreaView>
  );
};

export default SpySafeAreaView;
