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
  children: React.ReactNode | string;
  className?: string;
  href?: Href;
  style?: StyleProp<ViewStyle> | undefined;
  textStyle?: StyleProp<TextStyle> | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const SpyButton = (props: ButtonProps) => {
  return (
    <>
      {props.href && (
        <Link href={props.href} asChild>
          <ButtonTouchable {...props} />
        </Link>
      )}
      {props.href === undefined && <ButtonTouchable {...props} />}
    </>
  );
};

const ButtonTouchable = React.forwardRef(
  (props: ButtonProps, ref: ForwardedRef<View>) => {
    return (
      <TouchableOpacity
        ref={ref}
        onPress={props.onPress}
        className={`${clsx("bg-primary-200 rounded-md px-4 py-4")} ${clsx(props.className)}`}
        style={props.style}
      >
        {typeof props.children === 'string' && (
          <Text className="font-bold text-center" style={props.textStyle}>{props.children}</Text>
        )}

        {(React.isValidElement(props.children) || Array.isArray(props.children)) &&
          props.children}
      </TouchableOpacity>
    );
  }
);
export default SpyButton;
