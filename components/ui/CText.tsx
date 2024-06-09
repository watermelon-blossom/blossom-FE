import { theme } from "@/constants/colors";
import { font } from "@/constants/font";
import { Platform, Text, TextProps } from "react-native";

type cTextProps = TextProps & {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  color?: string;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through";
  textBreakStrategy?: "simple" | "highQuality" | "balanced"; // Only for Android
  lineBreakStrategyIOS?: "simple" | "hangul-word" | "push-out"; // Only for iOS
};

export default function CText({
  children,
  size = "md",
  color = theme.black,
  textAlign = "auto",
  textDecorationLine = "none",
  textBreakStrategy = "highQuality",
  lineBreakStrategyIOS = "hangul-word",
  ...props
}: cTextProps) {
  return (
    <Text
      style={{
        fontSize: font.size[size],
        lineHeight: font.size[size] * 1.2,
        fontFamily: font.family.BM,
        color: color,
        textDecorationLine: textDecorationLine,
      }}
      {...(Platform.OS === "android" ? { textBreakStrategy } : {})}
      {...(Platform.OS === "ios" ? { lineBreakStrategyIOS } : {})}
      {...props}
    >
      {children}
    </Text>
  );
}
