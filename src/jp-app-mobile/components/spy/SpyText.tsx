import { StyleProp, Text, TextStyle } from "react-native";
import React from "react";
import { twMerge } from "tailwind-merge";

type SpyTextProps = {
  className?: string;
  style?: StyleProp<TextStyle>;
  children?: string;
};

const SpyText = (props: SpyTextProps) => {
  return (
    <Text
      className={twMerge("text-paragraph", props.className)}
      style={props.style}
    >
      {props.children}
    </Text>
  );
};

export default SpyText;
