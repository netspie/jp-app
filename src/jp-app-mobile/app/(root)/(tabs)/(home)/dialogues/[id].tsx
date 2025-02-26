import JPToolbar from "@/app/(root)/JPToolbar";
import SpyHeader from "@/components/spy/SpyHeader";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpySafeAreaView from "@/components/spy/SpySafeAreaView";
import SpyText from "@/components/spy/SpyText";
import SpyView from "@/components/spy/SpyView";
import React from "react";
import { Platform, View } from "react-native";

type ConversationDTO = {
  id: string;
  nameNative: string;
  nameTranslation: string;
  speakers: SpeakerDTO[];
  lines: ConversationLineDTO[];
  words: WordDTO[];
};

type SpeakerDTO = {
  nameNative: string;
  nameTranslation: string;
};

type ConversationLineDTO = {
  speakerIdx: number;
  phrases: PhraseDTO[];
};

type PhraseDTO = {
  phraseId: number;
  native: string;
  translation: string;
  wordIdxs: number[];
};

type WordDTO = {
  wordId: number;
  native: string;
  translation: string;
  fragments?: string[][];
};

type ConversationConfigDTO = {
  native: boolean;
  furigana: boolean;
  hiragana: boolean;
  translation: boolean;
  speakers: boolean;
};

const config: ConversationConfigDTO = {
  native: true,
  furigana: true,
  hiragana: true,
  translation: true,
  speakers: true,
};

const conversation: ConversationDTO = {
  id: "1",
  nameNative: "これやってくれる？",
  nameTranslation: "Can you do this for me?",
  speakers: [
    { nameNative: "ナオト", nameTranslation: "Naoto" },
    { nameNative: "ユリ", nameTranslation: "Yuri" },
  ],
  lines: [
    {
      speakerIdx: 0,
      phrases: [
        {
          phraseId: 1,
          native: "これやってくれる？",
          translation: "Can you do this for me?",
          wordIdxs: [0, 1, 2],
        },
      ],
    },
    {
      speakerIdx: 1,
      phrases: [
        {
          phraseId: 2,
          native: "えー自分でやって。",
          translation: "Eh? Do it yourself.",
          wordIdxs: [3, 4, 5, 1],
        },
      ],
    },
    {
      speakerIdx: 0,
      phrases: [
        {
          phraseId: 1,
          native: "やってよ！",
          translation: "Do it!",
          wordIdxs: [1, 6, 7, 8],
        },
        {
          phraseId: 1,
          native: "いいじゃん！",
          translation: "Come on!",
          wordIdxs: [1, 6, 7, 8],
        },
      ],
    },
    {
      speakerIdx: 0,
      phrases: [
        {
          phraseId: 2,
          native: "自分でできるでしょ。",
          translation: "You can do it yourself, right?",
          wordIdxs: [4, 5, 9, 10],
        },
      ],
    },
    {
      speakerIdx: 1,
      phrases: [
        {
          phraseId: 1,
          native: "できない！",
          translation: "I can't!",
          wordIdxs: [9, 11],
        },
      ],
    },
    {
      speakerIdx: 0,
      phrases: [
        {
          phraseId: 2,
          native: "子供みたい…。",
          translation: "You're like a child…",
          wordIdxs: [12, 13],
        },
      ],
    },
  ],
  words: [
    { wordId: 1, native: "これ", translation: "this" },
    { wordId: 2, native: "やる", translation: "to do; to make; to give" },
    {
      wordId: 3,
      native: "てくれる",
      translation: "to do something as a favor",
    },
    { wordId: 4, native: "えー", translation: "eh?; what?; well; yes" },
    {
      wordId: 5,
      native: "自分",
      translation: "oneself",
      fragments: [
        ["自", "じ"],
        ["分", "ぶん"],
      ],
    },
    { wordId: 6, native: "で", translation: "in; at; from; by" },
    { wordId: 7, native: "よ", translation: "ASSERTION; REMINDING" },
    { wordId: 8, native: "いい", translation: "good" },
    { wordId: 9, native: "じゃん", translation: "isn't it" },
    { wordId: 10, native: "できる", translation: "to be able to do" },
    { wordId: 11, native: "でしょ", translation: "I guess; isn't it?" },
    { wordId: 12, native: "ない", translation: "not; nonexistent" },
    {
      wordId: 13,
      native: "子供",
      translation: "child",
      fragments: [
        ["子", "こ"],
        ["供", "ども"],
      ],
    },
    { wordId: 14, native: "みたい", translation: "like" },
  ],
};

