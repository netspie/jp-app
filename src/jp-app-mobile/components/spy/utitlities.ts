import { TAB_BAR_HEIGHT, TAB_BAR_WIDTH } from "./constants";

export function getHorizontalTabBarHeight(isLargeScreen: boolean) {
  return isLargeScreen ? 0 : TAB_BAR_HEIGHT;
}

export function getTabBarYOffsetPosition(isLargeScreen: boolean) {
  return getHorizontalTabBarHeight(isLargeScreen) + (isLargeScreen ? 0 : 8);
}