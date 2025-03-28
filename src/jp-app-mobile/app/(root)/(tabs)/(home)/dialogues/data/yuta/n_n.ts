import { ConversationDTO } from "../../ConversationDTO";

const yutaConv_n_n: ConversationDTO = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  nameNative: "これやってくれる？",
  nameTranslation: "Can you do this for me?",
  lines: [
    {
      speakerId: 18,
      phrases: [
        {
          phraseId: 1,
          native: "これやってくれる？",
          translation: "Can you do this for me?",
          wordIdxs: [0, 20, 1, 2],
        },
      ],
    },
    {
      speakerId: 19,
      phrases: [
        {
          phraseId: 2,
          native: "えー、自分でやって。",
          nativeWithKana: "えー、自(じ)分(ぶん)でやって。",
          translation: "Eh? Do it yourself.",
          wordIdxs: [3, 14, 4, 5, 20, 1],
        },
      ],
    },
    {
      speakerId: 18,
      phrases: [
        {
          phraseId: 1,
          native: "やってよ！",
          translation: "Do it!",
          wordIdxs: [20, 1, 6],
        },
        {
          phraseId: 1,
          native: "いいじゃん！",
          translation: "Come on!",
          wordIdxs: [7, 8],
        },
      ],
    },
    {
      speakerId: 19,
      phrases: [
        {
          phraseId: 2,
          native: "自分でできないでしょ。",
          nativeWithKana: "自(じ)分(ぶん)でできないでしょ。",
          translation: "You can do it yourself, right?",
          wordIdxs: [4, 5, 21, 9, 10],
        },
      ],
    },
    {
      speakerId: 18,
      phrases: [
        {
          phraseId: 1,
          native: "できない！",
          translation: "I can't!",
          wordIdxs: [21, 9, 17],
        },
      ],
    },
    {
      speakerId: 19,
      phrases: [
        {
          phraseId: 2,
          native: "子(こ)供(ども)みたい…。",
          translation: "You're like a child…",
          wordIdxs: [12, 13, 15],
        },
      ],
    },
  ],
  words: [
    { wordId: 0, native: "これ", translation: "this" },
    { wordId: 1, native: "やって", translation: "Do!; Do it!" },
    {
      wordId: 2,
      native: "くれる",
      translation: "to do something as a favor",
    },
    { wordId: 3, native: "えー", translation: "eh?; what?; well; yes" },
    {
      wordId: 4,
      native: "自分",
      nativeWithKana: "自(じ)分(ぶん)",
      translation: "oneself",
    },
    { wordId: 5, native: "で", translation: "in; at; from; by" },
    { wordId: 6, native: "よ", translation: "ASSERTION; REMINDING" },
    { wordId: 7, native: "いい", translation: "good" },
    { wordId: 8, native: "じゃん", translation: "isn't it" },
    { wordId: 9, native: "できない", translation: "to NOT be able to do" },
    { wordId: 10, native: "でしょ", translation: "I guess; isn't it?" },
    { wordId: 11, native: "ない", translation: "not; nonexistent" },
    {
      wordId: 12,
      native: "子供",
      nativeWithKana: "子(こ)供(ども)",
      translation: "child",
    },
    { wordId: 13, native: "みたい", translation: "like" },
    { wordId: 14, native: "、", translation: "delimiter ','" },
    { wordId: 15, native: "。", translation: "dot '.'" },
    { wordId: 16, native: "？", translation: "question mark '?'" },
    { wordId: 17, native: "！", translation: "exclamation mark '!'" },
    {
      wordId: 18,
      native: "ナオト",
      translation: "Naoto",
    },
    {
      wordId: 19,
      native: "ユリ",
      translation: "Yuri",
    },
    { wordId: 20, native: "やる", translation: "to do" },
    { wordId: 21, native: "できる", translation: "to be able to do" },
  ],
};

export default yutaConv_n_n;
