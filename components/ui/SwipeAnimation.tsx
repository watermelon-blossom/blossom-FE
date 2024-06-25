import { wScale } from "@/util/responsive.util";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { theme } from "@/constants/colors";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  SharedValue,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Button from "./Button";

export type CARD_DATA = {
  item: {
    title: string;
    image: ImageSourcePropType;
  };
};

type SwipeProps = {
  item: { title: string; image: ImageSourcePropType };
  index: number;
  dataLength: number;
  maxVisibleItem: number;
  currentIndex: number;
  animatedValue: SharedValue<number>;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function SwipeAnimation({
  item,
  index,
  dataLength,
  maxVisibleItem,
  currentIndex,
  animatedValue,
  setCurrentIndex,
}: SwipeProps) {
  const { width } = useWindowDimensions();
  const translateX = useSharedValue(0);
  const direction = useSharedValue(0);
  const pan = Gesture.Pan()
    .onUpdate((e) => {
      const isSwipeRight = e.translationX > 0;
      direction.value = isSwipeRight ? 1 : -1;

      if (currentIndex === index) {
        translateX.value = e.translationX;
        animatedValue.value = interpolate(
          Math.abs(e.translationX),
          [0, width],
          [index, index + 1]
        );
      }
    })
    .onEnd((e) => {
      if (currentIndex === index) {
        if (Math.abs(e.translationX) > 150 || Math.abs(e.velocityX) > 1000) {
          translateX.value = withTiming(width * direction.value, {}, () => {
            runOnJS(setCurrentIndex)(currentIndex + 1);
          });
          animatedValue.value = withTiming(currentIndex + 1);
        } else {
          translateX.value = withTiming(0, { duration: 500 });
          animatedValue.value = withTiming(currentIndex + 1);
        }
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    const currentItem = index === currentIndex;
    const rotateZ = interpolate(
      Math.abs(translateX.value),
      [0, width],
      [0, 50]
    );
    const translateY = interpolate(
      animatedValue.value,
      [index - 1, index],
      [-60, 0]
    );
    const scale = interpolate(
      animatedValue.value,
      [index - 1, index],
      [0.9, 1]
    );
    const opacity = interpolate(
      animatedValue.value + maxVisibleItem,
      [index, index + 1],
      [0, 1]
    );

    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          scale: currentItem ? 1 : scale,
        },
        {
          translateY: currentItem ? 0 : translateY,
        },
        {
          rotateZ: currentItem ? `${direction.value * rotateZ}deg` : `0deg`,
        },
      ],
      opacity: index < maxVisibleItem + currentIndex ? 1 : opacity,
    };
  });

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        style={[
          styles.container,
          {
            zIndex: dataLength - index,
          },
          animatedStyle,
        ]}
      >
        <Image source={item.image} style={styles.image} />
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: wScale(295),
    height: wScale(450),
    borderRadius: wScale(20),
    backgroundColor: theme.primary,
  },
  imageContainer: { width: wScale(295), height: wScale(450) },
  image: { width: "100%", height: "100%", borderRadius: wScale(20) },
});
