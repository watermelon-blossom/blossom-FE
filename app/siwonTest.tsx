import Header from "@/components/ui/Header";
import IconButton from "@/components/ui/IconButton";
import SlideModal, { SlideModalRefType } from "@/components/ui/SlideModal";
import { useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TestScreen() {
  const [userInput, setUserInput] = useState({
    q1: "",
  });

  const handlePressMenu = (name: string, value: string) => {
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(userInput);

  return (
    <Header
      // left={<IconButton onPress={() => {}} />}
      title="Discover"
      subTitle="Chicago, IL"
      right={<Text>right</Text>}
    >
      <View style={styles.screen}>
        <View
          style={{ backgroundColor: "yellow", width: "100%", height: 700 }}
        />
        <Pressable onPress={() => {}}>
          <Text>open</Text>
        </Pressable>
      </View>
    </Header>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 40,
  },
});
