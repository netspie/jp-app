import { DynamicThemes } from "@/components/spy/themeTypes";

const primary = "#32357C";
const secondary = "#F34F60";
const tertiary = "green";
const grey = "#979797";

const jpThemes: DynamicThemes = {
  classic: {
    light: {
      primary: primary,
      secondary: secondary,
      tertiary: tertiary,
      accent: "#f9c04a",
      grey: grey,
      greyLight: "#F7F7F7",
      paragraph: "black",
      background: "white",
    },
    dark: {
      primary: primary,
      secondary: secondary,
      tertiary: tertiary,
      accent: "#f9c04a",
      grey: grey,
      greyLight: "#121212",
      paragraph: "#ffffff",
      background: "#0B0B0B",
    },
  },
};

export default jpThemes;
