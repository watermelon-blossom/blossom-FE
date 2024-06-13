import { Calendar } from "react-native-calendars";
import Button from "./Button";
import { StyleSheet, View } from "react-native";
import { wScale } from "@/util/responsive.util";
import { useMemo, useState } from "react";
import { theme } from "@/constants/colors";
import CustomCalendarHeader from "./CustomCalendarHeader";
import moment, { Moment } from "moment";
import CText from "./CText";
import { font } from "@/constants/font";

type CustomCalendarProps = {
  size?: string;
};

export default function CustomCalendar({ size }: CustomCalendarProps) {
  const [selected, setSelected] = useState("2024-06-12");
  const [currentMonth, setCurrentMonth] = useState<Moment>(moment());

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
  function customHeader(date: any) {
    const month = moment(date.dateString || date);
    return (
      <CustomCalendarHeader month={month} onDateChange={handleSelectDate} />
    );
  }

  const handleSelectDate = (date: Date) => {
    setSelected(moment(date).format("YYYY-MM-DD"));
    setCurrentMonth(moment(date));
    console.log("calendar", currentMonth.format("YYYY-MM-DD"));
    // props.onDaySelect && props.onDaySelect(date);
  };

  return (
    <View style={styles.screen}>
      <CText color={theme.black} size="md">
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
          textDayFontFamily: font.family.BM,
        }}
        hideExtraDays={true}
        hideDayNames={true}
        current={selected}
        onMonthChange={(month) => {
          setCurrentMonth(moment(month));
        }}
        markedDates={marked}
        onDayPress={(day) => {
          setSelected(day.dateString);
          // props.onDaySelect && props.onDaySelect(day);
        }}
        customHeaderTitle={customHeader(currentMonth)}
      />
      <Button width="100%">Save</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
  },
});
