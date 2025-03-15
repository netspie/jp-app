import { useState } from "react";
import { Platform } from "react-native";
import SpyView from "./SpyView";
import Checkbox from "expo-checkbox";
import SpyText from "./SpyText";
import { useCurrentThemeColors } from "./themeHooks";

export type SpyCheckboxProps = {
  label: string;
  value?: boolean;
  onValueChange?: (value: boolean) => void;
};

const SpyCheckbox = (props: SpyCheckboxProps) => {
  const [isChecked, setChecked] = useState(props.value);
  const { currentThemeColors } = useCurrentThemeColors();

  return (
    <SpyView
      fit
      className={`flex-row ${Platform.OS !== "web" && "items-center"}`}
    >
      <Checkbox
        value={isChecked}
        onValueChange={(x) => {
          setChecked(x);
          props.onValueChange && props.onValueChange(x);
        }}
        color={isChecked ? currentThemeColors.secondary : undefined}
      />
      <SpyText
        className={`text-[12px] font-bold ${
          isChecked ? "text-secondary" : "text-primary"
        }`}
      >
        {props.label}
      </SpyText>
    </SpyView>
  );
};

export default SpyCheckbox;
