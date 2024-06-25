import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "@/constants/colors";
import { useState } from "react";
import { runOnJS, useSharedValue, withTiming } from "react-native-reanimated";
import Button from "@/components/ui/Button";
import SwipeAnimation from "@/components/ui/SwipeAnimation";
import { wScale } from "@/util/responsive.util";

export type CARD_DATA = {
  item: {
    title: string;
    image: ImageSourcePropType;
  };
};

const cardData: CARD_DATA[] = [
  {
    item: { title: "test1", image: require("../assets/images/test1.png") },
  },
  {
    item: { title: "test2", image: require("../assets/images/test2.png") },
  },
  {
    item: { title: "test3", image: require("../assets/images/test3.png") },
  },
  {
    item: { title: "test4", image: require("../assets/images/date.png") },
  },
  {
    item: { title: "test5", image: require("../assets/images/splash.png") },
  },
];
export default function TestScreen() {
  const { width } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const MAX = 2;
  const translateX = cardData.map(() => useSharedValue(0));
  const direction = cardData.map(() => useSharedValue(0));
  const animatedValue = useSharedValue(0);

  const handleLeftSwipe = () => {
    if (currentIndex < cardData.length) {
      direction[currentIndex].value = -1;
      translateX[currentIndex].value = withTiming(-width, {}, () => {
        runOnJS(setCurrentIndex)(currentIndex + 1);
      });
      animatedValue.value = withTiming(currentIndex + 1);
    }
  };
  const handleRightSwipe = () => {
    if (currentIndex < cardData.length) {
      direction[currentIndex].value = 1;
      translateX[currentIndex].value = withTiming(width, {}, () => {
        runOnJS(setCurrentIndex)(currentIndex + 1);
      });
      animatedValue.value = withTiming(currentIndex + 1);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.screen}>
        <View style={styles.cardContainer}>
          {cardData.map((data, index) => {
            if (index > currentIndex + MAX || index < currentIndex) {
              return null;
            }
            return (
              <SwipeAnimation
                index={index}
                key={index}
                dataLength={cardData.length}
                maxVisibleItem={MAX}
                translateX={translateX[index]}
                direction={direction[index]}
                currentIndex={currentIndex}
                animatedValue={animatedValue}
                setCurrentIndex={setCurrentIndex}
              >
                <Image source={data.item.image} style={styles.image} />
              </SwipeAnimation>
            );
          })}
        </View>
        <Button onPress={handleLeftSwipe}>Left Swipe</Button>
        <Button onPress={handleRightSwipe}>Right Swipe</Button>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
    padding: 20,
    backgroundColor: theme.contrast,
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: "100%", height: "100%", borderRadius: wScale(20) },
});
