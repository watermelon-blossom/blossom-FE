import { font } from "@/constants/font";
import { wScale } from "@/util/responsive.util";
import React from "react";
import { Text, StyleSheet, TextProps } from "react-native";

type HeadingProps = TextProps & {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export default function Heading({
  children,
  level,
  style,
  ...props
}: HeadingProps) {
  return (
    <Text
      style={[styles[`h${level}`], { fontFamily: font.family.BM }, style]}
      {...props}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: wScale(34),
  },
  h2: {
    fontSize: wScale(28),
  },
  h3: {
    fontSize: wScale(24),
  },
  h4: {
    fontSize: wScale(18),
  },
  h5: {
    fontSize: wScale(16),
  },
  h6: {
    fontSize: wScale(14),
  },
});
