import { StyleSheet, View } from "react-native";
import CText from "@/components/ui/CText";

export default function messages() {
  return (
    <View style={styles.container}>
      <CText>Messages</CText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
});