const DialoguePage = () => {
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
            <ConversationView conversation={conversation} config={config} />
            {/* <DialogueLineView author="アキ" line="おーい！久しぶり！" />
            <DialogueLineView author="サユリ" line="アキ！元気？" />
            <DialogueLineView author="アキ" line="うん！みんなは？" />
            <DialogueLineView author="サユリ" line="アキ！元気？" />
            <DialogueLineView author="アキ" line="まぁまぁかな。" />
            <DialogueLineView author="サユリ" line="私は忙しい〜。" />
            <DialogueLineView author="アキ" line="今日はゆっくりしよ！" /> */}
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

type NativeConversationViewProps = {
  conversation: ConversationDTO;
  config: ConversationConfigDTO;
};

const ConversationView = (props: NativeConversationViewProps) => {
  const hasAnyFurigana = hasConversationAnyFurigana(props.conversation);

  return (
    <>
      {props.conversation.lines.map(
        (line, i) =>
          config.native && (
            <NativeConversationLineView
              key={i}
              line={line}
              speakers={conversation.speakers}
              words={conversation.words}
              speakersVisible={config.speakers}
              furiganaVisible={config.furigana}
              furiganaSpacePreferred={config.furigana && hasAnyFurigana}
            />
          )
      )}
    </>
  );
};

type NativeConversationLineViewProps = {
  line: ConversationLineDTO;
  speakers: SpeakerDTO[];
  words: WordDTO[];
  speakersVisible: boolean;
  furiganaVisible: boolean;
  furiganaSpacePreferred: boolean;
};

const NativeConversationLineView = (props: NativeConversationLineViewProps) => {
  return (
    <View className="flex-row">
      {props.speakersVisible && (
        <View className="flex-row items-end">
          <SpyText className="font-bold">
            {props.speakers[props.line.speakerIdx].nameNative}
          </SpyText>
          <SpyText
            className={`font-bold mr-2 ${
              Platform.OS === "web" && "-translate-y-[2px]"
            }`}
          >
            :
          </SpyText>
        </View>
      )}

      {props.line.phrases.map((phrase, i) =>
        phrase.wordIdxs.map((wordId, j) => (
          <WordView
            key={`${i}-${j}`}
            wordId={wordId}
            words={props.words}
            furiganaSpacePreferred={props.furiganaSpacePreferred}
          />
        ))
      )}
    </View>
  );
};

type WordViewProps = {
  wordId: number;
  words: WordDTO[];
  furiganaSpacePreferred: boolean;
};

const WordView = (props: WordViewProps) => {
  const word = props.words[props.wordId];

  return (
    <View className="flex-row">
      {word.fragments === undefined && (
        <View>
          {props.furiganaSpacePreferred && (
            <SpyText
              className={`${Platform.OS === "web" && "h-full"} text-[9px] text-transparent`}
            >xd</SpyText>
          )}
          <SpyText>{word.native}</SpyText>
        </View>
      )}
      {word.fragments &&
        word.fragments.map((fragment, i) => (
          <FragmentView
            key={i}
            fragment={fragment}
            furiganaSpacePreferred={props.furiganaSpacePreferred}
          />
        ))}
    </View>
  );
};

type FragmentProps = {
  fragment: string[];
  furiganaSpacePreferred: boolean;
};

const FragmentView = (props: FragmentProps) => {
  return (
    <View>
      {props.fragment.length == 1 && (
        <>
          {props.furiganaSpacePreferred && (
            <SpyText
              className={`${Platform.OS === "web" && "h-full"} text-[9px] text-transparent`}
            >xd</SpyText>
          )}
          <SpyText>{props.fragment[0]}</SpyText>
        </>
      )}
      {props.fragment.length >= 2 && (
        <>
          <SpyText className="text-[9px]">{props.fragment[1]}</SpyText>
          <SpyText>{props.fragment[0]}</SpyText>
        </>
      )}
    </View>
  );
};

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

export default DialoguePage;
