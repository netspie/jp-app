import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import SafeScrollView from "@/components/spy/SafeScrollView";
import Button from "@/components/spy/Button";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function IndexPage() {
  const [isAdmin] = useState(true);

  return (
    <SafeScrollView>
      <Button>Projects</Button>
      <Button className="bg-primary-300 absolute bottom-1/2 right-0">
        <Ionicons name="add" size={24} />
      </Button>
    </SafeScrollView>
  );
}
