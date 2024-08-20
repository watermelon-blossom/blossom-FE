import { StyleSheet, Text, View } from "react-native";
import CText from "./CText";
import SvgIcon from "./SvgIcon";
import { wScale } from "@/util/responsive.util";
import { gray, theme } from "@/constants/colors";
import { getChatTime } from "@/util/moment.util";

export type Chat = {
  id: string;
  fromId: string;
  toId: string;
  message: string;
  time: string;
  hasRead: boolean;
};

type ChatBoxProps = {
  type: "ME" | "OTHER";
  message: string;
  time: string;
  hasRead?: boolean;
  showTime?: boolean;
};

export default function ChatBox({
  type,
  message,
  time,
  hasRead,
  showTime = true,
}: ChatBoxProps) {
  return (
    <View
      style={[
        styles.container,
        type === "ME"
          ? { alignItems: "flex-end" }
          : { alignItems: "flex-start" },
      ]}
    >
      <View style={[styles.box, type === "ME" ? styles.me : styles.other]}>
        {/* <CText size="sm">{message}</CText> */}
        <Text>{message}</Text>
      </View>

      {showTime && (
        <View style={styles.info}>
          <CText size="xs">{getChatTime(time)}</CText>
          {type === "ME" && (
            <SvgIcon
              style={styles.icon}
              name="hasRead"
              fill={hasRead ? theme.primary : gray[200]}
            />
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: wScale(6),
  },
  box: {
    minWidth: wScale(40),
    maxWidth: wScale(250),
    padding: wScale(16),
    borderRadius: wScale(16),
  },
  me: {
    backgroundColor: gray[100],
    borderBottomRightRadius: 0,
  },
  other: {
    backgroundColor: theme.secondary,
    borderBottomLeftRadius: 0,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: wScale(4),
  },
  icon: {
    marginBottom: wScale(4),
  },
});
