import CText from "@/components/ui/CText";
import Header from "@/components/ui/Header";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function account() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Account" />
      <CText>Account</CText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
});
