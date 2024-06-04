import React from "react";

import { Pressable, PressableProps, StyleSheet, ViewStyle } from "react-native";
import { colors } from "@/constants/colors";
// import SvgUri from "react-native-svg-uri";

type IconButtonProps = PressableProps & {
  // children: React.ReactNode | string;
  type?: "white" | "transparent";
  iconName?: string;
  iconSize?: number;
  buttonSize?: number;
  disabled?: boolean;
  onPress: () => void;
};

export default function IconButton({
  // children,
  type = "white",
  iconName = "back",
  iconSize = 24,
  buttonSize = 48,
  disabled = false,
  onPress,
  ...props
}: IconButtonProps) {
  //   let path: string = `@/assets/Icons/${iconName}.svg`;
  //   console.log(path);
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        type === "white" && typeStyles().whiteBg,
        type === "transparent" && typeStyles().transparentBg,
        disabled && { backgroundColor: colors.gray[100], borderWidth: 0 },
        {
          width: buttonSize,
          height: buttonSize,
        },
        !disabled && pressed && styles.pressed,
      ]}
      onPress={onPress}
      {...props}
    >
      {/* <SvgUri
        width={iconSize}
        height={iconSize}
        svgXmlData=""
      ></SvgUri> */}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  pressed: { opacity: 0.7 },
});

const typeStyles = () =>
  StyleSheet.create({
    whiteBg: {
      backgroundColor: colors.theme.white,
      borderWidth: 0.5,
      borderColor: colors.gray[200],
    },
    transparentBg: {
      backgroundColor: "transparent",
      borderWidth: 0.5,
      borderColor: colors.theme.white,
    },
  });
