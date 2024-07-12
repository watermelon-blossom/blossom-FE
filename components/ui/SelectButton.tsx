import { gray, theme } from "@/constants/colors";
import { Pressable, StyleSheet, View } from "react-native";
import CText from "./CText";
import { wScale } from "@/util/responsive.util";
import { useState } from "react";

const datas = [
  {
    label: "Girls",
    value: 1,
  },
  {
    label: "Boys",
    value: 2,
  },
  {
    label: "Both",
    value: 3,
  },
];

type SelectButtonProps = {
  onSelectMenu: (label: string) => void;
};

export default function SelectButton({ onSelectMenu }: SelectButtonProps) {
  const [selected, setSelected] = useState(1);

  const handlePressMenu = (label: string, value: number) => {
    setSelected(value);
    onSelectMenu(label);
  };

  return (
    <View style={styles.container}>
      {datas.map((data) => {
        return (
          <Pressable
            key={data.value}
            style={[
              styles.button,
              selected === data.value && {
                backgroundColor: theme.primary,
              },
            ]}
            onPress={() => handlePressMenu(data.label, data.value)}
          >
            <CText
              style={[
                styles.text,
                { fontSize: wScale(14) },
                selected === data.value && { color: theme.white },
              ]}
            >
              {data.label}
            </CText>
          </Pressable>
        );
      })}
      {selected === 3 && <View style={styles.leftSeparator} />}
      {selected === 1 && <View style={styles.rightSeparator} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: wScale(58),
    width: wScale(295),
    borderRadius: wScale(15),
    borderWidth: wScale(1),
    borderColor: gray[300],
    backgroundColor: theme.white,
    overflow: "hidden",
  },
  button: {
    flex: 1,
    height: wScale(58),
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  text: {
    textAlign: "center",
  },
  leftSeparator: {
    width: wScale(1),
    height: wScale(22),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: gray[300],
    position: "absolute",
    left: wScale(98),
  },
  rightSeparator: {
    width: wScale(1),
    height: wScale(22),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: gray[300],
    position: "absolute",
    right: wScale(98),
  },
});
