import { wScale } from "@/util/responsive.util";
import { StyleSheet, useWindowDimensions } from "react-native";
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
import { forwardRef, useImperativeHandle, useState } from "react";
import IconButton from "./IconButton";
import * as Icons from "@/assets/icons/index";
import { useAnimationEffectActions } from "@/store/useLayoutStore";

type CardAnimationProps = {
  children: React.ReactNode;
  index: number;
  dataLength: number;
  c_width?: number;
  c_height?: number;
  maxVisibleItem?: number;
  animatedValue: SharedValue<number>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  carouselFunc: (scroll: number) => void;
  handleGesture: (gesture: string) => void;
};

export type CardAnimationRef = {
  rightSwipe: () => void;
  leftSwipe: () => void;
  doubleTap: () => void;
};

const CardAnimation = forwardRef<CardAnimationRef, CardAnimationProps>(
  (
    {
      children,
      index,
      dataLength,
      c_width = wScale(295),
      c_height = wScale(450),
      maxVisibleItem = 2,
      animatedValue,
      currentIndex,
      setCurrentIndex,
      carouselFunc,
      handleGesture,
    },
    ref
  ) => {
    const { width } = useWindowDimensions();
    const translateX = useSharedValue(0);
    const direction = useSharedValue(0);
    const [isShow, setIsShow] = useState(false);
    const [iconName, setIconName] = useState<keyof typeof Icons>("like");

    useImperativeHandle(ref, () => ({
      rightSwipe() {
        direction.value = 1;
        handleGesture("rightSwipe");
        translateX.value = withTiming(1.2 * width, { duration: 500 }, () => {
          runOnJS(setCurrentIndex)(currentIndex + 1);
        });
        animatedValue.value = withTiming(currentIndex + 1);
      },
      leftSwipe() {
        direction.value = -1;
        handleGesture("leftSwipe");
        translateX.value = withTiming(-1.2 * width, { duration: 500 }, () => {
          runOnJS(setCurrentIndex)(currentIndex + 1);
        });
        animatedValue.value = withTiming(currentIndex + 1);
      },
      doubleTap() {
        handleGesture("doubleTap");
        translateX.value = withTiming(1.2 * width, { duration: 500 }, () => {
          runOnJS(setCurrentIndex)(currentIndex + 1);
        });
        animatedValue.value = withTiming(currentIndex + 1);
      },
    }));

    const photoTap = Gesture.Tap()
      .maxDuration(500)
      .hitSlop({ top: 0, height: c_height - wScale(83) })
      .onStart(() => {
        runOnJS(carouselFunc)(1);
      });

    const profileTap = Gesture.Tap()
      .maxDuration(250)
      .hitSlop({ bottom: 0, height: wScale(83) })
      .onStart(() => {
        runOnJS(handleGesture)("profileTap");
      });

    const doubleTap = Gesture.Tap()
      .maxDuration(250)
      .numberOfTaps(2)
      .onStart(() => {
        runOnJS(handleGesture)("doubleTap");
        translateX.value = withTiming(1.2 * width, { duration: 500 }, () => {
          runOnJS(setCurrentIndex)(currentIndex + 1);
        });
        animatedValue.value = withTiming(currentIndex + 1);
      });

    const pan = Gesture.Pan()
      .onUpdate((e) => {
        const isSwipeRight = e.translationX > 0;
        direction.value = isSwipeRight ? 1 : -1;

        if (currentIndex === index) {
          translateX.value = e.translationX;
          if (e.translationX >= 10) {
            runOnJS(setIconName)("like");
            runOnJS(setIsShow)(true);
          } else if (e.translationX <= -10) {
            runOnJS(setIconName)("close");
            runOnJS(setIsShow)(true);
          }
          animatedValue.value = interpolate(
            Math.abs(e.translationX),
            [0, width],
            [index, index + 1]
          );
        }
      })
      .onEnd((e) => {
        if (currentIndex === index) {
          if (
            Math.abs(e.translationX) > Math.abs(e.translationY) &&
            Math.abs(e.translationX) > 150
          ) {
            if (direction.value === 1) {
              runOnJS(handleGesture)("rightSwipe");
            } else {
              runOnJS(handleGesture)("leftSwipe");
            }
            translateX.value = withTiming(
              1.2 * width * direction.value,
              {},
              () => {
                runOnJS(setCurrentIndex)(currentIndex + 1);
              }
            );
            animatedValue.value = withTiming(currentIndex + 1);
          } else {
            translateX.value = withTiming(0, { duration: 300 });
            animatedValue.value = withTiming(currentIndex);
          }
          runOnJS(setIsShow)(false);
        }
      });
    const composed = Gesture.Race(
      pan,
      Gesture.Exclusive(doubleTap, photoTap, profileTap)
    );

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
        [-40, 0]
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
      <GestureDetector gesture={composed}>
        <Animated.View
          style={[
            styles.container,
            {
              width: c_width,
              height: c_height,
              zIndex: dataLength - index,
            },
            animatedStyle,
          ]}
        >
          {isShow && (
            <IconButton
              iconName={iconName}
              iconSize={iconName === "close" ? wScale(30) : wScale(40)}
              iconColor={iconName === "close" ? "#F27121" : theme.primary}
              buttonSize={wScale(80)}
              style={styles.icon}
            />
          )}
          {children}
        </Animated.View>
      </GestureDetector>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    borderRadius: wScale(20),
    backgroundColor: theme.primary,
  },
  icon: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateY: -wScale(40) }, { translateX: -wScale(40) }],
    borderRadius: wScale(100),
    zIndex: 4000,
  },
});

export default CardAnimation;
