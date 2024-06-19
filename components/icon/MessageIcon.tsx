import React from "react";
import { SvgXml } from "react-native-svg";
import { wScale } from "@/util/responsive.util";

type MessageIconProps = {
  width?: number;
  fill?: string;
};

export default function MessageIcon({
  width = wScale(24),
  fill = "black",
}: MessageIconProps) {
  return <SvgXml xml={xml(width, fill)} />;
}

const xml = (width: number, fill: string) => `
<svg width="${width}" height="${width}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 17.5229 17.5229 22 12 22C9.01325 22 2 22 2 22C2 22 2 14.5361 2 12C2 6.47715 6.47715 2 12 2C17.5229 2 22 6.47715 22 12Z" fill="${fill}" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 9H16" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 13H16" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 17H12" stroke="#F3F3F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`;
