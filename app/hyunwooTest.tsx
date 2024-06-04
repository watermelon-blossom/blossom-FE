import { StyleSheet, Text, View } from "react-native";

import IconButton from "@/components/ui/IconButton";
import { colors } from "@/constants/colors";

export default function TestScreen() {
  const handlePressButton = () => {
    console.log("press");
  };

  return (
    <View style={styles.screen}>
      <Text style={{ fontFamily: "BM", fontWeight: "bold" }}>
        Hyunwoo Test Screen
      </Text>
      <IconButton
        iconName="back"
        iconColor={colors.theme.primary}
        onPress={handlePressButton}
      />
      <IconButton
        iconName="setting"
        iconColor={colors.theme.primary}
        onPress={handlePressButton}
      />
      <IconButton
        iconName="more"
        iconColor={colors.theme.black}
        onPress={handlePressButton}
      />
      <IconButton
        iconName="send"
        iconColor={colors.theme.primary}
        onPress={handlePressButton}
      />
      <IconButton
        type="transparent"
        iconName="sort"
        iconColor={colors.theme.black}
        onPress={handlePressButton}
      />
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
