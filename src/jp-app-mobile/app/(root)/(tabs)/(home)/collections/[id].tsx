import JPToolbar from "@/app/(root)/JPToolbar";
import SpyButton from "@/components/spy/SpyButton";
import SpyHeader from "@/components/spy/SpyHeader";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpySafeAreaView from "@/components/spy/SpySafeAreaView";
import SpyText from "@/components/spy/SpyText";
import SpyView from "@/components/spy/SpyView";
import { useCurrentThemeColors } from "@/components/spy/themeTypes";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { twMerge } from "tailwind-merge";
import {
  getCollection,
  getCollectionConversations,
} from "../dialogues/data/getConv";

type DialogueViewProps = {
  id: string;
  title: string;
  subTitle: string;
  author?: string;
  className?: string;
};

const DialogueView = (props: DialogueViewProps) => {
  const { currentThemeColors } = useCurrentThemeColors();

  return (
    <SpyButton
      href={`/(root)/(tabs)/(home)/dialogues/${props.id}`}
      className={twMerge(
        "flex-row items-center h-fit gap-4 w-full",
        props.className
      )}
    >
      <Ionicons name="chatbox" size={36} color={currentThemeColors.secondary} />
      <SpyView className="gap-1">
        <SpyText className="font-bold text-primary">{props.title}</SpyText>
        <SpyText className="text-grey">{props.subTitle}</SpyText>
      </SpyView>
    </SpyButton>
  );
};

const CollectionPage = () => {
  const { id } = useLocalSearchParams();

  if (typeof id !== "string") return;

  const collection = getCollection(id);
  const conversations = getCollectionConversations(id);
  if (collection === undefined || conversations === undefined) return;

  return (
    <SpySafeAreaView>
      <JPToolbar />
      <SpyHeader>{collection?.name}</SpyHeader>
      <SpyPageContent safe={false}>
        {Object.values(conversations).map((conversation, i) => (
          <DialogueView
            key={i}
            id={conversation.id}
            title={conversation.nameTranslation}
            subTitle={conversation.nameNative}
          />
        ))}
      </SpyPageContent>
    </SpySafeAreaView>
  );
};

export default CollectionPage;
