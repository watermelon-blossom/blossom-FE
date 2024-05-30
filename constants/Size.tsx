import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Size = {
  widthSize: {
    sm: width * 0.4,
    md: width * 0.8,
    lg: width * 0.9,
  },
  heightSize: {
    sm: height / 32,
    md: height / 16,
    lg: height / 8,
  },
};
