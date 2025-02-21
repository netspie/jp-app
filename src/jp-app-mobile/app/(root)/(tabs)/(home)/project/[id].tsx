import React from "react";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpyButton from "@/components/spy/SpyButton";
import { Text } from "react-native";
import SpyView from "@/components/spy/SpyView";
import SpySafeAreaView from "@/components/spy/SpySafeAreaView";
import JPToolbar from "@/app/(root)/JPToolbar";
import SpyHeader from "@/components/spy/SpyHeader";

const ProjectPage = () => {
  return (
    <SpySafeAreaView>
      <JPToolbar />
      <SpyHeader>Project 17</SpyHeader>
      <SpyPageContent safe={false}>
        <Text className="font-bold uppercase">Collections</Text>
        <SpyView>
          <SpyButton href="/(root)/(tabs)/(home)/collection/1">
            Collection 1
          </SpyButton>
          <SpyButton>Collection 2</SpyButton>
          <SpyButton>Collection 3</SpyButton>
          <SpyButton>Collection 4</SpyButton>
        </SpyView>
      </SpyPageContent>
    </SpySafeAreaView>
  );
};

export default ProjectPage;
