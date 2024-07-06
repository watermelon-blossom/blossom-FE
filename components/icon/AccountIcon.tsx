import React from "react";
import { SvgXml } from "react-native-svg";
import { wScale } from "@/util/responsive.util";

type AccountIconProps = {
  width?: number;
  fill?: string;
};

export default function AccountIcon({
  width = wScale(24),
  fill = "black",
}: AccountIconProps) {
  return <SvgXml xml={xml(width, fill)} />;
}

const xml = (width: number, fill: string) => `
<svg width="${width}" height="${width}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 10C13.933 10 15.5 8.433 15.5 6.5C15.5 4.56701 13.933 3 12 3C10.067 3 8.5 4.56701 8.5 6.5C8.5 8.433 10.067 10 12 10Z" fill="${fill}" stroke="${fill}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 20.4V21H21V20.4C21 18.1598 21 17.0397 20.5641 16.184C20.1806 15.4314 19.5686 14.8195 18.816 14.436C17.9603 14 16.8402 14 14.6 14H9.4C7.1598 14 6.0397 14 5.18405 14.436C4.43139 14.8195 3.81947 15.4314 3.43598 16.184C3 17.0397 3 18.1598 3 20.4Z" fill="${fill}" stroke="${fill}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
