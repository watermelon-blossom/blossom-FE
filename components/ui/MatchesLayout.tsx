import { wScale } from "@/util/responsive.util";
import { StyleSheet, View } from "react-native";
import CText from "./CText";
import { gray, theme } from "@/constants/colors";
import MiniProfile, { Person } from "./MiniProfile";

export type MatchesItem = {
  date: string;
  profile: Person[];
};

type MatchesLayoutProps = {
  data: MatchesItem;
  onSelectLike: (action: string, profile: Person) => void;
};

export default function MatchesLayout({
  data,
  onSelectLike,
}: MatchesLayoutProps) {
  const handleLike = (action: string, profile: Person) => {
    onSelectLike(action, profile);
  };
  return (
    <View style={styles.container}>
      <View style={styles.sepWrapper}>
        <View style={styles.separator} />
        <CText color={gray[400]} style={styles.dateIndicator}>
          {data.date}
        </CText>
        <View style={styles.separator} />
      </View>
      <View style={styles.profileWrapper}>
        {data.profile.map(
          (item, index) =>
            index % 2 === 0 && (
              <View key={index} style={styles.row}>
                <MiniProfile data={item} onPress={handleLike} />
                {index + 1 < data.profile.length && (
                  <MiniProfile
                    data={data.profile[index + 1]}
                    onPress={handleLike}
                  />
                )}
              </View>
            )
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
    paddingHorizontal: wScale(10),
  },
  sepWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dateIndicator: {
    paddingHorizontal: wScale(10),
    textAlign: "center",
    zIndex: 3000,
  },
  separator: {
    flex: 1,
    height: wScale(1),
    backgroundColor: gray[200],
  },
  profileWrapper: {
    paddingVertical: wScale(10),
    gap: wScale(15),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
