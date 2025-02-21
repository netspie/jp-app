import { Text, TextStyle } from "react-native";
import React from "react";
import clsx from "clsx";

type SpyTextProps = {
  className?: string;
  style?: TextStyle;
  children?: string;
};

const SpyText = (props: SpyTextProps) => {
  return (
    <Text className={`${clsx('text-paragraph')} ${props.className}`} style={props.style}>
      {props.children}
    </Text>
  );
};

export default SpyText;
