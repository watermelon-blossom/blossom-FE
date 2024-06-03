import { wScale } from "@/util/responsive.util";

export const fontFamilie = {
  BM: "BM",
};

export const fontSize = {
  xs: wScale(10),
  sm: wScale(12),
  md: wScale(16),
  lg: wScale(20),
  xl: wScale(24),
  "2xl": wScale(32),
};

export const font = {
  family: fontFamilie,
  size: fontSize,
};
