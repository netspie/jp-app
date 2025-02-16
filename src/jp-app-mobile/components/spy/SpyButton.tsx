import {
  GestureResponderEvent,
  StyleProp,
  Text,
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
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const SpyButton = (props: ButtonProps) => {
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

const ButtonTouchable = React.forwardRef(
  (props: ButtonProps, ref: ForwardedRef<View>) => {
    return (
      <TouchableOpacity
        ref={ref}
        onPress={props.onPress}
        className={`${clsx("bg-primary-200 rounded-md px-4 py-4")} ${props.className}`}
        style={props.style}
      >
        {typeof props.children === 'string' && (
          <Text className="font-bold text-center">{props.children}</Text>
        )}

        {(React.isValidElement(props.children) || Array.isArray(props.children)) &&
          props.children}
      </TouchableOpacity>
    );
  }
);
export default SpyButton;
