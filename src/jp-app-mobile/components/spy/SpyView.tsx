import React from "react";
import { View } from "react-native";
import { twMerge } from "tailwind-merge";

export type SpyViewProps = {
  children?: React.ReactNode;
  className?: string;
  row?: boolean
  fit?: boolean
};

const SpyView = (props: SpyViewProps) => {
  const rowClass = props.row === true ? " flex-row" : " w-full";
  const fitClass = props.fit === true ? " w-fit" : "";

  return (
    <View className={twMerge("relative h-fit gap-2" + rowClass + fitClass, props.className)}>
      {props.children}
    </View>
  );
};

export default SpyView;
