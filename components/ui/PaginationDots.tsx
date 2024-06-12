import { gray, theme } from "@/constants/colors";
import { wScale } from "@/util/responsive.util";
import { StyleSheet, View, ViewStyle } from "react-native";

type PaginationDotsProps = {
  totalItems: number;
  currentIndex: number;
  style?: ViewStyle;
  dotStyle?: ViewStyle;
};

export default function PaginationDots({
  totalItems,
  currentIndex,
  style,
  dotStyle,
}: PaginationDotsProps) {
  return (
    <View style={[styles.container, style]}>
      {new Array(totalItems).fill(null).map((_, index) => (
        <Dot
          key={index}
          isActive={index === currentIndex}
          dotStyle={dotStyle}
        />
      ))}
    </View>
  );
}

type DotProps = {
  isActive: boolean;
  dotStyle?: ViewStyle;
};

const Dot = ({ isActive, dotStyle }: DotProps) => (
  <View style={[styles.dot, isActive && styles.active, dotStyle]} />
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: wScale(8),
  },
  dot: {
    width: wScale(8),
    height: wScale(8),
    borderRadius: wScale(4),
    backgroundColor: gray[200],
  },
  active: {
    backgroundColor: theme.primary,
  },
});
