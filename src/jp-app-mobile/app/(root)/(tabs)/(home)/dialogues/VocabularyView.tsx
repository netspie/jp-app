import { View, Text } from "react-native";
import React from "react";
import { WordDTO } from "./ConversationDTO";
import SpyView from "@/components/spy/SpyView";
import { WordView } from "./ConversationView";
import SpyText from "@/components/spy/SpyText";

type VocabularyViewProps = {
  words: WordDTO[];
  furiganaVisible: boolean;
};

const VocabularyView = (props: VocabularyViewProps) => {
  return (
    <SpyView>
      {props.words.map((word, i) => (
        <View className="flex-row items-end">
          <WordView
            wordId={i}
            words={props.words}
            furiganaVisible={props.furiganaVisible}
            furiganaSpacePreferred={false}
          />
          <SpyText className="">  -  </SpyText>
          <SpyText className="">{word.translation}</SpyText>
        </View>
      ))}
    </SpyView>
  );
};

export default VocabularyView;
