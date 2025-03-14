import SpyText from "@/components/spy/SpyText";
import SpyView from "@/components/spy/SpyView";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Platform, View } from "react-native";
import { twMerge } from "tailwind-merge";
import  {
  ConversationConfigDTO,
  ConversationDTO,
  ConversationLineDTO,
  SpeakerDTO,
  WordDTO,
} from "./ConversationDTO";

export type ConversationViewProps = {
  conversation: ConversationDTO;
  config: ConversationConfigDTO;
};

export const ConversationView = (props: ConversationViewProps) => {
  const hasAnyFurigana = hasConversationAnyFurigana(props.conversation);

  return (
    <>
      {props.conversation.lines.map((line, i) => (
        <View key={i}>
          {props.config.native && (
            <NativeConversationLineView
              key={i}
              line={line}
              speakers={props.conversation.speakers}
              words={props.conversation.words}
              speakersVisible={props.config.speakers}
              furiganaVisible={props.config.furigana}
              furiganaSpacePreferred={props.config.furigana && hasAnyFurigana}
            />
          )}
          {props.config.translation && (
            <TranslationConversationLineView
              key={props.conversation.lines.length + i}
              line={line}
              speakers={props.conversation.speakers}
              speakersVisible={props.config.speakers}
            />
          )}
          {props.config.words && (
            <View className="ml-7 mt-2">
              {distinctFlatMap(line.phrases, (x) => x.wordIdxs).map(
                (wordIdx) =>
                  !isJapanesePunctuation(
                    props.conversation.words[wordIdx].native
                  ) && (
                    <SpyView key={wordIdx} row className="items-end gap-1 mb-1">
                      <CharacterWithEmptyFurigana
                        furiganaSpacePreferred={false}
                      >
                        <Ionicons
                          name="send"
                          size={8}
                          color={"black"}
                          className="mb-1 mr-1"
                        />
                      </CharacterWithEmptyFurigana>
                      <WordView
                        wordId={wordIdx}
                        words={props.conversation.words}
                        furiganaVisible={props.config.furigana}
                        furiganaSpacePreferred={false}
                        textClassName="text-gray-500"
                      />
                      <SpyText className="">-</SpyText>
                      <SpyText className="">
                        {props.conversation.words[wordIdx].translation}
                      </SpyText>
                    </SpyView>
                  )
              )}
            </View>
          )}
        </View>
      ))}
    </>
  );
};

export type NativeConversationLineViewProps = {
  line: ConversationLineDTO;
  speakers: SpeakerDTO[];
  words: WordDTO[];
  speakersVisible: boolean;
  furiganaVisible: boolean;
  furiganaSpacePreferred: boolean;
};

