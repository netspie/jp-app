import { View, Text } from "react-native";
import React from "react";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";

type SpyBottomSheetTextInputProps = {
  label?: string;
  className?: string;
};

const SpyBottomSheetTextInput = (props: SpyBottomSheetTextInputProps) => {
  return (
    <View className={`gap-2 ${props.className}`}>
      {props.label && <Text className="text-sm font-bold">Project Name</Text>}
      <BottomSheetTextInput className="text-2xl bg-accent-100" />
    </View>
  );
};

export default SpyBottomSheetTextInput;
