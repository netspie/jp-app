import React from "react";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpyButton from "@/components/spy/SpyButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getTabBarYOffsetPosition } from "@/components/spy/utitlities";
import useIsLargeScreen from "@/components/spy/useIsLargeScreen ";
import SpyEditableList from "@/components/spy/SpyEditableList";

const ProjectsPage = () => {
  const isLarge = useIsLargeScreen();

  return (
    <SpyPageContent>
      {/* <SpyButton
        href="/projects/create"
        className="bg-primary-300 absolute right-0 bottom-0 w-fit"
        style={{ bottom: getTabBarYOffsetPosition(isLarge) }}
      >
        <Ionicons name="add" size={24} color={"white"} />
      </SpyButton> */}
      <SpyEditableList title="Projects" createHref="/projects/create">
        <SpyButton href="/(root)/(tabs)/(home)/project/1">Project 1</SpyButton>
      </SpyEditableList>
    </SpyPageContent>
  );
};

export default ProjectsPage;
