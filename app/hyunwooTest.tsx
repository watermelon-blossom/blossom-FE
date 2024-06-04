import { StyleSheet, Text, View } from "react-native";

import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";

export default function TestScreen() {
  const handlePressButton = () => {
    console.log("press");
  };

  return (
    <View style={styles.screen}>
      <Text style={{ fontFamily: "BM", fontWeight: "bold" }}>
        Hyunwoo Test Screen
      </Text>
      <IconButton onPress={handlePressButton} />
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
