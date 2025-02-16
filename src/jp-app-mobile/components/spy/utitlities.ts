import { Platform } from "react-native";
import { TAB_BAR_HEIGHT } from "./constants";

export function getHorizontalTabBarHeight(isLargeScreen: boolean) {
  return isLargeScreen ? 0 : TAB_BAR_HEIGHT;
}

export function getTabBarYOffsetPosition(isLargeScreen: boolean) {
  const extraOffset = Platform.OS === 'ios' ? -20 : 0;
  return getHorizontalTabBarHeight(isLargeScreen) + (isLargeScreen ? 0 : extraOffset);
}