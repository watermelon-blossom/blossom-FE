import * as font from "expo-font";
import { useState } from "react";

const getFonts = async () => {
  await font.loadAsync({
    BMD: require("../assets/fonts/BMDOHYEON.otf"),
  });
};

export const Font = {
  family: {
    regular: "BMD",
    medium: "BMD",
    bold: "BMD",
  },
  size: {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    "2xl": 32,
  },
};
