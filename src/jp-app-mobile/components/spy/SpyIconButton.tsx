import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";
import SpyButton from "./SpyButton";
import React from "react";

type SpyIconButtonProps = {
  children: React.ReactNode
  className?: string;
  style?: StyleProp<ViewStyle> | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const SpyIconButton = (props: SpyIconButtonProps) => {
  return (
    <SpyButton onPress={props.onPress} className={`bg-primary-300 p-0 m-0 ${props.className}`} style={props.style}>
      {props.children}
    </SpyButton>
  );
};

export default SpyIconButton;