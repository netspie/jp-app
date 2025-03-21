import React from "react";
import { Platform, Switch } from "react-native";
import { useCurrentThemeColors } from "./themeHooks";

export type SpySwitchProps = {
    value: boolean;
    onValueChanged: (value: boolean) => void; 
};

function SpySwitch(props: SpySwitchProps) {
  const { currentThemeColors } = useCurrentThemeColors();

  const getMainColor = () => currentThemeColors.secondary;
  const getDisabledColor = () => currentThemeColors.grey;

  const getThumbColor = () => {
    if (Platform.OS === "ios") return "white";
    else return getMainColor();
  };

  return (
    <Switch
      trackColor={{ true: getMainColor(), false: getDisabledColor() }}
      thumbColor={getThumbColor()}
      ios_backgroundColor={getDisabledColor()}
      value={props.value}
      onValueChange={props.onValueChanged}
      {...Platform.select({
        web: {
          activeThumbColor: getMainColor(),
        },
      })}
    />
  );
}

export default SpySwitch;
