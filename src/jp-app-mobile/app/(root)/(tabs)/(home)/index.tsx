import SpyButton from "@/components/spy/SpyButton";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpySafeAreaView from "@/components/spy/SpySafeAreaView";
import SpyText from "@/components/spy/SpyText";
import { useCurrentThemeColors } from "@/components/spy/themeHooks";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import JPToolbar from "../../JPToolbar";

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
