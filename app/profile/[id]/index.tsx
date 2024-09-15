import ActionButton from "@/components/ui/ActionButton";
import IconButton from "@/components/ui/IconButton";
import PaginationDots from "@/components/ui/PaginationDots";
import ProfileInfo from "@/components/ui/ProfileInfo";
import { gray, theme } from "@/constants/colors";
import { wScale } from "@/util/responsive.util";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ReCarousel, {
  ICarouselInstance,
} from "react-native-reanimated-carousel";
import { useUserProfile } from "@/API/user/useUserProfile";
import CText from "@/components/ui/CText";
import { getImageURL } from "@/util/url.util";

const MY_ID = 1;

export default function profile() {
  const { id } = useLocalSearchParams();
  const { userProfile, userProfileError, isUserProfileLoading } =
    useUserProfile(MY_ID, Number(id));
  const ref = React.useRef<ICarouselInstance>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(userProfileError, isUserProfileLoading);

  if (isUserProfileLoading) {
    return (
      <View>
        <Image
          source={require("@/assets/images/splash.png")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    );
  }
  if (userProfileError || !userProfile) {
    return (
      <View>
        <CText>프로필을 불러오는데 실패했습니다.</CText>
      </View>
    );
  }

  const {
    UserName,
    job,
    tendency,
    userDescription,
    questionInfos,
    sex,
    age,
    distance,
    location,
    photos,
    relationshipStatus,
  } = userProfile;

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
        data={photos}
        width={wScale(375)}
        height={wScale(415)}
        defaultIndex={0}
        onSnapToItem={(idx) => {
          setCurrentIndex(idx);
        }}
        scrollAnimationDuration={700}
        snapEnabled
        enabled
        renderItem={({ item: path }) => {
          return (
            <Image
              source={getImageURL(path)}
              contentFit="cover"
              style={{ width: "100%", height: "100%" }}
            />
          );
        }}
      />
      <IconButton
        iconName="back"
        iconSize={wScale(24)}
        iconColor={theme.primary}
        buttonSize={wScale(52)}
        style={styles.back}
        onPress={() => router.back()}
      />
      <View style={styles.dotWrapper}>
        <PaginationDots
          totalItems={photos.length}
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
          disabled={relationshipStatus === "LIKE" ? false : true}
        />
        <ActionButton
          type="MATCH"
          onPress={handleRightSwipe}
          disabled={relationshipStatus === "LIKE" ? false : true}
        />
        <ActionButton
          type="SUPERLIKE"
          onPress={handleDoubleTap}
          disabled={relationshipStatus === "LIKE" ? false : true}
        />
      </View>
      <View style={styles.scrollHeader}>
        <ScrollView style={styles.profile}>
          <ProfileInfo
            name={UserName}
            age={age}
            job={job}
            tendency={tendency}
            location={location}
            distance={distance}
            about={userDescription}
            questions={questionInfos}
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
