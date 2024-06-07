// src/components/SvgIcon.tsx
import React from "react";
import { SvgProps } from "react-native-svg";

import * as Icons from "@/assets/Icons/index";
import { colors } from "@/constants/colors";

type IconProps = SvgProps & {
  name: keyof typeof Icons;
  size?: number;
  fill?: string;
};
export default function SvgIcon({
  name,
  fill = colors.theme.primary,
  size,
  ...props
}: IconProps) {
  const Comp = Icons[name];
  const sizeProps = {
    width: size,
    height: size,
  };

  return <Comp {...props} fill={fill} {...sizeProps} />;
}
