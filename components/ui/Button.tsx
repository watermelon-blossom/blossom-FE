import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import { theme } from "@/constants/theme";
import { font } from "@/constants/font";
import { colors } from "@/constants/colors";

type ButtonProps = PressableProps & {
  children: React.ReactNode | string;
  type?: "primary" | "outline";
  size?: "md" | "lg";
  isDisabled?: boolean;
  isHasShadow?: boolean;
  width?: string | number;
  height?: string | number;
  onPress?: () => void;
};

export default function Button({
  children,
  type = "primary",
  size = "md",
  isDisabled = false,
  isHasShadow = false,
  width = "80%",
  height = 60,
  onPress,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        type === "primary" && typeStyles().primaryBg,
        type === "outline" && typeStyles().outlineBg,
        { width: width as any, height: height as any },
        isDisabled && { backgroundColor: colors.gray[100], borderWidth: 0 },
        isHasShadow && layoutStyles.shadow,
        !isDisabled && pressed && styles.pressed,
      ]}
      onPress={isDisabled ? undefined : onPress}
      {...props}
    >
      {typeof children === "string" ? (
        <Text
          style={[
            type === "primary" && typeStyles().primaryText,
            type === "outline" && typeStyles().outlineText,
            size === "md" && sizeStyles.mdText,
            size === "lg" && sizeStyles.lgText,
            isDisabled && { color: theme.light.white },
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
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: { opacity: 0.7 },
});

const typeStyles = () =>
  StyleSheet.create({
    primaryBg: {
      backgroundColor: theme.light.primary,
      borderWidth: 0.5,
      borderColor: theme.light.primary,
    },
    primaryText: { color: theme.light.white },
    outlineBg: {
      backgroundColor: theme.light.white,
      borderWidth: 0.5,
      borderColor: colors.gray[300],
    },
    outlineText: { color: theme.light.black },
  });

const layoutStyles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

const sizeStyles = StyleSheet.create({
  mdText: {
    fontSize: font.size.md,
    lineHeight: font.size.md * 1.2,
    fontFamily: font.family.medium,
  },
  lgText: {
    fontSize: font.size.lg,
    lineHeight: font.size.lg * 1.2,
    fontFamily: font.family.bold,
  },
});
