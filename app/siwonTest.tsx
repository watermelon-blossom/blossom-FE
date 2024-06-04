import SlideModal, { SlideModalRefType } from "@/components/ui/SlideModal";
import { useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TestScreen() {
  const slideModalRef = useRef<SlideModalRefType>(null);

  const [userInput, setUserInput] = useState({
    name: "",
    password: "",
    disabled: "",
  });

  const handlePress = () => {
    // 컨트롤러의 show 메서드로 모달 표시
    slideModalRef.current?.show();
  };

  const handleChangeText = (name: string, text: string) => {
    setUserInput((prev) => ({ ...prev, [name]: text }));
  };

  return (
    <View style={styles.screen}>
      <Pressable onPress={handlePress}>
        <Text>open</Text>
      </Pressable>

      <SlideModal ref={slideModalRef}>
        <Text style={{ height: 300 }}>test</Text>
      </SlideModal>
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
