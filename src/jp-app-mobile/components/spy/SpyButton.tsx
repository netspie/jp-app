import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { ForwardedRef } from "react";
import clsx from "clsx";
import { Href, Link } from "expo-router";

type ButtonProps = {
  children?: React.ReactNode | string;
  className?: string;
  href?: Href;
  style?: StyleProp<ViewStyle> | undefined;
  textClassName?: string
  textStyle?: StyleProp<TextStyle> | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const SpyButton = (props: ButtonProps) => {
  return (
    <>
      {props.href ? (
        <Link href={props.href} asChild>
          <ButtonTouchable {...props} />
        </Link>
      ) : null}
      {props.href === undefined ? <ButtonTouchable {...props} /> : null}
    </>
  );
};

const ButtonTouchable = React.forwardRef(
  (props: ButtonProps, ref: ForwardedRef<View>) => {
    return (
      <TouchableOpacity
        ref={ref}
        onPress={props.onPress}
        className={`${clsx("bg-primary-200 rounded-md px-4 py-4")} ${
          props.className
        }`}
        style={props.style}
      >
        {typeof props.children === "string" ? (
          <Text className={`font-bold text-center ${props.textClassName}`} style={props.textStyle}>
            {String(props.children)}
          </Text>
        ) : null}

        {React.isValidElement(props.children) || Array.isArray(props.children)
          ? props.children
          : null}
      </TouchableOpacity>
    );
  }
);
export default SpyButton;
