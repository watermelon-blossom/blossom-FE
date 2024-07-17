import { wScale } from "@/util/responsive.util";
import { LayoutChangeEvent, Pressable, StyleSheet, View } from "react-native";
import Heading from "./Heading";
import IconButton from "./IconButton";
import SvgIcon from "./SvgIcon";
import { gray, theme } from "@/constants/colors";
import CText from "./CText";
import { useEffect, useState } from "react";

type Questions = {
  question: string;
  answer: string;
};

type ProfileInfoProps = {
  name: string;
  age: number;
  job: string;
  tendency: string;
  location: string;
  distance: number;
  about: string;
  questions: Questions[];
};

export default function ProfileInfo({
  name,
  age,
  job,
  tendency,
  location,
  distance,
  about,
  questions,
}: ProfileInfoProps) {
  const [numberOfLines, setNumberOfLines] = useState(3);
  const [isReadMore, setIsReadMore] = useState(false);
  const [isShowAnswer, setIsShowAnswer] = useState<boolean[]>([]);
  const [isTextOverflowing, setIsTextOverflowing] = useState<boolean>(false);
  const lineHeight = 20;
  const lineNum = 3;

  useEffect(() => {
    const initialList = Array(questions.length).fill(false);
    setIsShowAnswer(initialList);
  }, [questions]);

  const handleShowAnswer = (index: number) => {
    const newList = [...isShowAnswer];
    newList[index] = true;
    setIsShowAnswer(newList);
  };

  const handleTextLayout = (event: LayoutChangeEvent): void => {
    const { height } = event.nativeEvent.layout;

    const expectedHeight = lineNum * lineHeight;
    if (height > expectedHeight) {
      setIsTextOverflowing(true);
    } else {
      setIsTextOverflowing(false);
    }
  };

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
    if (numberOfLines === 3) {
      setNumberOfLines(100);
    } else {
      setNumberOfLines(3);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.profileBox}>
        <View style={styles.col}>
          <Heading level={3}>
            {tendency} {name}, {age}
          </Heading>
          <Heading level={6}>{job}</Heading>
        </View>
        <IconButton iconName="send" iconSize={24} buttonSize={wScale(52)} />
      </View>
      <View style={styles.locationBox}>
        <View style={styles.col}>
          <Heading level={5}>거주지</Heading>
          <Heading level={6}>{location}</Heading>
        </View>
        <View style={styles.locationWrapper}>
          <View style={styles.location}>
            <SvgIcon
              name="combinedShape"
              fill={theme.primary}
              size={wScale(14)}
            />
            <CText size="xs" color={theme.primary}>
              {distance}km
            </CText>
          </View>
        </View>
      </View>
      <View style={styles.aboutBox}>
        <Heading level={5}>인사글</Heading>
        <CText
          numberOfLines={numberOfLines}
          size="sm"
          style={styles.about}
          onLayout={handleTextLayout}
        >
          {about}
        </CText>
        <Pressable onPress={handleReadMore}>
          {isTextOverflowing &&
            (isReadMore ? (
              <CText size="sm" color={theme.primary}>
                접기
              </CText>
            ) : (
              <CText size="sm" color={theme.primary}>
                더보기
              </CText>
            ))}
        </Pressable>
      </View>
      <View style={styles.questionBox}>
        <Heading level={5}>당신의 유형은?</Heading>
        {questions.map((question, index) => {
          return (
            <View key={index} style={styles.questionWrapper}>
              <View style={{ alignItems: "flex-start" }}>
                <View style={[styles.box, styles.question]}>
                  <CText size="sm">
                    Q{index + 1}. {question.question}
                  </CText>
                </View>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <Pressable
                  onPress={() => handleShowAnswer(index)}
                  style={({ pressed }) => [
                    styles.box,
                    styles.answer,
                    pressed && styles.pressed,
                  ]}
                >
                  {isShowAnswer[index] ? (
                    <CText size="sm">{question.answer}</CText>
                  ) : (
                    <CText size="sm">눌러서 답변을 확인하세요!</CText>
                  )}
                </Pressable>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    gap: wScale(30),
    marginBottom: wScale(40),
    paddingHorizontal: wScale(30),
  },
  profileBox: {
    flexDirection: "row",
    height: wScale(52),
    marginTop: wScale(20),
    justifyContent: "space-between",
    alignItems: "center",
  },
  col: {
    flexDirection: "column",
    gap: wScale(5),
  },
  locationBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  locationWrapper: {
    width: wScale(61),
    height: wScale(34),
    borderRadius: wScale(8),
    overflow: "hidden",
    justifyContent: "center",
    alignContent: "flex-end",
    backgroundColor: theme.secondary,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  aboutBox: {
    justifyContent: "flex-start",
    gap: wScale(5),
  },
  about: {
    lineHeight: wScale(20),
  },
  questionBox: {
    gap: wScale(5),
  },
  questionWrapper: {
    paddingVertical: wScale(5),
    gap: wScale(3),
  },
  box: {
    minWidth: wScale(40),
    maxWidth: wScale(250),
    padding: wScale(16),
    borderRadius: wScale(16),
  },
  answer: {
    backgroundColor: gray[100],
    borderBottomRightRadius: 0,
  },
  question: {
    backgroundColor: theme.secondary,
    borderBottomLeftRadius: 0,
  },
  pressed: {
    opacity: 0.7,
  },
});
