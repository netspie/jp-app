import React from "react";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpyButton from "@/components/spy/SpyButton";
import { View } from "react-native";
import SpyView from "@/components/spy/SpyView";
import SpySafeAreaView from "@/components/spy/SpySafeAreaView";
import JPToolbar from "@/app/(root)/JPToolbar";
import SpyHeader from "@/components/spy/SpyHeader";
import Ionicons from "@expo/vector-icons/Ionicons";
import SpyText from "@/components/spy/SpyText";
import { twMerge } from "tailwind-merge";
import { useLocalSearchParams } from "expo-router";
import { getProject, getProjectCollections } from "../dialogues/data/getConv";
import { useCurrentThemeColors } from "@/components/spy/themeHooks";

type CollectionViewProps = {
  id: string;
  title: string;
  author?: string;
  className?: string;
};

const CollectionView = (props: CollectionViewProps) => {
  const { currentThemeColors } = useCurrentThemeColors();

  return (
    <SpyButton
      href={`/(root)/(tabs)/(home)/collections/${props.id}`}
      className={twMerge("items-center gap-6", props.className)}
    >
      <Ionicons name="folder" size={36} color={currentThemeColors.secondary} />
      <View className="gap-1">
        <SpyText className="text-center font-bold text-primary">
          {props.title}
        </SpyText>
      </View>
    </SpyButton>
  );
};

const ProjectPage = () => {
  const { id } = useLocalSearchParams();

  if (typeof id !== "string") return;

  const project = getProject(id);
  const collections = getProjectCollections(id);
  if (project === undefined || collections === undefined) return;

  return (
    <SpySafeAreaView>
      <JPToolbar />
      <SpyHeader>{project.name}</SpyHeader>
      <SpyPageContent safe={false}>
        <SpyView className="justify-center flex-row flex-wrap">
          {collections.map((collection, i) => (
            <CollectionView
              key={i}
              id={collection.id}
              title={collection.name}
              className="w-[45%]"
            />
          ))}
        </SpyView>
      </SpyPageContent>
    </SpySafeAreaView>
  );
};

export default ProjectPage;