export const NativeConversationLineView = (
  props: NativeConversationLineViewProps
) => {
  return (
    <View className="flex-row">
      <CharacterWithEmptyFurigana
        furiganaSpacePreferred={props.furiganaSpacePreferred}
      >
        <Bullet />
      </CharacterWithEmptyFurigana>
      {props.speakersVisible && (
        <View className="flex-row items-end">
          <SpyText className="font-bold">
            {props.speakers[props.line.speakerIdx].nameNative}
          </SpyText>
          <SpySafeText>:</SpySafeText>
        </View>
      )}

      {props.line.phrases.map((phrase, i) => (
        <View key={i} className="flex-row">
          {phrase.wordIdxs.map((wordId, j) => (
            <WordView
              key={`${i}-${j}`}
              wordId={wordId}
              words={props.words}
              furiganaVisible={props.furiganaVisible}
              furiganaSpacePreferred={
                props.furiganaVisible && props.furiganaSpacePreferred
              }
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export type WordViewProps = {
  wordId: number;
  words: WordDTO[];
  furiganaVisible: boolean;
  furiganaSpacePreferred: boolean;
  className?: string;
  textClassName?: string;
};

export const WordView = (props: WordViewProps) => {
  const word = props.words[props.wordId];

  return (
    <View className={twMerge("flex-row", props.className)}>
      {word.fragments === undefined &&
        (props.furiganaVisible ? (
          <CharacterWithEmptyFurigana
            furiganaSpacePreferred={props.furiganaSpacePreferred}
            className={props.textClassName}
          >
            {word.native}
          </CharacterWithEmptyFurigana>
        ) : (
          <SpyText className={props.textClassName}>{word.native}</SpyText>
        ))}
      {word.fragments &&
        word.fragments.map((fragment, i) => (
          <FragmentView
            key={i}
            fragment={fragment}
            furiganaVisible={props.furiganaVisible}
            furiganaSpacePreferred={props.furiganaSpacePreferred}
            textClassName={props.textClassName}
          />
        ))}
    </View>
  );
};

export type FragmentProps = {
  fragment: string[];
  furiganaVisible: boolean;
  furiganaSpacePreferred: boolean;
  textClassName?: string;
};

export const FragmentView = (props: FragmentProps) => {
  return (
    <View>
      {props.fragment.length == 1 && (
        <CharacterWithEmptyFurigana
          furiganaSpacePreferred={props.furiganaSpacePreferred}
          className={props.textClassName}
        >
          {props.fragment[0]}
        </CharacterWithEmptyFurigana>
      )}
      {props.fragment.length >= 2 && (
        <>
          {props.furiganaVisible && (
            <SpyText className={twMerge("text-[9px]", props.textClassName)}>
              {props.fragment[1]}
            </SpyText>
          )}
          <SpyText className={props.textClassName}>{props.fragment[0]}</SpyText>
        </>
      )}
    </View>
  );
};

export type CharacterWithFuriganaProps = {
  children: React.ReactNode;
  furiganaSpacePreferred: boolean;
  className?: string;
};

export function CharacterWithEmptyFurigana(props: CharacterWithFuriganaProps) {
  return (
    <View>
      {props.furiganaSpacePreferred && (
        <SpyText
          className={`${
            Platform.OS === "web" && "h-full"
          } text-[9px] text-transparent ${props.className}`}
        >
          &#8203;
        </SpyText>
      )}

      {typeof props.children === "string" ? (
        <SpyText className={props.className}>{props.children}</SpyText>
      ) : (
        props.children
      )}
    </View>
  );
}

function hasConversationAnyFurigana(conv: ConversationDTO) {
  return conv.lines.some((x) => hasConversationLineAnyFurigana(x, conv.words));
}

function hasConversationLineAnyFurigana(
  line: ConversationLineDTO,
  words: WordDTO[]
) {
  let wordIdxs = line.phrases.flatMap((x) => x.wordIdxs);
  wordIdxs = [...new Set(wordIdxs)];

  return words.some((word) => word.fragments && word.fragments.length > 1);
}

export default ConversationView;

// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------

export type TranslationConversationLineViewProps = {
  line: ConversationLineDTO;
  speakers: SpeakerDTO[];
  speakersVisible: boolean;
};

export const TranslationConversationLineView = (
  props: TranslationConversationLineViewProps
) => {
  return (
    <View className="flex-row">
      <Bullet />
      {props.speakersVisible && (
        <View className="flex-row items-end">
          <SpyText className="font-bold">
            {props.speakers[props.line.speakerIdx].nameTranslation}
          </SpyText>
          <SpyText className="font-bold mr-2">:</SpyText>
        </View>
      )}

      {props.line.phrases.map((phrase, i) => (
        <View className="flex-row" key={i}>
          <SpyText key={i}>{phrase.translation}</SpyText>
          {i !== props.line.phrases.length - 1 && <SpyText>&nbsp;</SpyText>}
        </View>
      ))}
    </View>
  );
};

type SpySafeTextProps = {
  children?: string;
};

const SpySafeText = (props: SpySafeTextProps) => {
  return (
    <SpyText
      className={`font-bold mr-2 ${
        Platform.OS === "web" && "-translate-y-[2px]"
      }`}
    >
      {props.children}
    </SpyText>
  );
};

type BulletProps = {};

export const Bullet = (props: BulletProps) => {
  if (Platform.OS !== "web") {
    return <SpyText>▫ </SpyText>;
  }

  return <SpyText className="-translate-y-[2px]">▪</SpyText>;
};

function distinctFlatMap<TFrom, TTo>(
  source: TFrom[],
  mapper: (from: TFrom) => TTo[]
): TTo[] {
  const result = new Set<TTo>();
  source.flatMap(mapper).forEach((item) => result.add(item));
  return Array.from(result);
}

export function isJapanesePunctuation(char: string): boolean {
  const japanesePunctuationRegex =
    /^[、。・「」『』（）［］｛｝〈〉《》【】！？：；〜…—￥]+$/;
  return japanesePunctuationRegex.test(char);
}
