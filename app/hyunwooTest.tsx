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
      <ProfileCard
        ref={carouselRef}
        profile={profile}
        width={295}
        height={450}
        onChangeSlide={(idx) => {
          setCurrentIdx(idx);
        }}
      />
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
