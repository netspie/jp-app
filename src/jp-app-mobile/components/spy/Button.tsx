import { Text, TouchableOpacity } from "react-native";
import React from "react";

type ButtonProps = {
  children: React.ReactNode | string;
  className?: string;
};

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity
      className={`bg-primary-200 rounded-md px-4 py-4 ${props.className}`}
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
