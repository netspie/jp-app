import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Switch } from "react-native";
import { useAppColorScheme } from "./useAppColorScheme";

import { Platform, View } from "react-native";

type SpyDarkModeSwitchProps = {
  disabledColor: string;
  mainColor: string;
};

const SpyDarkModeSwitch = (props: SpyDarkModeSwitchProps) => {
  const { appColorScheme, toggleAppColorScheme } = useAppColorScheme();

  const isDarkMode = () => appColorScheme == "dark";

  const getMainColor = () => props.mainColor;
  const getDisabledColor = () => props.disabledColor;

  const getThumbColor = () => {
    if (Platform.OS === 'ios' && isDarkMode()) return "white"
    else return getMainColor();
  };

  return (
    <View className="flex-row items-center gap-4 mx-2">
      <Ionicons
        name="sunny"
        size={20}
        color={isDarkMode() ? getDisabledColor() : getMainColor()}
      />
      <Switch
        trackColor={{ true: getMainColor(), false: getDisabledColor() }}
        thumbColor={getThumbColor()}
        ios_backgroundColor={getDisabledColor()}
        value={isDarkMode()}
        onValueChange={toggleAppColorScheme}
        {...Platform.select({
          web: {
            activeThumbColor: getMainColor(),
          },
        })}
      />
      <Ionicons
        name="moon"
        size={20}
        color={!isDarkMode() ? getDisabledColor() : getMainColor()}
      />
    </View>
  );
};

export default SpyDarkModeSwitch;
