import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-lg my-10">Welcome to the application</Text>
      <Link href="/settings">Settings</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/dialogues/1">Dialogue</Link>
    </View>
  );
}
