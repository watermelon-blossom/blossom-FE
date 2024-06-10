import { StyleSheet, Text, View } from "react-native";

import CText from "@/components/ui/CText";
import { colors } from "@/constants/colors";

export default function TestScreen() {
  const handlePressButton = () => {
    console.log("press");
  };

  return (
    <View style={styles.screen}>
      <CText size="xs" color={colors.theme.primary}>
        Hyunwoo Test
      </CText>
      <CText size="sm" color={colors.theme.black}>
        Hyunwoo Test
      </CText>
      <CText size="md" color={colors.theme.primary}>
        안녕하세요. 저는 지금 워터멜론 팀과 함께 블라썸 소개팅 앱을 만들고
        있습니다.
      </CText>
      <CText size="lg" color={colors.theme.black}>
        Hyunwoo Test
      </CText>
      <CText size="xl" color={colors.theme.primary}>
        Hyunwoo Test
      </CText>
      <CText size="2xl" color={colors.theme.black}>
        Hyunwoo Test
      </CText>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 20,
  },
});
