import { gray } from "@/constants/colors";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  FlexStyle,
} from "react-native";

type TextInputProps = Omit<RNTextInputProps, "onChangeText"> & {
  name: string;
  label?: string;
  value: string;
  disabled?: boolean;
  width?: FlexStyle["width"];
  height?: FlexStyle["height"];
  onChangeText: (name: string, text: string) => void;
};

export default function TextInput({
  name,
  label,
  value,
  width = "100%",
  disabled = false,
  height = 60,
  onChangeText,
  ...others
}: TextInputProps) {
  return (
    <View style={[{ width, height }]}>
      {label && (
        <View style={styles.textWrapper}>
          <Text style={[styles.nameText, disabled && styles.disabled]}>
            {label}
          </Text>
        </View>
      )}
      <RNTextInput
        style={[styles.input, disabled && styles.disabled, { width, height }]}
        value={value}
        editable={!disabled}
        placeholderTextColor={others.placeholderTextColor || gray[300]}
        onChangeText={(text) => onChangeText(name, text)}
        {...others}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textWrapper: {
    position: "absolute",
    top: -8,
    left: 26,
    alignItems: "center",
    paddingHorizontal: 8,
    backgroundColor: "white",
    zIndex: 3000,
  },
  nameText: {
    color: gray[600],
    fontSize: 14,
  },
  input: {
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "white",
    borderRadius: 16,
    borderColor: gray[200],
    borderWidth: 1,
    color: "black",
    fontSize: 16,
  },
  disabled: { opacity: 0.4 },
});
