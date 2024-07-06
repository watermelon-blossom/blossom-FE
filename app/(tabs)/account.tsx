import { StyleSheet, View } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import CText from "@/components/ui/CText";
import Header from "@/components/ui/Header";
import IconButton from "@/components/ui/IconButton";

export default function account() {
  const navigation = useNavigation();

  /*
  이런식으로 title이랑 subTitle을 변경할 수 있습니다.
  - headerTitle: title,
  - title: subTitle
*/
  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: "WooooW", title: "wow" });
  }, []);

  return (
    <View style={styles.container}>
      <CText>Account</CText>
      {/* <Header
        left={<IconButton iconName="back" />}
        right={<IconButton iconName="setting" />}
        title="Account"
        subTitle="Account"
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
});
