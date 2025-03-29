import { ConversationDTO } from "../../ConversationDTO";

const yutaConv_2020_04_06_L1_1: ConversationDTO = {
  id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
  nameNative: "2020年 4月 6日 - Level 1 - 仕事が終わらない",
  nameTranslation: "Work does not end",
  lines: [
    {
      speakerId: 22, // Mina
      phrases: [
        {
          phraseId: 1,
          native: "あー仕事終わらない…。",
          nativeWithKana: "あー仕(し)事(ごと)終(お)わらない…。",
          translation: "Ahhh this job never ends...",
          wordIds: [0, 1, 2, 3],
        },
      ],
    },
    {
      speakerId: 23, // Erika
      phrases: [
        {
          phraseId: 2,
          native: "私もう終わった～！",
          nativeWithKana: "私(わたし)もう終(お)わった～！",
          translation: "I've finished mine!",
          wordIds: [4, 5, 6, 3, 7],
        },
      ],
    },
    {
      speakerId: 22, // Mina
      phrases: [
        {
          phraseId: 3,
          native: "ええー！すごい！",
          translation: "What?! That's amazing!",
          wordIds: [8, 9],
        },
      ],
    },
    {
      speakerId: 23, // Erika
      phrases: [
        {
          phraseId: 4,
          native: "あーもう帰りたい…。",
          nativeWithKana: "あーもう帰(かえ)りたい…。",
          translation: "I want to go home already....",
          wordIds: [0, 5, 10, 11],
        },
      ],
    },
    {
      speakerId: 22, // Mina
      phrases: [
        {
          phraseId: 5,
          native: "やってもらいたい…。私の仕事も…。",
          nativeWithKana: "やってもらいたい…。私(わたし)の仕(し)事(ごと)も…。",
          translation: "I want you to do my job too....",
          wordIds: [12, 13, 14, 15, 4, 16, 17],
        },
      ],
    },
  ],
  words: [
    { wordId: 0, native: "あー", translation: "Ahhh" },
    { wordId: 1, native: "仕事", nativeWithKana: "仕(し)事(ごと)", translation: "work, job" },
    { wordId: 2, native: "終わらない", nativeWithKana: "終(お)わらない", translation: "not to finish; negative form of 終わる" },
    { wordId: 3, native: "終わる", nativeWithKana: "終(お)わる", translation: "to finish" },
    { wordId: 4, native: "私", nativeWithKana: "私(わたし)", translation: "I" },
    { wordId: 5, native: "もう", translation: "already; soon; again" },
    { wordId: 6, native: "終わった", nativeWithKana: "終(お)わった" , translation: "finished; past form of 終わる" },
    { wordId: 7, native: "～", translation: "elongation mark" },
    { wordId: 8, native: "ええー", translation: "eh?; what?; well; yes" },
    { wordId: 9, native: "すごい", translation: "fantastic; wonderful; terrible" },
    { wordId: 10, native: "帰りたい", nativeWithKana: "帰(かえ)りたい", translation: "want to return home; ～たい form of 帰る" },
    { wordId: 11, native: "帰る", nativeWithKana: "帰(かえ)る", translation: "to return home" },
    { wordId: 12, native: "やって", translation: "Do!; Do it!; ～て form of やる" },
    { wordId: 13, native: "やる", translation: "to do" },
    { wordId: 14, native: "もらいたい", translation: "to want to receive a favor; ～たい form of もらう" },
    { wordId: 15, native: "もらう", translation: "to receive a favor" },
    { wordId: 16, native: "の", translation: "possessive particle" },
    { wordId: 17, native: "も", translation: "too; also; particle" },
    { wordId: 22, native: "ミナ", translation: "Mina" },
    { wordId: 23, native: "エリカ", translation: "Erika" },
  ],
};

export default yutaConv_2020_04_06_L1_1;
