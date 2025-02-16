import { TAB_BAR_HEIGHT } from "./constants";

export function getHorizontalTabBarHeight(isLargeScreen: boolean) {
  return isLargeScreen ? 0 : TAB_BAR_HEIGHT;
}

export function getTabBarYOffsetPosition(isLargeScreen: boolean) {
  return getHorizontalTabBarHeight(isLargeScreen) + (isLargeScreen ? 0 : 8);
}
