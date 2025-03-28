import { View, Text } from "react-native";
import React from "react";
import { WordDTO } from "./ConversationDTO";
import SpyView from "@/components/spy/SpyView";
import {
  Bullet,
  CharacterWithEmptyFurigana,
  hasWordAnyFurigana,
  isJapanesePunctuation,
  WordView,
} from "./ConversationView";
import SpyText from "@/components/spy/SpyText";

type VocabularyViewProps = {
  words: WordDTO[];
  furiganaVisible: boolean;
};

const VocabularyView = (props: VocabularyViewProps) => {
  return (
    <SpyView>
      {props.words.map((word, i) => {
        if (isJapanesePunctuation(word.native)) return null;

        const hasAnyFurigana = hasWordAnyFurigana(word);

        return (
          <View className="flex-row items-end" key={i}>
            <Bullet color="gray" />
            <WordView
              wordId={i}
              words={props.words}
              furiganaVisible={props.furiganaVisible}
              furiganaSpacePreferred={props.furiganaVisible && hasAnyFurigana}
            />
            <CharacterWithEmptyFurigana
              furiganaSpacePreferred={props.furiganaVisible && hasAnyFurigana}
            >
              <SpyText className="text-gray-700">
                {" - " + word.translation}
              </SpyText>
            </CharacterWithEmptyFurigana>
          </View>
        );
      })}
    </SpyView>
  );
};

export default VocabularyView;
