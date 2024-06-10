import { StyleSheet, Text, View } from "react-native";

import AvatarInput from "@/components/ui/AvatarInput";
import CText from "@/components/ui/CText";
import { theme } from "@/constants/colors";

export default function TestScreen() {
  const handlePressButton = () => {
    console.log("press");
  };

  return (
    <View style={styles.screen}>
      <CText size="xl" color={theme.primary}>
        Hyunwoo Test Screen
      </CText>
      <View style={{ flexDirection: "row" }}>
        <AvatarInput />
      </View>
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
