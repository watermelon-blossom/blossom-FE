import React from "react";
import { View, StyleSheet, ViewStyle, Pressable } from "react-native";
import { wScale } from "@/util/responsive.util";
import { gray, theme } from "@/constants/colors";
import { BlurView } from "expo-blur";
import SvgIcon from "./SvgIcon";
import CText from "./CText";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { runOnJS } from "react-native-reanimated";
import { router } from "expo-router";
import { Image } from "expo-image";
import IconButton from "./IconButton";

export type Person = {
  name: string;
  age: number;
  matched: "match" | "reject" | "yet";
  Image: string;
};

type MiniProfileProps = {
  data: Person;
  width?: number;
  height?: number;
  onPress: (action: string, profile: Person) => void;
  style?: ViewStyle;
};

export default function MiniProfile({
  data,
  width = wScale(140),
  height = wScale(200),
  onPress,
  style,
}: MiniProfileProps) {
  const photoTap = Gesture.Tap()
    .maxDuration(500)
    .onStart(() => {
      runOnJS(router.navigate)("account");
    });
  const handleDislikePress = () => {
    onPress("dislike", data);
  };
  const handleLikePress = () => {
    onPress("like", data);
  };

  return (
    <GestureHandlerRootView
      style={[{ width, height }, styles.container, style]}
    >
      <GestureDetector gesture={photoTap}>
        <Image
          source={data.Image}
          contentFit="cover"
          style={[styles.image, data.matched === "reject" && { opacity: 0.3 }]}
        />
      </GestureDetector>
      <CText
        size="md"
        color={data.matched === "reject" ? gray[500] : theme.white}
        style={[
          styles.profile,
          data.matched !== "yet" && { bottom: wScale(10) },
        ]}
      >
        {data.name}, {data.age}
      </CText>
      {data.matched === "yet" && (
        <BlurView intensity={40} tint="dark" style={styles.profileWrapper}>
          <Pressable
            style={({ pressed }) => [
              styles.iconWrapper,
              pressed && styles.pressed,
            ]}
            onPress={handleDislikePress}
          >
            <SvgIcon name="close" fill={theme.white} size={wScale(20)} />
          </Pressable>
          <View style={styles.separator} />
          <Pressable
            style={({ pressed }) => [
              styles.iconWrapper,
              pressed && styles.pressed,
            ]}
            onPress={handleLikePress}
          >
            <SvgIcon name="like" fill={theme.white} size={wScale(20)} />
          </Pressable>
        </BlurView>
      )}
      {data.matched === "match" && (
        <IconButton
          iconName="like"
          iconSize={wScale(20)}
          iconColor={theme.primary}
          buttonSize={wScale(40)}
          style={styles.matchLocation}
        />
      )}
      {data.matched === "reject" && (
        <IconButton
          iconName="close"
          iconSize={wScale(20)}
          iconColor={gray[400]}
          buttonSize={wScale(40)}
          style={styles.matchLocation}
        />
      )}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
    borderRadius: wScale(16),
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: wScale(16),
  },
  pressed: { opacity: 0.7 },
  profile: {
    position: "absolute",
    bottom: wScale(45),
    left: 0,
    paddingLeft: wScale(10),
  },
  profileWrapper: {
    width: "100%",
    height: wScale(40),
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    justifyContent: "flex-start",
    alignContent: "center",
  },
  iconWrapper: { flex: 1, justifyContent: "center", alignItems: "center" },
  separator: {
    width: wScale(1),
    height: "100%",
    backgroundColor: theme.white,
  },
  matchLocation: {
    position: "absolute",
    top: wScale(10),
    right: wScale(10),
    borderRadius: wScale(100),
  },
});
