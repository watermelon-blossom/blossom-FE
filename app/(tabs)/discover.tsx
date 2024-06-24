import { StyleSheet, View } from "react-native";
import CText from "@/components/ui/CText";
import { fontSize } from "@/constants/font";

export default function index() {
  return (
    <View style={styles.container}>
      <CText>discover</CText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  headerTitle: { fontSize: fontSize.xl },
});
