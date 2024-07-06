import React from "react";
import { SvgXml } from "react-native-svg";
import { wScale } from "@/util/responsive.util";
import { theme } from "@/constants/colors";

type MatchIconProps = {
  width?: number;
  fill?: string;
  isOn?: boolean;
};

export default function MatchIcon({
  width = wScale(24),
  fill = "black",
  isOn = false,
}: MatchIconProps) {
  return <SvgXml xml={xml(width, fill, isOn)} />;
}

const xml = (width: number, fill: string, isOn: boolean) => `
<svg width="${width}" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 4C4.46244 4 2 6.46245 2 9.5C2 15 8.5 20 12 21.1631C15.5 20 22 15 22 9.5C22 6.46245 19.5375 4 16.5 4C14.6398 4 12.9953 4.92345 12 6.3369C11.0047 4.92345 9.36015 4 7.5 4Z" fill="${fill}" stroke="${fill}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
${
  isOn
    ? `<circle cx="20" cy="6" r="5" fill="${theme.primary}" stroke="#F3F3F3" stroke-width="2"/>`
    : ""
}
</svg>
`;
