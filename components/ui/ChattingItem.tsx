import { wScale } from "@/util/responsive.util";
import { Image } from "expo-image";
import { Pressable, StyleSheet, View } from "react-native";
import CText from "./CText";
import Badge from "./Badge";
import moment from "moment";
import { gray } from "@/constants/colors";

export type ChattingItem = {
  uri: string;
  name: string;
  lastMessage: string;
  time: string;
  count: number;
};

type ChattingItemProps = ChattingItem & {
  onPress?: () => void;
};

export default function ChattingItem({
  uri,
  name,
  lastMessage,
  time,
  count,
  onPress,
}: ChattingItemProps) {
  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri }} contentFit="cover" />
        <View style={styles.col}>
          <View style={styles.line}>
            <CText>{name}</CText>
            <CText size="xs" color={gray[300]}>
              {moment(time).fromNow()}
            </CText>
          </View>
          <View style={styles.line}>
            <CText
              style={styles.message}
              size="sm"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {lastMessage}
            </CText>
            {count === 0 ? null : <Badge number={count} />}
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    gap: wScale(20),
    paddingVertical: wScale(16),
  },
  img: {
    width: wScale(52),
    height: wScale(52),
    borderRadius: wScale(26),
  },
  col: {
    flex: 1,
  },
  line: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  message: {
    width: wScale(200),
  },
  pressed: {
    opacity: 0.5,
  },
});
