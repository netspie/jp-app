import React from "react";
import { View } from "react-native";

export type SpyViewProps = {
  children?: React.ReactNode;
  className?: string;
};

const SpyView = (props: SpyViewProps) => {
  return (
    <View className={`relative w-full h-full gap-2 ${props.className}`}>
      {props.children}
    </View>
  );
};

export default SpyView; 