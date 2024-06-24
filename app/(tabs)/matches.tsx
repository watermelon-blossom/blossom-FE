import { StyleSheet, View } from "react-native";
import CText from "@/components/ui/CText";

export default function matches() {
  return (
    <View style={styles.container}>
      <CText>Matches</CText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
});
