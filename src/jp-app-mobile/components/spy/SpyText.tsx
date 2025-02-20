import { Text, TextStyle } from "react-native";
import React from "react";

type SpyTextProps = {
  className?: string;
  style?: TextStyle;
  children?: string;
};

const SpyText = (props: SpyTextProps) => {
  return (
    <Text className={`text-normal ${props.className}`} style={props.style}>
      {props.children}
    </Text>
  );
};

export default SpyText;
