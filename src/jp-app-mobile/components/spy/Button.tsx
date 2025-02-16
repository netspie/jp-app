import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React from "react";
import clsx from "clsx";
import { Href, Link } from "expo-router";

type ButtonProps = {
  children: React.ReactNode | string;
  className?: string;
  href?: Href;
  style?: StyleProp<ViewStyle> | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const Button = (props: ButtonProps) => {
  return (
    <>
      {props.href && (
        <Link href={props.href} asChild>
          <ButtonTouchable {...props} className="w-full"/>
        </Link>
      )}
      {props.href === undefined && <ButtonTouchable {...props} />}
    </>
  );
};

const ButtonTouchable = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      className={`${clsx("bg-primary-200 rounded-md px-4 py-4")} ${
        props.className
      }`}
      style={props.style}
    >
      {typeof props.children === "string" && (
        <Text className="font-bold text-center">{props.children}</Text>
      )}

      {(React.isValidElement(props.children) ||
        Array.isArray(props.children)) &&
        props.children}
    </TouchableOpacity>
  );
};

export default Button;
