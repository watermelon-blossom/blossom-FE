import React, { useRef, useState } from "react";
import { View, StyleSheet, ImageSourcePropType, Image } from "react-native";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
import ReCarousel, {
  ICarouselInstance,
} from "react-native-reanimated-carousel";
import { wScale } from "@/util/responsive.util";
import { QCarouselDataProp } from "./QCarousel";
import Heading from "./Heading";
import CText from "./CText";
import { gray, theme } from "@/constants/colors";
import PaginationDots from "./PaginationDots";
import SvgIcon from "./SvgIcon";
import { BlurView } from "expo-blur";

export type Profile = {
  name: string;
  age: number;
  job: string;
  images: ImageSourcePropType[];
};

type ProfileCardProps = {
  profile: Profile;
  width?: number;
  height?: number;
  defaultIndex?: number;
};

type RenderItemParams = {
  index: number;
  item: ImageSourcePropType;
};

const ProfileCard = React.forwardRef<ICarouselInstance, ProfileCardProps>(
  (
    { profile, width = wScale(295), height = wScale(450), defaultIndex = 0 },
    ref
  ) => {
    const carouselRef = useRef<ICarouselInstance>(null);
    const pressAnimation = useSharedValue(0);
    const [currentIdx, setCurrentIdx] = useState(defaultIndex);

    return (
      <View style={[{ width, height }, itemStyles.container]}>
        <ReCarousel
          ref={carouselRef}
          data={profile.images}
          width={width}
          height={height}
          vertical={true}
          defaultIndex={defaultIndex}
          onScrollBegin={() => {
            pressAnimation.value = withTiming(1, { duration: 300 });
          }}
          onScrollEnd={() => {
            pressAnimation.value = withTiming(0, { duration: 300 });
          }}
          onSnapToItem={(idx) => {
            setCurrentIdx(idx);
          }}
          scrollAnimationDuration={700}
          snapEnabled={false}
          enabled
          renderItem={({ index, item }: RenderItemParams) => (
            <CarouselItem key={index} source={item} />
          )}
        />
        <BlurView intensity={30} tint="dark" style={itemStyles.locationWrapper}>
          <View style={itemStyles.location}>
            <SvgIcon
              name="CombinedShape"
              fill={theme.white}
              size={wScale(14)}
            />
            <CText size="xs" color={theme.white}>
              1km
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

export type CarouselItemProps = {
  source: ImageSourcePropType;
};

const CarouselItem = ({ source }: CarouselItemProps) => {
  return (
    <Animated.View style={itemStyles.imgWrapper}>
      <Image
        source={source}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />
    </Animated.View>
  );
};

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
    top: 15,
    left: 10,
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
    right: -5,
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
  title: {
    flexDirection: "row",
  },
});
