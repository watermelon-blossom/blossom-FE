import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { theme } from "@/constants/colors";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSharedValue } from "react-native-reanimated";
import { CardAnimationRef } from "@/components/ui/CardAnimation";
import { wScale } from "@/util/responsive.util";
import { router, useNavigation } from "expo-router";
import { ICarouselInstance } from "react-native-reanimated-carousel";
import ProfileCard from "@/components/ui/ProfileCard";
import { useAnimationEffectActions } from "@/store/useLayoutStore";
import ActionButton from "@/components/ui/ActionButton";
import CText from "@/components/ui/CText";
import Filter from "@/components/ui/Filter";
import IconButton from "@/components/ui/IconButton";
import SlideModal, { SlideModalRefType } from "@/components/ui/SlideModal";
import CardAnimation from "@/components/ui/CardAnimation";
import { profiles } from "@/data/profileTestData";
import { Image } from "expo-image";

export default function discover() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const MAX = 2;
  const animatedValue = useSharedValue(0);
  const cardRefs = useRef<CardAnimationRef[]>([]);
  const carouselRef = profiles.map(() => useRef<ICarouselInstance>(null));
  const { startAnimation } = useAnimationEffectActions();
  const navigation = useNavigation("/(tabs)");
  const slideModalRef = useRef<SlideModalRefType>(null);
  const [timer, setTimer] = useState(60 * 60 * 6);

  const handleModal = () => {
    slideModalRef.current?.hide();
    //api call
  };

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const formatTime = (time: number) => {
    const hrs = Math.floor(time / 3600);
    const mins = Math.floor((time % 3600) / 60);
    const secs = time % 60;
    return `${hrs}시간 ${mins}분 ${secs}초`;
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
          <Image
            source={require("@/assets/images/heart.gif")}
            style={styles.gif}
          />
          <CText
            size="md"
            style={{
              textAlign: "center",
              padding: wScale(30),
            }}
          >
            다음 친구 추천까지{"\n"}
            {formatTime(timer)} 남았습니다!
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
  gif: {
    width: wScale(256),
    height: wScale(256),
    alignSelf: "center",
  },
});
