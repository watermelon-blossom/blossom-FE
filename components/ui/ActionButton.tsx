import { Pressable, StyleSheet } from "react-native";
import SvgIcon from "./SvgIcon";
import * as Icons from "@/assets/Icons/index";
import { gray, theme } from "@/constants/colors";
import { wScale } from "@/util/responsive.util";

type ActionButtonProps = {
  type: "MATCH" | "REJECT" | "SUPERLIKE";
  disabled?: boolean;
  onPress?: () => void;
};

export default function ActionButton({
  type,
  disabled = false,
  onPress,
}: ActionButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        circleStyles.others,
        type === "MATCH" && circleStyles.match,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <SvgIcon
        name={getIconName(type)}
        size={type === "MATCH" ? wScale(50) : wScale(30)}
        fill={disabled ? theme.white : getIconColor(type, disabled)}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: wScale(100),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: wScale(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: wScale(3.84),
    elevation: wScale(5),
    overflow: "hidden",
  },
  disabled: {
    backgroundColor: gray[300],
  },
  pressed: { opacity: 0.7 },
});

const circleStyles = StyleSheet.create({
  match: {
    width: wScale(100),
    height: wScale(100),
    backgroundColor: theme.primary,
  },
  others: {
    width: wScale(78),
    height: wScale(78),
  },
});

const getIconName = (type: ActionButtonProps["type"]): keyof typeof Icons => {
  switch (type) {
    case "MATCH":
      return "like";
    case "REJECT":
      return "close";
    case "SUPERLIKE":
      return "star";
  }
};

const getIconColor = (
  type: ActionButtonProps["type"],
  disabled: boolean
): string => {
  if (disabled) return theme.white;

  switch (type) {
    case "MATCH":
      return theme.white;
    case "REJECT":
      return "#F27121";
    case "SUPERLIKE":
      return "#8A2387";
  }
};
