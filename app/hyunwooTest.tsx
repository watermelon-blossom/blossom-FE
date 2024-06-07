import { StyleSheet, Text, View } from "react-native";

import Heading from "@/components/ui/Heading";

export default function TestScreen() {
  const handlePressButton = () => {
    console.log("press");
  };

  return (
    <View style={styles.screen}>
      <Heading level={1}>H1: Hyunwoo Test</Heading>
      <Heading level={2}>H2: Hyunwoo Test</Heading>
      <Heading level={3}>H3: Hyunwoo Test</Heading>
      <Heading level={4}>H4: Hyunwoo Test</Heading>
      <Heading level={5}>H5: Hyunwoo Test</Heading>
      <Heading level={6}>H6: Hyunwoo Test</Heading>
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
