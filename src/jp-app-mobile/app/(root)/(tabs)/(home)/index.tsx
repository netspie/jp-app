import SpyButton from "@/components/spy/SpyButton";
import SpyHeader from "@/components/spy/SpyHeader";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpySafeAreaView from "@/components/spy/SpySafeAreaView";
import React from "react";
import JPToolbar from "../../JPToolbar";
import { Text } from "react-native";

const IndexPage = () => {
  return (
    <SpySafeAreaView>
      <JPToolbar addButton={false} />
      <SpyPageContent safe={false}>
        <SpyHeader>Projects</SpyHeader>
        <SpyButton href="/projects">
          Projects
        </SpyButton>
      </SpyPageContent>
    </SpySafeAreaView>
  );
};

export default IndexPage;
