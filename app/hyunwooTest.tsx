import CustomCalendar from "@/components/ui/CustomCalendar";
import SlideModal, { SlideModalRefType } from "@/components/ui/SlideModal";
import { useRef, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import moment, { Moment } from "moment";
import CText from "@/components/ui/CText";
import { theme } from "@/constants/colors";

export default function TestScreen() {
  const [selectDay, setSelectDay] = useState(moment().format("yyyy-MM-DD"));
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
        <CustomCalendar initialDate={selectDay} onDaySelect={handleSelectDate}>
          <CText color={theme.black} size="sm">
            생년월일
          </CText>
        </CustomCalendar>
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
