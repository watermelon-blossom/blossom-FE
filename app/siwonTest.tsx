import { useState } from "react";
import { StyleSheet, View } from "react-native";
import RadioButton, { RadioButtonMenu } from "@/components/ui/RadioButton";

const RADIO_BUTTON_MENUS: RadioButtonMenu[] = [
  { label: "실내 데이트", value: "inside" },
  { label: "실외 데이트", value: "ouside" },
  { label: "실내와 실외 그 사이 어딘가", value: "somewhere" },
];

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
    <View style={styles.screen}>
      <RadioButton
        menus={RADIO_BUTTON_MENUS}
        name="q1"
        value={userInput.q1}
        onSelectMenu={handlePressMenu}
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
    padding: 40,
  },
});
