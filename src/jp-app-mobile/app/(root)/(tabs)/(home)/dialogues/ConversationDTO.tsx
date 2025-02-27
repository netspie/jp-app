export type ConversationDTO = {
  id: string;
  nameNative: string;
  nameTranslation: string;
  speakers: SpeakerDTO[];
  lines: ConversationLineDTO[];
  words: WordDTO[];
};

export type SpeakerDTO = {
  nameNative: string;
  nameTranslation: string;
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
};
