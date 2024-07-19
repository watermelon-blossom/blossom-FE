import { StyleSheet, View } from "react-native";
import { theme } from "@/constants/colors";
import Dropdown, { DropdownItem } from "@/components/ui/Dropdown";
import { router, useNavigation } from "expo-router";
import Button from "@/components/ui/Button";

const data = [
  "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/10/18/ed44fa35-baa3-4269-afa9-e0fa4d101817.jpg",
  "https://i.namu.wiki/i/Nat7R8m76ArARjdLnZ6OPkbaleF62cjL6sFE5sNlIcrv7Jeyz62Rc14YqTn4Jrn8VOpokZl4Dp53a5mpxsBoKg.webp",
  "https://cdn.todayflow.co.kr/news/photo/202303/436_2127_5848.jpg",
];

export default function TestScreen() {
  const handlePress = () => {
    router.navigate("fullScreenPhoto");
  };

  return (
    <View style={styles.screen}>
      <Button onPress={handlePress}>photo</Button>
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
