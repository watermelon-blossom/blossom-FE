import { colors, gray, theme } from "@/constants/colors";
import { fontSize } from "@/constants/font";
import { wScale } from "@/util/responsive.util";
import React from "react";
import { Dimensions, StyleSheet, Text, TextStyle, View } from "react-native";

type HeaderProps = {
  left?: React.ReactNode;
  right?: React.ReactNode;
  title?: React.ReactNode | string;
  subTitle?: React.ReactNode | string;
  titleStyle?: TextStyle;
  subTitleStyle?: TextStyle;
  isTitleLeft?: boolean;
  children: React.ReactNode;
};

export default function Header({
  left,
  right,
  title,
  subTitle,
  titleStyle,
  subTitleStyle,
  isTitleLeft = false,
  children,
}: HeaderProps) {
  return (
    <>
      <View style={[styles.container]}>
        <View style={styles.left}>
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
        <View style={styles.center}>
          {!isTitleLeft && (
            <Center
              title={title}
              subTitle={subTitle}
              titleStyle={titleStyle}
              subTitleStyle={subTitleStyle}
            />
          )}
        </View>
        <View style={styles.right}>{right}</View>
      </View>
      <View />
      {children}
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
      {(isTitleLeft || subTitle) && (
        <Text style={[styles.subTitleText, subTitleStyle]}>{subTitle}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("window").width,
    height: wScale(80),
    padding: wScale(20),
    paddingHorizontal: wScale(30),
    paddingBottom: wScale(10),
    backgroundColor: theme.secondary,
    zIndex: 3999,
  },
  placeholder: {
    width: Dimensions.get("window").width,
    height: wScale(80),
  },
  left: {},
  right: {},
  center: {},
  titleWrapper: {
    alignItems: "center",
    gap: wScale(0),
  },
  titleText: {
    fontFamily: "BM",
    fontSize: fontSize.xl,
    fontWeight: "bold",
    color: theme.black,
  },
  subTitleText: {
    fontFamily: "BM",
    fontSize: fontSize.sm,
    color: gray[300],
  },
});
