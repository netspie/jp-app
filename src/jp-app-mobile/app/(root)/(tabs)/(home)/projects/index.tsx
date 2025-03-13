import JPToolbar from "@/app/(root)/JPToolbar";
import SpyButton from "@/components/spy/SpyButton";
import SpyEditableList from "@/components/spy/SpyEditableList";
import SpyHeader from "@/components/spy/SpyHeader";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpySafeAreaView from "@/components/spy/SpySafeAreaView";
import SpyText from "@/components/spy/SpyText";
import { useCurrentThemeColors } from "@/components/spy/themeTypes";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { View } from "react-native";

type ProjectViewProps = {
  id: string;
  title: string;
  author?: string;
};

const ProjectView = (props: ProjectViewProps) => {
  const { currentThemeColors } = useCurrentThemeColors();

  return (
    <SpyButton
      href={`/(root)/(tabs)/(home)/projects/${props.id}`}
      className="w-full flex-row rounded-md p-4 gap-6 bg-greyLight"
    >
      <Ionicons name="cube" size={36} color={currentThemeColors.secondary} />
      <View className="gap-1">
        <SpyText className="font-bold text-primary">{props.title}</SpyText>
        {props.author && <SpyText>{props.author}</SpyText>}
      </View>
    </SpyButton>
  );
};

const ProjectsPage = () => {
  return (
    <SpySafeAreaView>
      <JPToolbar />
      <SpyPageContent safe={false}>
        <SpyHeader>Projects</SpyHeader>
        {/* <HorizontalList>
          <SpyButton
            className="w-fit bg-primary p-2"
            textClassName="text-white"
          >
            Mine
          </SpyButton>
        </HorizontalList> */}
        <SpyEditableList
          createHref="/projects/create"
          createButtonShown={false}
        >
          <ProjectView id="yuta" title="Yuta Vocabulary Course" />
          <ProjectView id="public" title="Public Conversations" />
        </SpyEditableList>
      </SpyPageContent>
    </SpySafeAreaView>
  );
};

export default ProjectsPage;
