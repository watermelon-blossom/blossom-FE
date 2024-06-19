import CText from "@/components/ui/CText";
import Header from "@/components/ui/Header";
import IconButton from "@/components/ui/IconButton";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Discover"
        left={<IconButton iconName="back" />}
        right={<IconButton iconName="setting" />}
      />
      <CText>discover</CText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
});
