import { useState } from "react";
import SafeScrollView from "@/components/spy/SafeScrollView";
import Button from "@/components/spy/Button";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getTabBarYOffsetPosition } from "@/components/spy/utitlities";
import useIsLargeScreen from "@/components/spy/useIsLargeScreen ";

export default function IndexPage() {
  const [isAdmin] = useState(true);
  const isLarge = useIsLargeScreen();

  return (
    <SafeScrollView>
      <Button href='/projects/projects'>Projects</Button>
      <Button
        className="bg-primary-300 absolute right-0"
        style={{ bottom: getTabBarYOffsetPosition(isLarge) }}
      >
        <Ionicons name="add" size={24} color={"white"} />
      </Button>
    </SafeScrollView>
  );
}
