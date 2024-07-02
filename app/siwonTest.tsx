import React, { useRef, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { theme } from "@/constants/colors";

import DoubleSliderInput from "@/components/ui/DoubleSliderInput";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function TestScreen() {
  const [userInput, setUserInput] = useState({
    val1: [0, 50],
    val2: [0, 30],
  });

  const hadleChangeValue = (name: string, value: number[]) => {
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  console.log(userInput.val1);

  return (
    <>
      <View style={styles.screen}>
        <DoubleSliderInput
          name="val1"
          value={userInput.val1}
          min={0}
          max={100}
          onChange={hadleChangeValue}
        />
        <DoubleSliderInput
          name="val2"
          value={userInput.val2}
          min={0}
          max={100}
          disabled
          onChange={hadleChangeValue}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // flexDirection: "row",
    gap: 20,
    padding: 20,
    backgroundColor: theme.contrast,
  },
});
