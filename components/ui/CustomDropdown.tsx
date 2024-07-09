import { gray, theme } from "@/constants/colors";
import { useState } from "react";
import { StyleSheet, TextStyle, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import CText from "./CText";
import SvgIcon from "./SvgIcon";
import { wScale } from "@/util/responsive.util";
import { fontFamilie } from "@/constants/font";

export type DropdownItem = {
  label: string;
  value: string;
};

type CustomDropdownProps = {
  data: DropdownItem[];
  location: string;
  width?: number;
  disabled?: boolean;
  onSelect: (value: string) => void;
  textStyle?: TextStyle;
};

export default function CustomDropdown({
  data,
  location,
  width = wScale(295),
  disabled = false,
  onSelect,
  textStyle,
}: CustomDropdownProps) {
  const [value, setValue] = useState<string>();
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={[{ width: width }, styles.container]}>
      <CText
        size="sm"
        color={gray[300]}
        style={[styles.label, isFocus && { color: theme.primary }]}
      >
        Location
      </CText>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: theme.primary }]}
        placeholderStyle={[styles.placeholderStyle, textStyle]}
        selectedTextStyle={[styles.selectedTextStyle, textStyle]}
        data={data}
        autoScroll={false}
        disable={disabled}
        fontFamily={fontFamilie.BM}
        maxHeight={wScale(300)}
        minHeight={wScale(100)}
        labelField="label"
        valueField="value"
        placeholder={disabled ? "" : !isFocus ? location : "..."}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
          onSelect(item.label);
        }}
        renderRightIcon={() => (
          <SvgIcon
            name="right"
            fill={disabled ? gray[300] : theme.primary}
            size={wScale(30)}
            style={styles.iconStyle}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: wScale(16),
  },
  dropdown: {
    height: wScale(58),
    borderColor: gray[300],
    borderWidth: wScale(1),
    borderRadius: wScale(15),
    paddingHorizontal: wScale(8),
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: wScale(40),
    top: wScale(10),
    zIndex: 3000,
    paddingHorizontal: wScale(8),
    fontSize: wScale(12),
  },
  placeholderStyle: {
    fontSize: wScale(14),
    paddingLeft: wScale(15),
  },
  selectedTextStyle: {
    fontSize: wScale(14),
    paddingLeft: wScale(15),
  },
  iconStyle: {
    paddingRight: wScale(30),
  },
});
