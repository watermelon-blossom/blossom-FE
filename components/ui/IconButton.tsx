import React from "react";

import { Pressable, PressableProps, StyleSheet, ViewStyle } from "react-native";
import { colors } from "@/constants/colors";
import { wScale } from "@/util/responsive.util";
import SvgIcon from "./SvgIcon";
import * as Icons from "@/assets/Icons/index";

type IconButtonProps = PressableProps & {
  type?: "white" | "transparent";
  iconName?: keyof typeof Icons;
  iconSize?: number;
  iconColor?: string;
  buttonSize?: number;
  disabled?: boolean;
  onPress: () => void;
};

export default function IconButton({
  type = "white",
  iconName = "back",
  iconColor = colors.theme.primary,
  iconSize = wScale(24),
  buttonSize = wScale(52),
  disabled = false,
  onPress,
  ...props
}: IconButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        type === "white" && typeStyles.whiteBg,
        type === "transparent" && typeStyles.transparentBg,
        disabled && styles.disabledStyle,
        {
          width: buttonSize,
          height: buttonSize,
        },
        !disabled && pressed && styles.pressed,
      ]}
      onPress={disabled ? undefined : onPress}
      {...props}
    >
      <SvgIcon
        name={iconName}
        size={iconSize}
        fill={disabled ? colors.theme.white : iconColor}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wScale(15),
  },
  pressed: { opacity: 0.7 },
  disabledStyle: {
    backgroundColor: colors.gray[100],
    borderWidth: 0,
  },
});

const typeStyles = StyleSheet.create({
  whiteBg: {
    backgroundColor: colors.theme.white,
    borderWidth: wScale(1),
    borderColor: colors.gray[200],
  },
  transparentBg: {
    backgroundColor: "transparent",
    borderWidth: wScale(1),
    borderColor: colors.gray[200],
  },
});
