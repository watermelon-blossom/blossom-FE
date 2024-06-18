import { Calendar } from "react-native-calendars";
import Button from "./Button";
import { StyleSheet, View } from "react-native";
import { wScale } from "@/util/responsive.util";
import { useState } from "react";
import { theme } from "@/constants/colors";
import CustomCalendarHeader from "./CustomCalendarHeader";
import moment, { Moment } from "moment";

type CustomCalendarProps = {
  children?: React.ReactNode;
  initialDate: string;
  onDaySelect: (date: Moment) => void;
};

export default function CustomCalendar({
  children,
  initialDate,
  onDaySelect,
}: CustomCalendarProps) {
  const [selected, setSelected] = useState(initialDate);
  const [currentMonth, setCurrentMonth] = useState(initialDate);

  const handleChangeDate = (date: Date) => {
    setCurrentMonth(moment(date).format("YYYY-MM-DD"));
  };

  return (
    <View style={styles.screen}>
      {children}
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
          setCurrentMonth(month.dateString);
        }}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: theme.primary,
            selectedTextColor: theme.white,
          },
        }}
        onDayPress={(day) => {
          setSelected(day.dateString);
        }}
        customHeaderTitle={
          <CustomCalendarHeader
            month={moment(currentMonth)}
            onDateChange={handleChangeDate}
          />
        }
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
