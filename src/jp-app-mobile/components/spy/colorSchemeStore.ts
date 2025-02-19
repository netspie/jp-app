import { create } from "zustand";

type ColorSchemeStore = {
  value: "light" | "dark";
  setValue: (value: "light" | "dark") => void;
};

export const useColorSchemeStore = create<ColorSchemeStore>((set) => ({
    value: "light",
    setValue: (value: "light" | "dark") => set(() => ({ value: value })),
}));

