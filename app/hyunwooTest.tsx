import { StyleSheet, Text, View } from "react-native";

import AvatarInput from "@/components/ui/AvatarInput";

export default function TestScreen() {
  const handlePressButton = () => {
    console.log("press");
  };

  return (
    <View style={styles.screen}>
      <Text style={{ fontFamily: "BM", fontWeight: "bold" }}>
        Hyunwoo Test Screen
      </Text>
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
