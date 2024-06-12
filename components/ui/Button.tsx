import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import { font } from "@/constants/font";
import { colors } from "@/constants/colors";
import { wScale } from "@/util/responsive.util";

type ButtonProps = PressableProps & {
  children: React.ReactNode | string;
  type?: "primary" | "outline";
  size?: "md" | "lg";
  disabled?: boolean;
  isHasShadow?: boolean;
  width?: string | number;
  height?: string | number;
  onPress?: () => void;
};

export default function Button({
  children,
  type = "primary",
  size = "md",
  disabled = false,
  isHasShadow = false,
  width = "80%",
  height = wScale(58),
  onPress,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        type === "primary" && typeStyles.primaryBg,
        type === "outline" && typeStyles.outlineBg,
        { width: width as any, height: height as any },
        disabled && styles.disabledStyle,
        isHasShadow && layoutStyles.shadow,
        !disabled && pressed && styles.pressed,
      ]}
      onPress={disabled ? undefined : onPress}
      {...props}
    >
      {typeof children === "string" ? (
        <Text
          style={[
            type === "primary" && typeStyles.primaryText,
            type === "outline" && typeStyles.outlineText,
            sizeStyles[size],
            disabled && { color: colors.theme.white },
          ]}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: wScale(15),
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: { opacity: 0.7 },
  disabledStyle: {
    backgroundColor: colors.gray[100],
    borderWidth: 0,
  },
});

const typeStyles = StyleSheet.create({
  primaryBg: {
    backgroundColor: colors.theme.primary,
    borderWidth: wScale(1),
    borderColor: colors.theme.primary,
  },
  primaryText: { color: colors.theme.white },
  outlineBg: {
    backgroundColor: colors.theme.white,
    borderWidth: wScale(1),
    borderColor: colors.gray[300],
  },
  outlineText: { color: colors.theme.black },
});

const layoutStyles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: wScale(2),
    },
    shadowOpacity: 0.4,
    shadowRadius: wScale(3.84),
    elevation: 5,
  },
});

const sizeStyles = StyleSheet.create({
  md: {
    fontSize: font.size.md,
    lineHeight: font.size.md * 1.2,
    fontFamily: font.family.BM,
  },
  lg: {
    fontSize: font.size.lg,
    lineHeight: font.size.lg * 1.2,
    fontFamily: font.family.BM,
  },
});
