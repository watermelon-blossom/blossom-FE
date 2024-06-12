import { Image, StyleSheet, Text, View } from "react-native";

import QuestionText from "@/components/ui/QuestionText";
import useCountStore from "@/store/useCountStore";
import RadioButton from "@/components/ui/RadioButton";
import { useState } from "react";

const QUESTIONTEXT_LIST = [
  {
    QuestionNumber: 1,
    Content: "선호하는 데이트 스타일은?",
    S1: { label: "실내 데이트", value: "inside" },
    S2: { label: "실외 데이트", value: "outside" },
  },
  {
    QuestionNumber: 2,
    Content: "내가 더 좋아하는 음식은?",
    S1: { label: "한식", value: "korean" },
    S2: { label: "양식", value: "european" },
  },
];
export default function TestScreen() {
  const [userInput, setUserInput] = useState({
    q1: "",
  });

  const { count, setNumber } = useCountStore((state) => state);

  const handlePressButton = (name: string, value: string) => {
    console.log("press");
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    setTimeout(() => {
      setNumber(count ? 0 : 1);
    }, 500);
  };

  return (
    <View style={styles.screen}>
      <QuestionText
        num={QUESTIONTEXT_LIST[count].QuestionNumber}
        question={QUESTIONTEXT_LIST[count].Content}
      />
      <Image
        source={require("@/assets/images/date.png")}
        style={{ width: "100%", aspectRatio: 1.5 }}
        resizeMode="contain"
      ></Image>
      <RadioButton
        menus={[QUESTIONTEXT_LIST[count].S1, QUESTIONTEXT_LIST[count].S2]}
        name="q1"
        value={userInput.q1}
        onSelectMenu={handlePressButton}
      ></RadioButton>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
    padding: 20,
  },
});
