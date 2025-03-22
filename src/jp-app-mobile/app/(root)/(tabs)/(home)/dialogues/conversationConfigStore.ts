import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import AsyncStorage from "@react-native-async-storage/async-storage";

const asyncStorage = {
  getItem: (key: string) => {
    return AsyncStorage.getItem(key); // Returns a promise resolving to a string or null
  },
  setItem: (key: string, value: string) => {
    return AsyncStorage.setItem(key, value); // Returns a promise
  },
  removeItem: (key: string) => {
    return AsyncStorage.removeItem(key); // Returns a promise
  },
};

type ConversationConfigStore = {
  isSpeakersVisible: boolean;
  isNativeVisible: boolean;
  isTranslationsVisible: boolean;
  isFuriganaVisible: boolean;
  isVocabularyVisible: boolean;
  isLineVocabularyVisible: boolean;
  isAllVocabularyVisible: boolean;
  setSpeakersVisible: (value: boolean) => void;
  setNativeVisible: (value: boolean) => void;
  setTranslationsVisible: (value: boolean) => void;
  setFuriganaVisible: (value: boolean) => void;
  setVocabularyVisible: (value: boolean) => void;
  setLineVocabularyVisible: (value: boolean) => void;
  setAllVocabularyVisible: (value: boolean) => void;
};

export const useConversationConfigStore = create(
  persist<ConversationConfigStore>(
    (set) => ({
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
      setLineVocabularyVisible: (value) =>
        set({ isLineVocabularyVisible: value }),
      setAllVocabularyVisible: (value) =>
        set({ isAllVocabularyVisible: value }),
    }),
    {
      name: "conversation-config-storage", // key for the localStorage or AsyncStorage
      storage: createJSONStorage(() => asyncStorage), // or use AsyncStorage for React Native
    }
  )
);

export default {};
