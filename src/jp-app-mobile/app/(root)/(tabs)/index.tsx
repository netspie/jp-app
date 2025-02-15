import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View className="gap-10 items-center">
        <Text className="font-bold text-lg">
          Welcome to the application
        </Text>
        <View className="items-center">
          <Link href="/settings">Settings</Link>
          <Link href="/explore">Explore</Link>
          <Link href="/dialogues/1">Dialogue</Link>
        </View>
        <Ionicons name="checkmark-circle" size={32} color="green" />
      </View>
    </View>
  );
}
