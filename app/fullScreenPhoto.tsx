import IconButton from "@/components/ui/IconButton";
import { theme } from "@/constants/colors";
import { wScale } from "@/util/responsive.util";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { useRef, useState } from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import ReCarousel, {
  ICarouselInstance,
} from "react-native-reanimated-carousel";

const images = [
  "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/10/18/ed44fa35-baa3-4269-afa9-e0fa4d101817.jpg",
  "https://i.namu.wiki/i/Nat7R8m76ArARjdLnZ6OPkbaleF62cjL6sFE5sNlIcrv7Jeyz62Rc14YqTn4Jrn8VOpokZl4Dp53a5mpxsBoKg.webp",
  "https://cdn.todayflow.co.kr/news/photo/202303/436_2127_5848.jpg",
];

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function fullScreenPhoto() {
  const [currentIdx, setCurrentIdx] = useState(0);
  // const { images } = useLocalSearchParams<{ images: string[] }>();
  // const carouselRef = useRef<ICarouselInstance>(null);
  // const defaultIndex = 0;

  // const handlePhotoPress = (idx: number) => {
  //   setCurrentIdx(idx);
  //   carouselRef.current?.scrollTo({ index: currentIdx, animated: false });
  // };

  return (
    <View style={styles.screen}>
      <IconButton
        iconName="back"
        style={styles.back}
        onPress={() => router.back()}
      />
      <View
        style={{
          width: SCREEN_WIDTH,
          height: wScale(510),
          marginTop: wScale(100),
          marginBottom: wScale(30),
        }}
      >
        <Image
          source={images[currentIdx]}
          contentFit="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      {/* <ReCarousel
        ref={carouselRef}
        data={images}
        width={SCREEN_WIDTH}
        height={wScale(510)}
        defaultIndex={defaultIndex}
        onSnapToItem={(idx) => {
          setCurrentIdx(idx);
        }}
        scrollAnimationDuration={500}
        snapEnabled={false}
        renderItem={({ item }) => (
          <Image
            source={item}
            contentFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        )}
        style={{ marginTop: wScale(100) }}
      /> */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: wScale(40),
          gap: wScale(10),
        }}
      >
        {images.map((image, idx) => (
          <Pressable
            style={({ pressed }) => [pressed && styles.pressed]}
            onPress={() => {
              // handlePhotoPress(idx);
              setCurrentIdx(idx);
            }}
            key={idx}
          >
            <Image
              style={{
                width: currentIdx === idx ? wScale(64) : wScale(54),
                height: currentIdx === idx ? wScale(64) : wScale(54),
                borderRadius: wScale(10),
                opacity: currentIdx === idx ? 1 : 0.7,
              }}
              contentFit="cover"
              source={image}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.white,
  },
  back: {
    position: "absolute",
    top: wScale(20),
    left: wScale(20),
    zIndex: 3000,
  },
  pressed: {
    opacity: 0.7,
  },
});
