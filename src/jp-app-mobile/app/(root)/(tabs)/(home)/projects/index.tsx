import React from "react";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpyButton from "@/components/spy/SpyButton";

const ProjectsPage = () => {
  return (
    <SpyPageContent>
      <SpyButton href="/(root)/(tabs)/(home)/project/1">Project 1</SpyButton>
      <SpyButton>Project 2</SpyButton>
      <SpyButton>Project 3</SpyButton>
    </SpyPageContent>
  );
};

export default ProjectsPage;
