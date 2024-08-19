import { StyleSheet, View } from "react-native";
import { theme } from "@/constants/colors";
import Dropdown, { DropdownItem } from "@/components/ui/Dropdown";
import Button from "@/components/ui/Button";

import { router } from "expo-router";

export default function TestScreen() {
  const handlePress = () => {
    router.navigate(`profile/${2}`);
  };

  return (
    <View style={styles.screen}>
      <Button onPress={handlePress}>profile</Button>
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
