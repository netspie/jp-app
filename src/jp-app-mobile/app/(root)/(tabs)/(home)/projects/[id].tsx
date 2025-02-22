import React from "react";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpyButton from "@/components/spy/SpyButton";
import { Text, View } from "react-native";
import SpyView from "@/components/spy/SpyView";
import SpySafeAreaView from "@/components/spy/SpySafeAreaView";
import JPToolbar from "@/app/(root)/JPToolbar";
import SpyHeader from "@/components/spy/SpyHeader";
import { useCurrentThemeColors } from "@/components/spy/themeTypes";
import Ionicons from "@expo/vector-icons/Ionicons";
import SpyText from "@/components/spy/SpyText";
import { twMerge } from "tailwind-merge";

type CollectionViewProps = {
  title: string;
  author?: string;
  className?: string
};

const CollectionView = (props: CollectionViewProps) => {
  const { currentThemeColors } = useCurrentThemeColors();

  return (
    <SpyButton
      href="/(root)/(tabs)/(home)/collections/1"
      className={twMerge("items-center gap-6", props.className)}
    >
      <Ionicons name="folder" size={36} color={currentThemeColors.secondary} />
      <View className="gap-1">
        <SpyText className="text-center font-bold text-primary">{props.title}</SpyText>
      </View>
    </SpyButton>
  );
};

const ProjectPage = () => {
  return (
    <SpySafeAreaView>
      <JPToolbar />
      <SpyHeader>Yuta Vocabulary Course</SpyHeader>
      <SpyPageContent safe={false}>
        <SpyView className="justify-center flex-row flex-wrap">
          <CollectionView title="L1 - 250 Words" className="w-[45%]" />
          <CollectionView title="L2 - 500 Words" className="w-[45%]" />
          <CollectionView title="L3 - 800 Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
          <CollectionView title="L4 - 800+ Words" className="w-[45%]" />
        </SpyView>
      </SpyPageContent>
    </SpySafeAreaView>
  );
};

export default ProjectPage;
