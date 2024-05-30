import { Calendar } from "react-native-calendars";
import { Colors } from "./Colors";

type customCalendar = {
  height: number;
};

export default function CustomCalendar({ height = 100 }: customCalendar) {
  return (
    <Calendar
      style={{
        borderWidth: 1,
        borderColor: "gray",
        height: height,
        width: "100%",
      }}
      theme={{
        backgroundColor: "#ffffff",
        calendarBackground: "#ffffff",
        textSectionTitleColor: Colors.light.primary,
        selectedDayBackgroundColor: Colors.light.primary,
        selectedDayTextColor: "#ffffff",
        todayTextColor: "#00adf5",
        dayTextColor: "#2d4150",
        textDisabledColor: Colors.gray[200],
      }}
    ></Calendar>
  );
}
