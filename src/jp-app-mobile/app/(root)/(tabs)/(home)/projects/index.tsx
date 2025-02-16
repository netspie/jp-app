import React from "react";
import SpyScrollView from "@/components/spy/SpyScrollView";
import SpyButton from "@/components/spy/SpyButton";

const ProjectsPage = () => {
  return (
    <SpyScrollView>
      <SpyButton href='/(root)/(tabs)/(home)/project/1'>Project 1</SpyButton>
      <SpyButton>Project 2</SpyButton>
      <SpyButton>Project 3</SpyButton>
    </SpyScrollView>
  );
};

export default ProjectsPage;
