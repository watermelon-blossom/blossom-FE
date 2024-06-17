import { Calendar } from "react-native-calendars";
import Button from "./Button";
import { StyleSheet, View } from "react-native";
import { wScale } from "@/util/responsive.util";
import { useMemo, useState } from "react";
import { theme } from "@/constants/colors";
import CustomCalendarHeader from "./CustomCalendarHeader";
import moment, { Moment } from "moment";
import CText from "./CText";

type CustomCalendarProps = {
  onDaySelect: (date: Moment) => void;
};

export default function CustomCalendar({ onDaySelect }: CustomCalendarProps) {
  const [selected, setSelected] = useState("2024-06-12");
  const [currentMonth, setCurrentMonth] = useState("2024-06-12");

  const marked = useMemo(
    () => ({
      [selected]: {
        selected: true,
        selectedColor: theme.primary,
        selectedTextColor: theme.white,
      },
    }),
    [selected]
  );

  const handleChangeDate = (date: Date) => {
    setCurrentMonth(moment(date).format("YYYY-MM-DD"));
  };

  function customHeader(month: string) {
    return (
      <CustomCalendarHeader
        month={moment(month)}
        onDateChange={handleChangeDate}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <CText color={theme.black} size="sm">
        생년월일
      </CText>
      <Calendar
        style={{
          height: wScale(350),
          width: wScale(300),
        }}
        theme={{
          backgroundColor: theme.white,
          calendarBackground: theme.white,
          arrowColor: theme.black,
          todayTextColor: theme.black,
          dayTextColor: theme.black,
          textDayFontWeight: "bold",
        }}
        hideExtraDays={true}
        hideDayNames={true}
        current={currentMonth}
        key={currentMonth}
        onMonthChange={(month) => {
          console.log(month.dateString);
          setCurrentMonth(month.dateString);
        }}
        markedDates={marked}
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        customHeaderTitle={customHeader(currentMonth)}
      />
      <Button width="100%" onPress={() => onDaySelect(moment(selected))}>
        저장
      </Button>
      <View style={{ height: wScale(20) }} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
  },
});
