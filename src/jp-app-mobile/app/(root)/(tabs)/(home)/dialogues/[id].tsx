import JPToolbar from "@/app/(root)/JPToolbar";
import SpyCheckbox from "@/components/spy/SpyCheckbox";
import SpyHeader from "@/components/spy/SpyHeader";
import SpyPageContent from "@/components/spy/SpyPageContent";
import SpySafeAreaView from "@/components/spy/SpySafeAreaView";
import SpyText from "@/components/spy/SpyText";
import SpyView from "@/components/spy/SpyView";
import React, { useState } from "react";
import { View } from "react-native";
import ConversationView from "./ConversationView";
import { ConversationDTO } from "./ConversationDTO";

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
          wordIdxs: [0, 1, 2, 16],
        },
      ],
    },
    {
      speakerIdx: 1,
      phrases: [
        {
          phraseId: 2,
          native: "えー、自分でやって。",
          translation: "Eh? Do it yourself.",
          wordIdxs: [3, 14, 4, 5, 1, 15],
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
          wordIdxs: [1, 6, 7, 8, 17],
        },
        {
          phraseId: 1,
          native: "いいじゃん！",
          translation: "Come on!",
          wordIdxs: [1, 6, 7, 8, 17],
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
          wordIdxs: [4, 5, 9, 10, 15],
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
          wordIdxs: [9, 11, 17],
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
          wordIdxs: [12, 13, 15],
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
    { wordId: 15, native: "、", translation: "delimiter ','" },
    { wordId: 16, native: "。", translation: "dot '.'" },
    { wordId: 17, native: "？", translation: "question mark '?'" },
    { wordId: 18, native: "！", translation: "exclamation mark '!'" },
  ],
};

const DialoguePage = () => {
  const [isSpeakersVisible, setSpeakersVisible] = useState(true);
  const [isTranslationsVisible, setTranslationsVisible] = useState(true);

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
              <SpyCheckbox label="あ" />
              <SpyCheckbox
                label="EN"
                value={isTranslationsVisible}
                onValueChange={setTranslationsVisible}
              />
              <SpyCheckbox label="W" />
            </SpyView>
            <ConversationView
              conversation={conversation}
              config={{
                native: true,
                furigana: true,
                hiragana: true,
                translation: isTranslationsVisible,
                speakers: isSpeakersVisible,
              }}
            />
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
