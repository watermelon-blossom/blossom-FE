import { useEffect, useRef } from "react";
import { Dimensions, StyleSheet, View, ViewStyle } from "react-native";
import LottieView, { AnimationObject } from "lottie-react-native";
import {
  useAnimationEffectActions,
  useAnimationEffectState,
} from "@/store/useLayoutStore";
import { wScale } from "@/util/responsive.util";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

export type AnimationType = "heart" | "star";

type AnimationSourceType =
  | string
  | AnimationObject
  | { uri: string }
  | undefined;

const animationData: {
  [key in AnimationType]: {
    speed: number;
    source: AnimationSourceType;
    style: ViewStyle | null;
  };
} = {
  heart: {
    speed: 1,
    source: require("../../assets/animation/heart.json"),
    style: { width: wScale(200), height: wScale(200) },
  },
  star: {
    speed: 1.3,
    source: require("../../assets/animation/star.json"),
    style: { width: wScale(250), height: wScale(250) },
  },
};

export default function AnimationEffect() {
  const { isShow, type, onAnimationEnd } = useAnimationEffectState();
  const { initAnimation } = useAnimationEffectActions();
  const animationRef = useRef<LottieView>(null);
  const animation = animationData[type];

  useEffect(() => {
    if (isShow) animationRef.current?.play();
  }, [isShow]);

  const handleAnimationFinish = () => {
    initAnimation();
    onAnimationEnd && onAnimationEnd();
  };

  return (
    <>
      {isShow && (
        <View style={styles.container}>
          <LottieView
            ref={animationRef}
            style={animation.style}
            speed={animation.speed}
            source={animation.source}
            loop={false}
            onAnimationFinish={handleAnimationFinish}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    backgroundColor: "transparent",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 4000,
  },
});
