import Button from "@/components/ui/Button";
import PaginationDots from "@/components/ui/PaginationDots";
import React, { useRef, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { theme } from "@/constants/colors";

import QCarousel, { QCarouselDataProp } from "@/components/ui/QCarousel";
import { ICarouselInstance } from "react-native-reanimated-carousel";
import ActionButton from "@/components/ui/ActionButton";
import MatchedCard from "@/components/ui/MatchedCard";

// const DATA: QCarouselDataProp = [
//   require("../assets/images/test1.png"),
//   require("../assets/images/test2.png"),
//   require("../assets/images/test3.png"),
// ];

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function TestScreen() {
  const hadlePress = () => {
    console.log("press");
  };

  return (
    <>
      <View style={styles.screen}>
        {/* <ActionButton type="REJECT" onPress={hadlePress} /> */}
        {/* <ActionButton type="MATCH" onPress={hadlePress} /> */}
        {/* <ActionButton type="SUPERLIKE" onPress={hadlePress} /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
    padding: 20,
    backgroundColor: theme.contrast,
  },
});
