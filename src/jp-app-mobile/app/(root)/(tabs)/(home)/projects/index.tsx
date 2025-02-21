import React, { useRef } from "react";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpyButton from "@/components/spy/SpyButton";
import SpyEditableList from "@/components/spy/SpyEditableList";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { View, ScrollView, Text, StyleProp, TextStyle } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import SpyBottomSheetModal from "@/components/spy/SpyBottomSheet";
import SpyBottomSheetTextInput from "@/components/spy/SpyBottomSheetTextInput";
import SpyIconButton from "@/components/spy/SpyIconButton";
import SpyDarkModeSwitch from "@/components/spy/SpyDarkModeSwitch";
import SpyText from "@/components/spy/SpyText";
import SpySafeAreaView from "@/components/spy/SpySafeAreaView";
import { useCurrentThemeColors } from "@/components/spy/themeTypes";
import SpyView from "@/components/spy/SpyView";
import { twMerge } from "tailwind-merge";
import SpyHeader from "@/components/spy/SpyHeader";
import HorizontalList from "@/components/spy/HorizontalList";
import JPToolbar from "@/app/(root)/JPToolbar";

type ProjectViewProps = {
  title: string;
  author?: string;
};

const ProjectView = (props: ProjectViewProps) => {
  const { currentThemeColors } = useCurrentThemeColors();

  return (
    <SpyButton
      href="/(root)/(tabs)/(home)/project/1"
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
        <HorizontalList>
          <SpyButton
            className="w-fit bg-primary p-2"
            textClassName="text-white"
          >
            Mine
          </SpyButton>
        </HorizontalList>
        <SpyEditableList
          createHref="/projects/create"
          createButtonShown={false}
        >
          <ProjectView title="Yuta Vocabulary Course" author="Yuta Aoki" />
          <ProjectView
            title="Yuta Real Life Japanese Course"
            author="Yuta Aoki"
          />
          <ProjectView title="Misa Ammo YT Videos" author="Misa Ammo" />
        </SpyEditableList>
      </SpyPageContent>
    </SpySafeAreaView>
  );
};

export default ProjectsPage;
