import { Stack } from "expo-router";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

type SpyStackScreenProps = {
  name: string;
  options?: NativeStackNavigationOptions;
};

const SpyStackScreen = (props: SpyStackScreenProps) => {
  return (
    <Stack.Screen
      name="index"
      options={{
        contentStyle: {
          height: "100%"
        },
        headerShown: false,
        headerShadowVisible: false,
        ...props.options,
      }}
    />
  );
};

export default SpyStackScreen;
