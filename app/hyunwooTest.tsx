import { useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "@/constants/colors";
import ProfileCard, { Profile } from "@/components/ui/ProfileCard";
import { ICarouselInstance } from "react-native-reanimated-carousel";

const profile: Profile = {
  name: "Jessica Parker",
  age: 23,
  job: "Professional model",
  images: [
    require("../assets/images/testPhoto1.png"),
    require("../assets/images/testPhoto2.png"),
    require("../assets/images/test1.png"),
    require("../assets/images/test2.png"),
    require("../assets/images/test3.png"),
  ],
};

export default function TestScreen() {
  return (
    <View style={styles.screen}>
      <ProfileCard profile={profile} />
    </View>
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
});
