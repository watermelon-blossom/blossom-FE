import { FlatList, StyleSheet, View } from "react-native";
import CText from "@/components/ui/CText";
import MatchesForm, { MatchesItem } from "@/components/ui/MatchesForm";
import { wScale } from "@/util/responsive.util";
import { useAnimationEffectActions } from "@/store/useLayoutStore";
import { theme } from "@/constants/colors";
import { MatchesTestData } from "@/data/matchesTestData";
import moment from "moment";
import { router, useNavigation } from "expo-router";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import IconButton from "@/components/ui/IconButton";

export default function matches() {
  const navigation = useNavigation("/(tabs)");
  const { startAnimation } = useAnimationEffectActions();
  const [latest, setLatest] = useState(true);
  const [data, setData] = useState(groupByDate(MatchesTestData));
  const flatListRef = useRef<FlatList>(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          iconName="sort"
          onPress={() => {
            setLatest((prev) => (prev ? false : true));
          }}
        />
      ),
    });
  }, []);

  useEffect(() => {
    latest
      ? setData((prevData) =>
          [...prevData].sort(
            (a, b) => moment(b.date).valueOf() - moment(a.date).valueOf()
          )
        )
      : setData((prevData) =>
          [...prevData].sort(
            (a, b) => moment(a.date).valueOf() - moment(b.date).valueOf()
          )
        );
  }, [latest]);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    }
  }, [data]);

  const handleLike = (action: string, profile: MatchesItem) => {
    if (action === "like") {
      console.log("You liked", profile.name);
      startAnimation("heart");
      router.navigate("matchSuccess");
    } else if (action === "dislike") console.log("You disliked", profile.name);
  };

  const renderItem = ({ item }: any) => (
    <MatchesForm data={item} onSelectLike={handleLike} />
  );

  return (
    <View style={styles.container}>
      <CText size="md" style={styles.subtitle}>
        나와 내 매칭에 '좋아요'를 누른 사람들의 목록입니다.
      </CText>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.date}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

function groupByDate(
  items: MatchesItem[]
): { date: string; items: MatchesItem[] }[] {
  return items
    .reduce((acc, item) => {
      const date = item.date;
      const existingGroup = acc.find((group) => group.date === date);
      if (existingGroup) {
        existingGroup.items.push(item);
      } else {
        acc.push({ date, items: [item] });
      }
      return acc;
    }, [] as { date: string; items: MatchesItem[] }[])
    .sort((a, b) => moment(b.date).valueOf() - moment(a.date).valueOf());
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
    paddingHorizontal: wScale(30),
  },
  subtitle: {
    textAlign: "left",
    paddingBottom: wScale(30),
  },
  separator: {
    height: wScale(20),
  },
});
