import { gray, theme } from "@/constants/colors";
import { wScale } from "@/util/responsive.util";
import { StyleSheet, View, ViewStyle } from "react-native";

type PaginationDotsProps = {
  totalItems: number;
  currentIndex: number;
  style?: ViewStyle;
  dotStyle?: ViewStyle;
  activeDotStyle?: ViewStyle;
};

export default function PaginationDots({
  totalItems,
  currentIndex,
  style,
  dotStyle,
  activeDotStyle,
}: PaginationDotsProps) {
  return (
    <View style={[styles.container, style]}>
      {new Array(totalItems).fill(null).map((_, index) => (
        <Dot
          key={index}
          isActive={index === currentIndex}
          dotStyle={dotStyle}
          activeDotStyle={activeDotStyle}
        />
      ))}
    </View>
  );
}

type DotProps = {
  isActive: boolean;
  dotStyle?: ViewStyle;
  activeDotStyle?: ViewStyle;
};

const Dot = ({ isActive, dotStyle, activeDotStyle }: DotProps) => (
  <View
    style={[styles.dot, dotStyle, isActive && [styles.active, activeDotStyle]]}
  />
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
