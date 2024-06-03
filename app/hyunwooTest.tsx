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
      <Text style={{ fontFamily: "BM", fontWeight: "normal" }}>
        Hyunwoo Test Screen
      </Text>
      <Text style={{ fontFamily: "BM", fontWeight: "300" }}>
        Hyunwoo Test Screen
      </Text>
      <Text style={{ fontFamily: "BM", fontWeight: "400" }}>
        Hyunwoo Test Screen
      </Text>
      <Text style={{ fontFamily: "BM", fontWeight: "500" }}>
        Hyunwoo Test Screen
      </Text>
      <Text style={{ fontFamily: "BM", fontWeight: "600" }}>
        Hyunwoo Test Screen
      </Text>
      <Text style={{ fontFamily: "BM", fontWeight: "700" }}>
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

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <IconButton iconName="back" type="white" onPress={handlePressButton} />

        <IconButton iconName="more" type="white" onPress={handlePressButton} />

        <IconButton
          iconName="filter"
          type="white"
          onPress={handlePressButton}
        />

        <IconButton iconName="send" type="white" onPress={handlePressButton} />

        <IconButton iconName="align" type="white" onPress={handlePressButton} />
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
