import Button from "@/components/ui/Button";
import PaginationDots from "@/components/ui/PaginationDots";
import React, { useRef, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { theme } from "@/constants/colors";

import QCarousel, { QCarouselDataProp } from "@/components/ui/QCarousel";
import { ICarouselInstance } from "react-native-reanimated-carousel";

const DATA: QCarouselDataProp = [
  require("../assets/images/test1.png"),
  require("../assets/images/test2.png"),
  require("../assets/images/test3.png"),
];

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function TestScreen() {
  const carouselRef = useRef<ICarouselInstance>(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  const handleNextSlide = () => {
    if (!carouselRef.current) return;
    carouselRef.current.next();
  };

  const handlePrevSlide = () => {
    if (!carouselRef.current) return;
    carouselRef.current.prev();
  };

  return (
    <View style={styles.screen}>
      <QCarousel
        ref={carouselRef}
        data={DATA}
        width={SCREEN_WIDTH * 0.9}
        height={SCREEN_HEIGHT * 0.6}
        onChangeSlide={(idx) => {
          setCurrentIdx(idx);
        }}
      />
      <PaginationDots totalItems={DATA.length} currentIndex={currentIdx} />
      <Button onPress={handlePrevSlide}>Prev</Button>
      <Button onPress={handleNextSlide}>Next</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 20,
    backgroundColor: theme.contrast,
  },
});
