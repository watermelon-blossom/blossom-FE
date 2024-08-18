import ActionButton from "@/components/ui/ActionButton";
import IconButton from "@/components/ui/IconButton";
import PaginationDots from "@/components/ui/PaginationDots";
import ProfileInfo from "@/components/ui/ProfileInfo";
import { gray, theme } from "@/constants/colors";
import { wScale } from "@/util/responsive.util";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ReCarousel, {
  ICarouselInstance,
} from "react-native-reanimated-carousel";
import { profiles } from "@/data/profileData";

export default function profile() {
  const [data, setData] = useState(profiles[0]);
  const ref = React.useRef<ICarouselInstance>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    //api call with user id
    console.log(id);
    // setData(sample_data);
  }, []);

  const handleLeftSwipe = () => {
    console.log("dislike");
  };
  const handleRightSwipe = () => {
    console.log("like");
  };
  const handleDoubleTap = () => {
    console.log("superlike");
  };

  return (
    <View style={styles.container}>
      <ReCarousel
        ref={ref}
        data={data.images}
        width={wScale(375)}
        height={wScale(415)}
        defaultIndex={0}
        onSnapToItem={(idx) => {
          setCurrentIndex(idx);
        }}
        scrollAnimationDuration={700}
        snapEnabled
        enabled
        renderItem={({ item }) => (
          <Image
            source={item}
            contentFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        )}
      />
      <IconButton
        iconName="back"
        iconSize={wScale(24)}
        iconColor={theme.white}
        buttonSize={wScale(52)}
        type="transparent"
        style={styles.back}
        onPress={() => router.back()}
      />
      <View style={styles.dotWrapper}>
        <PaginationDots
          totalItems={data.images.length}
          currentIndex={currentIndex}
          activeDotStyle={styles.activeDot}
          style={styles.pagination}
          dotStyle={styles.dots}
        />
      </View>
      <View style={styles.actionButtonWrapper}>
        <ActionButton
          type="REJECT"
          onPress={handleLeftSwipe}
          disabled={data.matched === "yet" ? false : true}
        />
        <ActionButton
          type="MATCH"
          onPress={handleRightSwipe}
          disabled={data.matched === "yet" ? false : true}
        />
        <ActionButton
          type="SUPERLIKE"
          onPress={handleDoubleTap}
          disabled={data.matched === "yet" ? false : true}
        />
      </View>
      <View style={styles.scrollHeader}>
        <ScrollView style={styles.profile}>
          <ProfileInfo
            name={data.name}
            age={data.age}
            job={data.job}
            tendency={data.tendency}
            location={data.location}
            distance={data.distance}
            about={data.about}
            questions={data.questions}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  scrollHeader: {
    width: "100%",
    height: wScale(450),
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: wScale(40),
    borderTopRightRadius: wScale(40),
    backgroundColor: "white",
  },
  profile: {
    width: "100%",
    marginTop: wScale(70),
  },
  back: {
    position: "absolute",
    top: wScale(30),
    left: wScale(20),
  },
  dotWrapper: {
    position: "absolute",
    top: wScale(5),
    left: "50%",
    transform: [{ translateX: -wScale(38) }],
    justifyContent: "center",
    alignContent: "center",
    width: wScale(76),
    height: wScale(20),
    borderRadius: wScale(8),
  },
  pagination: {
    justifyContent: "center",
    alignContent: "center",
  },
  activeDot: {
    backgroundColor: theme.white,
  },
  dots: {
    width: wScale(5),
    height: wScale(5),
    backgroundColor: gray[400],
  },
  actionButtonWrapper: {
    position: "absolute",
    bottom: wScale(400),
    left: "50%",
    transform: [{ translateX: -wScale(148) }],
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: wScale(20),
    zIndex: 3000,
  },
});
