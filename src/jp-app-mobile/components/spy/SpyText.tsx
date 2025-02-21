import { StyleProp, Text, TextStyle } from "react-native";
import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

type SpyTextProps = {
  className?: string;
  style?: StyleProp<TextStyle>;
  children?: string;
};

const SpyText = (props: SpyTextProps) => {
  return (
    <Text
      className={twMerge(clsx("text-paragraph"), props.className ?? "")}
      style={props.style}
    >
      {props.children}
    </Text>
  );
};

export default SpyText;
