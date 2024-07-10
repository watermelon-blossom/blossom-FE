import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

import Button from "@/components/ui/Button";
import CText from "@/components/ui/CText";
import Heading from "@/components/ui/Heading";
import MatchedCard from "@/components/ui/MatchedCard";

import { theme } from "@/constants/colors";
import { wScale } from "@/util/responsive.util";

const leftUri =
  "https://sports.hankooki.com/news/photo/202111/img_6748965_0.jpg";
const rightUri =
  "https://www.breaknews.com/imgdata/breaknews_com/202209/2022090545135162.jpg";

export default function matchSuccess() {
  const hadlePressChat = () => {
    router.navigate("/messages");
  };

  const handlePressContinue = () => {
    router.navigate("/discover");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <MatchedCard style={styles.rightPosition} uri={rightUri} side="right" />
        <MatchedCard style={styles.leftPosition} uri={leftUri} />
      </View>

      <View style={styles.textWrapper}>
        <Heading style={styles.titleText} level={1}>
          매칭 성공!
        </Heading>
        <CText>먼저 상대방에게 말을 걸어보세요!</CText>
      </View>

      <View style={styles.buttonWrapper}>
        <Button type="primary" onPress={hadlePressChat}>
          인사 건네기
        </Button>
        <Button
          style={styles.subButton}
          textStyle={styles.subButtonText}
          onPress={handlePressContinue}
        >
          디스커버 이어서 하기
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    padding: wScale(40),
  },
  imgWrapper: {
    flex: 3,
  },
  leftPosition: {
    position: "absolute",
    left: wScale(-130),
    top: wScale(120),
  },
  rightPosition: {
    position: "absolute",
    right: wScale(-120),
    top: wScale(20),
  },
  textWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: wScale(16),
  },
  titleText: {
    color: theme.primary,
  },
  buttonWrapper: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: wScale(16),
  },
  subButton: {
    backgroundColor: "#fdecee",
    borderWidth: 0,
  },
  subButtonText: {
    color: theme.primary,
  },
});
