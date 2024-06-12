import { gray, theme } from "@/constants/colors";
import { fontSize } from "@/constants/font";
import { wScale } from "@/util/responsive.util";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

type HeaderProps = {
  left?: React.ReactNode;
  right?: React.ReactNode;
  title?: React.ReactNode | string;
  subTitle?: React.ReactNode | string;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  subTitleStyle?: TextStyle;
  leftStyle?: ViewStyle;
  rightStyle?: ViewStyle;
  centerStyle?: ViewStyle;
  isTitleLeft?: boolean;
};

export default function Header({
  left,
  right,
  title,
  style,
  subTitle,
  titleStyle,
  leftStyle,
  rightStyle,
  centerStyle,
  subTitleStyle,
  isTitleLeft = false,
}: HeaderProps) {
  return (
    <>
      <View style={[styles.container, style]}>
        <View style={leftStyle}>
          {isTitleLeft ? (
            <Center
              title={title}
              titleStyle={titleStyle}
              subTitleStyle={subTitleStyle}
              isTitleLeft
            />
          ) : (
            left
          )}
        </View>
        <View style={centerStyle}>
          {!isTitleLeft && (
            <Center
              title={title}
              subTitle={subTitle}
              titleStyle={titleStyle}
              subTitleStyle={subTitleStyle}
            />
          )}
        </View>
        <View style={rightStyle}>{right}</View>
      </View>
    </>
  );
}

type CenterProps = {
  title: React.ReactNode | string;
  subTitle?: React.ReactNode | string;
  isTitleLeft?: boolean;
  titleStyle?: TextStyle;
  subTitleStyle?: TextStyle;
};

const Center = ({
  title,
  subTitle,
  isTitleLeft = false,
  titleStyle,
  subTitleStyle,
}: CenterProps) => {
  return (
    <View style={styles.titleWrapper}>
      <Text style={[styles.titleText, titleStyle]}>{title}</Text>
      <Text style={[styles.subTitleText, subTitleStyle]}>
        {isTitleLeft || subTitle ? subTitle : ""}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("window").width,
    height: wScale(80),
    paddingHorizontal: wScale(30),
    paddingTop: wScale(20),
    paddingBottom: wScale(10),
    backgroundColor: theme.white,
    zIndex: 3000,
  },
  titleWrapper: {
    alignItems: "center",
    gap: wScale(0),
  },
  titleText: {
    color: theme.black,
    fontFamily: "BM",
    fontSize: fontSize.xl,
    fontWeight: "bold",
    marginTop: wScale(10),
  },
  subTitleText: {
    height: wScale(14),
    color: gray[300],
    fontFamily: "BM",
    fontSize: fontSize.xs,
  },
});
