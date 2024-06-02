import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TestScreen() {
  const [userInput, setUserInput] = useState({
    name: "",
    password: "",
    disabled: "",
  });

  const handleChangeText = (name: string, text: string) => {
    setUserInput((prev) => ({ ...prev, [name]: text }));
  };

  return (
    <View style={styles.screen}>
      <Text>Hyunwoo Test Screen</Text>
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
