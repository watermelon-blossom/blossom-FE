import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Modal,
  Platform,
} from "react-native";
import moment, { Moment } from "moment";
import { theme } from "@/constants/colors";
import CText from "./CText";
import RNDateTimePicker from "@react-native-community/datetimepicker";

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

  const handlePressButton = () => {
    setShow(!show);
  };

  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
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

      {Platform.OS === "ios" && show && (
        <Modal
          transparent={true}
          animationType="slide"
          visible={show}
          onRequestClose={() => setShow(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <RNDateTimePicker
                value={month.toDate()}
                mode="date"
                display="spinner"
                onChange={onChange}
                style={styles.datePicker}
              />
              <TouchableOpacity
                onPress={() => {
                  setShow(false);
                  console.log(moment(date).format("yyyy-MM-DD"));
                  onDateChange(date);
                }}
                style={styles.doneButton}
              >
                <CText style={styles.doneButtonText}>Done</CText>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
      {Platform.OS === "android" && show && (
        <RNDateTimePicker
          value={month.toDate()}
          mode="date"
          is24Hour={true}
          display="spinner"
          onChange={(event, selectedDate) => {
            setShow(false);
            onChange(event, selectedDate);
            onDateChange(date);
          }}
          style={styles.datePicker}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: theme.white,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  datePicker: {
    width: "100%",
    backgroundColor: "white",
  },
  doneButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: theme.primary,
    borderRadius: 5,
  },
  doneButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
