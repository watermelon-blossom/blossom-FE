import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { theme } from "@/constants/colors";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSharedValue } from "react-native-reanimated";
import SwipeAnimation, {
  CardAnimationRef,
} from "@/components/ui/CardAnimation";
import { wScale } from "@/util/responsive.util";
import { router, useNavigation } from "expo-router";
import { ICarouselInstance } from "react-native-reanimated-carousel";
import ProfileCard, { Profile } from "@/components/ui/ProfileCard";
import { useAnimationEffectActions } from "@/store/useLayoutStore";
import ActionButton from "@/components/ui/ActionButton";
import CText from "@/components/ui/CText";
import { MaterialIcons } from "@expo/vector-icons";
import Filter from "@/components/ui/Filter";
import IconButton from "@/components/ui/IconButton";
import SlideModal, { SlideModalRefType } from "@/components/ui/SlideModal";
import CardAnimation from "@/components/ui/CardAnimation";
import { profiles } from "@/data/profileData";
import { Image } from "expo-image";
import Heading from "@/components/ui/Heading";

export default function discover() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const MAX = 2;
  const animatedValue = useSharedValue(0);
  const cardRefs = useRef<CardAnimationRef[]>([]);
  const carouselRef = profiles.map(() => useRef<ICarouselInstance>(null));
  const { startAnimation } = useAnimationEffectActions();
  const navigation = useNavigation("/(tabs)");
  const slideModalRef = useRef<SlideModalRefType>(null);

  const handleModal = () => {
    slideModalRef.current?.hide();
    //api call
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          iconName="setting"
          onPress={() => slideModalRef.current?.show()}
        />
      ),
    });
  }, []);

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
      console.log("like");
      startAnimation("heart");
    } else if (gesture === "leftSwipe") {
      console.log("dislike");
    } else if (gesture === "profileTap") {
      console.log("go to profile");
      router.navigate("account");
    } else if (gesture === "doubleTap") {
      console.log("superlike");
      startAnimation("star", () => {
        router.navigate("matchSuccess");
      });
    }
  };

  return (
    <GestureHandlerRootView style={styles.screen}>
      {currentIndex < profiles.length ? (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            {profiles.map((data, index) => {
              if (index > currentIndex + MAX || index < currentIndex) {
                return null;
              }
              return (
                <CardAnimation
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
                </CardAnimation>
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
        <View style={styles.card}>
          {/* <Heading level={2}>
            
            {new Date(time * 1000).toISOString().substr(11, 8)}
          </Heading> */}
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
      <SlideModal ref={slideModalRef}>
        <Filter onFilterSave={handleModal} />
      </SlideModal>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.white,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
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
  card: {
    width: wScale(295),
    height: wScale(450),
    alignContent: "center",
    justifyContent: "center",
    borderRadius: wScale(20),
  },
  image: { width: "100%", height: "100%", borderRadius: wScale(20) },
});
