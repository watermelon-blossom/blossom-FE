import React, { useState } from "react";
import { View, StyleSheet, Pressable, Modal, Dimensions } from "react-native";
import { Moment } from "moment";
import { theme } from "@/constants/colors";
import CText from "./CText";
import { wScale } from "@/util/responsive.util";
import { Picker } from "@react-native-picker/picker";
import Button from "./Button";

type CustomCalendarHeaderProps = {
  month: Moment;
  onDateChange: (date: Date) => void;
};

export default function CustomCalendarHeader({
  month,
  onDateChange,
}: CustomCalendarHeaderProps) {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(month.toDate());

  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );

  const handleChange = (type: "month" | "year", value: number) => {
    const newDate = new Date(date);
    if (type === "month") newDate.setMonth(value - 1);
    if (type === "year") newDate.setFullYear(value);
    setDate(newDate);
  };

  const handlePressButton = () => {
    setShow(!show);
  };

  return (
    <View>
      <Pressable style={styles.headerContainer} onPress={handlePressButton}>
        <CText size="2xl" color={theme.primary}>
          {month.format("yyyy")}
        </CText>
        <CText size="sm" color={theme.primary}>
          {month.format("MMMM")}
        </CText>
      </Pressable>
      {show && (
        <View style={styles.container}>
          <Modal visible={show} transparent={true} animationType="slide">
            <View style={styles.pickerContainer}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Picker
                  selectedValue={date.getMonth() + 1}
                  onValueChange={(value: any) => handleChange("month", value)}
                  style={styles.picker}
                  itemStyle={{ height: wScale(110) }}
                  mode="dialog"
                >
                  {months.map((month) => (
                    <Picker.Item key={month} label={`${month}`} value={month} />
                  ))}
                </Picker>
                <Picker
                  selectedValue={date.getFullYear()}
                  onValueChange={(value: any) => handleChange("year", value)}
                  style={styles.picker}
                  itemStyle={{ height: wScale(110) }}
                  mode="dialog"
                >
                  {years.map((year) => (
                    <Picker.Item key={year} label={`${year}`} value={year} />
                  ))}
                </Picker>
              </View>
              <Button
                width="30%"
                height={wScale(50)}
                onPress={() => {
                  setShow(false);
                  onDateChange(date);
                }}
              >
                확인
              </Button>
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: wScale(10),
    backgroundColor: theme.white,
  },
  pickerContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: wScale(520),
    left: Dimensions.get("window").width * 0.1,
    backgroundColor: theme.white,
    borderRadius: wScale(10),
    width: "80%",
    padding: wScale(10),
  },
  picker: {
    flex: 1,
  },
});
