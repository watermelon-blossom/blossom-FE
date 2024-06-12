import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ImageSourcePropType,
  Image,
} from "react-native";
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import ReCarousel, {
  ICarouselInstance,
} from "react-native-reanimated-carousel";
import { wScale } from "@/util/responsive.util";

export type QCarouselDataProp = ImageSourcePropType[];

type QCarouselProps = {
  data: QCarouselDataProp;
  width: number;
  height: number;
  enableSwipe?: boolean;
  defaultIndex?: number;
  onChangeSlide?: (index: number) => void;
};

type RenderItemParams = {
  index: number;
  item: ImageSourcePropType;
};

const QCarousel = React.forwardRef<ICarouselInstance, QCarouselProps>(
  (
    { data, width, height, enableSwipe = false, defaultIndex, onChangeSlide },
    ref
  ) => {
    const pressAnimation = useSharedValue(0);

    const animationStyle = (value: number) => {
      "worklet";

      const translateX = interpolate(value, [-1, 0, 1], [-width, 0, width]);

      return {
        transform: [{ translateX }],
      };
    };

    return (
      <View style={[styles.container, { width, height }]}>
        <ReCarousel
          ref={ref}
          data={data}
          width={width}
          height={height}
          defaultIndex={defaultIndex}
          onScrollBegin={() => {
            pressAnimation.value = withTiming(1, { duration: 500 });
          }}
          onScrollEnd={() => {
            pressAnimation.value = withTiming(0, { duration: 300 });
          }}
          onSnapToItem={onChangeSlide}
          scrollAnimationDuration={1500}
          customAnimation={animationStyle}
          overscrollEnabled={false}
          snapEnabled={false}
          enabled={enableSwipe}
          renderItem={({ index, item }: RenderItemParams) => (
            <CarouselItem
              key={index}
              source={item}
              pressAnimation={pressAnimation}
            />
          )}
        />
      </View>
    );
  }
);

export default QCarousel;

const styles = StyleSheet.create({
  container: {},
});

export type CarouselItemProps = {
  pressAnimation: SharedValue<number>;
  source: ImageSourcePropType;
};

const CarouselItem = ({ pressAnimation, source }: CarouselItemProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(pressAnimation.value, [0, 1], [1, 0.85]);

    return {
      transform: [{ scale }],
    };
  }, []);

  return (
    <Animated.View style={[itemStyles.container, animatedStyle]}>
      <View style={itemStyles.imgWrapper}>
        <Image
          source={source}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    </Animated.View>
  );
};

const itemStyles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
    gap: wScale(20),
  },
  imgWrapper: {
    width: "100%",
    height: "100%",
    borderRadius: wScale(30),
    overflow: "hidden",
  },
});
