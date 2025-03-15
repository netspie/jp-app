import SpyButton from "@/components/spy/SpyButton";
import SpyHeader from "@/components/spy/SpyHeader";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpySafeAreaView from "@/components/spy/SpySafeAreaView";
import React from "react";
import JPToolbar from "../../JPToolbar";
import { Text } from "react-native";
import SpyText from "@/components/spy/SpyText";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useCurrentThemeColors } from "@/components/spy/themeHooks";

const IndexPage = () => {
  var { currentThemeColors } = useCurrentThemeColors();
  return (
    <SpySafeAreaView>
      <JPToolbar addButton={false} />
      <SpyPageContent safe={false}>
        <SpyButton href="/projects" className="justify-center items-center gap-6 bg-primary">
          <Ionicons
            name="rose"
            size={36}
            color={currentThemeColors.secondary}
          />

          <SpyText className="uppercase text-white font-bold text-center">
            Projects
          </SpyText>
        </SpyButton>
      </SpyPageContent>
    </SpySafeAreaView>
  );
};

export default IndexPage;
