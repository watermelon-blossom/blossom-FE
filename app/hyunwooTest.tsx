import CustomCalendar from "@/components/ui/CustomCalendar";
import SlideModal, { SlideModalRefType } from "@/components/ui/SlideModal";
import { useRef } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function TestScreen() {
  const slideModalRef = useRef<SlideModalRefType>(null);

  const handlePressButton = () => {
    console.log("press");
    slideModalRef.current?.show();
  };

  return (
    <View style={styles.screen}>
      <Pressable onPress={handlePressButton}>
        <Text>open</Text>
      </Pressable>

      <SlideModal ref={slideModalRef}>
        <CustomCalendar />
      </SlideModal>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
    padding: 20,
  },
});
