import CText from "@/components/ui/CText";
import Header from "@/components/ui/Header";
import IconButton from "@/components/ui/IconButton";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function messages() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Messages" isTitleLeft />
      <CText>Messages</CText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
});
