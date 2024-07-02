import Button from "@/components/ui/Button";
import PaginationDots from "@/components/ui/PaginationDots";
import React, { useRef, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { theme } from "@/constants/colors";

import QCarousel, { QCarouselDataProp } from "@/components/ui/QCarousel";
import { ICarouselInstance } from "react-native-reanimated-carousel";
import ActionButton from "@/components/ui/ActionButton";
import SingleSliderInput from "@/components/ui/SingleSliderInput";

// const DATA: QCarouselDataProp = [
//   require("../assets/images/test1.png"),
//   require("../assets/images/test2.png"),
//   require("../assets/images/test3.png"),
// ];

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function TestScreen() {
  const [userInput, setUserInput] = useState({
    val1: 20,
    val2: 50,
  });

  const hadleChnageValue = (name: string, value: number) => {
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  console.log("userInput", userInput);
  return (
    <>
      <View style={styles.screen}>
        <SingleSliderInput
          name="val1"
          value={userInput.val1}
          min={0}
          max={100}
          onChange={hadleChnageValue}
        />
        <SingleSliderInput
          name="val2"
          value={userInput.val2}
          min={0}
          max={100}
          disabled
          onChange={hadleChnageValue}
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
