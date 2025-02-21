import { Platform, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type SpySafeAreaViewProps = {
  children?: React.ReactNode;
};

const SpySafeAreaView = (props: SpySafeAreaViewProps) => {
  return (
    <SafeAreaView className={["web", "android"].includes(Platform.OS)  ? "mt-2" : ""}>
      {props.children}
    </SafeAreaView>
  );
};

export default SpySafeAreaView;
