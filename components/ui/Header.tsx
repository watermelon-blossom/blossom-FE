import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { gray, theme } from "@/constants/colors";
import { fontSize } from "@/constants/font";
import { wScale } from "@/util/responsive.util";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

type HeaderProps = {
  options?: BottomTabNavigationOptions;
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

/*
  options를 통해 title등을 변경핤 수 있습니다.
  
  적용가능 optionsProps 
  - headerTitle: title,
  - title: subTitle
  - headerTitleAlign: "left" | "center" 
  - headerTitleStyle: TextStyle
  - headerTintColor: string
  - headerPressColor: string
  - headerPressOpacity: number
  - headerLeft: ({ tintColor, pressColor, pressOpacity }) => React.ReactNode
  - headerRight: ({ tintColor, pressColor, pressOpacity }) => React.ReactNode
*/
export default function Header({
  options,
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
  const titleText = title || (options?.headerTitle as string) || "";
  const subTitleText = subTitle || options?.title || "";

  let LeftComp =
    left ||
    (options?.headerLeft &&
      options?.headerLeft({
        tintColor: options.headerTintColor,
        pressColor: options.headerPressColor,
        pressOpacity: options.headerPressOpacity,
      }));

  const RightComp = options?.headerRight
    ? options.headerRight({
        tintColor: options.headerTintColor,
        pressColor: options.headerPressColor,
        pressOpacity: options.headerPressOpacity,
      })
    : right;

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.leftRightWrapper, leftStyle]}>
        {options?.headerTitleAlign === "left" || isTitleLeft ? (
          <HeaderCenter
            title={titleText}
            isTitleLeft
            titleStyle={[titleStyle, options?.headerTitleStyle]}
          />
        ) : (
          LeftComp
        )}
      </View>
      <View style={centerStyle}>
        {!isTitleLeft && options?.headerTitleAlign !== "left" && (
          <HeaderCenter
            title={titleText}
            subTitle={subTitleText}
            titleStyle={[titleStyle, options?.headerTitleStyle]}
            subTitleStyle={subTitleStyle}
          />
        )}
      </View>
      <View style={[styles.leftRightWrapper, rightStyle]}>{RightComp}</View>
    </View>
  );
}

type CenterProps = {
  title: React.ReactNode | string;
  subTitle?: React.ReactNode | string;
  isTitleLeft?: boolean;
  titleStyle?: TextStyle | any[];
  subTitleStyle?: TextStyle;
};

export const HeaderCenter = ({
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
        {!isTitleLeft || subTitle ? subTitle : ""}
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
    paddingVertical: wScale(10),
    backgroundColor: theme.white,
    zIndex: 3000,
  },
  titleWrapper: { alignItems: "center" },
  titleText: {
    color: theme.black,
    fontFamily: "BM",
    fontSize: fontSize["2xl"],
    marginTop: wScale(10),
  },
  subTitleText: {
    height: wScale(14),
    color: gray[300],
    fontFamily: "BM",
    fontSize: fontSize.xs,
  },
  leftRightWrapper: {
    minWidth: wScale(24),
  },
});
