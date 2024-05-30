import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import { Colors } from "./Colors";
import { Font } from "./Font";
import { Size } from "./Size";

type ButtonProps = PressableProps & {
  children: React.ReactNode | string;
  type?: "primary" | "outline";
  size?: "md" | "lg";
  disabled?: boolean;
  hasShadow?: boolean;
  width?: string | number;
  height?: string | number;
  onPress?: () => void;
};

export default function Button({
  children,
  type = "primary",
  size = "md",
  disabled = false,
  hasShadow = false,
  width = "80%",
  height = 60,
  onPress,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { width: width as any, height: height as any },
        // typeof width === "number" && { width },
        // typeof height === "number" && { height },
        type === "primary" && typeStyles().primaryBg,
        type === "outline" && typeStyles().outlineBg,
        // size === "md" && sizeStyles.mdSize,
        // size === "lg" && sizeStyles.lgSize,
        disabled && { backgroundColor: Colors.gray[100], borderWidth: 0 },
        hasShadow && layoutStyles.shadow,
        !disabled && pressed && styles.pressed,
      ]}
      onPress={disabled ? undefined : onPress}
      {...props}
    >
      {typeof children === "string" ? (
        <Text
          style={[
            type === "primary" && typeStyles().primaryText,
            type === "outline" && typeStyles().outlineText,
            size === "md" && sizeStyles.mdText,
            size === "lg" && sizeStyles.lgText,
            disabled && { color: Colors.light.white },
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
      backgroundColor: Colors.light.primary,
      borderWidth: 0.5,
      borderColor: Colors.light.primary,
    },
    primaryText: { color: Colors.light.white },
    outlineBg: {
      backgroundColor: Colors.light.white,
      borderWidth: 0.5,
      borderColor: Colors.gray[300],
    },
    outlineText: { color: Colors.light.black },
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
  mdSize: { width: Size.widthSize.md, height: Size.heightSize.md },
  mdText: {
    fontSize: Font.size.md,
    lineHeight: Font.size.md * 1.2,
    // fontFamily: Font.family.medium,
  },
  lgSize: { width: Size.widthSize.lg, height: Size.heightSize.lg },
  lgText: {
    fontSize: Font.size.lg,
    lineHeight: Font.size.lg * 1.2,
    // fontFamily: Font.family.bold,
  },
});
