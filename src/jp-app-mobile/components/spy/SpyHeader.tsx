import { StyleProp, TextStyle } from "react-native";
import SpyText from "./SpyText";
import { twMerge } from "tailwind-merge";

export type SpyHeaderProps = {
  children?: string;
  className?: string;
  style?: StyleProp<TextStyle>;
};

const SpyHeader = (props: SpyHeaderProps) => {
  return (
    <SpyText
      className={twMerge(
        "text-center text-3xl uppercase font-bold text-primary my-4 px-8",
        props.className
      )}
      style={props.style}
    >
      {props.children}
    </SpyText>
  );
};

export default SpyHeader;
