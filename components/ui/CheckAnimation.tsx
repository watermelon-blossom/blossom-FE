import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
  useAnimatedProps,
} from "react-native-reanimated";
import { theme } from "@/constants/colors";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export default function CheckAnimation() {
  const strokeDashoffset = useSharedValue(50);

  useEffect(() => {
    strokeDashoffset.value = withTiming(0, {
      duration: 300,
      easing: Easing.in(Easing.ease),
    });
  }, []);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: strokeDashoffset.value,
  }));

  return (
    <View style={styles.container}>
      <Svg viewBox="0 0 50 50" style={styles.checkmark}>
        <AnimatedPath
          animatedProps={animatedProps}
          d="M10 25 L20 35 L40 15"
          fill="none"
          stroke={theme.white}
          strokeWidth="5"
          strokeDasharray="50"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  checkmark: {
    width: 30,
    height: 30,
  },
});
