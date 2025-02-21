import { Platform } from "react-native";

export const TAB_BAR_WIDTH = 70;
export const TAB_BAR_HEIGHT = 65;
export const TAB_BAR_PADDING_BOTTOM = 75;
export const TAB_BAR_PADDING_BOTTOM_IOS = 85;

export function getTotalTabBarHeight() {
  return TAB_BAR_HEIGHT + getTotalTabBarBottomPadding();
}

export function getTotalTabBarBottomPadding() {
  if (Platform.OS === "ios") {
    return TAB_BAR_PADDING_BOTTOM_IOS;
  }

  return TAB_BAR_PADDING_BOTTOM;
}
