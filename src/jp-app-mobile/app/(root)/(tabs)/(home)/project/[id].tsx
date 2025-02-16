import React from "react";
import SpyScrollView from "@/components/spy/SpyScrollView";
import SpyButton from "@/components/spy/SpyButton";
import { Text } from "react-native";
import SpyView from "@/components/spy/SpyView";

const ProjectPage = () => {
  return (
    <SpyScrollView>
      <Text className="font-bold text-3xl">Project X</Text>
      <SpyView>
        <Text className="font-bold uppercase">Collections</Text>
        <SpyView>
          <SpyButton>Collection 1</SpyButton>
          <SpyButton>Collection 2</SpyButton>
          <SpyButton>Collection 3</SpyButton>
          <SpyButton>Collection 4</SpyButton>
        </SpyView>
      </SpyView>
    </SpyScrollView>
  );
};

export default ProjectPage;
