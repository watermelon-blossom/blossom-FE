import { FlatList, StyleSheet, View } from "react-native";
import CText from "@/components/ui/CText";
import { Person } from "@/components/ui/MiniProfile";
import MatchesLayout, { MatchesItem } from "@/components/ui/MatchesLayout";
import { wScale } from "@/util/responsive.util";
import { useAnimationEffectActions } from "@/store/useLayoutStore";
import { theme } from "@/constants/colors";

const MatchesData: MatchesItem[] = [
  {
    date: "today",
    profile: [
      {
        name: "이시연",
        age: 25,
        matched: "match",
        Image:
          "https://cdn.news-ade.com/newsaid/2024/05/20180005/%EC%9D%B4%EC%8B%9C%EC%97%B02.jpg",
      },
      {
        name: "냥뇽녕냥",
        age: 25,
        matched: "reject",
        Image:
          "https://yt3.googleusercontent.com/qk2uweubvIxGw9ylPEK8KyeKuNN2IZHXpF_d7rUAQlWBHc7V7abqxQoANoCBycDzDxMSZ9xt=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        name: "마젠타",
        age: 25,
        matched: "yet",
        Image:
          "https://image.fmkorea.com/files/attach/new3/20230918/494354581/4872395369/6195066906/99b983892094b5c6d2fc3736e15da7d1.jpeg",
      },
      {
        name: "쵸단",
        age: 25,
        matched: "yet",
        Image:
          "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/10/18/ed44fa35-baa3-4269-afa9-e0fa4d101817.jpg",
      },
      {
        name: "장원영",
        age: 25,
        matched: "match",
        Image:
          "https://sports.hankooki.com/news/photo/202111/img_6748965_0.jpg",
      },
    ],
  },
  {
    date: "yesterday",
    profile: [
      {
        name: "우정잉",
        age: 25,
        matched: "match",
        Image:
          "https://static-cdn.jtvnw.net/jtv_user_pictures/7d566eba-dda1-4b08-b141-a8314b7f989b-profile_image-300x300.png",
      },
      {
        name: "유익병",
        age: 25,
        matched: "reject",
        Image:
          "https://cdnweb01.wikitree.co.kr/webdata/editor/202305/29/img_20230529135117_467ae765.webp",
      },
      {
        name: "아이유",
        age: 25,
        matched: "match",
        Image:
          "https://img.tvreportcdn.de/cms-content/uploads/2023/10/06/becfe7e9-e863-453a-9a18-3ef1e4597b1f.jpg",
      },
      {
        name: "마레 플로스",
        age: 25,
        matched: "reject",
        Image: "https://pbs.twimg.com/media/FHtCXy7aUAAQ1nk.jpg:large",
      },
    ],
  },
];

export default function matches() {
  const { startAnimation } = useAnimationEffectActions();
  const handleLike = (action: string, profile: Person) => {
    if (action === "like") {
      startAnimation("heart");
      console.log("You liked", profile.name);
    } else if (action === "dislike") console.log("You disliked", profile.name);
  };
  const renderItem = ({ item }: any) => (
    <MatchesLayout data={item} onSelectLike={handleLike} />
  );

  return (
    <View style={styles.container}>
      <CText size="md" style={styles.subtitle}>
        This is a list of people who have liked you and your matches.
      </CText>
      <FlatList
        data={MatchesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.date}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
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
