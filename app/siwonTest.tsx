import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { theme } from "@/constants/colors";

import ActionButton from "@/components/ui/ActionButton";
import { useAnimationEffectActions } from "@/store/useLayoutStore";
import { AnimationType } from "@/components/ui/AnimationEffect";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function TestScreen() {
  const { startAnimation } = useAnimationEffectActions();

  const hadlePress = (type: AnimationType) => {
    console.log("press");
    startAnimation(type, () => {
      console.log("onAnimationEnd");
    });
  };

  return (
    <>
      {/* <View style={styles.animationWrapper}>
        <LottieView
          // autoPlay={false}
          loop={false}
          ref={animation}
          speed={1.2}
          style={{
            width: 200,
            height: 200,
          }}
          source={require("../assets/animation/star.json")}
        />
      </View> */}

      <View style={styles.screen}>
        <ActionButton type="REJECT" onPress={() => {}} />
        <ActionButton type="MATCH" onPress={() => hadlePress("haear")} />
        <ActionButton type="SUPERLIKE" onPress={() => hadlePress("star")} />
      </View>
      {/* <View style={styles.screen}>
        <ActionButton type="REJECT" disabled onPress={hadlePress} />
        <ActionButton type="MATCH" disabled onPress={hadlePress} />
        <ActionButton type="SUPERLIKE" disabled onPress={hadlePress} />
      </View> */}
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
    paddingTop: 550,
  },
});
