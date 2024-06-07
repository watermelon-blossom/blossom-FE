// components/Heading.tsx
import { font } from "@/constants/font";
import { wScale } from "@/util/responsive.util";
import React from "react";
import { Text, StyleSheet, TextProps } from "react-native";

interface HeadingProps extends TextProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

export default function Heading({
  level,
  children,
  style,
  ...props
}: HeadingProps) {
  const textStyle = [styles[`h${level}`], style];

  return (
    <Text style={textStyle} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: wScale(34),
    fontFamily: font.family.BM,
  },
  h2: {
    fontSize: wScale(28),
    fontFamily: font.family.BM,
  },
  h3: {
    fontSize: wScale(24),
    fontFamily: font.family.BM,
  },
  h4: {
    fontSize: wScale(18),
    fontFamily: font.family.BM,
  },
  h5: {
    fontSize: wScale(16),
    fontFamily: font.family.BM,
  },
  h6: {
    fontSize: wScale(14),
    fontFamily: font.family.BM,
  },
});
