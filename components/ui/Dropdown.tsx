import { gray, theme } from "@/constants/colors";
import { useState } from "react";
import { StyleSheet, TextStyle, View } from "react-native";
import { Dropdown as DropdownLib } from "react-native-element-dropdown";
import CText from "./CText";
import SvgIcon from "./SvgIcon";
import { wScale } from "@/util/responsive.util";
import { font, fontFamilie } from "@/constants/font";

export type DropdownItem = {
  label: string;
  value: string;
};

type DropdownProps = {
  data: DropdownItem[];
  name: string;
  labelName: string;
  defaultData: string;
  width?: number;
  disabled?: boolean;
  onSelect: (name: string, value: string) => void;
  textStyle?: TextStyle;
};

export default function Dropdown({
  data,
  name,
  labelName,
  defaultData,
  width = wScale(295),
  disabled = false,
  onSelect,
  textStyle,
}: DropdownProps) {
  const [value, setValue] = useState<string>(defaultData);
  const [isFocus, setIsFocus] = useState(false);

  const handleOnChange = (item: DropdownItem) => {
    setValue(item.label);
    setIsFocus(false);
    onSelect(name, item.label);
  };

  return (
    <View style={[{ width: width }, styles.container]}>
      <CText
        size="sm"
        color={gray[200]}
        style={[styles.label, isFocus && { color: theme.primary }]}
      >
        {labelName}
      </CText>
      <DropdownLib
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
        placeholder={disabled ? "" : !isFocus ? defaultData : "..."}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          handleOnChange(item);
        }}
        containerStyle={styles.containerStyle}
        itemContainerStyle={styles.itemContainerStyle}
        renderRightIcon={() => (
          <SvgIcon
            name="right"
            fill={disabled ? gray[200] : theme.primary}
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
    paddingVertical: wScale(16),
  },
  dropdown: {
    height: wScale(58),
    borderColor: gray[200],
    borderWidth: wScale(1),
    borderRadius: wScale(15),
    paddingHorizontal: wScale(8),
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: wScale(20),
    top: wScale(10),
    zIndex: 3000,
    paddingHorizontal: wScale(8),
    fontSize: font.size.sm,
  },
  placeholderStyle: {
    fontSize: font.size.sm,
    paddingLeft: wScale(15),
  },
  selectedTextStyle: {
    fontSize: font.size.sm,
    paddingLeft: wScale(15),
  },
  iconStyle: {
    paddingRight: wScale(30),
  },
  containerStyle: { marginTop: wScale(5), borderRadius: wScale(15) },
  itemContainerStyle: {
    borderRadius: wScale(15),
    overflow: "hidden",
  },
});
