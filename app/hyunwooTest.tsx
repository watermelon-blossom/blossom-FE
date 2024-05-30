import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";

export default function TestScreen() {
  const [userInput, setUserInput] = useState({
    name: "",
    password: "",
    disabled: "",
  });

  const Spacer: React.FC<{ size: number }> = ({ size }) => {
    return <View style={{ height: size }} />;
  };

  const handleChangeText = (name: string, text: string) => {
    setUserInput((prev) => ({ ...prev, [name]: text }));
  };

  const handlePressButton = () => {
    console.log("press");
  };

  return (
    <View style={styles.screen}>
      <Text>Hyunwoo Test Screen</Text>
      <Button
        type="primary"
        size="md"
        width="80%"
        height={60}
        onPress={handlePressButton}
      >
        Press Button
      </Button>
      <Spacer size={15} />
      <Button
        type="outline"
        size="md"
        width="80%"
        height={60}
        onPress={handlePressButton}
      >
        Press Button
      </Button>
      <Spacer size={20} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <IconButton iconName="back" type="white" onPress={handlePressButton} />
        <IconButton iconName="more" type="white" onPress={handlePressButton} />
        <IconButton
          iconName="filter"
          type="white"
          onPress={handlePressButton}
        />
        <IconButton iconName="send" type="white" onPress={handlePressButton} />
        <IconButton iconName="align" type="white" onPress={handlePressButton} />
      </View>
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
