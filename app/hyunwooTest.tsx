import { StyleSheet, Text, View } from "react-native";

import Button from "@/components/ui/Button";

export default function TestScreen() {
  const handlePressButton = () => {
    console.log("press");
  };

  return (
    <View style={styles.screen}>
      <Text style={{ fontFamily: "BM", fontWeight: "bold" }}>
        Hyunwoo Test Screen
      </Text>

      <Button
        type="primary"
        size="md"
        width="80%"
        height={60}
        onPress={handlePressButton}
      >
        Press Button
      </Button>

      <Button
        type="outline"
        size="md"
        width="80%"
        height={60}
        onPress={handlePressButton}
      >
        Press Button
      </Button>

      <Button
        type="primary"
        size="md"
        disabled={true}
        width="80%"
        height={60}
        onPress={handlePressButton}
      >
        Press Button
      </Button>
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
