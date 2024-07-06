import { StyleSheet, View, ViewStyle } from "react-native";
import SvgIcon from "./SvgIcon";
import { wScale } from "@/util/responsive.util";
import { Image } from "expo-image";
import { colors, theme } from "@/constants/colors";

type MatchedCardProps = {
  uri: string;
  side?: "left" | "right";
  style?: ViewStyle;
};

export default function MatchedCard({
  uri,
  side = "left",
  style,
}: MatchedCardProps) {
  return (
    <View
      style={[
        styles.container,
        {
          transform: [
            {
              rotateZ: side === "left" ? "-10deg" : "10deg",
            },
          ],
        },
        style,
      ]}
    >
      <Image
        style={styles.img}
        source={{ uri }}
        contentFit="cover"
        transition={1000}
      />
      <View
        style={[
          styles.circle,
          side === "left"
            ? {
                left: wScale(-15),
                bottom: wScale(-15),
              }
            : {
                left: wScale(-15),
                top: wScale(-15),
              },
        ]}
      >
        <SvgIcon name="like" size={wScale(30)} fill={theme.primary} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wScale(160),
    height: wScale(240),
    borderRadius: wScale(20),
    backgroundColor: theme.white,
    shadowColor: "#000",
    shadowOffset: {
      width: wScale(10),
      height: wScale(10),
    },
    shadowOpacity: 0.2,
    shadowRadius: wScale(10),
    elevation: wScale(10),
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: wScale(20),
  },
  circle: {
    position: "absolute",
    width: wScale(50),
    height: wScale(50),
    borderRadius: wScale(50),
    backgroundColor: theme.white,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: wScale(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: wScale(3.84),
    elevation: wScale(5),
  },
});
