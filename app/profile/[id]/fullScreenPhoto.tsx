import IconButton from "@/components/ui/IconButton";
import { theme } from "@/constants/colors";
import { wScale } from "@/util/responsive.util";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import CText from "@/components/ui/CText";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

type ImageParams = {
  data: string;
};

export default function fullScreenPhoto() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const { data } = useLocalSearchParams<ImageParams>();

  if (!data) {
    return (
      <View>
        <CText>Images not found</CText>
      </View>
    );
  }

  const images = data.split(",");

  return (
    <View style={styles.screen}>
      <IconButton
        iconName="back"
        style={styles.back}
        onPress={() => router.back()}
      />
      <View style={styles.fullScreenImage}>
        <Image
          source={images[currentIdx]}
          contentFit="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={styles.imageContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {images.map((image, idx) => (
            <Pressable
              style={({ pressed }) => [
                styles.imageWrapper,
                pressed && styles.pressed,
              ]}
              onPress={() => {
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
        </ScrollView>
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
  fullScreenImage: {
    width: SCREEN_WIDTH,
    height: wScale(510),
    marginTop: wScale(100),
    marginBottom: wScale(30),
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    marginHorizontal: 5,
  },
});
