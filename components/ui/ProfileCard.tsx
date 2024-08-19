import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ReCarousel, {
  ICarouselInstance,
} from "react-native-reanimated-carousel";
import { wScale } from "@/util/responsive.util";
import Heading from "./Heading";
import CText from "./CText";
import { gray, theme } from "@/constants/colors";
import PaginationDots from "./PaginationDots";
import SvgIcon from "./SvgIcon";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";

export type Profile = {
  name: string;
  age: number;
  job: string;
  images: string[];
};

type ProfileCardProps = {
  profile: Profile;
  width?: number;
  height?: number;
  distance: number;
  defaultIndex?: number;
};

type RenderItemParams = {
  index: number;
  item: string;
};

const ProfileCard = React.forwardRef<ICarouselInstance, ProfileCardProps>(
  (
    {
      profile,
      width = wScale(295),
      height = wScale(450),
      distance,
      defaultIndex = 0,
    },
    ref
  ) => {
    const [currentIdx, setCurrentIdx] = useState(defaultIndex);

    return (
      <View style={[{ width, height }, itemStyles.container]}>
        <ReCarousel
          ref={ref}
          data={profile.images}
          width={width}
          height={height}
          vertical={true}
          defaultIndex={defaultIndex}
          onSnapToItem={(idx) => {
            setCurrentIdx(idx);
          }}
          scrollAnimationDuration={700}
          snapEnabled={false}
          enabled={false}
          renderItem={({ item }: RenderItemParams) => (
            <Image
              source={item}
              contentFit="cover"
              style={{ width: "100%", height: "100%" }}
            />
          )}
        />
        <BlurView intensity={30} tint="dark" style={itemStyles.locationWrapper}>
          <View style={itemStyles.location}>
            <SvgIcon
              name="combinedShape"
              fill={theme.white}
              size={wScale(14)}
            />
            <CText size="xs" color={theme.white}>
              {distance}km
            </CText>
          </View>
        </BlurView>
        <BlurView intensity={30} tint="dark" style={itemStyles.dotWrapper}>
          <PaginationDots
            totalItems={profile.images.length}
            currentIndex={currentIdx}
            activeDotStyle={{ backgroundColor: theme.white }}
            style={itemStyles.dots}
            dotStyle={{
              width: wScale(5),
              height: wScale(5),
              backgroundColor: gray[400],
            }}
          />
        </BlurView>
        <BlurView intensity={40} tint="dark" style={itemStyles.profileWrapper}>
          <Heading level={3} style={{ color: theme.white }}>
            {profile.name}, {profile.age}
          </Heading>
          <Heading level={6} style={{ color: theme.white }}>
            {profile.job}
          </Heading>
        </BlurView>
      </View>
    );
  }
);

export default ProfileCard;

const itemStyles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
    borderRadius: wScale(16),
    overflow: "hidden",
  },
  locationWrapper: {
    flex: 1,
    width: wScale(61),
    height: wScale(34),
    position: "absolute",
    top: wScale(15),
    left: wScale(10),
    borderRadius: wScale(8),
    overflow: "hidden",
    justifyContent: "center",
    alignContent: "center",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dotWrapper: {
    position: "absolute",
    top: "50%",
    right: wScale(-5),
    transform: [{ translateY: -wScale(38) }],
    justifyContent: "center",
    alignContent: "center",
    width: wScale(20),
    height: wScale(76),
    borderRadius: wScale(8),
    overflow: "hidden",
  },
  dots: {
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
  },
  imgWrapper: {
    width: "100%",
    height: "100%",
    borderRadius: wScale(16),
  },
  profileWrapper: {
    width: "100%",
    height: wScale(83),
    position: "absolute",
    bottom: 0,
    left: 0,
    justifyContent: "flex-start",
    alignContent: "center",
    padding: wScale(16),
    gap: wScale(5),
  },
});
