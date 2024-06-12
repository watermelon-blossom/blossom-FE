import Header from "@/components/ui/Header";
import IconButton from "@/components/ui/IconButton";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TestScreen() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Header
          left={
            <IconButton
              onPress={() => {
                router.back();
              }}
            />
          }
          right={<IconButton iconName="setting" onPress={() => {}} />}
          title="Discover"
          subTitle="Chicago, IL"
          // isTitleLeft
        />

        <View style={styles.screen}>
          <Pressable onPress={() => {}}>
            <Text>open</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "yellowgreen",
  },
});
