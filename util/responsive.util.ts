import { Dimensions } from "react-native";

export const BASE_WIDTH = 375;

export const wRatio = (size: number) =>
  (Dimensions.get("window").width * size) / 100;

export const wScale = (size: number) =>
  Math.round((Dimensions.get("window").width / BASE_WIDTH) * size * 10) / 10;
