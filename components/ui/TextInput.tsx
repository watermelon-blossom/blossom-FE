import { gray } from "@/constants/colors";
import { fontSize } from "@/constants/font";
import { wScale } from "@/util/responsive.util";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  FlexStyle,
  ViewStyle,
} from "react-native";

type TextInputProps = Omit<RNTextInputProps, "onChangeText"> & {
  style?: ViewStyle;
  name: string;
  label?: string;
  value: string;
  disabled?: boolean;
  iconWrapperStyle?: ViewStyle;
  icon?: React.ReactNode;
  width?: number;
  height?: number;
  onChangeText: (name: string, text: string) => void;
};

export default function TextInput({
  style,
  name,
  label,
  value,
  width,
  disabled = false,
  icon,
  iconWrapperStyle,
  height = wScale(60),
  onChangeText,
  ...others
}: TextInputProps) {
  return (
    <View style={[{ width, height }, style]}>
      {label && (
        <View style={styles.textWrapper}>
          <Text style={[styles.nameText, disabled && styles.disabled]}>
            {label}
          </Text>
        </View>
      )}
      <View style={[styles.inputWrapper, { width, height }]}>
        {icon && <View style={[iconWrapperStyle]}>{icon}</View>}
        <RNTextInput
          style={[styles.input, disabled && styles.disabled]}
          value={value}
          editable={!disabled}
          placeholderTextColor={others.placeholderTextColor || gray[300]}
          onChangeText={(text) => onChangeText(name, text)}
          {...others}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textWrapper: {
    position: "absolute",
    top: -wScale(8),
    left: wScale(26),
    alignItems: "center",
    paddingHorizontal: wScale(8),
    backgroundColor: "white",
    zIndex: 3000,
  },
  nameText: {
    color: gray[600],
    fontSize: wScale(14),
  },
  icon: {
    position: "absolute",
    top: wScale(15),
    left: wScale(20),
    backgroundColor: "red",
  },
  inputWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: wScale(10),
    paddingHorizontal: wScale(20),
    borderColor: gray[200],
    borderWidth: wScale(1),
    borderRadius: wScale(16),
  },
  input: {
    justifyContent: "center",
    backgroundColor: "white",
    color: "black",
    fontSize: fontSize.md,
  },
  disabled: { opacity: 0.4 },
});
