import { create } from "zustand";

type ConversationConfigStore = {
    isSpeakersVisible: boolean
    isNativeVisible: boolean
    isTranslationsVisible: boolean
    isFuriganaVisible: boolean
    isVocabularyVisible: boolean
    isLineVocabularyVisible: boolean
    isAllVocabularyVisible: boolean
    setSpeakersVisible: (value: boolean) => void
    setNativeVisible: (value: boolean) => void
    setTranslationsVisible: (value: boolean) => void
    setFuriganaVisible: (value: boolean) => void
    setVocabularyVisible: (value: boolean) => void
    setLineVocabularyVisible: (value: boolean) => void
    setAllVocabularyVisible: (value: boolean) => void
  };
  
  export const useConversationConfigStore = create<ConversationConfigStore>((set) => ({
    isSpeakersVisible: true,
    isNativeVisible: true,
    isTranslationsVisible: true,
    isFuriganaVisible: true,
    isVocabularyVisible: true,
    isLineVocabularyVisible: true,
    isAllVocabularyVisible: true,
    setSpeakersVisible: (value) => set({ isSpeakersVisible: value }),
    setNativeVisible: (value) => set({ isNativeVisible: value }),
    setTranslationsVisible: (value) => set({ isTranslationsVisible: value }),
    setFuriganaVisible: (value) => set({ isFuriganaVisible: value }),
    setVocabularyVisible: (value) => set({ isVocabularyVisible: value }),
    setLineVocabularyVisible: (value) => set({ isLineVocabularyVisible: value }),
    setAllVocabularyVisible: (value) => set({ isAllVocabularyVisible: value }),
  }));