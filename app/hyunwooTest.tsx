import CustomCalendar from "@/components/ui/CustomCalendar";
import SlideModal, { SlideModalRefType } from "@/components/ui/SlideModal";
import { useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Moment } from "moment";
import CText from "@/components/ui/CText";

export default function TestScreen() {
  const [selectDay, setSelectDay] = useState("");
  const slideModalRef = useRef<SlideModalRefType>(null);

  const handlePressButton = () => {
    console.log("press");
    slideModalRef.current?.show();
  };

  const handleSelectDate = (date: Moment) => {
    setSelectDay(date.format("yyyy-MM-DD"));
  };

  return (
    <View style={styles.screen}>
      <Pressable onPress={handlePressButton}>
        <Text>open</Text>
      </Pressable>
      <CText size="2xl">{selectDay}</CText>

      <SlideModal ref={slideModalRef}>
        <CustomCalendar onDaySelect={handleSelectDate} />
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
