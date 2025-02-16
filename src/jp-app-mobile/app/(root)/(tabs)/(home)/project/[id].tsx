import React from "react";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpyButton from "@/components/spy/SpyButton";
import { Text } from "react-native";
import SpyView from "@/components/spy/SpyView";

const ProjectPage = () => {
  return (
    <SpyPageContent>
      <Text className="font-bold text-3xl">Project X</Text>
      <SpyView>
        <Text className="font-bold uppercase">Collections</Text>
        <SpyView>
          <SpyButton href="/(root)/(tabs)/(home)/collection/1">
            Collection 1
          </SpyButton>
          <SpyButton>Collection 2</SpyButton>
          <SpyButton>Collection 3</SpyButton>
          <SpyButton>Collection 4</SpyButton>
        </SpyView>
      </SpyView>
    </SpyPageContent>
  );
};

export default ProjectPage;
