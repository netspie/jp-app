import { View, Text } from "react-native";
import React from "react";
import SpyButton from "./SpyButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Href } from "expo-router";

type SpyEditableListProps = {
  title?: string;
  createHref?: Href;
  createButtonShown?: boolean;
  children?: React.ReactNode;
  className?: string;
  addButtonClassName?: string;
};

const SpyEditableList = (props: SpyEditableListProps) => {
  return (
    <View className={`relative gap-2 ${props.className}`}>
      <View className="relative flex-row items-end">
        {props.title ? (
          <Text className="font-bold text-md max-w-full flex-grow">
            {props.title}
          </Text>
        ) : null}
        {(props.createButtonShown === undefined || props.createButtonShown) ? (
          <View className="">
            <SpyButton
              href={props.createHref}
              className={`bg-primary right-0 w-3 h-3 items-center justify-center ${props.addButtonClassName}`}
            >
              <Ionicons
                name="add"
                size={20}
                color={"white"}
                className="absolute"
              />
            </SpyButton>
          </View>
        ) : null}
      </View>
      {props.children}
    </View>
  );
};

export default SpyEditableList;
