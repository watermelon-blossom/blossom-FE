import { theme } from "@/constants/colors";
import { font } from "@/constants/font";
import { StyleSheet, Text, TextProps } from "react-native";

type cTextProps = TextProps & {
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  color?: string;
  textBreakStrategy?: "simple" | "highQuality" | "balanced"; // Only for Android
  lineBreakStrategyIOS?: "simple" | "hangul-word" | "push-out"; // Only for iOS
};

export default function CText({
  children,
  size = "md",
  color = theme.black,
  textBreakStrategy = "highQuality",
  lineBreakStrategyIOS = "hangul-word",
  ...props
}: cTextProps) {
  return (
    <Text
      style={[
        styles[size],
        {
          fontFamily: font.family.BM,
          color: color,
        },
      ]}
      {...{ textBreakStrategy }}
      {...{ lineBreakStrategyIOS }}
      {...props}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  xs: {
    fontSize: font.size.xs,
    lineHeight: font.size.xs * 1.2,
  },
  sm: {
    fontSize: font.size.sm,
    lineHeight: font.size.sm * 1.2,
  },
  md: {
    fontSize: font.size.md,
    lineHeight: font.size.md * 1.2,
  },
  lg: {
    fontSize: font.size.lg,
    lineHeight: font.size.lg * 1.2,
  },
  xl: {
    fontSize: font.size.xl,
    lineHeight: font.size.xl * 1.2,
  },
  "2xl": {
    fontSize: font.size["2xl"],
    lineHeight: font.size["2xl"] * 1.2,
  },
});
