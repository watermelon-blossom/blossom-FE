import TextInput from "@/components/ui/TextInput";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
      <TextInput
        name="name"
        label="First name"
        value={userInput.name}
        placeholder="Enter your name"
        onChangeText={handleChangeText}
      />
      <TextInput
        name="password"
        label="Password"
        value={userInput.password}
        placeholder="Enter your password"
        secureTextEntry
        onChangeText={handleChangeText}
      />
      <TextInput
        name="disabled"
        label="First name"
        disabled
        value={userInput.disabled}
        onChangeText={handleChangeText}
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
