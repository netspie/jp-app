import { ConversationDTO } from "../../ConversationDTO";

const yutaConv_1_1: ConversationDTO = {
  id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
  nameNative: "仕事が終わらない vs 終わった",
  nameTranslation: "Work never ends vs. Finished work",
  lines: [
    {
      speakerIdx: 22, // Mina
      phrases: [
        {
          phraseId: 1,
          native: "あー仕事終わらない…。",
          nativeWithKana: "あー仕(し)事(ごと)終(お)わらない…。",
          translation: "Ahhh this job never ends...",
          wordIdxs: [0, 6, 7, 8, 9, 10],
        },
      ],
    },
    {
      speakerIdx: 23, // Erika
      phrases: [
        {
          phraseId: 2,
          native: "私もう終わった～！",
          nativeWithKana: "私(わたし)もう終(お)わった～！",
          translation: "I've finished mine!",
          wordIdxs: [11, 12, 7, 13, 14],
        },
      ],
    },
    {
      speakerIdx: 22, // Mina
      phrases: [
        {
          phraseId: 3,
          native: "ええー！すごい！",
          translation: "What?! That's amazing!",
          wordIdxs: [15, 16, 14],
        },
      ],
    },
    {
      speakerIdx: 23, // Erika
      phrases: [
        {
          phraseId: 4,
          native: "あーもう帰りたい…。",
          nativeWithKana: "あーもう帰(かえ)りたい…。",
          translation: "I want to go home already....",
          wordIdxs: [0, 7, 12, 3, 5],
        },
      ],
    },
    {
      speakerIdx: 22, // Mina
      phrases: [
        {
          phraseId: 5,
          native: "やってもらいたい…。私の仕事も…。",
          nativeWithKana: "やってもらいたい…。私(わたし)の仕(し)事(ごと)も…。",
          translation: "I want you to do my job too....",
          wordIdxs: [18, 19, 8, 20, 6, 21, 10],
        },
      ],
    },
  ],
  words: [
    { wordId: 0, native: "あー", translation: "Ahhh" },
    { wordId: 1, native: "仕事", translation: "work; job" },
    { wordId: 2, native: "終わら", translation: "not finish" },
    { wordId: 3, native: "…", translation: "..." },
    { wordId: 4, native: "ない", translation: "not; nonexistent" },
    { wordId: 5, native: "。", translation: "dot '.'" },
    { wordId: 6, native: "仕事", nativeWithKana: "仕(し)事(ごと)", translation: "work, job; to work" },
    { wordId: 7, native: "もう", translation: "already; soon; again" },
    { wordId: 8, native: "終わっ", translation: "finished" },
    { wordId: 9, native: "た", translation: "past tense marker" },
    { wordId: 10, native: "～！", translation: "exclamation with elongation" },
    { wordId: 11, native: "私", translation: "I" },
    { wordId: 12, native: "帰りたい", translation: "want to return" },
    { wordId: 13, native: "～", translation: "elongation mark" },
    { wordId: 14, native: "ええ", translation: "eh?; what?; well; yes" },
    { wordId: 15, native: "すごい", translation: "fantastic; wonderful; terrible" },
    { wordId: 16, native: "も", translation: "too; also" },
    { wordId: 17, native: "帰る", translation: "to return" },
    { wordId: 18, native: "やっ", translation: "do" },
    { wordId: 19, native: "てもらい", translation: "receive a favor" },
    { wordId: 20, native: "たい", translation: "want to" },
    { wordId: 21, native: "の", translation: "possessive particle" },
    { wordId: 22, native: "ミナ", translation: "Mina" },
    { wordId: 23, native: "エリカ", translation: "Erika" },
  ],
};

export default yutaConv_1_1;
