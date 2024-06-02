import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function TestScreen() {
  const handlePressHyunwooButton = () => {
    router.navigate("hyunwooTest");
  };

  const handlePressSiwonButton = () => {
    router.navigate("siwonTest");
  };

  return (
    <View style={styles.screen}>
      <Pressable style={styles.button} onPress={handlePressHyunwooButton}>
        <Text>Hyunwoo Test Screen</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handlePressSiwonButton}>
        <Text>Siwon Test Screen</Text>
      </Pressable>
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
  button: {
    padding: 10,
    backgroundColor: "yellowgreen",
    borderRadius: 8,
  },
});
