import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { theme } from "@/constants/colors";
import { useRef, useState } from "react";
import { useSharedValue } from "react-native-reanimated";
import SwipeAnimation, {
  CardAnimationRef,
} from "@/components/ui/CardAnimation";
import { wScale } from "@/util/responsive.util";
import { router } from "expo-router";
import { ICarouselInstance } from "react-native-reanimated-carousel";
import ProfileCard, { Profile } from "@/components/ui/ProfileCard";
import { useAnimationEffectActions } from "@/store/useLayoutStore";
import ActionButton from "@/components/ui/ActionButton";
import CText from "@/components/ui/CText";
import { MaterialIcons } from "@expo/vector-icons";

const profiles: Profile[] = [
  {
    name: "Jessica Parker",
    age: 25,
    job: "Professional model",
    images: [
      require("@/assets/images/testPhoto1.png"),
      require("@/assets/images/testPhoto2.png"),
      require("@/assets/images/test1.png"),
      require("@/assets/images/test2.png"),
      require("@/assets/images/test3.png"),
    ],
  },
  {
    name: "Jessica Parker",
    age: 23,
    job: "Professional model",
    images: [
      require("@/assets/images/testPhoto1.png"),
      require("@/assets/images/testPhoto2.png"),
      require("@/assets/images/test1.png"),
      require("@/assets/images/test2.png"),
      require("@/assets/images/test3.png"),
    ],
  },
  {
    name: "Jessica Parker",
    age: 23,
    job: "Professional model",
    images: [
      require("@/assets/images/testPhoto1.png"),
      require("@/assets/images/testPhoto2.png"),
      require("@/assets/images/test1.png"),
      require("@/assets/images/test2.png"),
      require("@/assets/images/test3.png"),
    ],
  },
  {
    name: "Jessica Parker",
    age: 23,
    job: "Professional model",
    images: [
      require("@/assets/images/testPhoto1.png"),
      require("@/assets/images/testPhoto2.png"),
      require("@/assets/images/test1.png"),
      require("@/assets/images/test2.png"),
      require("@/assets/images/test3.png"),
    ],
  },
  {
    name: "Jessica Parker",
    age: 23,
    job: "Professional model",
    images: [
      require("@/assets/images/testPhoto1.png"),
      require("@/assets/images/testPhoto2.png"),
      require("@/assets/images/test1.png"),
      require("@/assets/images/test2.png"),
      require("@/assets/images/test3.png"),
    ],
  },
  {
    name: "Jessica Parker",
    age: 23,
    job: "Professional model",
    images: [
      require("@/assets/images/testPhoto1.png"),
      require("@/assets/images/testPhoto2.png"),
      require("@/assets/images/test1.png"),
      require("@/assets/images/test2.png"),
      require("@/assets/images/test3.png"),
    ],
  },
];

export default function discover() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const MAX = 2;
  const animatedValue = useSharedValue(0);
  const cardRefs = useRef<CardAnimationRef[]>([]);
  const carouselRef = profiles.map(() => useRef<ICarouselInstance>(null));
  const { startAnimation } = useAnimationEffectActions();

  const handleLeftSwipe = () => {
    if (cardRefs.current[currentIndex]) {
      cardRefs.current[currentIndex].leftSwipe();
    }
  };
  const handleRightSwipe = () => {
    if (cardRefs.current[currentIndex]) {
      cardRefs.current[currentIndex].rightSwipe();
    }
  };
  const handleDoubleTap = () => {
    if (cardRefs.current[currentIndex]) {
      cardRefs.current[currentIndex].doubleTap();
    }
  };

  const handleCarouselImage = (scroll: number) => {
    scroll === 1
      ? carouselRef[currentIndex].current?.next()
      : carouselRef[currentIndex].current?.prev();
  };

  const handleGesture = (gesture: string) => {
    if (gesture === "rightSwipe") {
      console.log(currentIndex);
      startAnimation("heart");
    } else if (gesture === "leftSwipe") {
      console.log(currentIndex);
    } else if (gesture === "profileTap") {
      console.log(currentIndex);
      router.navigate("account");
    } else if (gesture === "doubleTap") {
      startAnimation("star", () => {
        console.log(currentIndex);
        router.navigate("matchSuccess");
      });
    }
  };

  return (
    <GestureHandlerRootView style={styles.screen}>
      {currentIndex < profiles.length ? (
        <View style={styles.screen}>
          <View style={styles.cardContainer}>
            {profiles.map((data, index) => {
              if (index > currentIndex + MAX || index < currentIndex) {
                return null;
              }
              return (
                <SwipeAnimation
                  index={index}
                  key={index}
                  dataLength={profiles.length}
                  maxVisibleItem={MAX}
                  animatedValue={animatedValue}
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                  carouselFunc={handleCarouselImage}
                  handleGesture={handleGesture}
                  ref={(el) => {
                    cardRefs.current[index] = el!;
                  }}
                >
                  <ProfileCard
                    ref={carouselRef[index]}
                    profile={data}
                    distance={1}
                  />
                </SwipeAnimation>
              );
            })}
          </View>
          <View style={styles.actionButtonWrapper}>
            <ActionButton type="REJECT" onPress={handleLeftSwipe} />
            <ActionButton type="MATCH" onPress={handleRightSwipe} />
            <ActionButton type="SUPERLIKE" onPress={handleDoubleTap} />
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <MaterialIcons
            name="watch-later"
            size={64}
            color={theme.primary}
            style={{ alignItems: "center" }}
          />
          <CText
            size="md"
            numberOfLines={2}
            style={{
              textAlign: "center",
              padding: wScale(30),
            }}
          >
            다음 친구 추천까지{"\n"}5시간 59분 50초 남았습니다!
          </CText>
        </View>
      )}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.white,
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: wScale(20),
  },
  actionButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: wScale(20),
    padding: wScale(20),
  },
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  image: { width: "100%", height: "100%", borderRadius: wScale(20) },
});
