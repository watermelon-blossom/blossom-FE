import { StyleSheet, TextProps, View } from "react-native";
import CText from "./CText";
import { theme } from "@/constants/colors";
import { wScale } from "@/util/responsive.util";

type QuestionTextProps = {
  num?: number;
  question?: string;
};
export default function QuestionText({ num, question }: QuestionTextProps) {
  return (
    <View style={styles.container}>
      <CText color={theme.primary} size="lg" style={styles.title}>
        Q{num}.
      </CText>
      <CText size="lg" style={styles.question}>
        {question}
      </CText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    margin: wScale(10),
  },
  title: {
    alignSelf: "flex-start",
    marginRight: 10,
  },
  question: {
    flex: 1,
  },
});
