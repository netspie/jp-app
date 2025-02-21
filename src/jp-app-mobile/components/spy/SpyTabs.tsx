import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { Href, Tabs } from "expo-router";
import { TAB_BAR_HEIGHT, TAB_BAR_WIDTH } from "./constants";
import { Platform, View } from "react-native";
import useIsLargeScreen from "./useIsLargeScreen ";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useCurrentThemeColors } from "./themeTypes";

const TabIcon = (
  {
    focused,
    focusedColor,
    icon,
  }: {
    focused: boolean;
    focusedColor: string;
    icon: any;
  },
  className?: string
) => (
  <View className={`flex-1 flex flex-col items-center ${className}`}>
    <Ionicons
      name={icon}
      size={18}
      style={{ color: focused ? focusedColor : "#CACACA" }}
    />
  </View>
);

type SpyTabsProps = {
  children: React.ReactNode;
};

const SpyTabs = (props: SpyTabsProps) => {
  const isLargeScreen = useIsLargeScreen();
  const { currentThemeColors, appColorScheme } = useCurrentThemeColors();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarVariant: isLargeScreen ? "material" : "uikit",
        tabBarPosition: isLargeScreen ? "left" : "bottom",
        tabBarLabelPosition: "below-icon",
        tabBarActiveBackgroundColor: "transparent",
        tabBarItemStyle: {
          padding: 0,
          margin: 0,
          marginTop: isLargeScreen ? 0 : 12,
          height: isLargeScreen ? TAB_BAR_HEIGHT : undefined,
        },
        tabBarLabelStyle: {
          padding: 0,
          margin: 0,
          minHeight: 200,
        },
        tabBarIconStyle: {
          padding: 0,
          margin: 0,
        },
        tabBarStyle: {
          display: "flex",
          backgroundColor: currentThemeColors.primary,
          position: "absolute",
          borderTopColor: "#FF3B301A",
          borderTopWidth: 1,
          width: isLargeScreen ? TAB_BAR_WIDTH : "100%",
          height: isLargeScreen ? "100%" : TAB_BAR_HEIGHT,
          paddingBottom: isLargeScreen ? 0 : 75,
        },
      }}
    >
      {props.children}
    </Tabs>
  );
};

export default SpyTabs;

export const createOptions = (
  title: string,
  icon: string,
  focusedColor?: string
): BottomTabNavigationOptions & {
  href?: Href | null;
} => {
  const { currentThemeColors } = useCurrentThemeColors();
  const getFocusedColor = () => focusedColor ?? currentThemeColors.secondary;

  return {
    title: title,
    headerShown: false,
    tabBarActiveTintColor: getFocusedColor(),
    tabBarIcon: ({ focused }) => (
      <TabIcon focusedColor={getFocusedColor()} icon={icon} focused={focused} />
    ),
  };
};
