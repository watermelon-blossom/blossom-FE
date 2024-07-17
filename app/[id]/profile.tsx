import ActionButton from "@/components/ui/ActionButton";
import IconButton from "@/components/ui/IconButton";
import PaginationDots from "@/components/ui/PaginationDots";
import ProfileInfo from "@/components/ui/ProfileInfo";
import { gray, theme } from "@/constants/colors";
import { wScale } from "@/util/responsive.util";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ReCarousel, {
  ICarouselInstance,
} from "react-native-reanimated-carousel";

const data = {
  profile: {
    name: "쵸단",
    age: 25,
    job: "인플루언서",
    images: [
      "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/10/18/ed44fa35-baa3-4269-afa9-e0fa4d101817.jpg",
      "https://i.namu.wiki/i/Nat7R8m76ArARjdLnZ6OPkbaleF62cjL6sFE5sNlIcrv7Jeyz62Rc14YqTn4Jrn8VOpokZl4Dp53a5mpxsBoKg.webp",
      "https://cdn.todayflow.co.kr/news/photo/202303/436_2127_5848.jpg",
    ],
  },
  matched: "yet",
  tendency: "당당한",
  location: "서울시 강남구",
  distance: 1.2,
  about:
    "안녕하세요! 저는 쵸단이라고 해요. 호기심 많은 탐험가이자 새로운 경험을 즐기는 모험가입니다. 언제나 새로운 도전을 기다리며, 세상의 다양한 이야기를 나누고 싶어요. 함께 즐거운 시간을 만들어가요! 😊",
  questions: [
    {
      question:
        "당신은 마법의 문을 발견했습니다. 이 문을 열면 어떤 세상으로 들어가고 싶나요?\n\n1. 신나는 마법의 축제 마을\n2. 조용한 도서관",
      answer: "신나는 마법의 축제 마을",
    },
    {
      question:
        "당신은 시간을 여행할 수 있는 기회를 얻게 되었습니다. 어떤 여행을 선택하시겠습니까?\n\n1. 과거의 역사 속으로\n2. 미래의 세계를 탐험",
      answer: "미래의 세계를 탐험",
    },
    {
      question:
        "당신은 마법 학교의 교장이 되어 중요한 결정을 내려야 합니다. 어떻게 결정을 내리시겠습니까?\n\n1. 논리적으로 결정\n2. 감정적으로 결정",
      answer: "감정적으로 결정",
    },
    {
      question:
        "당신은 보물찾기 대회에 참가하게 되었습니다. 어떻게 대회에 임하시겠습니까?\n\n1. 단계별 계획 설립\n2. 즉흥적으로 유연하게",
      answer: "단계별 계획 설립",
    },
  ],
};

export default function profile() {
  const ref = React.useRef<ICarouselInstance>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [data, setData] = useState<any>(null);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    //api call with user id
    console.log(id);
    // setData(sample_data);
  }, []);

  const handleLeftSwipe = () => {
    console.log("dislike");
  };
  const handleRightSwipe = () => {
    console.log("like");
  };
  const handleDoubleTap = () => {
    console.log("superlike");
  };

  return (
    <View style={styles.container}>
      <ReCarousel
        ref={ref}
        data={data.profile.images}
        width={wScale(375)}
        height={wScale(415)}
        defaultIndex={0}
        onSnapToItem={(idx) => {
          setCurrentIndex(idx);
        }}
        scrollAnimationDuration={700}
        snapEnabled
        enabled
        renderItem={({ item }) => (
          <Image
            source={item}
            contentFit="cover"
            style={{ width: "100%", height: "100%" }}
          />
        )}
      />
      <IconButton
        iconName="back"
        iconSize={wScale(24)}
        iconColor={theme.white}
        buttonSize={wScale(52)}
        type="transparent"
        style={styles.back}
        onPress={() => router.back()}
      />
      <View style={styles.dotWrapper}>
        <PaginationDots
          totalItems={data.profile.images.length}
          currentIndex={currentIndex}
          activeDotStyle={styles.activeDot}
          style={styles.pagination}
          dotStyle={styles.dots}
        />
      </View>
      <View style={styles.actionButtonWrapper}>
        <ActionButton
          type="REJECT"
          onPress={handleLeftSwipe}
          disabled={data.matched === "yet" ? false : true}
        />
        <ActionButton
          type="MATCH"
          onPress={handleRightSwipe}
          disabled={data.matched === "yet" ? false : true}
        />
        <ActionButton
          type="SUPERLIKE"
          onPress={handleDoubleTap}
          disabled={data.matched === "yet" ? false : true}
        />
      </View>
      <View style={styles.scrollHeader}>
        <ScrollView style={styles.profile}>
          <ProfileInfo
            name={data.profile.name}
            age={data.profile.age}
            job={data.profile.job}
            tendency={data.tendency}
            location={data.location}
            distance={data.distance}
            about={data.about}
            questions={data.questions}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  scrollHeader: {
    width: "100%",
    height: wScale(450),
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: wScale(40),
    borderTopRightRadius: wScale(40),
    backgroundColor: "white",
  },
  profile: {
    width: "100%",
    marginTop: wScale(70),
  },
  back: {
    position: "absolute",
    top: wScale(30),
    left: wScale(20),
  },
  dotWrapper: {
    position: "absolute",
    top: wScale(5),
    left: "50%",
    transform: [{ translateX: -wScale(38) }],
    justifyContent: "center",
    alignContent: "center",
    width: wScale(76),
    height: wScale(20),
    borderRadius: wScale(8),
  },
  pagination: {
    justifyContent: "center",
    alignContent: "center",
  },
  activeDot: {
    backgroundColor: theme.white,
  },
  dots: {
    width: wScale(5),
    height: wScale(5),
    backgroundColor: gray[400],
  },
  actionButtonWrapper: {
    position: "absolute",
    bottom: wScale(400),
    left: "50%",
    transform: [{ translateX: -wScale(148) }],
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: wScale(20),
    zIndex: 3000,
  },
});
