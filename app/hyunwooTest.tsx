import { StyleSheet, View } from "react-native";
import { theme } from "@/constants/colors";
import { wScale } from "@/util/responsive.util";
import SelectButton from "@/components/ui/SelectButton";
import { SafeAreaView } from "react-native-safe-area-context";

export default function hyunwooTest() {
  const handleSelectMenu = (label: string) => {
    console.log(label);
  };

  return (
    <View style={styles.screen}>
      <SelectButton onSelectMenu={handleSelectMenu} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.white,
  },
});
