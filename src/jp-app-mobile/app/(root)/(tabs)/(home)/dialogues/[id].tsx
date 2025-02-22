import JPToolbar from "@/app/(root)/JPToolbar";
import SpyHeader from "@/components/spy/SpyHeader";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpySafeAreaView from "@/components/spy/SpySafeAreaView";
import SpyText from "@/components/spy/SpyText";
import SpyView from "@/components/spy/SpyView";
import React from "react";
import { View } from "react-native";

const DialoguePage = () => {
  return (
    <SpySafeAreaView>
      <JPToolbar />
      <SpyPageContent safe={false}>
        <SpyHeader>Aki Meets Her Friends</SpyHeader>
        <SpyView className="gap-8">
          <SpyView>
            {/* <SpyText className="font-bold">Aki Meets Her Friends</SpyText> */}
            <SpyText className="text-secondary text-center font-bold">アキ、友達と会う</SpyText>
          </SpyView>
          <SpyText className="text-primary">
              Aki greets her friends at a café and chats about weekend plans.
            </SpyText>
          <SpyView>
            <DialogueLineView author="アキ" line="おーい！久しぶり！" />
            <DialogueLineView author="サユリ" line="アキ！元気？" />
            <DialogueLineView author="アキ" line="うん！みんなは？" />
            <DialogueLineView author="サユリ" line="アキ！元気？" />
            <DialogueLineView author="アキ" line="まぁまぁかな。" />
            <DialogueLineView author="サユリ" line="私は忙しい〜。" />
            <DialogueLineView author="アキ" line="今日はゆっくりしよ！" />
          </SpyView>
        </SpyView>
      </SpyPageContent>
    </SpySafeAreaView>
  );
};

type DialogueLineProps = {
  author: string;
  line: string;
};

const DialogueLineView = (props: DialogueLineProps) => {
  return (
    <SpyView className="flex-row">
      <View className="flex-row">
        <SpyText className="font-bold">{props.author}</SpyText>
        <SpyText>:</SpyText>
      </View>
      <SpyText>{props.line}</SpyText>
    </SpyView>
  );
};

export default DialoguePage;
