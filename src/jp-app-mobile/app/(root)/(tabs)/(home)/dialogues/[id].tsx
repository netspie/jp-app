import JPToolbar from "@/app/(root)/JPToolbar";
import SpyCheckbox from "@/components/spy/SpyCheckbox";
import SpyHeader from "@/components/spy/SpyHeader";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpySafeAreaView from "@/components/spy/SpySafeAreaView";
import SpyText from "@/components/spy/SpyText";
import SpyView from "@/components/spy/SpyView";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { useConversationConfigStore } from "./conversationConfigStore";
import ConversationView from "./ConversationView";
import getConversation from "./data/getConv";
import VocabularyView from "./VocabularyView";

const DialoguePage = () => {
  const { id } = useLocalSearchParams();
  if (typeof id !== "string") return;

  const configStore = useConversationConfigStore()
  const conversation = getConversation(id);

  return (
    <SpySafeAreaView>
      <JPToolbar />
      <SpyPageContent safe={false}>
        <SpyHeader>{conversation.nameTranslation}</SpyHeader>
        <SpyView className="gap-8">
          <SpyView>
            {/* <SpyText className="font-bold">Aki Meets Her Friends</SpyText> */}
            <SpyText className="text-secondary text-center font-bold">
              {conversation.nameNative}
            </SpyText>
          </SpyView>
          {conversation.description && (
            <SpyText className="text-primary">
              {conversation.description}
            </SpyText>
          )}
          <SpyView>
            <SpyView row className="gap-3">
              <SpyCheckbox
                label="人"
                value={configStore.isSpeakersVisible}
                onValueChange={configStore.setSpeakersVisible}
              />
              <SpyCheckbox
                label="あ"
                value={configStore.isNativeVisible}
                onValueChange={configStore.setNativeVisible}
              />
              <SpyCheckbox
                label="〻"
                value={configStore.isFuriganaVisible}
                onValueChange={configStore.setFuriganaVisible}
              />
              <SpyCheckbox
                label="A"
                value={configStore.isTranslationsVisible}
                onValueChange={configStore.setTranslationsVisible}
              />
              <SpyCheckbox
                label="W"
                value={configStore.isVocabularyVisible}
                onValueChange={configStore.setVocabularyVisible}
              />
              {configStore.isVocabularyVisible && (
                <>
                  <SpyCheckbox
                    label="W-"
                    value={configStore.isLineVocabularyVisible}
                    onValueChange={configStore.setLineVocabularyVisible}
                  />
                  <SpyCheckbox
                    label="W*"
                    value={configStore.isAllVocabularyVisible}
                    onValueChange={configStore.setAllVocabularyVisible}
                  />
                </>
              )}
            </SpyView>
            <ConversationView
              conversation={conversation}
              config={{
                native: configStore.isNativeVisible,
                furigana: configStore.isFuriganaVisible,
                hiragana: true,
                translation: configStore.isTranslationsVisible,
                speakers: configStore.isSpeakersVisible,
                words: configStore.isVocabularyVisible && configStore.isLineVocabularyVisible,
              }}
            />
            {configStore.isVocabularyVisible && configStore.isAllVocabularyVisible && (
              <SpyView>
                <SpyText className="font-bold mt-4 text-grey">
                  Vocabulary
                </SpyText>
                <VocabularyView
                  words={conversation.words}
                  furiganaVisible={configStore.isFuriganaVisible}
                />
              </SpyView>
            )}
          </SpyView>
        </SpyView>
      </SpyPageContent>
    </SpySafeAreaView>
  );
};

export default DialoguePage;
