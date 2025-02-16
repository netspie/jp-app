import React, { useState } from "react";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpyButton from "@/components/spy/SpyButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getTabBarYOffsetPosition } from "@/components/spy/utitlities";
import useIsLargeScreen from "@/components/spy/useIsLargeScreen ";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const IndexPage = () => {
  const [isAdmin] = useState(true);
  const isLarge = useIsLargeScreen();

  return (
    <SpyPageContent>
      <SpyButton href="/projects">Projects</SpyButton>
      <SpyButton
        className="bg-primary-300 absolute right-0"
        style={{ bottom: getTabBarYOffsetPosition(isLarge) }}
      >
        <Ionicons name="add" size={24} color={"white"} />
      </SpyButton>
    </SpyPageContent>
    // <SpyPageContent>

    // </SpyPageContent>
  );
};

export default IndexPage;
