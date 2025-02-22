import JPToolbar from "@/app/(root)/JPToolbar";
import SpyButton from "@/components/spy/SpyButton";
import SpyHeader from "@/components/spy/SpyHeader";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpySafeAreaView from "@/components/spy/SpySafeAreaView";
import SpyText from "@/components/spy/SpyText";
import SpyView from "@/components/spy/SpyView";
import { useCurrentThemeColors } from "@/components/spy/themeTypes";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { twMerge } from "tailwind-merge";

type DialogueViewProps = {
  title: string;
  author?: string;
  className?: string;
};

const DialogueView = (props: DialogueViewProps) => {
  const { currentThemeColors } = useCurrentThemeColors();

  return (
    <SpyButton
      href="/(root)/(tabs)/(home)/dialogues/1"
      className={twMerge(
        "flex-row items-center h-fit gap-4 w-full",
        props.className
      )}
    >
      <Ionicons name="chatbox" size={36} color={currentThemeColors.secondary} />
      <SpyView className="gap-1">
        <SpyText className="font-bold text-primary">{props.title}</SpyText>
      </SpyView>
    </SpyButton>
  );
};

const CollectionPage = () => {
  return (
    <SpySafeAreaView>
      <JPToolbar />
      <SpyPageContent safe={false}>
        <SpyHeader>L3 - 800 Words Used</SpyHeader>
        <DialogueView title="Haruto Wants to Escape the City" />
        <DialogueView title="Aiko Yearns for Her Childhood Village" />
        <DialogueView title="Yuki’s Escape from the Storm" />
        <DialogueView title="Sora's Quest for Tranquility" />
        <DialogueView title="Emi Seeks Refuge from the Crowds" />
        <DialogueView title="Ren Wants to Reconnect with His Roots" />
        <DialogueView title="Miko’s Search for Peace Amidst Chaos" />
        <DialogueView title="Hiroshi Wants to Leave the Chaos Behind" />
        <DialogueView title="Natsuki Needs a Break from Reality" />
        <DialogueView title="Haruto Wants to Escape the City" />
        <DialogueView title="Aiko Yearns for Her Childhood Village" />
        <DialogueView title="Yuki’s Escape from the Storm" />
        <DialogueView title="Sora's Quest for Tranquility" />
        <DialogueView title="Emi Seeks Refuge from the Crowds" />
        <DialogueView title="Ren Wants to Reconnect with His Roots" />
        <DialogueView title="Miko’s Search for Peace Amidst Chaos" />
        <DialogueView title="Hiroshi Wants to Leave the Chaos Behind" />
        <DialogueView title="Natsuki Needs a Break from Reality" />
        <DialogueView title="Haruto Wants to Escape the City" />
        <DialogueView title="Aiko Yearns for Her Childhood Village" />
        <DialogueView title="Yuki’s Escape from the Storm" />
        <DialogueView title="Sora's Quest for Tranquility" />
        <DialogueView title="Emi Seeks Refuge from the Crowds" />
        <DialogueView title="Ren Wants to Reconnect with His Roots" />
        <DialogueView title="Miko’s Search for Peace Amidst Chaos" />
        <DialogueView title="Hiroshi Wants to Leave the Chaos Behind" />
        <DialogueView title="Natsuki Needs a Break from Reality" />
        <DialogueView title="Haruto Wants to Escape the City" />
        <DialogueView title="Aiko Yearns for Her Childhood Village" />
        <DialogueView title="Yuki’s Escape from the Storm" />
        <DialogueView title="Sora's Quest for Tranquility" />
        <DialogueView title="Emi Seeks Refuge from the Crowds" />
        <DialogueView title="Ren Wants to Reconnect with His Roots" />
        <DialogueView title="Miko’s Search for Peace Amidst Chaos" />
        <DialogueView title="Hiroshi Wants to Leave the Chaos Behind" />
        <DialogueView title="Natsuki Needs a Break from Reality" />
        <DialogueView title="Haruto Wants to Escape the City" />
        <DialogueView title="Aiko Yearns for Her Childhood Village" />
        <DialogueView title="Yuki’s Escape from the Storm" />
        <DialogueView title="Sora's Quest for Tranquility" />
        <DialogueView title="Emi Seeks Refuge from the Crowds" />
        <DialogueView title="Ren Wants to Reconnect with His Roots" />
        <DialogueView title="Miko’s Search for Peace Amidst Chaos" />
        <DialogueView title="Hiroshi Wants to Leave the Chaos Behind" />
        <DialogueView title="Natsuki Needs a Break from Reality" />
        <DialogueView title="Haruto Wants to Escape the City" />
        <DialogueView title="Aiko Yearns for Her Childhood Village" />
        <DialogueView title="Yuki’s Escape from the Storm" />
        <DialogueView title="Sora's Quest for Tranquility" />
        <DialogueView title="Emi Seeks Refuge from the Crowds" />
        <DialogueView title="Ren Wants to Reconnect with His Roots" />
        <DialogueView title="Miko’s Search for Peace Amidst Chaos" />
        <DialogueView title="Hiroshi Wants to Leave the Chaos Behind" />
        <DialogueView title="Natsuki Needs a Break from Reality" />
      </SpyPageContent>
    </SpySafeAreaView>
  );
};

export default CollectionPage;
