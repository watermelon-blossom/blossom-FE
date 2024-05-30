/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

const system = {
  warning: "#FFBB2E",
  error: "#CC0000",
  success: "#28C840",
  successLight: "#D4F4D9",
  focus: "#1460cc",
  disabled: "#A9A9A9",
};

export const Colors = {
  light: {
    text: "white", //
    black: "#000000", //
    white: "#FFFFFF", //
    primary: "#F77270", //
    secondary: "#FFB6B3", //
    accent: "#E5615E",
    contrast: "#FFFFFF", //
    background: "#FFF5F5",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    system,
  },
  dark: {
    text: "white", //
    black: "#000000", //
    white: "#FFFFFF", //
    primary: "#F77270", //
    secondary: "#FFB6B3", //
    accent: "#FFD1D0",
    contrast: "#FFFFFF", //
    background: "#FFF5F5",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    system,
  },
  gray: {
    50: "#FAFAFA",
    100: "#EEEEEE",
    200: "#E0E0E0",
    300: "#CCCCCC",
    400: "#A9A9A9",
    500: "#888888",
    600: "#666666",
    700: "#424242",
    800: "#333333",
    900: "#212121",
  },
};
