export type ConversationDTO = {
  id: string;
  nameNative: string;
  nameTranslation: string;
  description?: string;
  lines: ConversationLineDTO[];
  words: WordDTO[];
};

export type ConversationLineDTO = {
  speakerIdx: number;
  phrases: PhraseDTO[];
};

export type PhraseDTO = {
  phraseId: number;
  native: string;
  translation: string;
  wordIdxs: number[];
};

export type WordDTO = {
  wordId: number;
  native: string;
  translation: string;
  fragments?: string[][];
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