import { ConversationDTO } from "../../ConversationDTO";

const yutaConv_1_1: ConversationDTO = {
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

export default yutaConv_1_1; 