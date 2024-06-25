import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { CARD_DATA } from "@/components/ui/SwipeAnimation";
import { theme } from "@/constants/colors";
import { useState } from "react";
import { runOnJS, useSharedValue, withTiming } from "react-native-reanimated";
import Button from "@/components/ui/Button";
import SwipeAnimation from "@/components/ui/SwipeAnimation";

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
];
export default function TestScreen() {
  // const [newData, setNewData] = useState([...data, ...data])
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = useWindowDimensions();
  const direction = useSharedValue(0);
  const animatedValue = useSharedValue(0);
  const translateX = useSharedValue(0);
  const MAX = 2;

  const handleSwipeRightButton = () => {
    translateX.value = withTiming(width * 1, {}, () => {
      runOnJS(setCurrentIndex)(currentIndex + 1);
    });
    animatedValue.value = withTiming(currentIndex + 1);
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
                item={data.item}
                index={index}
                key={index}
                dataLength={cardData.length}
                maxVisibleItem={MAX}
                currentIndex={currentIndex}
                animatedValue={animatedValue}
                setCurrentIndex={setCurrentIndex}
              />
            );
          })}
        </View>
        <Button onPress={handleSwipeRightButton}>swipe</Button>
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
});
