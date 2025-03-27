import { ConversationDTO } from "../../ConversationDTO";

const yutaConv_1_1: ConversationDTO = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  nameNative: "これやってくれる？",
  nameTranslation: "Can you do this for me?",
  lines: [
    {
      speakerIdx: 18,
      phrases: [
        {
          phraseId: 1,
          native: "これやってくれる？",
          translation: "Can you do this for me?",
          phraseWordIdxs: [0, 1, 2, 16],
          defWordIdxs: [0, 20, 1, 2, 16],
        },
      ],
    },
    {
      speakerIdx: 19,
      phrases: [
        {
          phraseId: 2,
          native: "えー、自分でやって。",
          translation: "Eh? Do it yourself.",
          phraseWordIdxs: [3, 14, 4, 5, 1, 15],
          defWordIdxs: [3, 14, 4, 5, 1, 15],
        },
      ],
    },
    {
      speakerIdx: 18,
      phrases: [
        {
          phraseId: 1,
          native: "やってよ！",
          translation: "Do it!",
          phraseWordIdxs: [1, 6, 17],
          defWordIdxs: [20, 1, 6, 17],
        },
        {
          phraseId: 1,
          native: "いいじゃん！",
          translation: "Come on!",
          phraseWordIdxs: [7, 8, 17],
          defWordIdxs: [7, 8, 17],
        },
      ],
    },
    {
      speakerIdx: 19,
      phrases: [
        {
          phraseId: 2,
          native: "自分でできるでしょ。",
          translation: "You can do it yourself, right?",
          phraseWordIdxs: [4, 5, 9, 10, 15],
          defWordIdxs: [4, 5, 9, 10, 15],
        },
      ],
    },
    {
      speakerIdx: 18,
      phrases: [
        {
          phraseId: 1,
          native: "できない！",
          translation: "I can't!",
          phraseWordIdxs: [9, 17],
          defWordIdxs: [9, 17],
        },
      ],
    },
    {
      speakerIdx: 19,
      phrases: [
        {
          phraseId: 2,
          native: "子供みたい…。",
          translation: "You're like a child…",
          phraseWordIdxs: [12, 13, 15],
          defWordIdxs: [12, 13, 15],
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
      translation: "oneself",
      fragments: [
        ["自", "じ"],
        ["分", "ぶん"],
      ],
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
      translation: "child",
      fragments: [
        ["子", "こ"],
        ["供", "ども"],
      ],
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
      fragments: [
        ["直", "ナ"],
        ["人", "オト"],
      ],
    },
    {
      wordId: 19,
      native: "ユリ",
      translation: "Yuri",
      fragments: [
        ["百", "ユ"],
        ["合", "リ"],
      ],
    },
    { wordId: 20, native: "やる", translation: "to do" },
  ],
};

export default yutaConv_1_1;
