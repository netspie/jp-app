import clsx from "clsx";
import React from "react";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type SpySafeAreaViewProps = {
  children?: React.ReactNode;
};

const SpySafeAreaView = (props: SpySafeAreaViewProps) => {
  return (
    <SafeAreaView
      style={{ marginTop: ["web", "android"].includes(Platform.OS) ? 8 : 0, flexShrink: 1 }}
    >
      {props.children}
    </SafeAreaView>
  );
};

export default SpySafeAreaView;
