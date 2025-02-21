import {
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { ForwardedRef } from "react";
import { Href, Link } from "expo-router";
import SpyText from "./SpyText";
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

type ButtonProps = {
  children?: React.ReactNode | string;
  className?: string;
  href?: Href;
  style?: StyleProp<ViewStyle> | undefined;
  textClassName?: string
  textStyle?: StyleProp<TextStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const SpyButton = (props: ButtonProps) => {
  return (
    <>
      {props.href ? (
        <Link className="h-fit" href={props.href} asChild>
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
        className={twMerge("rounded-md p-4 bg-gray-100", clsx(props.className))}
        style={props.style}
      >
        {typeof props.children === "string" ? (
          <SpyText className={twMerge("font-bold text-center", props.textClassName)} style={props.textStyle}>
            {props.children}
          </SpyText>
        ) : null}

        {React.isValidElement(props.children) || Array.isArray(props.children)
          ? props.children
          : null}
      </TouchableOpacity>
    );
  }
);
export default SpyButton;
