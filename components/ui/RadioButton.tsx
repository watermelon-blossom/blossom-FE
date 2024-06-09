import { Pressable, StyleSheet, Text, View } from "react-native";
import CheckAnimation from "./CheckAnimation";
import { gray, theme } from "@/constants/colors";
import { fontSize } from "@/constants/font";
import { wScale } from "@/util/responsive.util";

export type RadioButtonMenu = {
  label: string;
  value: string;
};

type RadioButtonProps = {
  menus: RadioButtonMenu[];
  name: string;
  value: string;
  onSelectMenu: (name: string, value: string) => void;
};

export default function RadioButton({
  menus,
  name,
  value,
  onSelectMenu,
}: RadioButtonProps) {
  const handlePressMenu = (menu: RadioButtonMenu) => {
    onSelectMenu(name, menu.value);
  };

  return (
    <View style={styles.container}>
      {menus.map((menu) => {
        const isSelected = value === menu.value;

        return (
          <Pressable
            key={menu.value}
            style={[
              styles.button,
              isSelected && {
                backgroundColor: theme.primary,
                borderWidth: 0,
              },
            ]}
            onPress={() => handlePressMenu(menu)}
          >
            <Text style={[styles.text, isSelected && { color: theme.white }]}>
              {menu.label}
            </Text>
            {isSelected && <CheckAnimation />}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: wScale(12),
    width: "100%",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: wScale(58),
    paddingHorizontal: wScale(16),
    backgroundColor: theme.white,
    borderRadius: wScale(15),
    borderWidth: wScale(1),
    borderColor: gray[300],
  },
  text: {
    color: theme.black,
    fontFamily: "BM",
    fontSize: fontSize.md,
  },
});
