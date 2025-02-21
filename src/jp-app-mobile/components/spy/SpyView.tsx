import React from "react";
import { View } from "react-native";
import { twMerge } from "tailwind-merge";

export type SpyViewProps = {
  children?: React.ReactNode;
  className?: string;
};

const SpyView = (props: SpyViewProps) => {
  return (
    <View className={twMerge("relative w-full h-fit gap-2", props.className)}>
      {props.children}
    </View>
  );
};

export default SpyView;
