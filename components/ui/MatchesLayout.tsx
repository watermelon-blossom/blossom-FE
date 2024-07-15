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
      <View style={styles.dateWrapper}>
        <View style={styles.separater} />
        <View style={styles.dateTextWrapper}>
          <CText style={styles.dateText} size="sm">
            {data.date}
          </CText>
        </View>
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
  dateWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: wScale(24),
    marginBottom: wScale(16),
  },
  separater: {
    width: "100%",
    height: 1,
    backgroundColor: gray[100],
  },
  dateTextWrapper: {
    position: "absolute",
    top: wScale(-6),
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  dateText: {
    backgroundColor: theme.white,
    paddingHorizontal: wScale(12),
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
