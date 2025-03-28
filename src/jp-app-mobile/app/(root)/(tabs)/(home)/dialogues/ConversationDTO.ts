export type ConversationDTO = {
  id: string;
  nameNative: string;
  nameTranslation: string;
  description?: string;
  lines: ConversationLineDTO[];
  words: WordDTO[];
};

export type ConversationLineDTO = {
  speakerId: number;
  phrases: PhraseDTO[];
};

export type PhraseDTO = {
  phraseId: number;
  native: string;
  nativeWithKana?: string;
  translation: string;
  wordIds: number[];
};

export type WordDTO = {
  wordId: number;
  native: string;
  nativeWithKana?: string;
  translation: string;
};

export type ConversationConfigDTO = {
  native: boolean;
  furigana: boolean;
  hiragana: boolean;
  translation: boolean;
  speakers: boolean;
  words: boolean;
};

export default {};