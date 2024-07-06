import React from "react";
import { SvgXml } from "react-native-svg";
import { wScale } from "@/util/responsive.util";

type DiscoverIconProps = {
  width?: number;
  fill?: string;
};

export default function DiscoverIcon({
  width = wScale(24),
  fill = "black",
}: DiscoverIconProps) {
  return <SvgXml xml={xml(width, fill)} />;
}

const xml = (width: number, fill: string) => `
<svg width="${width}" height="${width}" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="9.49902" y="3.49756" width="13" height="18" rx="2" fill="${fill}" stroke="#F3F3F3"/>
<rect x="0.391602" y="3.48901" width="13" height="18" rx="2" transform="rotate(-15 0.391602 3.48901)" fill="${fill}" stroke="#F3F3F3"/>
</svg>
`;
