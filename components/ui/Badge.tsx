import { wScale } from "@/util/responsive.util";
import { StyleSheet, View } from "react-native";
import CText from "./CText";
import { theme } from "@/constants/colors";

type BadgeProps = {
  number: number;
};

export default function Badge({ number }: BadgeProps) {
  const isDecimalTen = number > 9 && number < 100;
  const isDecimalHundredPlus = number > 99;
  const numberText = isDecimalHundredPlus ? "+99" : number.toString();

  return (
    <View
      style={[
        styles.container,
        isDecimalTen && styles.ten,
        isDecimalHundredPlus && styles.hundredPlus,
      ]}
    >
      <CText size="sm" color={theme.white}>
        {numberText}
      </CText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: wScale(20),
    height: wScale(20),
    paddingTop: wScale(2),
    borderRadius: wScale(10),
    backgroundColor: "red",
  },
  ten: {
    width: wScale(26),
  },
  hundredPlus: {
    width: wScale(34),
  },
});
