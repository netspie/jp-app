import JPToolbar from "@/app/(root)/JPToolbar";
import SpyCheckbox from "@/components/spy/SpyCheckbox";
import SpyHeader from "@/components/spy/SpyHeader";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpySafeAreaView from "@/components/spy/SpySafeAreaView";
import SpyText from "@/components/spy/SpyText";
import SpyView from "@/components/spy/SpyView";
import React, { useState } from "react";
import ConversationView from "./ConversationView";
import VocabularyView from "./VocabularyView";
import { useLocalSearchParams } from "expo-router";
import getConv from "./data/getConv";

const DialoguePage = () => {
  const { id } = useLocalSearchParams();

  const conversation = typeof id === 'string' ? getConv(id) : undefined;
  if (conversation === undefined)
    return;
  
  const [isSpeakersVisible, setSpeakersVisible] = useState(true);
  const [isNativeVisible, setNativeVisible] = useState(true);
  const [isTranslationsVisible, setTranslationsVisible] = useState(true);
  const [isFuriganaVisible, setFuriganaVisible] = useState(true);

  const [isVocabularyVisible, setVocabularyVisible] = useState(true);
  const [isLineVocabularyVisible, setLineVocabularyVisible] = useState(true);
  const [isAllVocabularyVisible, setAllVocabularyVisible] = useState(true);

  return (
    <SpySafeAreaView>
      <JPToolbar />
      <SpyPageContent safe={false}>
        <SpyHeader>Aki Meets Her Friends</SpyHeader>
        <SpyView className="gap-8">
          <SpyView>
            {/* <SpyText className="font-bold">Aki Meets Her Friends</SpyText> */}
            <SpyText className="text-secondary text-center font-bold">
              アキ、友達と会う
            </SpyText>
          </SpyView>
          <SpyText className="text-primary">
            Aki greets her friends at a café and chats about weekend plans.
          </SpyText>
          <SpyView>
            <SpyView row className="gap-3">
              <SpyCheckbox
                label="人"
                value={isSpeakersVisible}
                onValueChange={setSpeakersVisible}
              />
              <SpyCheckbox
                label="あ"
                value={isNativeVisible}
                onValueChange={setNativeVisible}
              />
              <SpyCheckbox
                label="〻"
                value={isFuriganaVisible}
                onValueChange={setFuriganaVisible}
              />
              <SpyCheckbox
                label="A"
                value={isTranslationsVisible}
                onValueChange={setTranslationsVisible}
              />
              <SpyCheckbox
                label="W"
                value={isVocabularyVisible}
                onValueChange={setVocabularyVisible}
              />
              {isVocabularyVisible && (
                <>
                  <SpyCheckbox
                    label="W-"
                    value={isLineVocabularyVisible}
                    onValueChange={setLineVocabularyVisible}
                  />
                  <SpyCheckbox
                    label="W*"
                    value={isAllVocabularyVisible}
                    onValueChange={setAllVocabularyVisible}
                  />
                </>
              )}
            </SpyView>
            <ConversationView
              conversation={conversation}
              config={{
                native: isNativeVisible,
                furigana: isFuriganaVisible,
                hiragana: true,
                translation: isTranslationsVisible,
                speakers: isSpeakersVisible,
                words: isVocabularyVisible && isLineVocabularyVisible,
              }}
            />
            {isVocabularyVisible && isAllVocabularyVisible && (
              <SpyView>
                <SpyText className="font-bold mt-4 text-grey">
                  Vocabulary
                </SpyText>
                <VocabularyView
                  words={conversation.words}
                  furiganaVisible={isFuriganaVisible}
                />
              </SpyView>
            )}
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

export default DialoguePage;
